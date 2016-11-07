/* @flow */

import H from 'react-hyperscript-helpers'
import { observer } from 'mobx-react'

const styles = {
  field: {
    normal: {},
    failure: {}
  },
  error: {}
}

styles.field.failure = Object.assign(styles.field.normal, {
  borderColor: 'red'
})

export default observer(({ label, state }) => {
  const inputStyle = state.errors.length > 0
    ? styles.field.failure
    : styles.field.normal

  const errors = state.errors.map(err =>
    H.p(err, { style: styles.error })
  )

  const onChange = e => state.update(e.target.value)

  return H.fieldset([
    H.label(label),
    H.input({
      type: 'text',
      value: state.value,
      styles: inputStyle,
      onChange
    }),
    ...errors
  ])
})

// Internal helpers
const updateField = (field) => (e) => field.value = e.target.value

