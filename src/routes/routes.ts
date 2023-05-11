import { RouteProps } from 'react-router-dom';
import Home from '../pages/Home';
import Tetris from '../pages/Tetris';
import Betting from '../pages/Betting';

const routes: RouteProps[] = [
  {
    Component: Home,
    path: '/',
  },
  {
    Component: Tetris,
    path: '/tetris',
  },
  {
    Component: Betting,
    path: '/betting',
  }
];

export default routes;