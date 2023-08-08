import styles from './SearchBar.module.css';
import { PlusCircle } from 'phosphor-react'


export function SearchBar(){
    return(
        <fieldset>

            <input
                type="text"
                className={styles.search}
                placeholder='Adicione uma nova tarefa'
            />


            <button type='submit' className={styles.button}>
                Criar
                <PlusCircle size={22}/>
            </button>
            
        </fieldset>
    )
}