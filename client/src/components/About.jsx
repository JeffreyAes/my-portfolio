const About = (props) => {
    return (
        <section className="section-about" id="section-about">
            <div className="u-center-text u-margin-bottom-big" >
                <h2 className="heading-secondary">
                    Who I am, and what I do
                </h2>
            </div>

            <div className="row" >
                <div className="col-1-of-2 border-round">
                    <h3 className="heading-tertiary u-margin-bottom-small">Who I am</h3>
                    <p className="paragraph">
                        My name is  <a href="#home">Jeffrey Aeschliman</a>, I started my journey as a full stack
                        web-developer at the <a href="https://www.codingdojo.com/">Coding Dojo</a>  which equipped me with the knowledge
                        and skills to solve problems and build full featured projects. On my way
                        I've discovered a passion for learning and sinking deep into new
                        technologies. This love of learning new things brought me to tech, for its constant
                        growth and change.
                    </p>
                    <p className="paragraph">I am looking to hone my skills, contribute, and work and meet
                        with talented people in the industry. Please reach out to me if you are interested working on a project and/or job opportunties.
                    </p>
                    <a href="#section-contact" className="btn-text">contact me</a>
                </div>
                <div className="col-1-of-2 border-round">

                    <h3 className="heading-tertiary u-margin-bottom-small">What I do.</h3>
                    <p className="paragraph">
                        I create full-stack applications from the ground up using multiple
                        Languages, Frameworks, API's, and Libraries, Databases. With these technologies, I can create full CRUD applications that are stable,
                        secure, and stylized for optimal user experience, keeping in consideration different devices and all.
                    </p>

                    <p className="paragraph">
                        In the pursuit of this I've learned how to avoid brevity, write clean/readable code, and overall implement good maintainable practices to avoid getting lost in spaghetti code. Below are a list of my skills.
                    </p>
                    <a href="#section-skills" className="btn-text">my skills</a>
                </div>
            </div>
        </section>
    )
}

export default About