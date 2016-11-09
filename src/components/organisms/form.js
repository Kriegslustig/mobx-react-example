import H from 'react-hyperscript-helpers'
import { observer } from 'mobx-react'
import Field from '../molecules/field'

export default observer((state) =>
  H.form([
    H.h(Field, { label: 'Organization', state: state.form.fields.organization }),
    H.h(Field, { label: 'Title', state: state.form.fields.title }),
    H.textarea({
      placeholder: 'body',
      state: state.form.fields.body,
      onChange: (e) => state.form.fields.body.update(e.target.value)
    }),
    H.input({ type: 'submit', disabled: !state.form.isDataValid })
  ])
)

