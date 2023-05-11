import React from "react";
import { BorderPanel, GeneralPanel } from "../../components/Common/Panels";
import BettingBanner from "../../components/Betting/BettingBanner";
import { LeftArrow, RightArrow } from "../../components/Icons";
import Switch from "../../components/Betting/Switch";
import GeneralMenu from "../../components/Common/Menus/GeneralMenu";
import { DETAILED_LEADER_ITEMS, GAME_MENU_ITEMS, LEADERBOARD_MENUITEMS, LEADER_ITEMS, SEASON_MENUITEMS } from "../../data";
import LeaderItem from "../../components/Betting/LeaderItem";
import LeaderList from "../../components/Betting/LeaderList";
import ListItem from "../../components/Betting/ListItem";

const Betting = () => {
  return (
    <div className="grid grid-cols-17 gap-[30px] mx-[80px] mt-[100px] text-white">
      <div className="col-span-12">
        <GeneralPanel>
          <BettingBanner 
            title={'T3tris is here!'}
            backgroundImage={'/images/betting/banner1.jpg'}
            content={'Damage with Legendary Weapons. Play now to earn infinite rewards, and claim your airdrop!'}
            button={'Launch Now'}
          />
          <Switch
              onLeftArrowClick={() => {}}
              onRightArrowClick={() => {}}
          />
          <BorderPanel style="mt-[60px] p-0 pt-">
            <div className="w-full h-[40px] bg-[#272829] rounded-t-[40px]">
              <div className="flex gap-8 text-[14px] pt-[10px] pl-[40px]">
                <div className="text-white">Last Games</div>
                <div className="text-white opacity-60">Launch Game</div>
              </div>
            </div>
            <div className="p-4 pb-5 w-full">
              <GeneralMenu menuItems={GAME_MENU_ITEMS}/>
              <ul className="w-full mt-4">
                {DETAILED_LEADER_ITEMS.map((item, index) => (
                  <ListItem key={index} {...item} />
                ))}
              </ul>
            </div>
          </BorderPanel>
          <h1 className="text-[16px] font-500 text-white pt-4">Possible Bettings</h1>
          <div className="flex gap-[20px] overflow-x-hidden">
            {[1,2,1,2,2].map((item, index) => (
              <img key={index} src={`/images/betting/b${item}.png`} alt="betting" width={229} height={211} className="w-[229px] h-[211px]" />
            ))}
          </div>
        </GeneralPanel>
      </div>
      <div className="col-span-5">
        <GeneralPanel>
          <BorderPanel>
            <h1 className="text-[20px] text-white">
              Reward Pool
            </h1>
            <GeneralMenu menuItems={SEASON_MENUITEMS}/>
            <div className="bg-[#272829] border border-[#787878] rounded-[12px] mt-[20px] p-[20px]">
              <h2 className="text-[15px] font-500 text-white">
                The SEI Battle Pass
              </h2>
              <p className="text-[14px] font-500 text-white opacity-60 pb-4">
                Go to your profile, complete your quests and get access to the SEI Battle Pass, get loot boxes and win NFTs and Tokens from all the ecosystem! Unlocked on Mainnet 
              </p>
              <img src={'/images/betting/season.png'} className="rounded-[20px]" width={370} height={129}/>
            </div>
          </BorderPanel>
          <BorderPanel style="mt-[18px] relative">
            <div className="flex justify-center">
              <div className="absolute top-[8px] text-[#DDDDDD] bg-[#696969] rounded-[5px] text-[15px] font-500 w-[70px] text-center">FREE</div>
              <div className="flex gap-2 mt-[24px]">
                <div className="">
                  <p>
                    <span className="text-[14px] font-400 text-white">Return everyday to claim your</span><br />
                    <span className="text-[30px] font-700 text-white">GameID NFT</span></p>
                </div>
                <div className="">
                  <img src="/images/betting/passport.png" alt="passport" width={132} height={111} className="w-[110px] h-[80px]" />
                </div>
              </div>
            </div>
          </BorderPanel>
          <BorderPanel style="mt-[18px] ">
            <h1 className="text-[20px] text-white">
              Leaderboard
            </h1>
            <GeneralMenu menuItems={LEADERBOARD_MENUITEMS}/>
            <div className="flex pt-[20px] gap-[24px] mb-2">
              {LEADER_ITEMS.slice(0, 3).map((leaderItem, index) => (
                <LeaderItem key={index} {...leaderItem}/>
              ))}
            </div>
            {LEADER_ITEMS.length > 3 && (
              <div className="mt-[28px]">
                <h2>Last Matches</h2>
                  <LeaderList items={LEADER_ITEMS.slice(3, LEADER_ITEMS.length)} />
              </div>
            )}
            <button className="w-full text-[20px] font-500 text-[#FFFFFF] py-[8px] opacity-60 rounded-[5px]" 
              style={{background: 'linear-gradient(90deg, rgba(22, 128, 60, 0.5) 0%, #87EEAB 100%)'}}
            >Place bet</button>
          </BorderPanel>
        </GeneralPanel>
      </div>
    </div>
  );
}

export default Betting;