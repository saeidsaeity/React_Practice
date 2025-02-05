import styles from './Header.module.css'
import Select from 'react-select';
import {useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import pictureOne from "./pic1.jpg"
import pic2  from "./pic2.jpg"
import Modal from 'react-modal';
export default function Header() {
    const [searchInput, setSearchInput] = useState("");
    const [whatToWear,setWhatToWear]=useState("")
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      function wearModal() {
        return (
            <div className={styles.containermodal} onMouseEnter={()=>{setWhatToWear(true);console.log("i am here");
            }} onMouseLeave={()=> {(setWhatToWear(false))}}>
            <div className={styles.subheadingsFirst}>
            <h2>SHOP WHAT'S NEW</h2> 
            <p className={styles.subheadingtitle}>New This Week</p>
            <p className={styles.subheadingtitle}>New This Month</p>
            <p className={styles.subheadingtitle}>New Brands</p>
            <p className={styles.subheadingtitle}>New Season</p>
            <p className={styles.subheadingtitle}>New From The Journal</p>
            </div>
            <div className={styles.subheadingsSecond}>
            <h2>THE LATEST FROM THE JOURNAL </h2>
            <img className={styles.picture} src={pictureOne} alt='man wearing a coat'/>
            <p className={styles.articleTitle} >Why The Cardigan Hype Is Real - If You Do It Right</p>
            <img className={styles.picture} src={pic2}/>
            </div>
            </div>
        )
        
      }
    return(
        <>
        <div className={styles.container}>

        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><g fillRule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="#FEFEFE" d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z"/><path fill="#012169" d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z"/><path fill="#C8102E" d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z"/></g></svg>
        
        <h1 className={styles.title}>MR PORTER</h1>
        <hr className={styles.line}/>
        <div className={styles.rightIcons} >
        <CiSearch />
        <input className={styles.searchBar} type="search" placeholder="Search here" onChange={handleChange}/>
    <MdAccountCircle />
        </div>
       
        
        </div>
        <div className={styles.headingContainer}>
         <h2 onMouseEnter={()=>{setWhatToWear(true)}}>What's New</h2>
         <h2>What to Wear</h2>
         <h2>Designers</h2>
         <h2>Clothing</h2>
         <h2>Shoes</h2>
         <h2>Bags</h2>
         <h2>Accessories</h2>
         <h2>Watches</h2>
         <h2>Sport</h2>
         <h2>Home and gifts</h2>
         <h2>People and Planet</h2>
         <h2>Sale</h2>  
        </div>
        <div>{whatToWear===true?wearModal():null}</div>
    
        </>
    )
    
}