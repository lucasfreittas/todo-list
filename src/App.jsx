import './global.css'
import styles from './app.module.css'

import { SearchBar } from './components/Search Bar';
import { Header } from './components/Header';


export function App() {
  return (
    <>
      <Header/>

      <section className={styles.content}>
        <SearchBar/>
      </section>
      
     
    </>
  
  )
}
