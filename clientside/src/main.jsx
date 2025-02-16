import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './State/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { AppContextProvider } from './Context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppContextProvider>
            <App />
          </AppContextProvider> 
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
