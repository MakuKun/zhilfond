import styles from '../style/UserItem.module.scss'
import img from '../image/user-img.png'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { showCard, toggleItem } from '../store/slice/SidebarSlice'
import { IUser } from '../type/IUser'
import { store } from '../store/store'
import { FC } from 'react'

 const UserItem: FC<IUser> = () => {
    const dispatch = useAppDispatch()
    const show = useAppSelector(store => store.user.active)

    function clickUser(){
        dispatch(showCard(user))
        dispatch(toggleItem())
        console.log(show);
    }

    return(
        <div className={styles.ui} onClick={clickUser}>
            <div className={styles["ui_img"]}>
                <img src={img} alt="user-img" />
            </div>
            <div className={styles["ui_data"]}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

 export default UserItem