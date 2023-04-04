import { api } from "@/services/api";
import { recoverUserInfo, signInRequest } from "@/services/auth";
import { GetServerSideProps } from "next";
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

type SignInData = {
    username: string;
    password: string;
}

type User = {
    name: string;
    email: string;
    avatar_url: string;
}

type AuthContextType = {
    user: User;
    isAuthenticated: boolean;
    signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}){
    const [user, setUser] = useState<User | null>(null);
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'logreg.token': token } = parseCookies();

        if (token){
            recoverUserInfo().then(response => {
                setUser(response.user);
            });
        }
    }, []);

    async function signIn({username, password}: SignInData){
        const {token, user} = await signInRequest({
            username,
            password
        });

        setCookie(undefined, 'logreg.token', token, {
            maxAge: 60 * 60 * 1 // 1 hora
        });

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        setUser(user);

        Router.push('/dashboard');
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}

export const BlockPageIfNotAuthorized: GetServerSideProps = async (ctx) =>{
    const {['logreg.token']: token } = parseCookies(ctx);

    if (!token){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}