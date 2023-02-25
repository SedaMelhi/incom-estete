import Nav from './Nav/Nav';
import { useTranslation } from 'react-i18next';
import './header.sass'

const Header = () => {
    const { t, i18n } = useTranslation();
    return(
        <header>
            <div className="header" id='header'>
                <Nav/>
                <div className="header__wrap">
                    <div className="wrap">
                        <div className="header__text">
                            <div className="header__title">
                                {t("header-title")}
                            </div>
                            <div className="header__description">
                                {t("header-desc")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-size"></div>
            </div>
        </header>
    )
}
export default Header;