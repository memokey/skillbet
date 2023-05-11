import React, { useState } from 'react'

import { SmallButton } from '../../../components/Common/Buttons'
import { WEEK_GAMES } from '../../../data'

export type BettingBannerType = {
    title: string
    backgroundImage: string
    content: any
    index?: number
    button?: string
    path?: string
}

const BettingBanner = (props: BettingBannerType) => {
    const [active, setActive] = useState(0);
    const gotoPath = () => {
    }

    return (
        <div className="relative min-h-[354px] rounded-[20px]">
            <img
                src={props.backgroundImage}
                className="min-h-[354px] rounded-[20px]"
                alt={props.title}
            />
            <div
                className={` absolute rounded-[20px] top-4 md:top-4 left-6 px-[24px] md:px-[24px] w-[200px] md:w-[405px] pt-[20px] pb-7 text-left rounded-[]`}
            >
                <h2 className="text-[40px] font-[700] text-white pb-4">
                    {props.title}
                </h2>
                <p
                    className={`text-[15px] font-[500] text-[#A29999] ${
                        props.button ? 'pb-4' : 'pb-12'
                    }`}
                >
                    {props.content}
                </p>
                {props.button && (
                    <SmallButton caption={props.button} onClick={gotoPath} />
                )}
                <div className='mt-[16px] text-[20px] font-[500] text-white pb-4'>
                  <h3>Games of the week:</h3>
                  <div className='flex gap-[20px]'>
                    {WEEK_GAMES.map((game, index) => (
                      <div key={index} className={`${index == active ? 'border-[4px] border-primary': ''} rounded-[25px] w-[64px] h-[64px]`}>
                        <img src={game.bgImg} className='rounded-[25px]' width={64} height={64}/>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    )
}

export default BettingBanner
