import test from 'ava'

import store from '../ui'

test('form.fields.*.update', t => {
  const field = store.form.fields.organization
  t.is(field.value, '')
  t.deepEqual(field.errors.length, 0)
  field.update('')
  t.true(field.errors.length > 0)
  field.update('asdf')
  t.is(field.errors.length, 0)
  t.is(field.value, 'asdf')
})

test('form.fields.title', t => {
  const field = store.form.fields.title
  field.update('test')
  t.is(field.value, 'test', 'the update action should update the title field')
})

test('form.fields.body', t => {
  const field = store.form.fields.body
  field.update('test')
  t.is(field.value, 'test', 'the update action should update the body field')
})

test('form.fields.organization.validate', t => {
  const field = store.form.fields.organization
  const errRet = field.validate('')
  t.is(errRet.length, 1, 'Orgname should be invalid and invalid orgnames should return a truthy value.')
  t.is(typeof errRet[0], 'string', 'errors should be returned as an array-like object of strings')
  t.truthy(field.validate('!!'), 'Orgnames should be alphanumeric')
  const multiError = field.validate('!')
  t.truthy(multiError[0] && multiError[1], 'If the value is shorter than 1 character and is not alphanumeric, the return value should contain both errors')
  t.falsy(field.validate('asdf'), 'Valid orgnames should return a falsy value')
})
