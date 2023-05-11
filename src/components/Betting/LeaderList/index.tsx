import React from "react";
import { LeaderItemType } from "../LeaderItem";
import LeaderListItem from "./LeaderListItem";

type LeaderListType = {
  items: LeaderItemType[];
}

const LeaderList = (props: LeaderListType) => {
  return (
    <ul className="w-full">
        {props.items.map((item, index) => (
          <LeaderListItem key={index} {...item} />
        ))}
    </ul>
  );
}

export default LeaderList;