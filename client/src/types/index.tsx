
export interface userLoginInterface {
    username: string,
    password: string
}

export interface userInterface {
    username: string,
    first_name: string,
    last_name: string,
    email: string
}

export interface userStateInterface {
    msg: string | null
    data: string | null
    token: string | null
    isAuthenticated: boolean,
    user: userInterface | null
};