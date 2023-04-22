import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase/index'

export const useTasksStore = defineStore('tasksList', () => {
  const tasks = ref([])
  const titleTask = ref('');
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
    tasks.value.sort((a, b) => a.id-b.id )
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
    titleTask.value = ''
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

  //edit a task
  const editMode  = ref(false); 
  const editTaskId = ref(null);

  async function _editTask(taskId) {
    editMode.value = true;
    editTaskId.value = taskId;
  }

  async function _updateTitle(taskId, titleOfTask){

    const { error } = await supabase
    .from('tasks')
    .update({ title: titleOfTask})
    .eq('id', taskId)

    if(error) {
      console.error(error)
      return
    }
    
    
    editMode.value = false;
    editTaskId.value = null;
  }

  async function _updateStatus(taskId, completeStatus){
    const { error } = await supabase
    .from('tasks')
    .update({ is_complete: completeStatus})
    .eq('id', taskId)

    if(error) {
      console.error(error)
      return
    }
    
    _fetchAllTasks()
  }

  //calculate incomplete tasks

  const _incompleteTasks = computed(() => tasks.value.filter(task => task.is_complete === false).length)
 

  return { tasks, _fetchAllTasks, _addNewTask, _deleteTask, titleTask, editMode, editTaskId, _editTask, _updateTitle, _updateStatus, _incompleteTasks } 
})
