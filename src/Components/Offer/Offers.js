import classes from './Offers.module.css'
import OfferCard from './OfferCard';
const offerList = [{ id: 'offerCard1', src: 'https://m.media-amazon.com/images/I/41HSkMxLEJL._AC_SY200_.jpg', span: '30% off', title: 'Limited Deal', pdt: 'Redmi A1 | starting from 5319 (including additional offers)' },
{ id: 'offerCard2', src: 'https://m.media-amazon.com/images/I/51DLLa8HNWL._AC_SY200_.jpg', span: '30% off', title: 'Limited Deal', pdt: 'Iqoo 6 | starting from 27,999 (including additional offers)' },
{ id: 'offerCard3', src: 'https://m.media-amazon.com/images/I/41Hg5f2wGRL._AC_SY200_.jpg', span: '30% off', title: 'Limited Deal', pdt: 'Redmi A1 | starting from 15,999 (including additional offers)' },
{ id: 'offerCard4', src: 'https://m.media-amazon.com/images/I/41mDAtPMDKL._AC_SY200_.jpg', span: '30% off', title: 'Limited Deal', pdt: 'Oneplus 8 | starting from 33,999 (including additional offers)' },
{ id: 'offerCard5', src: 'https://m.media-amazon.com/images/I/41jna+YGP+L._AC_SY200_.jpg', span: '30% off', title: 'Limited Deal', pdt: 'Samsung M32 | starting from 8,999 (including additional offers)' },
{ id: 'offerCard6', src: 'https://m.media-amazon.com/images/I/416SpYgTVYL._AC_SY200_.jpg', span: '30% off', title: 'Limited Deal', pdt: 'Redmi 9 | starting from 17,999 (including additional offers)' },
{ id: 'offerCard7', src: 'https://m.media-amazon.com/images/I/417k0DCw0GL._AC_SY200_.jpg', span: '30% off', title: 'Limited Deal', pdt: 'Redmi Note 11T | starting from 29,999 (including additional offers)' }];

const Offers = () => {
    return (
        <div className={classes.offerContainer}>
            <h1>Offers: </h1>
            <div className={classes.cardGallery}>
                {offerList.map(item => <OfferCard key={item.id} src={item.src} span={item.span} title={item.title} pdt={item.pdt} />)}
            </div>
        </div>
    );
}

export default Offers;