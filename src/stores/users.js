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

  async function _signIn(userEmail, userPassword) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    })

    if(error) {
      const errorString = error.toString()
      errorDisplay.value = errorString.split(': ')[1]
      return
    }

    currentUser.value = data;
  }

  async function _signUp(email, password) {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if(error) {
      console.error(error)
      return
    }
    
  }

  async function _signOut() {
    const { error } = await supabase.auth.signOut()
    
    if(error) {
      console.error(error)
      return
    }

    password.value = ''
    email.value = ''
    errorDisplay.value = ''
  }

  return { currentUser, email, password,  _fetchUser, _signIn, _signUp, _signOut, errorDisplay } 
})
