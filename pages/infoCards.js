import React, {useEffect} from "react";
import styles from "../styles/info-cards.module.sass"

let InfoCards = () =>
    <div className={styles["info-cards"]}>
        <div className={styles.card}>
            <div className={styles.info}>999</div>
            ВЫПУСКНИКОВ ПРЕДУНИВЕРСИТАРИЯ
        </div>
        <div className={styles.card}>
            <div className={styles.info}>999</div>
            ВЫПУСКНИКОВ БАКАЛАВРИАТА
        </div>
        <div className={styles.card}>
            <div className={styles.info}>999</div>
            ВЫПУСКНИКОВ МАГИСТРАТУРЫ
        </div>
    </div>

export default InfoCards