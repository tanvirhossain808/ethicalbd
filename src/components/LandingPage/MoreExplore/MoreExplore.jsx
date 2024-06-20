import "./MoreExplore.css"
import {
    explore1,
    explore2,
    explore3,
    explore4,
    explore5,
    explore6,
    explore7,
    explore8,
    explore9
} from "../../../assets/assetsExport";
const MoreExplore = () => {
    const exploresImg = [
        explore1,
        explore2,
        explore3,
        explore4,
        explore5,
        explore6,
        explore7,
        explore8,
        explore9
    ]
    return (
        <div className="moreExploreContainer">
            <div className="title">
                <h2>More Explore in Massart</h2>
                <p>Exclusive Content You Can Access</p>
            </div>
            <div className="moreExploreBtn">
                <button className="active exploreBtn">Original Videos</button>
                <button className="exploreBtn">Born Today</button>
                <button className="exploreBtn">Top News</button>
                <button className="exploreBtn">Editor’s Choice</button>
            </div>
            <div className="exploresImages">
                {
                    exploresImg.map((img, index) => <img className={`image${index + 1}`} key={index} src={img} />)
                }
            </div>
        </div>
    );
};

export default MoreExplore;