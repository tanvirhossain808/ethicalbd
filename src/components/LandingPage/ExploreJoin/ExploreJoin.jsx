import "./ExploreJoin.css"
import { exploreCard1, exploreCard2, exploreCard3 } from "../../../assets/assetsExport";
import ExploreJoinCard from "./ExploreJoinCard/ExploreJoinCard";
const ExploreJoin = () => {
    const exploreCardsImg = [
        exploreCard1,
        exploreCard2,
        exploreCard3,
    ]
    return (
        <div className="exploreAndJoinContainer">
            <div className="exploreAndJoinTitle">
                <h4>Explore and Join Our Exciting Lineup</h4>
                <p>Explore a comprehensive list of nearby events conveniently accessible on our platform. Users have the opportunity to discover a diverse range of events and can seamlessly register directly through this dedicated page</p>
            </div>

            <div className="exploreJoinCards">
                {
                    exploreCardsImg.map((img, index) => <ExploreJoinCard key={index} img={img} />)
                }
            </div>
            <div className="directionalArrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="25" transform="rotate(180 25 25)" fill="white" />
                    <path d="M35 26C35.5523 26 36 25.5523 36 25C36 24.4477 35.5523 24 35 24L35 26ZM14.2929 24.2929C13.9024 24.6834 13.9024 25.3166 14.2929 25.7071L20.6569 32.0711C21.0474 32.4616 21.6805 32.4616 22.0711 32.0711C22.4616 31.6805 22.4616 31.0474 22.0711 30.6569L16.4142 25L22.0711 19.3431C22.4616 18.9526 22.4616 18.3195 22.0711 17.9289C21.6805 17.5384 21.0474 17.5384 20.6569 17.9289L14.2929 24.2929ZM35 24L15 24L15 26L35 26L35 24Z" fill="#A3A3A3" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="24.5" fill="#ED2127" stroke="#EE5A34" />
                    <path d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 26H35V24H15V26Z" fill="white" />
                </svg>
            </div>
        </div>
    );
};

export default ExploreJoin;