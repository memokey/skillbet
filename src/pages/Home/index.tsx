import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import { SmallButton } from "../../components/Common/Buttons";
import { GeneralModal } from "../../components/Common/Modals";
import Input from "../../components/Common/Forms/Input";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [betAmount, setBetAmount] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
              caption={"Try to wager"}
              value={betAmount}
              setValue={setBetAmount}
              disabled={false}
            />
          }
          onClose={() => {
            setModalOpen(false);
          }}
          onConfirm={() => {
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