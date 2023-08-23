import styles from './Task.module.css';

import { CheckCircle, Circle, Trash } from 'phosphor-react';

export function Task({ description, status, onClick}){
    const completed = status === true;
    const className = completed ? styles.completed : styles.uncompleted;
    const icon = completed ? <CheckCircle weight="fill" onClick={onClick} /> : <Circle onClick={onClick}/>
    return(
        <div className={className}>
            {icon}
            <p>{description}</p>
            <Trash />
        </div>
    )
}