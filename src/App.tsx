import styles from './style/App.module.scss'
import Body from './pages/Body'
import Sidebar from './pages/Sidebar'
import { useGetUsersQuery } from './query/UsersQuery'
import { useAppDispatch } from './store/hooks'
import { addUsers } from './store/slice/SidebarSlice'

function App() {
  const {data, isError, isLoading} = useGetUsersQuery()
  const dispatch = useAppDispatch()
  
  if (data) {
    dispatch(addUsers(data))
  }

  return (
    <div className={styles.app}>
      <div className={styles["app_wrapper"]}>
        <div className={styles["app_header"]}>
          <p>Жилфонд</p>
          <p>Пользователь</p>
        </div>
        <div className={styles["app_main"]}>
          {isLoading ? <p>Идет загрузка данных...</p> : 
            isError ? <p>{isError}</p> : <Sidebar/>}
          <Body/>
        </div>
      </div>
    </div>
  )
}

export default App
