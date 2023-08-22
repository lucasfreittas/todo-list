import styles from './Task.module.css';

import { CheckCircle, Circle, Trash } from 'phosphor-react';

export function Task({ description, status}){
    const completed = status === true;
    const className = completed ? styles.completed : styles.uncompleted;
    const icon = completed ? <CheckCircle weight="fill" /> : <Circle />
    return(
        <div className={className}>
            {icon}
            <p>{description}</p>
            <Trash />
        </div>
    )
}