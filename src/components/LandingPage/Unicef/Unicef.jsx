import { unicefPicture } from "../../../assets/assetsExport";
import "./Unicef.css"
const Unicef = () => {

    return (
        <div className="unicefContainer">
            <img src={unicefPicture} alt="unicef" />
            <img src={unicefPicture} alt="unicef" />
            <img src={unicefPicture} alt="unicef" />
        </div>
    );
};

export default Unicef;