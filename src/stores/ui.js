import { observable, asReference, action, computed } from 'mobx'
import t from '../helpers/translate'

const fieldUpdater = (fieldName: string) => action((value: string) => {
  const field = uiStore.form.fields[fieldName]
  const errors = field.validate(value) || []
  field.value = value
  if (errors) field.errors = errors
})

type Validator = (value: string) => Array<string> | boolean

const field = (field: string, validator: Validator, initialValue = '') => ({
  update: fieldUpdater(field),
  validate: validator,
  value: initialValue,
  errors: []
})

const uiStore = observable({
  form: {
    isDataValid: computed(() =>
      Object.values(uiStore.form.fields)
        // $FlowFixMe
        .every((field) => field.errors.length === 0)
    ),
    fields: {
      organization: field(
        'organization',
        (value: string) => {
          const errors = [
            // Orgname has to be longer than 1
            ...(value.length < 2 ? [ t('errors.no-empty-strings') ] : []),
            // Orgname must be alphanumeric
            ...(value.match(/^\w*$/) ? [] : [ t('errors.alphanumeric') ]),
          ]
          return errors.length > 0
            // If there are errors, return them
            ? errors
            // return false otherwise
            : false
        }
      ),
      title: field('title', (value: string) => {
        if (value.length === 0) return [ t('errors.no-empty-strings') ]
        return false
      }),
      body: field('body', (value: string) => {
        if (value.length === 0) return [ t('errors.no-empty-strings') ]
        return false
      })
    }
  }
})

export default uiStore
