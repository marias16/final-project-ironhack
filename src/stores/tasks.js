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

    tasks.value = tasks.value.filter(task => task.id !== taskId )
  }

  //edit a task
  const editMode  = ref(false); 
  const editTaskId = ref(null);
  const titleOfEdit = ref('')

  function _editTask(taskElement) {
    editMode.value = true;
    editTaskId.value = taskElement.id;
    titleOfEdit.value = taskElement.title;
  }

  function _handleCancel() {
    editMode.value = false;
    titleOfEdit.value = '';
    editTaskId.value = null;
  }

  async function _updateTitle(task){

    const { error } = await supabase
    .from('tasks')
    .update({ title: titleOfEdit.value})
    .eq('id', task.id)

    if(error) {
      console.error(error)
      return
    }

    task.title = titleOfEdit.value;
    titleOfEdit.value = '';
    editMode.value = false;
    editTaskId.value = null;
    
  }

  async function _updateStatus(task, completeStatus){
    const { data, error } = await supabase
    .from('tasks')
    .update({ is_complete: completeStatus})
    .eq('id', task.id)
    .select()

    if(error) {
      console.error(error)
      return
    }
    
    const taskIndex = tasks.value.indexOf(task);
    tasks.value[taskIndex] = data[0];
  }

  //calculate incomplete tasks

  const _incompleteTasks = computed(() => tasks.value.filter(task => task.is_complete === false))
  const _completeTasks = computed(() => tasks.value.filter(task => task.is_complete === true))
  const _completeCount = computed(() => _completeTasks.value.length)
  const _incompleteCount = computed(() => _incompleteTasks.value.length)


  return { tasks, _fetchAllTasks, _addNewTask, _deleteTask, titleTask, editMode, editTaskId, _editTask, _updateTitle, _updateStatus, _incompleteTasks, _completeTasks, _completeCount, _incompleteCount, titleOfEdit, _handleCancel } 
})
