import "./GalleryImages.css"
import { galarrypic1, galarrypic2, galarrypic3, galarrypic4 } from "../../../assets/assetsExport";
const GalleryImages = () => {
    return (
        <>

            <div className="galleryContainer">
                <div className="galleryImageTitle">
                    <h2>Gallery</h2>
                    <p>Find Togetherness and Friendship in Every Corner of Our Events depicts moments of closeness and a sense of brotherhood that exist during our events. These photos show how shared experiences can create lasting relationships</p>
                </div>
                <div className="galleryImages">
                    <div className="image1">
                        <img src={galarrypic1} alt="" />
                    </div>
                    <div className="image2">
                        <img src={galarrypic2} alt="" />
                    </div>
                    <div className="image3">
                        <img src={galarrypic3} alt="" />
                    </div>
                    <div className="image4">
                        <img src={galarrypic4} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryImages;