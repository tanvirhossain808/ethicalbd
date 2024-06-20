import "./DiscoverImages.css"
import { downloadImage1, downloadImage2, downloadImage3 } from "../../../assets/assetsExport"
const DownloadableImage = () => {
    const imgCollection = [
        downloadImage3,
        downloadImage1,
        downloadImage2,
    ]

    return (
        <div className="downlodableImageContainer">
            <h2 className="downlodableImageHeader">
                Lorem Ipsum is simply dummy text of the printing and typesetting
            </h2>
            <div className="imagesContainer">
                <button>Discover Now</button>
                <div className="images">


                    {
                        imgCollection.map((img, index) => <img className={`image ${index === 1 && "active"}`} key={index} src={img} width={800} height={555} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default DownloadableImage;