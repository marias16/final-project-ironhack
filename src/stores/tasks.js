import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase/index'

export const useTasksStore = defineStore('tasksList', () => {
  const tasks = ref([])

  //fetch info from supabase
  async function _fetchAllTasks() {
    const {data, error} = await supabase
    .from('tasks')
    .select()

    if(error) {
      console.error(error)
      return
    }

    tasks.value = data;
    console.log(tasks.value)
  }

  async function _addNewTask({title, user_id}) {
    const { data, error } = await supabase
    .from('tasks')
    .insert({ title, user_id })
    .select()

    if(error) {
      console.error(error)
      return
    }

    tasks.value.push(...data)
    console.log(tasks.value)
  }

  async function _deleteTask(taskId) {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', taskId)

    if(error) {
        console.error(error)
        return
      }

    _fetchAllTasks()

  }
  return { tasks, _fetchAllTasks, _addNewTask, _deleteTask  } 
})
