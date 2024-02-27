import styles from '../style/UserItem.module.scss'
import img from '../image/user-img.png'

 const UserItem = ({name, email}: {name: string, email: string}) => {
    return(
        <div className={styles.ui}>
            <div className={styles["ui_img"]}>
                <img src={img} alt="user-img" />
            </div>
            <div className={styles["ui_data"]}>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

 export default UserItem