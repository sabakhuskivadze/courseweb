"use client"
import NavbarItems from '../components/navbarItems/navbarItems'
import styles from './sidebar.module.scss'

export default function SideBar() {
    return(
        <>
        <div className={styles.sidebar}>
            <div className={styles.container}>
                <div className={styles.items}>
                   <NavbarItems imgUrl={''} text={''}/>
                </div>
            </div>
        </div>
        </>
    )
}