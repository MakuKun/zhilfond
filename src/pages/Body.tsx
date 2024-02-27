import { useAppSelector } from '../store/hooks';
import { store } from '../store/store';
import styles from '../style/Body.module.scss'

 const Body = () => {
    const show = useAppSelector(store => store.user.active)

    return(
        <div className={styles.body}>
            Выберите сотрудника, чтобы посмотреть его профиль
        </div>
    )
}

 export default Body;