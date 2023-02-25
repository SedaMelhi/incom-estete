import "./card.sass"
const Card = ({url, price, address, details, priceText, expectedCost}) => {
    const detailsArr = []
    for(let key in details){
        detailsArr.push(<div className="details__item" key={key}>{details[key]}</div>)
    }
    return(
        <div className="card">
            <div className="card__image">
                    <img src={url} alt="" />
            </div>
            <div className="details">
                {
                    detailsArr
                }
            </div>
            <div className="card__price">
                {price}
            </div>
            <div className="card__price-text">
                {priceText} {expectedCost}
            </div>
            <div className="card__address">
                {address}
            </div>
        </div>
    )
}
export default Card;