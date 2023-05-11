import React from "react";

type BorderPanelType = {
  children: any;
  style?: string;
}

const BorderPanel = (props: BorderPanelType) => {
  return (
    <div className={`w-full bg-[#1F1F20] border border-[#919191] rounded-[40px] p-[20px] ${props.style? props.style: ''}`}>
      {props.children}
    </div>
  )
}

export default BorderPanel;