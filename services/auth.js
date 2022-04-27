import { api } from '../utils/apiHandler'

const client = api('')

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signup(creds) {
    return client.post('/register/', creds)
  },
}
