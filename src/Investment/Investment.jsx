import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Cards/Card/Card";
import 'swiper/css';
import "../Cards/cards.sass";

const Investment = () => {
    const { t, i18n } = useTranslation();
    const cards = [
        {
            url: "./img/cards/card4.png",
            details: {
                investment: t("investment-details"),
            },
            price: "873 176,66 $",
            priceText: t("price-text"),
            address: t("top-address1"),
            expectedCost: "492 976,77 $",
            key: 0
        },
        {
            url: "./img/cards/card5.png",
            details: {
                investment: t("investment-details"),
            },
            price: "178 282,01 $",
            priceText: t("price-text"),
            address: t("top-address2"),
            expectedCost: "202 593,19 $",
            key: 1
        },
        {
            url: "./img/cards/card6.png",
            details: {
                investment: t("investment-details"),
            },
            price: "443 679,09 $",
            priceText: t("price-text"),
            expectedCost: "961 642,36 $",
            address: t("top-address1"),
            key: 2
        }
    ]
    return(
        <div className="wrap">
            <div className="cards">
                <div className="title">{t("investment-title")}</div>
                <div className="subtitle">{t("investment-subtitle")}</div>
                <div className="cards__wrap">
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={3}
                        breakpoints={{
                            // when window width is >= 640px
                            0: {
                                spaceBetween: 10,
                                slidesPerView: 1.2,
                            },
                            500: {
                                spaceBetween: 24,
                                slidesPerView: 1.5,
                            },
                            // when window width is >= 768px
                            800: {
                                slidesPerView: 3,
                            }
                          }}
                    >  
                        {
                            cards.map(card => 
                                <SwiperSlide key={card.key}>
                                    <Card {...card}/>    
                                </SwiperSlide> 
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Investment;