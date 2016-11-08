import H from 'react-hyperscript-helpers'
import { observer } from 'mobx-react'
import Field from '../molecules/field'

export default observer(({ organization }) =>
  H.form([
    H.h(Field, { label: 'Organization', state: organization })
  ])
)

