import React from "react";
import { LeaderItemType } from "../LeaderItem";

export type DetailedLeaderItemType = {
  date: string;
  time: string;
  walletAddress: string;
  avatarUrl: string;
  score: number;
  amount: string;
  betName: string;
  rank: number;
  gameAvatar: string;
  timeAge: string;
}

const ListItem = (props: DetailedLeaderItemType) => {
  return (
    <li className="text-white text-[14px] font-500 rounded-[5px] border border-[#787878] bg-[#272829] py-[6px] px-[20px] pl-[30px] flex gap-12 items-center mb-2">
      <div className="">
        {props.time}<span>{props.date}</span>
      </div>
      <div>
        {props.walletAddress}
      </div>
      <div className="">
        <div className="w-[34px]">
          <img src={props.avatarUrl} alt="avatar" width={34} height={34} className="rounded-[10px] w-[34px] h-[34px]" />
        </div>
      </div>
      <div className="">
        {props.score}
      </div>
      <div className="text-[14px] font-700">
        {props.amount}
      </div>
      <div className="text-[14px] font-700">
        {props.betName}
      </div>
      <div className="bg-[#29B080] rounded-[8px] text-white text-[14px] font-500 px-2">
        Top {props.rank}%
      </div>
      <div className="">
        <div className="w-[34px]">
          <img src={props.gameAvatar} alt="avatar" width={34} height={34} className="rounded-[10px] w-[34px] h-[34px]" />
        </div>
      </div>
      <div className="text-[14px] font-700">
        {props.timeAge}
      </div>
    </li>
      
  );
}

export default ListItem;