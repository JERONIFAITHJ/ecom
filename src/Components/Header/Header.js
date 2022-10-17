import classes from './Header.module.css';
import HeaderCard from './HeaderCard';

const cardInfo = [{
    id : 'card-1',
    title : 'Up to 60% off | Upgrade to Smart TVs',
    source : 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/Jup22/Kamya/1_PC_CategoryCard_758X608_D._SY304_CB607449290_.jpg',
    alt : 'TV Image'
},
{
    id : 'card-2',
    title : 'Extra Happiness | Up to 70% off on selected products',
    source : 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/Jupiter-22/Phase-3/P3_PC-CC_1X._SY304_CB609049271_.jpg',
    alt : 'Offer Images'
},
{
    id : 'card-3',
    title : 'Offers up to 70% on essentials',
    source : 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter22/Phase3/PC_P3/D55798905_PC_CC_1x._SY304_CB609070400_.jpg',
    alt : 'Essentials Images'
},
{
    id : 'card-4',
    title : 'Up to 60% off | Double door refrigerators',
    source : 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jupiter22/GW/P3/Ref-PC-CC-1x._SY304_CB609048397_.jpg',
    alt : 'Essentials Images'
}
]
const Header = (props) => {
    
    return (
        <div className={classes.head}>
            <div className={classes.cardContainer}>
                {cardInfo.map(val => <HeaderCard key={val.id} id={val.id} title={val.title} source={val.source} alt={val.alt} />)}
            </div>
        </div>
    )
}

export default Header