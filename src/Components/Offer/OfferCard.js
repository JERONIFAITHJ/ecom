import classes from './Offers.module.css'

const OfferCard = (props) => {
    return (
        <div className={classes.offerCards}>
            <img src={props.src} />
            <p><span>{props.span}</span>{props.title}</p>
            <p>{props.pdt}</p>
        </div>
    );
}
export default OfferCard;