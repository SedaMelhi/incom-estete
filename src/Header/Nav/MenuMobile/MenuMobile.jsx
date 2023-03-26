import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import style from './Menu.module.sass';
const MenuMobile = ({ menuState, setMenuOpen }) => {
  const { t } = useTranslation();
  const menu = [
    { name: t('home'), link: '/' },
    { name: t('realty'), link: '/#real-estate' },
    { name: t('Services'), link: '/#services' },
    { name: t('About'), link: '/about' },
    { name: t('Contacts'), link: '#footer' },
  ];
  const [title, setTitle] = useState(false);
  const [menuItems, setMenuItems] = useState(menu);

  const onMenuClick = (item) => {
    setTitle(item.name);
    setMenuItems(item.items);
  };
  const onTitleClick = () => {
    setTitle(false);
    setMenuItems(menu);
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
            {menuItems.map((item, i) => (
              <Link
                to={item.link}
                className={style.menu__item}
                onClick={item.items ? () => onMenuClick(item) : ''}
                key={i}>
                {item.name}
                {item.items ? (
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#131F2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  ''
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuMobile;
