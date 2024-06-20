import "./CardsImages.css"
import { card1, card2, card3 } from "../../../assets/assetsExport";

const CardsImages = () => {
    const cards = [
        card1,
        card2,
        card3
    ]
    return (
        <div className="cardImagesContainer">
            {
                cards.map((img, index) => <img key={index} src={img} />)
            }

        </div>
    );
};

export default CardsImages;