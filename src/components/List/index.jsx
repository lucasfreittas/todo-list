import styles from './List.module.css';
import ClipboardImg from '../../assets/Clipboard.png'

export function List(){
    const tasks = [
        // {
        //     id: 1,
        //     description: "Teste de tarefa incompleta",
        //     completed: false
        // },
        // {
        //     id: 2,
        //     description: "Teste de tarefa completa",
        //     completed: true
        // }
    ]

    return(
     <>
        <section className={styles.listHeader}>

            <div className={styles.createdTasks}>
                <p>Tarefas Criadas</p>
                <span>0</span>
            </div>

            <div className={styles.totalTasks}>
                <p>Concluídas</p>
                <span>0</span>
            </div>

        </section>

        <section className={styles.listContent}>

            {tasks.length > 0 ? tasks.map(task => (
                <li key={task.id}>{task.description}</li>
            )): <div className={styles.emptyList}>
                    <img src={ClipboardImg} alt="Imagem de um Clipboard" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            }
        </section>
     </>   
    )
}