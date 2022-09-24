import { X } from 'phosphor-react'

import styles from './Modal.module.css'

export function Modal({ open, onClose}) {
  if (!open) return null


  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.content}>
          <div></div>
          <X size={24} onClick={onClose} />
        </div>
        <div className={styles.titleModal}>
          <h3>Excluir comentário</h3>
        </div>
        <div className={styles.subTitle}>
          <div>
          <p>Você tem certeza que gostaria de excluir este comentário?</p>
          </div>
        </div>
        <div className={styles.modalBtn}>
          <button onClick={onClose}>Cancelar</button>
          <button
            // onClick={handleDeleteComment}
            
          >
            Sim, excluir 
          </button>
        </div>
      </div>
    </div>
  )
}
