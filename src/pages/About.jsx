import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Nav from '../Header/Nav/Nav';
import './about.sass';
const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <div className="wrap">
        <div className="about__wrap">
          <h2 className="title" id="about">
            {t('About')}
          </h2>
          <div className="about">
            <div className="about__left">
              <div className="about__item">
                {t('about-text1')} <br /> <br /> {t('about-text2')}
              </div>
              <div className="about__item">{t('about-text3')}</div>
              <div className="about__item">{t('about-text4')}</div>
            </div>
            <div className="about__right">
              <header>
                <div className="header header__about">
                  <div className="header__wrap">
                    <div className="header__text">
                      <h1 className="header__title">{t('header-title')}</h1>
                      <div className="header__description">{t('header-desc')}</div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
