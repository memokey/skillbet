import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import { SmallButton } from "../../components/Common/Buttons";
import { GeneralModal } from "../../components/Common/Modals";
import Input from "../../components/Common/Forms/Input";
import { useEffect, useState } from "react";
import ACTIONS from '../../config/actions';

const Home = () => {
  const navigate = useNavigate();
  const [betAmount, setBetAmount] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('betAmount', betAmount);
  }, [betAmount])

  return (
    <Layout
      banner={
        <ExploreBanner />
      }
    >
      <div className="">
        <GeneralModal 
          open={modalOpen}
          title="Start a new game"
          content={
            <Input
              caption={"Input your name"}
              value={betAmount}
              setValue={setBetAmount}
              disabled={false}
            />
          }
          onClose={() => {
            setModalOpen(false);
          }}
          onConfirm={() => {
            (window as any).socket.emit('get-leaderboard', {});
            navigate('/tetris');
          }}
        />
        <SmallButton 
          caption="Start a Game"
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>
    </Layout>
  );
}
export default Home;