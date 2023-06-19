import { ChangeEvent, FormEvent } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import styles from './styles.module.css'

interface TaskListProps {
  newTaskDescription: string
  handleNewTaskDescription: (event: ChangeEvent<HTMLInputElement>) => void
  handleAddNewTask: (event: FormEvent) => void
}

export function TaskDescriptionInput({
  newTaskDescription,
  handleNewTaskDescription,
  handleAddNewTask,
}: TaskListProps) {
  return (
    <form onSubmit={handleAddNewTask} className={styles.form}>
      <input
        value={newTaskDescription}
        onChange={handleNewTaskDescription}
        placeholder="Adicione uma nova tarefa"
      />
      <button type='submit' disabled={!newTaskDescription.trim()}>
        Criar <PlusCircle size={22} />
      </button>
    </form>
  )
}
