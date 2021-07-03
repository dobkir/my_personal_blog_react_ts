import styles from "./App.module.scss"

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Main } from "./components/Main/Main";


function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
