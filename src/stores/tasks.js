import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase/index'

export const useTasksStore = defineStore('tasksList', () => {
  const tasksList = ref([])
  async function _fetchAllTasks() {
    const {data, error} = await supabase
    .from('tasks')
    .select()

    if(error) {
      console.error(error)
      return
    }

    console.log(data)

    tasksList.value = data;
  }

  return { tasksList, _fetchAllTasks } 
})
