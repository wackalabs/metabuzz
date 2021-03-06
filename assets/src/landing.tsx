import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { config } from '@gowiki/core'

import LandingMain from './LandingMain'

if (!config.dev && location.protocol == 'http:') {
  location.href = location.href.replace('http:', 'https:')
}

ReactDOM.render(<LandingMain />, document.getElementById('react-app'))
