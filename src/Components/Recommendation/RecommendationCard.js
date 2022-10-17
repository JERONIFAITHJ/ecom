import classes from './Recommendation.module.css';
const RecommendationCard = (props) => {
    return (
        <div>
            <img className={classes.imgContainer} src={props.src} />
        </div>
    );
}

export default RecommendationCard;