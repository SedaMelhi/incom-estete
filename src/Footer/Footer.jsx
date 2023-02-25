import { useTranslation } from "react-i18next";
import "./footer.sass";

const Footer = () => {
    const { t, i18n } = useTranslation();
    return(
        <footer>
            <div className="wrap">
                <div className="footer" id="footer">
                    <a href="#header" className="footer__logo">
                        <div className="logo">
                            <img src="./img/header/logo.svg" alt="INCOM" />
                        </div>
                    </a>
                    <div className="footer__wrap">
                        <div className="footer__item">
                            <a href="#header" className="footer__link">{t("link1")}</a>
                            <a href="#real-estate" className="footer__link">{t("link2")}</a>
                            <a href="#services" className="footer__link">{t("link3")}</a>
                        </div>
                        <div className="footer__item">
                            <a href="#" className="footer__link">{t("link4")}</a>
                            <a href="#" className="footer__link">{t("link5")}</a>
                        </div>
                        <div className="footer__item">
                            <a href="mailto:info@incomestate.ae" className="footer__link">info@incomestate.ae</a>
                            <a href="tel:+971502866186" className="footer__link">+971 502 866186</a>
                            <div className="networks">
                                <a href="https://www.instagram.com/incom.ae/" className="networks__item">
                                    <img src="./img/footer/inst.svg" alt="" />
                                </a>
                                <a href="https://t.me/incom_ae" className="networks__item">
                                    <img src="./img/footer/tel.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;