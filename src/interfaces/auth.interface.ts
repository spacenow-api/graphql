interface IToken {
    token: string;
    expiresIn: number;
}

interface IAuth {
    email: string;
    password: string;
}
   
export { IAuth as default, IToken };