import styles from './Header.modules.css'
import TodoLogo from '../../assets/logo.svg'

export function Header (){
    return(
        <header>  
            <img src={TodoLogo} alt="ToDo Logo" />
        </header>
    )
}