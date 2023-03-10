import About from "../components/About";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";
const Dashboard = (props) => {

    return (
        <div className="home" id="home">
            <Navigation />
            <Header />
            <main>
                <About />
                <Skills /> 
            </main>
        </div>
    )
}
export default Dashboard;

