import './global.css'
import styles from './app.module.css'

import { SearchBar } from './components/Search Bar';
import { Header } from './components/Header';
import { List } from './components/List';
 

export function App() {
  return (
    <>
      <Header/>

      <section className={styles.appContent}>
        <SearchBar/>
        <List />
      </section>
      
     
    </>
  
  )
}
