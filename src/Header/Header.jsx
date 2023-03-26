import Nav from './Nav/Nav';
import { useTranslation } from 'react-i18next';
import './header.sass';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header" id="header">
        <Nav />
        <div className="header__wrap">
          <div className="wrap">
            <div className="header__text">
              <h1 className="header__title">{t('header-title')}</h1>
              <div className="header__description">{t('header-desc')}</div>
            </div>
          </div>
        </div>
        <div className="nav-size"></div>
      </div>
    </header>
  );
};
export default Header;
