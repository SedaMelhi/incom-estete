import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';
import './footer.sass';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <div className="wrap">
        <div className="footer" id="footer">
          <Link to="/#header" className="footer__logo">
            <div className="logo">
              <img src="./img/header/logo.svg" alt="INCOM" />
            </div>
          </Link>
          <div className="footer__wrap">
            <div className="footer__item">
              <Link to="/#header" className="footer__link">
                {t('link1')}
              </Link>
              <Link to="/#real-estate" className="footer__link">
                {t('link2')}
              </Link>
              <Link to="/#services" className="footer__link">
                {t('link3')}
              </Link>
            </div>
            <div className="footer__item">
              <Link to="/about#about" className="footer__link">
                {t('link4')}
              </Link>
              <Link to="/#footer" className="footer__link">
                {t('link5')}
              </Link>
            </div>
            <div className="footer__item">
              <Link to="mailto:info@incomestate.ae" className="footer__link">
                info@incomestate.ae
              </Link>
              <Link to="tel:+971502866186" className="footer__link">
                +971 502 866186
              </Link>
              <div className="networks">
                <Link to="https://www.instagram.com/incom.ae/" className="networks__item">
                  <img src="./img/footer/inst.svg" alt="" />
                </Link>
                <Link to="https://t.me/incom_ae" className="networks__item">
                  <img src="./img/footer/tel.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
