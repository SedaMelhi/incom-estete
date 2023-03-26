import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';
import Hamburger from './Hamburger/Hamburger';
import MenuMobile from './MenuMobile/MenuMobile';
import './nav.sass';

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="nav-wrap">
      <nav>
        <div className="wrap">
          <div className="nav nav-size">
            <div className="nav__left">
              <div className="logo">
                <Link to={'/#header'}>
                  <img src="./img/header/logo.svg" alt="INCOM" />
                </Link>
              </div>
              <div className="menu">
                <Link to="/" className="menu__item">
                  {t('home')}
                </Link>
                <Link to="/#real-estate" className="menu__item">
                  {t('realty')}
                </Link>
                <Link to="/#services" className="menu__item">
                  {t('Services')}
                </Link>
                <Link to="/about" className="menu__item">
                  {t('About')}
                </Link>
                <Link to="#footer" className="menu__item">
                  {t('Contacts')}
                </Link>
              </div>
            </div>
            <div className="nav__right">
              <div className="phone">
                <a href="tel:+971502866186" className="phone__number">
                  +971 502 866186
                </a>
              </div>
              <div className="lang">
                <div className="lang__active">{i18n.language}</div>
                {/* <div className="long__ru">Ru</div> */}
                <div className="lang__wrap">
                  <div className="lang__arrow">
                    <img src="./img/header/arrow.svg" alt="" />
                  </div>
                  <div className="lang-menu__wrap">
                    <div className="lang-menu">
                      <div
                        className="lang__item"
                        onClick={() => {
                          changeLanguage('en');
                        }}>
                        EN
                      </div>
                      <div
                        className="lang__item"
                        onClick={() => {
                          changeLanguage('ru');
                        }}>
                        RU
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </div>
        </div>
      </nav>
      <MenuMobile menuState={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Nav;
