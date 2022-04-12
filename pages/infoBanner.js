import React, {useEffect} from "react";
import styles from "../styles/info-banner.module.sass"
import Image from "next/image"

let InfoBanner = ({interactive = false, children, background}) => {
    return (
        <div className={`${styles["info-banner"]} ${interactive && styles["interactive"]}`}>
            <div className={styles.background}>
                {background && <Image src={background} layout="fill"></Image>}
            </div>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
)}

export default InfoBanner