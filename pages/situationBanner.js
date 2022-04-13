import React from "react";
import Image from "next/image"
import styles from "../styles/situation-banner.module.sass"
import pic from "../assets/situation-banner.png"

let SituationBanner = () =>
    <div className={styles["situation-banner"]}>
        <div className={styles["wrapper"]}>
            <div className={styles.banner}>
                <Image src={pic}></Image>
            </div>
            <div className={styles.caption}>
                Филиал Федерального государственного бюджетного образовательного учреждения <br/>
                высшего образования <span>«Национальный исследовательский университет «МЭИ»</span> <br/>
                в г. Волжском ведет свою историю с 1995 года.
            </div>
        </div>
    </div>

export default SituationBanner