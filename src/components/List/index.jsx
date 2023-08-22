import styles from './List.module.css';
import ClipboardImg from '../../assets/Clipboard.png'
import { Task } from '../Task'

export function List(){
    const tasks = [
        {
            id: 1,
            description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            completed: false
        },
        {
            id: 2,
            description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            completed: true
        }
    ]

    function returnEmptyList(){
        return(
            <div className={styles.emptyList}>
                    <img src={ClipboardImg} alt="Imagem de um Clipboard" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        )
    }


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
                <Task
                    key={task.id}
                    description={task.description}
                    status={task.completed}
                />
            )): returnEmptyList()
            }
        </section>
     </>   
    )
}