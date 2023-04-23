import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import Tetris from '../../components/Tetris';
import StartPage from "../../components/Tetris/StartPage";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout
      banner={<></>}
    >
      <div className="bg-[#131314]">
        <ExploreBanner />
        <StartPage 
          startClick={() => {
            navigate('/tetris');
          }}
        />
      </div>
    </Layout>
  );
}
export default Home;