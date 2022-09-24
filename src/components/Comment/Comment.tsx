import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

// import { useState } from 'react'
// import {Modal} from '../Modal'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    // const [openModal, setOpenModal] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/WellersonDouglas.png" alt='' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wellerson Douglas</strong>
                            <time
                                title='19 de Setembro às 16:38h'
                                dateTime='2022-09-19 16:38:00'
                            >Cerca de 1h atrás</time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            // onClick={() => setOpenModal(true)}
                            title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                        {/* <Modal
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                            className={styles.modalBtn}
                        /> */}
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}