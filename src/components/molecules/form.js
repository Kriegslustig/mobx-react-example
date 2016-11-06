import H from 'react-hyperscript-helpers'
import { observer } from 'mobx-react'

const updateField = (field) => (e) => field.value = e.target.value

export default observer(({ organization }) =>
  H.form([
    H.input({ onChange: updateField(organization) }),
    H.p(`v: ${organization.value}`)
  ])
)

