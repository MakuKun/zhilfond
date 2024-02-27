export interface IUsers{
    user: Array<IUser>
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}
