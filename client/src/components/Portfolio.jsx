import React, { useState, useEffect } from 'react';

const Portfolio = (props) => {
    const [active, setActive] = useState(0)
    const handleClickPlus = () => {
        setActive(active + 1)
        if (active >= 2) {
            setActive(0)

        }
    }

    const handleClickminus = () => {
        setActive(active - 1)
        if (active <= 0) {
            setActive(2)
        }
    }

    const handleSelect = (i) => {
        setActive(i)
    }

    useEffect(() => {
        const element0 = document.getElementById(0);
        const element1 = document.getElementById(1);
        const element2 = document.getElementById(2);
        console.log("bruh")
        if(active===0) {
            element0.classList.add('portfolio__select--focus'); 
        }
        else {
            element0.classList.remove('portfolio__select--focus'); 
        }
        if(active===1) {
            element1.classList.add('portfolio__select--focus'); 
        }
        else {
            element1.classList.remove('portfolio__select--focus'); 
        }
        if(active===2) {
            element2.classList.add('portfolio__select--focus'); 
        }
        else {
            element2.classList.remove('portfolio__select--focus'); 
        }
    })



    return (

        <section className="section-portfolio" id="section-portfolio">
            <div className="u-center-text u-margin-bottom-big" >
                <h2 className="heading-secondary">
                    My Portfolio
                </h2>
            </div>
            <div className="portfolio">

                <div className="portfolio__border border-round">

                    <section aria-label="Newest Projects">
                        <div className="portfolio__carousel" data-carousel>
                            <ul data-slides>
                                {active === 0 ?
                                    <li className="portfolio__slide" data-active>
                                        <h3 className="heading-tertiary heading-tertiary--2 u-center-text u-margin-bottom-small">
                                            Jobbin'
                                        </h3>
                                        <p className="paragraph u-center-text">I built Jobbin' to help users track and organize their job applications. I wanted to group my applications in different categories including "Wishlist", "Applied", "Interview", "Rejections", "Offers", and the ability to make new custom categories. This way I wouldn't make the mistake of forgetting which jobs I've already applied to, or what the responses I get. Users can then freely store information about the job, move jobs to different categories, or remove them completely. All put together in a clean, simple, and easy to use UI for optimal user experience.</p>
                                        <h3 className="heading-tertiary heading-tertiary--2 u-center-text u-margin-bottom-small">
                                            Technologies Used
                                        </h3>
                                        <p className='paragraph u-center-text'>JavaScript - React - Node.js - Mongodb - Mongoose - Material UI - Express</p>
                                        <div className="portfolio__container">
                                            <iframe className="portfolio__project-video " src="https://www.youtube.com/embed/zscwOpQVqBk" title="Jobbin&#39; Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>

                                            <a className="portfolio__project-btn" href="https://github.com/JeffreyAes/unity_project">Source Code</a>
                                        </div>
                                    </li>
                                    : ""}
                                {active === 1 ?
                                    <li className="portfolio__slide">
                                        <h3 className="heading-tertiary heading-tertiary--2 u-center-text u-margin-bottom-small">
                                            Corpse Puncher
                                        </h3>
                                        <p className='paragraph u-center-text'>Corpse Puncher is a 3D Action/Arcade game made in Unity where the player fights hoards of enemies with his fists for as long as they can struggle. with punches the player has other attacks including kicking, and punching projectiles back at enemies. This game offers action packed fast paced gameplay. Original enemies with unique attacks. a dynamic moveset including sliding, ground smashing, and kicking up objects to punch into enemies. And custom models, backgrounds, and animations made in blender. Made in collaberation with <a className='portfolio__link--1' href="https://www.linkedin.com/in/dond/">Don Do</a>. Play it yourself: <a href="https://github.com/JeffreyAes/unity_project/releases" className="portfolio__link--1">Corpse Puncher</a> </p>
                                        <h3 className="heading-tertiary heading-tertiary--2 u-center-text u-margin-bottom-small">
                                            Technologies Used
                                        </h3>
                                        <p className="paragraph u-center-text">C# - Unity - Blender</p>
                                        <div className="portfolio__container">
                                            <iframe className="portfolio__project-video " src="https://www.youtube.com/embed/-0Vs1TVYbOs" title="Corpse Puncher Video Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>
                                            <a className="portfolio__project-btn" href="https://github.com/JeffreyAes/unity_project" target="_blank">Source Code</a>
                                        </div>
                                    </li>
                                    : ""}
                                {active === 2 ?
                                    <li className="portfolio__slide">
                                        <h3 className="heading-tertiary heading-tertiary--2 u-center-text u-margin-bottom-small">
                                            Umbrella Man Website
                                        </h3>
                                        <p className="paragraph u-center-text">This is a website I made for the industrial rock band "umbrella man" fans can access official information about the band, see news, subscribe to a newsletter, watch music videos, and buy merchandise on the store page. This was my first opprutunity working with a client and I learned a lot from the experience.being communititive, dependable, and reliable are key factors to success.</p>
                                        <h3 className="heading-tertiary heading-tertiary--2 u-center-text u-margin-bottom-small">
                                            Technologies Used
                                        </h3>
                                        <p className="paragraph u-center-text">C# - ASP.NET Core - SASS - Stripe API  </p>
                                    </li>
                                    : ""}
                            </ul>
                        </div>

                    </section>

                </div>

            </div>
            <div className="portfolio__btn">

                <button onClick={handleClickminus} className="arrow-button arrow-button__left portfolio__btn-prev " data-carousel-button="prev" ></button>
                <div className="">

                    <button className="portfolio__select" id='0' onClick={() => { handleSelect(0) }}></button>
                    <button className="portfolio__select" id='1' onClick={() => { handleSelect(1) }}></button>
                    <button className="portfolio__select" id='2' onClick={() => { handleSelect(2) }}></button>
                </div>
                <button onClick={handleClickPlus} className="arrow-button arrow-button__right portfolio__btn-next" data-carousel-button="next" ></button>
            </div>
        </section>
    )
}

export default Portfolio