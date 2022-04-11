import React from "react";
import styles from "../styles/layout.module.sass"
import {Image, logo, disabledPersonMode, timetable, tgIcon, vkIcon, webResourcesImages} from "../assets/layout-import"

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
                            <a href="#"><Image src={vkIcon}/></a>
                            <a href="#"><Image src={tgIcon}/></a>
                        </div>
                    </div>
                </div>
                <div className={styles["footer-web-resources"]}>
                    <div className={styles["web-resources-title"]}>WEB-РЕСУРСЫ:</div>
                    <div className={styles["wrapper"]}>
                        {webResourcesImages.map((e, i) => <a key={i} className={styles["web-resource"]} href="#"><Image src={e}/></a>)}
                    </div>
                </div>
            </div>
            <div className={styles["finances-info"]}>
                <a  href="#">Сведения о доходах, об имуществе и обязательствах имущественного характера руководителя, его заместителей, президента и главного бухгалтера</a>
            </div>
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