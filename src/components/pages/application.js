/* @flow */

import { h, hh } from 'react-hyperscript-helpers'
import { observer } from 'mobx-react'

import Form from '../molecules/form'

export default observer(({ form }) =>
  h(Form, form)
)

