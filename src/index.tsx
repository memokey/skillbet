import React from 'react'
import ReactDOM from 'react-dom/client'
import { SeiWalletProvider } from "@sei-js/react"
import App from './App'
import './index.css'
import './styles/wallet.css'
import './styles/global.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SeiWalletProvider
    chainConfiguration={{
      chainId: 'atlantic-2',
      restUrl: 'https://rest.atlantic-2.seinetwork.io/',
      rpcUrl: 'https://rpc.atlantic-2.seinetwork.io'
    }}
  >
    <App />
  </SeiWalletProvider>
)
