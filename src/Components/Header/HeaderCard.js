import classes from './HeaderCard.module.css';

const HeaderCard = (props) => {
    return (
        <div className={classes.card} >
            <h2>{props.title}</h2>
            <img src={props.source} alt={props.alt} />
        </div>
    )
}

export default HeaderCard;