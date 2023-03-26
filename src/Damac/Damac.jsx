import './damac.sass';
const Damac = () => {
  return (
    <div className="wrap">
      <div className="damac">
        <div className="title">DAMAC Properties</div>
        <div className="flex__description">
          Вы можете посмотреть проекты нашего партнера{' '}
          <a href="https://www.damacproperties.com">DAMAC Properties</a>
        </div>
        <div className="flex">
          <div className="flex__item"></div>
          <div className="flex__item"></div>
        </div>
      </div>
    </div>
  );
};
export default Damac;
