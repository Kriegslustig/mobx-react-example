import { observable } from 'mobx'

export default observable({
  form: {
    organization: {
      value: '',
      errors: []
    }
  }
})

