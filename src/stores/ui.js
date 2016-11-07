/* @flow */

import { observable, asReference, action } from 'mobx'
import t from '../helpers/translate'

const uiStore = observable({
  form: {
    organization: {
      value: '',
      errors: [],
      validate: asReference((value: string) => {
        // Orgname has to be longer than 0
        if (value.length === 0) return [ t('errors.no-empty-strings') ]
      }),
      update: action((value: string) => {
        const field = uiStore.form.organization
        const errors = field.validate(value) || []
        field.value = value
        if (errors) field.errors.push(...errors)
      })
    }
  }
})

export default uiStore

