import H from 'react-hyperscript-helpers'
import { observer } from 'mobx-react'
import Field from '../molecules/field'

export default observer((state) =>
  H.form([
    H.h(Field, { label: 'Organization', state: state.form.fields.organization }),
    H.input({ type: 'submit', disabled: !state.form.isDataValid })
  ])
)

