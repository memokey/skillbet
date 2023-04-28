import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Layout from "../../components/Layout";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import { SmallButton } from "../../components/Common/Buttons";
import { GeneralModal } from "../../components/Common/Modals";
import Input from "../../components/Common/Forms/Input";
import { useEffect, useState } from "react";
import ACTIONS from '../../config/actions';
import { setLeaderboard } from "../../redux/slices/tetrisSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [betAmount, setBetAmount] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('betAmount', betAmount);
  }, [betAmount])

  const initSocket = () => {
    // This part is main for socket.
    if (!(window as any).socket) {
        setTimeout(() => {
          initSocket()
        }, 10)
        return
    }

    if (!(window as any).listen) {
      (window as any).socket.on('send-leaderboard', (data) => {
        dispatch(setLeaderboard(data))
      });
      (window as any).listen = true
    }
  }

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
            initSocket();
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