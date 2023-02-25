import {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import './nav.sass';

const Nav = () => {
    const { t, i18n } = useTranslation();
    const activeLang = localStorage.getItem("lang") ? localStorage.getItem("lang"): "En";
    const [lang, setLang] = useState(activeLang)
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    useEffect(() =>{
        changeLanguage(lang.toLowerCase())
    }, [lang])
    return(
        <nav>
            <div className="wrap">
                <div className="nav nav-size">
                    <div className="nav__left">
                        <div className="logo">
                            <img src="./img/header/logo.svg" alt="INCOM" />
                        </div>
                        <div className="menu">
                            <a href="#header" className="menu__item">{t("home")}</a>
                            <a href="#real-estate" className="menu__item">{t("realty")}</a>
                            <a href="#services" className="menu__item">{t("Services")}</a>
                            <a href="#" className="menu__item">{t("About")}</a>
                            <a href="#footer" className="menu__item">{t("Contacts")}</a>
                        </div>
                    </div>
                    <div className="nav__right">
                        <div className="phone">
                            <a href="tel:+971502866186" className="phone__number">+971 502 866186</a>
                        </div>
                        <div className="lang">
                            <div className="lang__active">{lang}</div>
                            {/* <div className="long__ru">Ru</div> */}
                            <div className="lang__wrap">
                                <div className="lang__arrow">
                                    <img src="./img/header/arrow.svg" alt=""/>
                                </div>
                                <div className="lang-menu__wrap">
                                    <div className="lang-menu">
                                        <div className="lang__item" onClick={() => {
                                            setLang('En')
                                        }}>EN</div>
                                        <div className="lang__item" onClick={() => {
                                            setLang('Ru')
                                        }}>RU</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;