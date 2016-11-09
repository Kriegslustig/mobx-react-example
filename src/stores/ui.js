import { observable, asReference, action, computed } from 'mobx'
import t from '../helpers/translate'
import type TranslationKey from '../helpers/translate'

const fieldUpdater = (fieldName: string) => action((value: string) => {
  const field = uiStore.form.fields[fieldName]
  const errors = field.validate(value) || []
  field.value = value
  if (errors) field.errors = errors
})

type Validator = (value: string) => ?Array<TranslationKey>

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
          // Orgname has to be longer than 0
          if (value.length === 0) return [ t('errors.no-empty-strings') ]
        }
      ),
      title: field('title', (value: string) => {
        if (value.length === 0) return [ t('errors.no-empty-strings') ]
      }),
      body: field('body', (value: string) => {
        if (value.length === 0) return [ t('errors.no-empty-strings') ]
      })
    }
  }
})

export default uiStore

