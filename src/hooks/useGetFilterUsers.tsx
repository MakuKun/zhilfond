import { IUser } from '../type/IUser';


export function useGetFilterUsers(value: string, users: Array<IUser>){
    const filterUsers: Array<IUser> = [];
    const filterInput: Array<string> = value.split(',').map(i => i.trim().toLocaleLowerCase())
    filterInput.forEach(elem => {
        if(elem.length == 0) filterInput.splice(filterInput.indexOf(elem), 1)
    })
    if(value.length == 0) return filterUsers
    
    for (let i = 0; i < filterInput.length; i++) {
        const user = users.filter(elem => elem.username.toLocaleLowerCase().includes(filterInput[i]) || elem.id == +filterInput[i])
        filterUsers.push(...user)
    }
    return filterUsers
}
