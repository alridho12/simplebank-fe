import styles from '../styles/Home.module.css'
import SideBar from '../components/sidebar/SideBar'
import MainCard from '../components/maincard/MainCard'
import HistoryCard from '../components/history/HistoryCard'



export default function Home() {


  return (
    <div className={styles.maincontainer}>
      <main className="row m-0">
        <SideBar />
        <MainCard />
        <HistoryCard />
      </main>
    </div>
  )
}
