const Dashboard = (props) => {

    return (
        <div className="home">
            <div className="navigation">

            </div>
            <header class="header">
                <div class="header__text-box">
                    <h1 class="heading-primary">

                        <span class="heading-primary--main">Jeffrey Aeschliman</span>
                        <span class="heading-primary--sub">Full Stack Developer</span>
                    </h1>

                    <a href="#section-about" class="btn btn--arrow">&nabla;</a>
                </div>

            </header>

            <main>
                <div className="section-about" >
                    <div class="u-center-text u-margin-bottom-big" >
                        <h2 class="heading-secondary">
                            About me
                        </h2>
                    </div>

                    <div class="row" id="section-about">
                        <div class="col-1-of-2">
                            <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Fugit illum, minus at, a inventore, nihil facilis quo aliquam et sit minima
                                incidunt eaque odio quasi sapiente id.
                            </p>
                        </div>
                        <div class="col-1-of-2">

                            <h3 class="heading-tertiary u-margin-bottom-small">Live adventurous like you never have before.</h3>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Fugit illum, minus at, a inventore, nihil facilis quo aliquam et sit minima
                                incidunt.
                            </p>

                            <a href="#" class="btn-text">Learn more &rarr;</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Dashboard;

