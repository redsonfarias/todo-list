import { Clipboard } from '@phosphor-icons/react'
import { ITask } from '../../App'
import { TaskCard } from '../TaskCard'
import styles from './styles.module.css'

interface TaskListProps {
  tasks: ITask[]
  handleToggleTaskStatus: (id: string) => void
  handleDeleteTask: (id: string) => void
}

export function TaskList({
  tasks,
  handleToggleTaskStatus,
  handleDeleteTask,
}: TaskListProps) {
  const totalTasks = tasks.length
  const totalCompletedTasks = tasks.filter((task) => task.completed).length

  return (
    <>
      <div className={styles.header}>
        <p>
          Tarefas criadas<span>{totalTasks}</span>
        </p>
        <p>
          Concluídas
          <span>
            {totalCompletedTasks} de {totalTasks}
          </span>
        </p>
      </div>
      {totalTasks > 0 ? (
        <div className={styles.list}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleTaskStatus={handleToggleTaskStatus}
              deleteTask={handleDeleteTask}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyMessage}>
          <Clipboard size={64} weight="light" opacity={0.4} />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </>
  )
}
