/* @flow */

import { h, hh } from 'react-hyperscript-helpers'
import { observer } from 'mobx-react'

import Form from '../organisms/form'

export default observer(({ stores: { ui } }) =>
  h(Form, ui.form)
)

