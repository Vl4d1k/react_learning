import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "15f4caf4-9c7b-42de-bfcf-7b03e0ad1606" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const getAuthData = () => {
  return instance.get(`auth/me`)
    .then(response => { console.log(response); return response.data })
}

export const getUserProfileData = (userId) => {
  return instance.get(`profile/${userId}`)
    .then(response => response.data)
}

export const getUsers = (currentPage = 1, pageSize = 5) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
}

export const followRequest = (userId) => {
  return instance.post(`follow/${userId}`)
    .then(response => { return response.data })
}

export const unfollowRequest = (userId) => {
  return instance.delete(`follow/${userId}`)
    .then(response => { return response.data })
}