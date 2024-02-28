import styles from "./UserItem.module.scss";
import img from "../../assets/user-img.png";
import { useAppDispatch } from "../../store/hooks";
import { showCard } from "../../store/slice/SidebarSlice";
import { IUser } from "../../type/IUser";
import { FC } from "react";

interface IUserItemProps {
    user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.ui} onClick={() => {dispatch(showCard(user))}}>
            <div className={styles["ui_img"]}>
                <img src={img} alt="user-img" />
            </div>
            <div className={styles["ui_data"]}>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default UserItem;
