import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase/index'


export const useUsersStore = defineStore('user', () => {
  const currentUser = ref(null)
  const email = ref('')
  const password = ref('');


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
      console.error(error)
      return
    }

    currentUser.value = data;
    console.log(currentUser.value)
  }

  async function _signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if(error) {
      console.error(error)
      return
    }

    console.log(data)
  }

  async function _signOut() {
    const { error } = await supabase.auth.signOut()
    if(error) {
      console.error(error)
      return
    }
    currentUser.value = null;
    console.log(currentUser.value)
    _fetchUser()

  }

  return { currentUser, email, password, _fetchUser, _signIn, _signUp, _signOut } 
})
