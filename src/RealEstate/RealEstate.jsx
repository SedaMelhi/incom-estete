import { useTranslation } from 'react-i18next';
import './real-estate.sass';

const RealEstate = () => {
  const { t } = useTranslation();
  return (
    <div className="wrap">
      <div className="real-estate" id="real-estate">
        <div className="title">{t('estate-title')}</div>
        <div className="estate__wrap">
          <div className="estate__item">
            <div className="estate__subtitle">{t('estate-subtitle1')}</div>
            <div className="estate__desc">{t('estate-desc1')}</div>
          </div>
          <div className="estate__item">
            <div className="estate__subtitle">{t('estate-subtitle2')}</div>
            <div className="estate__desc">{t('estate-desc2')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
