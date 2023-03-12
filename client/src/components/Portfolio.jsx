import React, {useState} from 'react';

const Portfolio = (props) => {
    const [active, setActive] = useState(0)
    const handleClickPlus = () => {
        setActive(active + 1)
        if(active >= 2) {
            setActive(0)
        }
    }

    const handleClickminus = () => {
        setActive(active -1)
        if(active <= 0) {
            setActive(2)
        }
    }
    

    return (

        <section className="section-portfolio" id="section-portfolio">
            <div className="u-center-text u-margin-bottom-big" >
                <h2 className="heading-secondary">
                    My Portfolio
                </h2>
            </div>
            <div className="portfolio">
                <button onClick={handleClickminus} className="arrow-button arrow-button__left portfolio__btn-prev " data-carousel-button="prev" ></button>
                <button onClick={handleClickPlus} className="arrow-button arrow-button__right portfolio__btn-next" data-carousel-button="next" ></button>
                <div className="portfolio__border border-round">

                    <section aria-label="Newest Projects">
                        <div className="portfolio__carousel" data-carousel>
                            <ul data-slides>
                                {active === 0?
                                <li className="portfolio__slide" data-active>
                                    <h3 className="heading-tertiary heading-tertiary--2 u-center-text u-margin-bottom-small">
                                        Jobbin'
                                    </h3>
                                    <p className="paragraph">I built Jobbin' to help users track and organize their job applications. I wanted to group my applications in different categories for "Wishlist", "Applied", "Interview", "Rejections", "Offers". Users can move their applications freely, store information about the job, or remove them completely. </p>
                                </li>
                                :""}
                                {active===1?
                                <li className="portfolio__slide">
                                    <h3 className="heading-tertiary heading-tertiary--2 u-center-text u-margin-bottom-small">
                                        Corpse Puncher
                                    </h3>
                                </li>
                                :""}
                                {active===2?
                                <li className="portfolio__slide">
                                    <h3 className="heading-tertiary heading-tertiary--2 u-center-text u-margin-bottom-small">
                                        Umbrella Man Website
                                    </h3>
                                </li>
                                :""}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Portfolio