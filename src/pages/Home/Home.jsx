import Banner from "./Banner/Banner";
import BecomeGuide from "./BecomeGuide/BecomeGuide";
import Guide from "./Guide/Guide";
import Partnership from "./Partnership/Partnership";

const Home = () => {
    return (
        <div>
            <Banner />
            <img src="/public/influence-bg.jpg" alt="" />
            <Guide />
            <Partnership />
            <BecomeGuide />
        </div>
    );
};

export default Home;