import { useEffect, useState } from "react";
import UserItem from "../../components/UserItem/UserItem";
import styles from "./Sidebar.module.scss";
import { useGetFilterUsers } from "../../hooks/useGetFilterUsers";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearCard } from "../../store/slice/SidebarSlice";

const Sidebar = () => {
    const [inputValue, setInputValue] = useState("");
    const users = useAppSelector((store) => store.user.users);
    const filterUsers = useGetFilterUsers(inputValue, users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (inputValue.length == 0) {
            dispatch(clearCard());
        }
    }, [inputValue, dispatch]);

    return (
        <div className={styles.sb}>
            <div className={styles["sb_header"]}>
                <label htmlFor="search">Поиск сотрудников</label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Введите id или Username"
                    value={inputValue}
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }}
                />
            </div>
            <div className={styles["sb_body"]}>
                <p>Результаты</p>
                <div className={styles["sb_body_users"]}>
                    {inputValue.length == 0 ? (
                        <p>начните поиск</p>
                    ) : filterUsers.length == 0 ? (
                        <p>ничего не найдено</p>
                    ) : (
                        filterUsers.map((item) => (
                            <UserItem key={item.name + item.id} user={item} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
