import { getUserProfileData, getUserStatus, setUserStatusRequest } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NAME = 'UPDATE-NAME'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = "SET_USER_STATUS"

let initialState = {
  posts: [
    { id: 1, name: "First Post" },
    { id: 2, name: "Second Post" },
  ],
  newPostName: "",
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Math.floor(Math.random() * 100 + 1),
        name: action.postName
      }
      return { ...state, newPostName: "", posts: [...state.posts.concat(newPost)] }

    case UPDATE_NAME:
      return { ...state, newPostName: action.name }

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SET_USER_STATUS:{
      console.log("SET_USER_STATUS, status: ", action.status)
      return { ...state, status: action.status }
    }
    default:
      return state
  }

}

export const addPostActionCreator = (postName) => {
  return { type: 'ADD-POST', postName }
}

export const changePostNameActionCreator = (text) => {
  return { type: 'UPDATE-NAME', name: text }
}

export const setUserProfile = (profile) => {
  return { type: "SET_USER_PROFILE", profile }
}

export const setUserStatusAC = (status) => {
  return { type: "SET_USER_STATUS", status }
}

export const getAuthUserDataThunkCreator = (userId) => {
  return (dispatch) => {
    getUserProfileData(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}

export const getUserStatusThunkCreator = (userId) => {
  return (dispatch) => {
    getUserStatus(userId)
      .then(data => {
        if(data)
          dispatch(setUserStatus(data))
      })
  }
}

export const setUserStatus =  (status) => {
  return async (dispatch) => {
    let data = setUserStatusRequest(status)
    if (data)
      dispatch(setUserStatusAC(status))
  }
}

export default profileReducer;