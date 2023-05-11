import { LeaderItemType } from "../components/Betting/LeaderItem";
import { DetailedLeaderItemType } from "../components/Betting/ListItem";
import { MenuItemType } from "../components/Common/Menus/GeneralMenu";
import { SliderType } from "../components/Explore/BannerSlide"

export const SEASON_MENUITEMS: MenuItemType[] = [
    {
        title: 'Season1',
        lockFlag: false,
    },
    {
        title: 'Season2',
        lockFlag: true,
    }
];

export const LEADERBOARD_MENUITEMS: MenuItemType[] = [
    {
        title: '3 way',
        lockFlag: false,
    },
    {
        title: 'Double change',
        lockFlag: false,
    },
    {
        title: 'Both teams',
        lockFlag: false,
    }
];

export const GAME_MENU_ITEMS: MenuItemType[] = [
    {
        title: 'All Matches',
        lockFlag: false,
    },
    {
        title: 'P2P',
        lockFlag: false,
    },
    {
        title: 'P2Pool',
        lockFlag: false,
    }
];

export const DETAILED_LEADER_ITEMS: DetailedLeaderItemType[] = [
    {
        date: '28 Aug',
        time: '01:58',
        walletAddress: 'Monke2',
        avatarUrl: '/images/betting/bepplee.png',
        score: 1244,
        amount: '155Sei',
        betName: 'Ranked #1414',
        rank: 10,
        gameAvatar: '/images/betting/tetris.png',
        timeAge: '15 seconds ago',
    },
    {
        date: '28 Aug',
        time: '01:58',
        walletAddress: 'Monke2',
        avatarUrl: '/images/betting/bepplee.png',
        score: 1244,
        amount: '155Sei',
        betName: 'Ranked #1414',
        rank: 10,
        gameAvatar: '/images/betting/tetris.png',
        timeAge: '15 seconds ago',
    },
    {
        date: '28 Aug',
        time: '01:58',
        walletAddress: 'Monke2',
        avatarUrl: '/images/betting/bepplee.png',
        score: 1244,
        amount: '155Sei',
        betName: 'Ranked #1414',
        rank: 10,
        gameAvatar: '/images/betting/tetris.png',
        timeAge: '15 seconds ago',
    },
    {
        date: '28 Aug',
        time: '01:58',
        walletAddress: 'Monke2',
        avatarUrl: '/images/betting/bepplee.png',
        score: 1244,
        amount: '155Sei',
        betName: 'Ranked #1414',
        rank: 10,
        gameAvatar: '/images/betting/tetris.png',
        timeAge: '15 seconds ago',
    },
    {
        date: '28 Aug',
        time: '01:58',
        walletAddress: 'Monke2',
        avatarUrl: '/images/betting/bepplee.png',
        score: 1244,
        amount: '155Sei',
        betName: 'Ranked #1414',
        rank: 10,
        gameAvatar: '/images/betting/tetris.png',
        timeAge: '15 seconds ago',
    },
    {
        date: '28 Aug',
        time: '01:58',
        walletAddress: 'Monke2',
        avatarUrl: '/images/betting/bepplee.png',
        score: 1244,
        amount: '155Sei',
        betName: 'Ranked #1414',
        rank: 10,
        gameAvatar: '/images/betting/tetris.png',
        timeAge: '15 seconds ago',
    },
    {
        date: '28 Aug',
        time: '01:58',
        walletAddress: 'Monke2',
        avatarUrl: '/images/betting/bepplee.png',
        score: 1244,
        amount: '155Sei',
        betName: 'Ranked #1414',
        rank: 10,
        gameAvatar: '/images/betting/tetris.png',
        timeAge: '15 seconds ago',
    },
];

export const LEADER_ITEMS: LeaderItemType[] = [
    {
        avatarUrl: '/images/betting/avatars/avatar1.png',
        name: 'Gigia',
        score: 24242,
        no: 1,
    },
    {
        avatarUrl: '/images/betting/avatars/avatar2.png',
        name: 'Gigia',
        score: 12341,
        no: 2,
    },
    {
        avatarUrl: '/images/betting/avatars/avatar3.png',
        name: 'Gigia',
        score: 4141,
        no: 3,
    },
    {
        avatarUrl: '/images/betting/avatars/general.png',
        name: 'Gigia',
        score: 12341,
        no: 4,
    },
    {
        avatarUrl: '/images/betting/avatars/general.png',
        name: 'Gigia',
        score: 4141,
        no: 5,
    },
    {
        avatarUrl: '/images/betting/avatars/general.png',
        name: 'Gigia',
        score: 12341,
        no: 6,
    }
];

export const WEEK_GAMES = [
    {
        bgImg: "/images/betting/week/game1.png",
    },
    {
        bgImg: "/images/betting/week/game2.png",
    },
    {
        bgImg: "/images/betting/week/game3.png",
    },
    {
        bgImg: "/images/betting/week/game4.png",
    },
];

export const HeaderMenuTitles = [
  {
      name: 'Explore',
      link: 'explore',
  },
  {
      name: 'Marketplace',
      link: 'marketplace',
  },
  {
      name: 'Communities',
      link: 'community',
  },
  {
      name: 'Live now',
      link: 'experience',
  },
  {
      name: 'Games',
      link: 'games',
  },
  {
      name: 'Quests',
      link: 'quests',
  }
]

export const EXPLORE_BANNER_SLIDES: SliderType[] = [
    {
        title: 'WorldWideWebb',
        backgroundImage: '/images/community/backs/webb.jpeg',
        content: (
            <div>
                Worldwide Webb is an interoperable pixel art MMORPG metaverse
                game giving utility to popular NFT projects. The game uses NFTs
                for in-game avatars, pets, lands, NFT Items , and quests.
            </div>
        ),
        button: 'Launch Now',
        path: 'https://webb.game/',
    },
    {
        title: 'DoubleJump',
        backgroundImage: '/images/community/backs/DoubleJump.png',
        content: (
            <div>
                Double Jump is the first race-to-finish, platform-royale game on
                Solana! Race in a mad dash against other Jumpers across the
                world to reach the finish line first.
            </div>
        ),
        button: 'Launch Now',
        path: 'https://theportal.to/',
    },
    {
        title: 'AaveGotchi',
        backgroundImage: '/images/community/backs/Aave.gif',
        content: (
            <div>
                A yield-generating NFT that doubles as a digital pet. Take care
                of them, and they’ll take care of you ^_^
            </div>
        ),
        button: 'Launch Now',
        path: 'https://ev.io',
    },
    {
        title: 'OnCyber',
        backgroundImage: '/images/community/backs/Oncyber.png',
        content: (
            <div>
                A multiverse for creators, oncyber is the easiest way for
                artists and collectors to show their digital assets (NFTs) in
                fully immersive experiences (3D/VR), for free. Holding an item
                from any of these collections allows you to use it as a 3D
                exhibition space.
            </div>
        ),
        button: 'Launch Now',
        path: 'https://miniroyale.io',
    },
    {
        title: 'Decentraland',
        backgroundImage: '/images/community/backs/Dece.png',
        content: (
            <div>
                Decentraland is an Ethereum blockchain-powered virtual world,
                developed and owned by its users, who can create, experience,
                and monetize content and applications. Join a growing community
                of virtual world inhabitants.
            </div>
        ),
        button: 'Launch Now',
        path: 'https://home.panzerdogs.io/',
    },
]