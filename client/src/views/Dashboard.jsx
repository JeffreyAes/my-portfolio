const Dashboard = (props) => {

    return (
        <div className="home" id="home">
            <div className="navigation">

            </div>
            <header className="header" id="header">
                <div className="header__text-box">
                    <h1 className="heading-primary">

                        <span className="heading-primary--main">Jeffrey Aeschliman</span>
                        <span className="heading-primary--sub">Full Stack Developer</span>
                    </h1>

                    <a href="#section-about" className="btn btn--arrow">&nabla;</a>
                </div>

            </header>

            <main>
                <div className="section-about" id="section-about">
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
                </div>

                <section className="section-skills" id="section-skills">
                    <div className="skills">
                    <div className="u-center-text u-margin-bottom-big" >
                        <h2 className="skills__heading">
                            My skills
                        </h2>
                    </div>
                        <div className="skills__box">
                            <a className="skills__box--link" href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> </a>
                            <a className="skills__box--link" href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" /> </a>
                            <a className="skills__box--link" href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" /> </a>
                            <a className="skills__box--link" href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="c#" /> </a>
                            <a className="skills__box--link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" /> </a>
                            <a className="skills__box--link" href="https://www.python.org" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" /> </a>
                            <a className="skills__box--link" href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> </a>
                            <a className="skills__box--link" href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="dotnet core" /> </a>
                            <a className="skills__box--link" href="https://nodejs.org" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" /> </a>
                            <a className="skills__box--link" href="https://expressjs.com" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" /> </a>
                            <a className="skills__box--link" href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" /> </a>
                            <a className="skills__box--link" href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" /> </a>
                            <a className="skills__box--link" href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" /> </a>
                            <a className="skills__box--link" href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" /> </a>
                            <a className="skills__box--link" href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" /> </a>
                            <a className="skills__box--link" href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" /> </a>
                            <a className="skills__box--link" href="https://postman.com" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" /> </a>
                            <a className="skills__box--link" href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" /> </a>
                            <a className="skills__box--link" href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" /> </a>
                            <a className="skills__box--link" href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" /> </a>
                            <a className="skills__box--link" href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" /> </a>
                            <a className="skills__box--link" href="https://unity.com/" target="_blank" rel="noreferrer"> <img className="skills__box--img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg" alt="Unity" /> </a>
                        </div>

                    </div>

                </section>
            </main>
        </div>
    )
}
export default Dashboard;

