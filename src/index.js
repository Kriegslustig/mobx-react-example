/* @flow */

import reactDOM from 'react-dom'

import Application from './components/pages/application'
import store from './store'
import h from 'react-hyperscript-helpers'

reactDOM.render(
  h.h(Application, store),
  document.getElementById('container')
)

