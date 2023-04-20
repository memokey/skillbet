import React, { useContext } from "react";
import { 
  WalletConnectButton, 
  SeiWalletContext, 
  useWallet
} from "@sei-js/react";
import Layout from "../../components/Layout";
import ExploreBanner from "../../components/Explore/ExploreBanner";

const Home = () => {
  const { 
    supportedWallets, 
    connect, 
    disconnect, 
    installedWallets 
  } = useContext(SeiWalletContext);
  const { connectedWallet, offlineSigner, accounts } = useWallet();
  return (
    <Layout
      banner={<ExploreBanner />}
    >
      <div></div>
    </Layout>
  );
}
export default Home;