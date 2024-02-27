import { useState } from 'react';
import UserItem from '../components/UserItem';
import styles from '../style/Sidebar.module.scss'
import { useDebounce } from '../hooks/useDebounce';
import { useAppSelector } from '../store/hooks';
import { store } from '../store/store';

 const Sidebar = () => {
    const [inputValue, setInputValue] = useState('')
    const users = useAppSelector((store) => store.user.users)
    const filterUsers = useDebounce(inputValue, users)
    

    return(
        <div className={styles.sb}>
            <div className={styles["sb_header"]}>
                <label htmlFor="search">Поиск сотрудников</label>
                <input
                    type="text"
                    id='search'
                    name='search'
                    placeholder='Введите id или Username'
                    value={inputValue}
                    onChange={(event) => {setInputValue(event.target.value)}}
                />
            </div>
            <div className={styles["sb_body"]}>
                <p>Результаты</p>
                <div className={styles["sb_body_users"]}>
                    {inputValue.length == 0 
                        ? <p>начните поиск</p>
                        : filterUsers.length == 0
                            ? <p>ничего не найдено</p>
                            : filterUsers.map(item => <UserItem 
                                key = {item.name + item.id}
                                // name = {item.name}
                                // email = {item.email}
                                // phone={item.phone}
                                // username={item.username}
                                user ={item}
                            />) 
                    }
                </div>
            </div>
        </div>
    )
}

export default  Sidebar;