import UserCard from "../../components/UserCard/UserCard";
import { useAppSelector } from "../../store/hooks";
import styles from "./Body.module.scss";

const Body = () => {
    const user = useAppSelector((store) => store.user.card);

    return (
        <div className={styles.body}>
            {user.name.length > 0 ? (
                <UserCard />
            ) : (
                <p
                    style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Выберите сотрудника, чтобы посмотреть его профиль
                </p>
            )}
        </div>
    );
};

export default Body;
