import 'tslib'
import "./styles/app.css"
import React from 'react'
import ReactDOM from 'react-dom'
import 'mobx-react-lite/batchingForReactDom'
import { App } from './app'

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)
