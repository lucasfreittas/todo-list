import styles from './List.module.css';
import ClipboardImg from '../../assets/Clipboard.png'
import { Task } from '../Task'
import { useEffect, useState } from 'react'

export function List(){
    const [tasks, setTasks] = useState([
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
)

    function isCompleted(task){
        return task.completed
    }

    function returnEmptyList(){
        return(
            <div className={styles.emptyList}>
                    <img src={ClipboardImg} alt="Imagem de um Clipboard" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        )
    }

    function handleTaskClick(e, taskId){
       
        const action = e.target.getAttribute('class')
        if(action == 'trashDiv'){
            e.stopPropagation()
            setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
            return
        } else {
            

        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if(task.id === taskId){
                    return {
                        ...task,
                        completed: !task.completed
                    };
                }
                return task
            })
        })
    }
    }

    const completedTasks = tasks.filter(task => task.completed)

    useEffect(() => {
        const newCompletedTasks = tasks.filter(task => task.completed);


    }, [tasks])

    return(
     <>
        <section className={styles.listHeader}>

            <div className={styles.createdTasks}>
                <p>Tarefas Criadas</p>
                <span>{tasks.length}</span>
            </div>

            <div className={styles.totalTasks}>
                <p>Concluídas</p>
                <span>{completedTasks.length}</span>
            </div>

        </section>

        <section className={styles.listContent}>

            {tasks.length > 0 ? tasks.map(task => (
                <Task
                    key={task.id}
                    description={task.description}
                    onClick={(e) => handleTaskClick(e, task.id)}
                    status={task.completed}
                />
            )): returnEmptyList()
            }
        </section>
     </>   
    )
}