import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase/index'


export const useUsersStore = defineStore('user', () => {
  const currentUser = ref(null)
  const email = ref('')
  const password = ref('');
  const errorDisplay = ref('')


  async function _fetchUser() {
    const { data: { user } } = await supabase.auth.getUser()
    currentUser.value = user
    console.log(currentUser.value)
    return currentUser
  }

  async function _signIn(userEmail, userPassword, router) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    })

    if(error) {
      console.error(error)
      errorDisplay.value = 'Invalid login credentials. Please, try again.'
      return
    }

    currentUser.value = data;
    router.push({name: 'home'})
  }

  async function _signUp(email, password, router) {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if(error) {
      console.error(error)
      return
    }
    router.push({name: 'check-email'})
  }

  async function _signOut(router) {
    const { error } = await supabase.auth.signOut()
    
    if(error) {
      console.error(error)
      return
    }

    password.value = ''
    email.value = ''
    errorDisplay.value = ''

    router.push({name: 'sign-in'})
  }

  return { currentUser, email, password,  _fetchUser, _signIn, _signUp, _signOut, errorDisplay } 
})
