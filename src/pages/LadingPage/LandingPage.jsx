import "./LandingPage.css";
import DiscoverableImage from "../../components/LandingPage/DiscoverImages/DiscoverImages";
import HeroContainer from "../../components/LandingPage/HeroContainer/HeroContainer";
import CardsImages from "../../components/LandingPage/CardsImages/CardsImages";
import GalleryImages from "../../components/LandingPage/GalleryImages/GalleryImages";
import MoreExplore from "../../components/LandingPage/MoreExplore/MoreExplore";
import ExploreJoin from "../../components/LandingPage/ExploreJoin/ExploreJoin";
import CommonQuery from "../../components/LandingPage/CommonQuery/CommonQuery";
import Unicef from "../../components/LandingPage/Unicef/Unicef";
import LandingPageFooter from "../../components/LandingPage/LandingPageFooter/LandingPageFooter";

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
                <div className="queryAnswer">
                    <CommonQuery />
                </div>
                <div className="unicef">
                    <Unicef />
                    <div className="unicefHr"></div>
                    <Unicef />
                </div>
            </div>
            <div className="landingFooter">
                <LandingPageFooter />
            </div>
        </>
    );
};

export default LandingPage;