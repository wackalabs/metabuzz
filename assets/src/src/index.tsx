import { config } from '@gowiki/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { MoralisProvider } from 'react-moralis'

import '../styles/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// remove <React.StrictMode> <App /> </React.StrictMode> because it causes double renders on reducer
ReactDOM.render(
  <MoralisProvider appId={config.moralisAppId} serverUrl={config.moralisServerUrl}>
    <App />
  </MoralisProvider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
