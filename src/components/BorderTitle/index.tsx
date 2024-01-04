/* eslint-disable @next/next/no-img-element */
import { HostProps } from "../Meow/types"
import styles from "../../app/page.module.css"

const BorderTitle = ({title} : HostProps) =>{
    return(
        <main className={styles.main}>
            <img src="/flower_embellish_down.png" className={styles.flower_embellish_top} alt=""></img>
            <img src="/flower_embellish_up.png" className={styles.flower_embellish_bottom} alt=""></img>
            <img src="/corner.png" className={styles.corner_topleft} alt=""></img>
            <img src="/corner.png" className={styles.corner_topright} alt=""></img>
            <img src="/corner.png" className={styles.corner_botleft}alt="" ></img>
            <img src="/corner.png" className={styles.corner_botright} alt=""></img>
            <p className={styles.page_title}>{title}</p>
        </main>
    )
}

export default BorderTitle;
