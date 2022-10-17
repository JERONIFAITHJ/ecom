import classes from './Recommendation.module.css';
import RecommendationCard from './RecommendationCard';

const pdtList = [{ id: 'pdt1', src: 'https://m.media-amazon.com/images/I/81g07fxIbQL._AC_SY200_.jpg'},
{ id: 'pdt2', src: 'https://m.media-amazon.com/images/I/81shaXfqv5L._AC_SY200_.jpg'},
{ id: 'pdt3', src: 'https://m.media-amazon.com/images/I/81mVsFDow3L._AC_SY200_.jpg'},
{ id: 'pdt4', src: 'https://m.media-amazon.com/images/I/71rH7Skt1QL._AC_SY200_.jpg'},
{ id: 'pdt5', src: 'https://m.media-amazon.com/images/I/61iJg9WsI6L._AC_SY200_.jpg'},
{ id: 'pdt6', src: 'https://m.media-amazon.com/images/I/411SDvuBa+L._AC_SY200_.jpg'}]

const Recommendation = () => {
    return (
        <div className={classes.recommendationContainer}>
            <h1>Up to 60% off | Home decor picks from shops near you</h1>
            <div className={classes.recomGallery}>
                {pdtList.map(item => {
                    return(<RecommendationCard key={item.id} src={item.src} />);
                })}
            </div>
        </div>
    );
}

export default Recommendation;