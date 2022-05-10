import axios from 'axios'

let token, auth

if (typeof window !== 'undefined') {
  token = sessionStorage.getItem('token') || ''
  auth = `Bearer ${token}`
}

export const api = (table) => {
  return axios.create({
    baseURL: `https://guarded-scrubland-74784.herokuapp.com/${table}`,
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
