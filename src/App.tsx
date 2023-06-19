import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from './components/Header'
import { TaskDescriptionInput } from './components/TaskDescriptionInput'
import { TaskList } from './components/TaskList'
import { v4 as uuidv4 } from 'uuid'
import styles from './App.module.css'
import './global.css'

export interface ITask {
  description: string
  id: string
  completed: boolean
}

export function App() {
  const [newTaskDescription, setNewTaskDescription] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([])

  function handleNewTaskDescription(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskDescription(event.target.value)
  }

  function handleAddNewTask(event: FormEvent) {
    event?.preventDefault()

    const newTask = {
      description: newTaskDescription,
      id: uuidv4(),
      completed: false,
    }

    setTasks(state => [...state, newTask])
    setNewTaskDescription('')
  }

  function handleToggleTaskStatus(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutDeleted = tasks.filter((task) => task.id !== id)

    setTasks(tasksWithoutDeleted)
  }

  return (
    <>
      <Header />
      <div className={styles.content}>
        <TaskDescriptionInput
          newTaskDescription={newTaskDescription}
          handleNewTaskDescription={handleNewTaskDescription}
          handleAddNewTask={handleAddNewTask}
        />
        <TaskList
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleToggleTaskStatus={handleToggleTaskStatus}
        />
      </div>
    </>
  )
}
