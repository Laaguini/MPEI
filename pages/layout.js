import React from "react";
import styles from "../styles/layout.module.sass"
import Image from 'next/image'
import logo from '../assets/MPEI_logo.png'
import disabledPersonMode from "../assets/disabled_person_mode.png"
import timetable from "../assets/timetable.png"

const navTopLinks = ['Поступление', 'Студенты', 'Образование', 'Наука', 'О филиале']
const navBottomLinks = ['Сведения об образовательной организации', 'Обращения граждан', 'Единое окно', 'Лаборатории', 'Контакты']
const footerSiteMapLinks = ['Приемная комиссия', 'Предуниверситарий', 'Наука', 'О филиале', 'Новости']
let Header = () =>
    <header>
        <div className={styles["header-wrapper"]}>
            <div className={styles.logo}>
                <a href="#"><Image src={logo} /></a>
            </div>
            <div className={styles["header-nav"]}>
                <nav className={styles["header-nav-top"]}>
                    {navTopLinks.map((e, i) => <a key={i} href="#" className={styles["nav-link"]}>{e.toUpperCase()}</a>)}
                </nav>
                <nav className={styles["header-nav-bottom"]}>
                    {navBottomLinks.map((e, i) => <a key={i} href="#" className={styles["nav-link"]}>{e.toUpperCase()}</a>)}
                </nav>
            </div>
        </div>
        <div className={styles["header-extra"]}>
            <div className={styles.wrapper}>
                <a href="#"><Image src={timetable} /></a>
                <a href="#"><Image src={disabledPersonMode} /></a>
            </div>
        </div>
    </header>

let Footer = () =>
    <footer>
        <div className={styles["footer-wrapper"]}>
            <div className={styles["footer-info"]}>
                <div className={styles["footer-site-map"]}>
                    {footerSiteMapLinks.map((e, i) => <a key={i} href="#" className={styles["footer-link"]}>{e.toUpperCase()}</a>)}
                </div>
                <div className={styles["footer-contact-info-wrapper"]}>
                    <div className={styles["footer-contact-info"]}>
                        <div className={styles["wrapper"]}>
                            <div><span className={styles.title}>КОНТАКТНАЯ ИНФОРМАЦИЯ:</span></div>
                            <div>
                                <span>Адрес: </span> 404110, Россия,<br/>
                                г.Волжский, проспект Ленина 69
                            </div>
                            <div>
                                <span>Телефон: </span>+7(88443)21-01-60 <br/>
                                e-mail: vf_mei@mail.ru
                            </div>
                            <div>
                                <span>Приемная комиссия: </span> <br/>
                                Телефон: +7(961)698-08-09, +7(8443)21-01-81 <br/>
                                e-mail: pk.vfmei@yandex.ru
                            </div>
                        </div>
                        <div className={styles["social-networks"]}>

                        </div>
                    </div>
                </div>
                <div className={styles["footer-web-resources"]}></div>
            </div>
            <a href="#">Сведения о доходах, об имуществе и обязательствах имущественного характера руководителя, его заместителей, президента и главного бухгалтера</a>
        </div>
    </footer>

let Layout = ({children}) =>
    <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </>


export default Layout