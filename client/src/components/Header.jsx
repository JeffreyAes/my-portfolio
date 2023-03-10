const Header = (props) => {
    return (
        <header className="header" id="header">
        <div className="header__text-box">
            <h1 className="heading-primary">

                <span className="heading-primary--main">Jeffrey Aeschliman</span>
                <span className="heading-primary--sub">Full Stack Developer</span>
            </h1>

            <a href="#section-about" className="btn btn--arrow">&nabla;</a>
        </div>

    </header>
    )
}

export default Header