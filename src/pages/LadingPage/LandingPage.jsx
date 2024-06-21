import "./LandingPage.css";
import DiscoverableImage from "../../components/LandingPage/DiscoverImages/DiscoverImages";
import HeroContainer from "../../components/LandingPage/HeroContainer/HeroContainer";
import CardsImages from "../../components/LandingPage/CardsImages/CardsImages";
import GalleryImages from "../../components/LandingPage/GalleryImages/GalleryImages";
import MoreExplore from "../../components/LandingPage/MoreExplore/MoreExplore";
import ExploreJoin from "../../components/LandingPage/ExploreJoin/ExploreJoin";

const LandingPage = () => {
    return (
        <>
            <div className="herSection">
                <HeroContainer />
            </div>
            <div className="container">
                <div className="discover">
                    <DiscoverableImage />
                </div>
                <div className="cards">
                    <CardsImages />
                </div>
                <div className="gallery">
                    <GalleryImages />
                </div>
                <div className="explores">
                    <MoreExplore />
                </div>
                <div className="exploresAndJoin">
                    <ExploreJoin />
                </div>
            </div>
        </>
    );
};

export default LandingPage;