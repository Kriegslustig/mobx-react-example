import store from '../ui'
import test from 'ava'

test('form.fields.*.update', (t) => {
  const field = store.form.fields.organization
  t.is(field.value, '')
  t.deepEqual(field.errors.length, 0)
  field.update('')
  t.is(field.errors.length, 1)
  field.update('asdf')
  t.is(field.errors.length, 0)
  t.is(field.value, 'asdf')
})

