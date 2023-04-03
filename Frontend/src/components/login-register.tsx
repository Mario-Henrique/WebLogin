import styles from '@/styles/login_register.module.scss'
import { useCallback, useEffect, useState } from 'react';

type MyProps = {
    isOpen: boolean;
    action: ()=>void;
}

export default function LoginRegister({isOpen, action}: MyProps): JSX.Element{
    const [isActive, setActive] = useState(true);

    const handleClose = useCallback(()=>{
        action()
    }, []);

    const register = useCallback(() => {
        let card = document.getElementById('card');
        card?.classList.add(`${styles.active}`);
    }, []);

    const login = useCallback(() => {
        let card = document.getElementById('card');
        card?.classList.remove(`${styles.active}`);
    }, []);

    useEffect(():void =>{
        setActive(isOpen);
    }, [isOpen]);

    useEffect(():void =>{
        let card = document.getElementById('card');
        if (isActive){
            card?.classList.add(`${styles['active-popup']}`)
        }
        else
            card?.classList.remove(`${styles['active-popup']}`)
    }, [isActive]);
    
    return (
        <div className={styles.card} id='card'>
            <div className={`${styles['form-box']} ${styles.login}`}>
            <h2>Login</h2>
            <form>
                <div className={`${styles["input-box"]}`}>
                    <i className={`bi bi-person-fill ${styles.icon}`}></i>
                    <input type="text" id="txtUser" required />
                    <label htmlFor="txtUser">
                        Usuário
                    </label>
                </div>
                <div className={`${styles["input-box"]}`}>
                    <i className={`bi bi-key-fill ${styles.icon}`}></i>
                    <input type="password" id="txtPassword" required />
                    <label htmlFor="txtPassword">
                        Senha
                    </label>
                </div>
                <div className={`${styles["remember-forgot"]}`}>
                    <label htmlFor="chkRememberMe">
                        <input type="checkbox" id="chkRememberMe" />
                        Lembrar-me
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button type="submit">Conectar</button>
                <div className={`${styles["login-register"]}`}>
                    <p>
                        Não tem uma conta? 
                        <a href="#" className={`${styles["register-link"]}`} onClick={register}> Registre-se</a>
                    </p>
                </div>
            </form>
            </div>

            <div className={`${styles["form-box"]} ${styles.register}`}>
                <h2>Cadastro</h2>
                <form>
                    <div className={`${styles["input-box"]}`}>
                        <i className={`bi bi-person-fill ${styles.icon}`}></i>
                        <input type="text" id="txtRegisterUser" required />
                        <label htmlFor="txtRegisterUser">
                            Usuário
                        </label>
                    </div>
                    <div className={`${styles["input-box"]}`}>
                        <i className={`bi bi-envelope-at ${styles.icon}`}></i>
                        <input type="email" id="txtEmail" required />
                        <label htmlFor="txtEmail">
                            Email
                        </label>
                    </div>
                    <div className={`${styles["input-box"]}`}>
                        <i className={`bi bi-key-fill ${styles.icon}`}></i>
                        <input type="password" id="txtRegisterPassword" required />
                        <label htmlFor="txtRegisterPassword">
                            Senha
                        </label>
                    </div>
                    <div className={`${styles["input-box"]}`}>
                        <i className={`bi bi-key-fill ${styles.icon}`}></i>
                        <input type="password" id="txtConfirmPassword" required />
                        <label htmlFor="txtConfirmPassword">
                            Confirmar Senha
                        </label>
                    </div>
                    <div className={`${styles["remember-forgot"]}`}>
                        <label htmlFor="chkTerms">
                            <input type="checkbox" id="chkTerms" />
                            Aceitar os termos & condições
                        </label>
                    </div>
                    <button type="submit">Cadastrar</button>
                    <div className={`${styles["login-register"]}`}>
                        <p>
                            Já tem uma conta? 
                            <a href="#" className={`${styles["login-link"]}`} onClick={login}> Login</a>
                        </p>
                    </div>
                </form>
            </div>
            <i className={`bi bi-x ${styles['icon-close']}`} id="btClosePopup" onClick={handleClose}></i>
        </div>
    );
}