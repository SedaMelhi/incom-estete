import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import style from './Menu.module.sass';
const MenuMobile = ({ menuState, setMenuOpen }) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState(false);

  const onTitleClick = () => {
    setTitle(false);
  };
  return (
    <div className={menuState ? style.open : ''} onClick={() => setMenuOpen(!menuState)}>
      <div className={style.menu__mobile}>
        {title && (
          <div className={style.menu__title} onClick={onTitleClick}>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 13L1 7L7 1"
                stroke="#131F2E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {title}
            <div></div>
          </div>
        )}
        <div className="wrap">
          <div className={style.menu}>
            <Link to="/#header" className={style.menu__item}>
              {t('home')}
            </Link>
            <Link to="/#real-estate" className={style.menu__item}>
              {t('realty')}
            </Link>
            <Link to="/#services" className={style.menu__item}>
              {t('Services')}
            </Link>
            <Link to="/about" className={style.menu__item}>
              {t('About')}
            </Link>
            <Link to="/#footer" className={style.menu__item}>
              {t('Contacts')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuMobile;
