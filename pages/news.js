import React from 'react'
import styles from "../styles/news.module.sass"
import Image from "next/image"
import banner1 from "../assets/info-banner-1.png"
let setPublicationDate = (date) => {
    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDate()
    return `${('0' + d).slice(-2)}.${('0' + m).slice(-2)}.${y}`
}

let NewsCard = () =>
    <div className={styles["news-card"]}>
        <div className={styles.padding}>
            <div className={styles["publication-date"]}>
                {setPublicationDate(new Date())}
            </div>
            <div className={styles.description}>
                Заместитель директора филиала НИУ «МЭИ» в г. Волжском Илья Болдырев с деловой встречей побывал в ООО «НТЦ «Механотроника» в г. Санкт-Петербурге. Представители предприятий – партнеров обсудили планы сотрудничества на 2022 год.
            </div>
        </div>
        <div className={styles.thumbnail}>
            <Image src={banner1}></Image>
        </div>
    </div>

let News = () =>
    <div className={styles.news}>
        <div className={styles.wrapper}>
            <div className={styles.link}>
                <a href="#" className="main-link">ОФИЦИАЛЬНЫЕ НОВОСТИ</a>
            </div>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <div className={styles.link}>
                <a href="#" className="main-link">ОБЪЯВЛЕНИЯ</a>
            </div>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    </div>

export default News