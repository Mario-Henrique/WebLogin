import styles from '@/styles/menu.module.scss'
import { useCallback } from 'react';

type MyProps = {
    action:() => void;
    logon: boolean;
}

export default function Menu({action, logon}: MyProps){
    const open = useCallback(()=>{
        if (action !== null)
            action()
    }, []);
 
    return (
    <nav className={styles.nav}>
        <button className="btn btn-primary" id="btLoginPopup" onClick={open}>{logon?'Logout':'Login'}</button>
    </nav>
    );
}