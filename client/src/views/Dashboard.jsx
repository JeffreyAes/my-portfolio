import About from "../components/About";
import Header from "../components/Header";
import Skills from "../components/Skills";
const Dashboard = (props) => {

    return (
        <div className="home" id="home">
            <section className="navigation">

            </section>
            <Header />
            <main>
                <About />
                <Skills />
                
            </main>
        </div>
    )
}
export default Dashboard;

