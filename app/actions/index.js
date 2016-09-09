import axios from 'axios';

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const SET_FLASH_MESSAGE = 'SET_FLASH_MESSAGE';
const HIDE_FLASH_MESSAGE = 'HIDE_FLASH_MESSAGE';

const ROOT_URL = "http://localhost:3000/api/v1";

export function hideFlashMessage() {
  return {
    type: HIDE_FLASH_MESSAGE,
    payload: { visible: false }
  }
}

export function setFlashMessage(message, key) {
  return {
    type: SET_FLASH_MESSAGE,
    payload: { message, key, visible: true }
  }
}

export function registerUser(user) {
  const URL = `${ROOT_URL}/users`
  const params = {
    format: 'json',
    user
  }
  let request = axios.post(URL, params)

  return {
    type: REGISTER_USER,
    payload: request
  }
}
