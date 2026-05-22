import { defineStore } from 'pinia'
import { ref } from 'vue'

const VALID_EMAIL = import.meta.env.VITE_AUTH_EMAIL
const VALID_PASSWORD = import.meta.env.VITE_AUTH_PASSWORD

export const useAuthStore = defineStore('auth', () => {
  const authenticated = ref(localStorage.getItem('authenticated') === 'true')

  function login(email, password) {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      authenticated.value = true
      localStorage.setItem('authenticated', 'true')
      return true
    }
    return false
  }

  function logout() {
    authenticated.value = false
    localStorage.setItem('authenticated', 'false')
  }

  return { authenticated, login, logout }
})
