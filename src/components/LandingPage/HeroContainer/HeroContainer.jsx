import "./HeroContainer.css"
import { messageAvatar } from "../../../assets/assetsExport";


const HeroContainer = () => {
    return (
        <div>
            <div className="heroContainer">
                <div className="heroContainerHeader container">
                    <div className="heroAvatar">
                        <img src={messageAvatar} alt="" />
                    </div>
                    <div className="heroNavigation">
                        <ul>
                            <li>Get Ticket</li>
                            <li>Schedule</li>
                            <li>Speakers</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="heroRegBtn">
                        <button>
                            Register
                        </button>
                    </div>
                </div>
                <div className="heroContainerBody">
                    <div className="heroTextContainer">
                        <h1>
                            Witness The World’s Biggest
                        </h1>
                        <p>
                            durga puja is technically west bengal’s largest religious festival, centred on the goddess durga, destroyer of the demon mahishasura. but increasingly, durga puja is also the world’s largest publicly funded Art show.
                        </p>
                    </div>
                    <div className="heroBodyMoreBTns">
                        <div className="ticketBtn">
                            <button>
                                Get Ticket
                            </button>
                            <span>
                                <a href="/">
                                    View More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M13 19L22 12L13 5V19Z" fill="white" />
                                        <path d="M2 19L11 12L2 5V19Z" fill="white" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <span className="viewMoreBtn">
                            <a href="/">
                                View More
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 19L22 12L13 5V19Z" fill="white" />
                                    <path d="M2 19L11 12L2 5V19Z" fill="white" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContainer;