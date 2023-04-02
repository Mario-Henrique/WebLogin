import styles from '@/styles/menu.module.scss'
import { useCallback } from 'react';

type MyProps = {
    action: () => void;
}

export default function Menu({action}: MyProps){
    const open = useCallback(()=>{
        action()
    }, []);
 
    return (
    <nav className={styles.nav}>
        <button className="btn btn-primary" id="btLoginPopup" onClick={open}>Login</button>
    </nav>
    );
}