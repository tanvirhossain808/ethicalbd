import "./CardsImages.css"
import { card1, card2, card3 } from "../../../assets/assetsExport";

const CardsImages = () => {
    const cards = [
        card1,
        card2,
        card3
    ]
    return (
        <>
            <div className="cardImageHeader">
                <h2>
                    Lorem Ipsum is simply dummy
                </h2>
            </div>
            <div className="cardImagesContainer">
                {
                    cards.map((img, index) => <img key={index} src={img} />)
                }

            </div>
        </>

    );
};

export default CardsImages;