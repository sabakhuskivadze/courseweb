"use client"
import styles from './navbarItems.module.scss'

interface Props{
    imgUrl:string
    text:string
}

export default function NavbarItems(props:Props) {
    return(
        <>
        <div className={styles.navbarItems}>
            <div className={styles.items}>
                <div className={styles.text}>
                    <img src={props.imgUrl} alt="img" />
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
        </>
    )
}