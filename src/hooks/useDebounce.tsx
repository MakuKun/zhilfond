import { IUser } from '../type/IUser';


export function useDebounce(value: string, users: Array<IUser>){
    const filterUsers: Array<IUser> = [];
    const filterInput: Array<string> = value.split(',').map(i => i.trim())
    filterInput.forEach(elem => {
        if(elem.length == 0) filterInput.splice(filterInput.indexOf(elem), 1)
    })
    if(value.length == 0) return filterUsers
    
    console.log(filterInput);
    for (let i = 0; i < filterInput.length; i++) {
        const user = users.filter(elem => elem.username.includes(filterInput[i]) || elem.id == +filterInput[i])
        filterUsers.push(...user)
    }
    return filterUsers
}









// export function useDebounce(value: string){
//     const [loading, setLoading] = useState(false)
//     const users = useAppSelector((store) => store.user.users)
//     const filterUsers: Array<IUser> = [];

//     useEffect(() => {
//         setLoading(true)
//         const filterInput: Array<string> = value.split(',').map(i => i.trim())
//         console.log(filterInput);
//         const timer = setTimeout(() => {
            
//             for (let i = 0; i < filterInput.length; i++) {
//                 const user = users.filter(elem => elem.username.includes(filterInput[i]) || elem.id == filterInput[i])
//                 filterUsers.push(...user)
//             }
//             console.log(filterUsers);
//             setLoading(false)
//         }, 500)
//         console.log(filterUsers);
//         return () => clearTimeout(timer)
//     }, [value, users])

//     console.log(filterUsers);
//     return {filterUsers, loading}
// }