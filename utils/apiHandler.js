import axios from 'axios'

let token, auth

if (typeof window !== 'undefined') {
  token = sessionStorage.getItem('token') || ''
  auth = `Bearer ${token}`
}

export const api = (table) => {
  return axios.create({
    baseURL: `http://127.0.0.1:8000/${table}`,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export const config = {
  headers: {
    // 'Content-Type': 'multipart/form-data',
    Authorization: auth,
  },
}
