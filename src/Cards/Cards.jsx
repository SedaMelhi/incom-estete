import { useTranslation } from "react-i18next";
import Card from "./Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./cards.sass";

const Cards = () => {
    const { t, i18n } = useTranslation();
    const cards = [
        {
            url: "./img/cards/card1.png",
            details: {
                room: t("room1"),
                floor: t("floor1"), 
                size: "120 м2"
            },
            price: "873 176,66 $",
            address: t("top-address1"),
            key: 0
        },
        {
            url: "./img/cards/card2.png",
            details: {
                room: t("room2"),
                floor: t("floor2"), 
                size: "120 м2", 
            },
            price: "443 679,09 $",
            address: t("top-address2"),
            key: 1
        },
        {
            url: "./img/cards/card3.png",
            details: {
                room: t("room3"),
                floor: t("floor3"), 
                size: "120 м2", 
            },
            price: "13 200 000 ₽",
            address: t("top-address3"),
            key: 2
        }
    ]
    return(
        <div className="wrap">
            <div className="cards">
                <div className="title">{t("top")}</div>
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
export default Cards;