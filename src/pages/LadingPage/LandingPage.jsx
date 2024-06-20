import "./LandingPage.css";
import DownloadableImage from "../../components/LandingPage/DiscoverImages/DiscoverImages";
import HeroContainer from "../../components/LandingPage/HeroContainer/HeroContainer";

const LandingPage = () => {
    return (
        <>

            <div className="herSection">
                <HeroContainer />
            </div>
            <div className="container">
                <DownloadableImage />
            </div>
        </>
    );
};

export default LandingPage;