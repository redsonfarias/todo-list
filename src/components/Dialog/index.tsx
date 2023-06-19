import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styles from './styles.module.css'

interface DeleteModalProps {
  children: JSX.Element
  title: string
  description: string
  onClick: () => void
}

export function Dialog({ children, title, description, onClick }: DeleteModalProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.description}>
            {description}
          </AlertDialog.Description>
          <div className={styles.buttonContainer}>
            <AlertDialog.Cancel asChild>
              <button className={styles.cancelButton}>Cancelar</button>
            </AlertDialog.Cancel>
            <button onClick={onClick} className={styles.confirmButton}>Confirmar</button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
