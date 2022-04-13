import React from 'react';
import Layout from "./layout";
import Carousel from "./carousel";
import SituationBanner from "./situationBanner";
import InfoBanner from "./infoBanner";
import InfoCards from "./infoCards";
import banner1 from "../assets/info-banner-1.png"
import banner2 from "../assets/info-banner-2.png"

let Main = () =>
    <Layout>
        <Carousel />
        <SituationBanner />
        <InfoBanner background={banner1} interactive>
            <div>Обучение в институте ведется по двум профильным направлениям – по программам бакалавриата «Теплоэнергетика и теплотехника» и «Электроэнергетика и электротехника».</div>
            <div>Всю подробную информацию о поступлении и отслеживать списки поступивших вы можете на сайте приёмной комиссии.</div>
            <a href="https://google.com" className="main-link">ПРИЕМНАЯ КОМИССИЯ МЭИ</a>
        </InfoBanner>
        <InfoCards />
        <InfoBanner background={banner2}>
            <div className="title">
                МОДУЛЬНАЯ СИСТЕМА ОБУЧЕНИЯ
            </div>
            <div>Задача организации, в особенности же сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</div>
            <div>
                Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки направлений прогрессивного развития.
            </div>
        </InfoBanner>
    </Layout>

export default Main;