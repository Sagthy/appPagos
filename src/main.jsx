import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

import { ChakraProvider } from '@chakra-ui/react'
import ItemsProvider from './states/ItemsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </ChakraProvider>
  </React.StrictMode>
)
