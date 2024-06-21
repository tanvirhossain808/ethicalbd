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
    ]
    const leftExploreImages = [
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
                    exploresImg.map((img, index) => <div key={index} className={`image${index + 1}`}> <img src={img} />
                        <div className="moreExploreTitleContainer">
                            <p className="title">Interview</p>
                            <p className="moreExploreImgTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>)
                }
            </div>
            <div className="leftExploreImages">
                {
                    leftExploreImages.map((img, index) => <div key={index} className="leftImages"> <img src={img} />
                        <div className="moreExploreTitleContainer">
                            <p className="title">Interview</p>
                            <p className="moreExploreImgTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>)
                }
            </div>
            <div className="browseMoreVideo">
                <button>
                    Browse More Video
                </button>
            </div>
        </div>
    );
};

export default MoreExplore;