import {v4 as uuid} from 'uuid';

type SignInRequestData = {
    username: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

export async function signInRequest({username, password}: SignInRequestData){
    //Tratar os dados recebidos e devolver as informações do usuário
    await delay;

    return {
        token: uuid(),
        user: {
            name: 'Mário Henrique',
            email: 'mh@gmail.com',
            avatar_url: 'https://github.com/Mario-Henrique.png'
        }
    }
}

export async function recoverUserInfo(){
    await delay();

    return {
        user: {
            name: 'Mário Henrique',
            email: 'mh@gmail.com',
            avatar_url: 'https://github.com/Mario-Henrique.png'
        }
    }
}