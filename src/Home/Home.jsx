import man from "./man.jpg"
import secondimg from "./secondhomeimg.jpg"
import styles from "./Home.module.css"
import frontpage1 from "./frontpage1.jpg"
import frontpage2 from "./frontpage2.jpg"
import { MdPadding } from "react-icons/md"
export default function Home() {
    return(
        <>
        <img className={styles.img} src={man} alt = "man posing"></img>

        <div className={styles.imageContainer}>
        <img className={styles.img} src={secondimg}></img>
        <p className={styles.overlayTextTitle}>What to wear this winter</p>
        <p className={styles.overlayText}>Heavy-duty outerwear, sumptuous knitwear and more cold-weather essentials from the world's best brands</p>
        <button className={styles.shopnow}>Shop now</button>
        </div>

        <div className={styles.container}>
           <h2>WHATS NEW TODAY</h2> 
           <h1 className={styles.textToday}>457</h1>
           <h2>Disover what just landed at MR PORTER</h2>
           <button className={styles.shopnowblack}>Shop now</button>
        </div>

        <div className={styles.container}>
        <img className={styles.picture}   src={frontpage1}/>
        <p style={{marginLeft: '10vw'}}>COATS AND JACKETS: SHEARLING AND MORE</p>
        <img className={styles.picture}  style={{marginLeft: '45vw'}}  src={frontpage2}/>
        </div>
        </>
    )
}