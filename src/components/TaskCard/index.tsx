import { Trash } from '@phosphor-icons/react'
import { ITask } from '../../App'
import { Dialog } from '../Dialog'
import styles from './styles.module.css'

interface TaskCardProps {
  task: ITask
  toggleTaskStatus: (id: string) => void
  deleteTask: (id: string) => void
}

export function TaskCard({
  task,
  toggleTaskStatus,
  deleteTask,
}: TaskCardProps) {
  const { description, id, completed } = task

  const textStyle = completed
    ? { textDecoration: 'line-through', color: 'var(--gray-300)' }
    : {}

  function handleDeleteTask() {
    deleteTask(id)
  }

  function handleToggleTaskStatus() {
    toggleTaskStatus(id)
  }

  return (
    <div className={styles.card}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleTaskStatus}
      />
      <p style={textStyle}>{description}</p>
      <div title="Deletar atividade">
        <Dialog
          onClick={handleDeleteTask}
          title='Deletar atividade'
          description="Você tem certeza que deseja deletar essa atividade?"
        >
          <Trash size={20} />
        </Dialog>
      </div>
    </div>
  )
}
