import "./CommonQuery.css"
const CommonQuery = () => {
    return (
        <>
            <div className="queryHeader">
                <h2>
                    Your Guide to Hassle-Free Event Registration.
                </h2>
                <p>
                    Provide step-by-step guidance on how to register and get tickets for events. Ensure visitors understand the registration process easily
                </p>
            </div>
            <div className="commonQueryContainer">
                <div className="commonQueryContainer1">
                    <div className="query active">
                        <div className="queryTitleContainer">
                            <h2 className="queryNumber" >01</h2>
                            <div className="queryTitleAndQueryQuestion">
                                <h2 className="queryTitle">How do I purchase tickets for an event?</h2>
                                <span className="queryTitleClose openCloseBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
                                    <path d="M1 1H15" stroke="#EE5A34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span>
                            </div>
                        </div>
                        <div className="commonQueryAnswer">
                            To purchase tickets, simply log in to your account, select the desired event, and follow the purchasing guide. Alternatively, you can purchase tickets without having to create an account first
                        </div>
                    </div>
                    <div className="query">
                        <div className="queryTitleContainer">
                            <h2 className="queryNumber" >02</h2>
                            <div className="queryTitleAndQueryQuestion">
                                <h2 className="queryTitle">How can I cancel or change my ticket order?</h2>
                                <span className="queryTitleClose openCloseBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H15" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 15V1" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span>
                            </div>
                        </div>
                    </div>
                    <div className="query">
                        <div className="queryTitleContainer">
                            <h2 className="queryNumber" >03</h2>
                            <div className="queryTitleAndQueryQuestion">
                                <h2 className="queryTitle">Are there other payment options besides credit card?</h2>
                                <span className="queryTitleClose openCloseBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H15" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 15V1" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonQueryContainer1">
                    <div className="query">
                        <div className="queryTitleContainer">
                            <h2 className="queryNumber" >03</h2>
                            <div className="queryTitleAndQueryQuestion">
                                <h2 className="queryTitle">Can tickets that have been purchased be refunded?</h2>
                                <span className="queryTitleClose openCloseBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H15" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 15V1" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span>
                            </div>
                        </div>
                    </div>
                    <div className="query">
                        <div className="queryTitleContainer">
                            <h2 className="queryNumber" >03</h2>
                            <div className="queryTitleAndQueryQuestion">
                                <h2 className="queryTitle">How do I get more information about a specific event?</h2>
                                <span className="queryTitleClose openCloseBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H15" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 15V1" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span>
                            </div>
                        </div>
                    </div>
                    <div className="query">
                        <div className="queryTitleContainer">
                            <h2 className="queryNumber" >03</h2>
                            <div className="queryTitleAndQueryQuestion">
                                <h2 className="queryTitle">What should I do if I lose my ticket?</h2>
                                <span className="queryTitleClose openCloseBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H15" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 15V1" stroke="#0D062D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommonQuery;