import "./LandingPageFooter.css"

const LandingPageFooter = () => {
    return (
        <div className="landingPageFooterContainer">
            <div className="companyIntro">
                <p>
                    Lepeakers is a company in the field of technology, we were founded in 1998
                </p>
            </div>
            <div className="footerLinks footerNavigation">
                <h3>
                    Navigation
                </h3>
                <ul>
                    <li>
                        <p>
                            Get Ticket
                        </p>
                    </li>
                    <li>
                        <p>Schedule</p>
                    </li>
                    <li>
                        <p>Speakers</p>
                    </li>
                </ul>
            </div>
            <div className="footerLinks learnMore">
                <h3>Learn More</h3>
                <ul>
                    <li>
                        <p>Terms Of Use</p>
                    </li>
                    <li>
                        <p>Privacy & Policy</p>
                    </li>
                    <li>
                        <p>FAQ</p>
                    </li>
                </ul>
            </div>
            <div className="newLetter">
                <h3>Newsletter</h3>
                <ul>
                    <li>
                        <p>
                            {"Don't miss the latest information on this platform"}
                        </p>
                    </li>
                    <li className="inputSection">
                        <input type="email" placeholder="Email Address" />
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.9941 2L10.9941 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.9941 2L14.9941 22L10.9941 13L1.99414 9L21.9941 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default LandingPageFooter;