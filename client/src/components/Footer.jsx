
const Footer = (props) => {
    
    return (
        <footer class="footer">

        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="https://www.linkedin.com/in/jeffrey-aeschliman-054330253/" class="footer__link">LinkedIn</a></li>
                        <li class="footer__item"><a href="https://github.com/JeffreyAes" class="footer__link">Github</a></li>
                        <li class="footer__item"><a href="https://www.youtube.com/channel/UC6nomRb0o3MvBJCpo8HhL4A" class="footer__link">Youtube</a></li>
                        <li class="footer__item"><a href="mailto:aeschlimanjeffrey@gmail.com" class="footer__link">Email</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright u-center-text">
                © Copyright 2023. Made by  <a href="home" className="footer__link">Jeffrey Aeschliman</a>
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;