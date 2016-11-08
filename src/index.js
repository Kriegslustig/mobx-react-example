import reactDOM from 'react-dom'

import Application from './components/pages/application'
import uiStore from './stores/ui'
import h from 'react-hyperscript-helpers'

reactDOM.render(
  h.h(Application, { stores: { ui: uiStore } }),
  document.getElementById('container')
)

