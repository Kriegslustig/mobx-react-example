import { observable, asReference, action, computed } from 'mobx'
import t from '../helpers/translate'

const uiStore = observable({
  form: {
    isDataValid: computed(() =>
      uiStore.form.fields.organization.errors.length === 0
    ),
    fields: {
      organization: {
        value: '',
        errors: [],
        validate: asReference((value: string) => {
          // Orgname has to be longer than 0
          if (value.length === 0) return [ t('errors.no-empty-strings') ]
        }),
        update: action((value: string) => {
          const field = uiStore.form.fields.organization
          const errors = field.validate(value) || []
          field.value = value
          if (errors) field.errors = errors
        })
      }
    }
  }
})

export default uiStore

