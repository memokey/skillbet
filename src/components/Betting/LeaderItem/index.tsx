import React from "react";

export type LeaderItemType = {
  avatarUrl: string;
  no: number;
  name: string;
  score: number;
}

const LeaderItem = (props: LeaderItemType) => {
  return (
    <div className={`${props.no % 2 == 0 ? 'mt-[10px]': ''} bg-[#272829] border border-[#787878] rounded-[5px] w-[103px] h-[104px] mt-[35px]`}>
      <div className="rounded-full">
        <div className="flex justify-center mt-[-28px] mb-[6px]">
          <img src={props.avatarUrl} alt="avatar" width={56} height={56} className="rounded-full w-[56px] h-[56px]" />
        </div>
        <div className="text-[14px] text-[#B2B2B2] font-500 flex justify-center">{props.name}</div>
        <div className="text-[18px] text-white font-700 flex justify-center">{props.score}</div>
        <div className="flex justify-center">
          <div className="mt-[10px] border border-[#406C13] text-[#F9F9F9] text-[14px] rounded-[5px] px-[19px] py-[6px]" style={{background: 'linear-gradient(90deg, #16803C 0%, #59C17E 100%)'}}>
            #{props.no}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderItem;