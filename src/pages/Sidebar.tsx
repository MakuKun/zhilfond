import { useEffect, useState } from 'react';
import UserItem from '../components/UserItem';
import styles from '../style/Sidebar.module.scss'
import { useDebounce } from '../hooks/useDebounce';

 const Sidebar = () => {
    const [inputValue, setInputValue] = useState('')
    const {filterUsers, loading} = useDebounce(inputValue)
    

    function inputOnChange(event: ChangeEvent<HTMLInputElement>): void{
        setInputValue(event.target.value)
    }
    
    console.log(filterUsers);
    useEffect(() => {
        console.log('render')
    })

    return(
        <div className={styles.sb}>
            <div className={styles["sb_header"]}>
                <label htmlFor="search">Поиск сотрудников</label>
                <input
                    type="text"
                    id='search'
                    name='search'
                    placeholder='Введите id или Имя'
                    value={inputValue}
                    onChange={inputOnChange}
                />
            </div>
            <div className={styles["sb_body"]}>
                <p>Результаты</p>
                <div className={styles["sb_body_users"]}>
                    {/* {inputValue.length == 0 
                        ? <p>начните поиск</p>
                        : loading ? <p>Идет загрузка</p>
                        : filterUsers.map(item => <UserItem 
                            key = {item.name + item.id}
                            name = {item.name}
                            email = {item.email}
                        />)
                    } */}
                    {filterUsers.map(item => <UserItem 
                            key = {item.name + item.id}
                            name = {item.name}
                            email = {item.email}
                        />)}
                    
                </div>
            </div>
        </div>
    )
}

 export default Sidebar;