import React from "react";
import Image from "next/image"
import styles from "../styles/carousel.module.sass"
import pic from "../assets/carousel_MPEI.png"
import {tgIcon, vkIcon} from "../assets/layout-import"

let Carousel = () =>
    <div className={styles.carousel}>
        <div className={styles["slide-picture"]}>
            <Image src={pic}/>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.caption}>
                <div className={styles["caption-text"]}>ДОБРО ПОЖАЛОВАТЬ В ФИЛИАЛ НИУ МЭИ В Г. ВОЛЖСКОМ!</div>
                <div className={styles["caption-controls"]}>
                    <a href="#" className={styles["caption-controls-link"]}>
                        РЕГИСТРАЦИЯ НА КОМППЛЕКСНЫЕ ВСТУПИТЕЛЬНЫЕ ИСПЫТАНИЯ ПРЕДУНИВЕРСИТАРИЯ МЭИ
                    </a>
                    <a href="#" className={styles["caption-controls-link"]}>
                        ПРИЕМНАЯ КОМИССИЯ МЭИ
                    </a>
                </div>
            </div>
            <div className={styles["social-networks"]}>
                <a href="#"><Image width={42} height={42} src={vkIcon}/></a>
                <a href="#"><Image width={42} height={42} src={tgIcon}/></a>
            </div>
        </div>
    </div>

export default Carousel