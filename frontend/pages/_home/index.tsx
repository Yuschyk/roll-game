import React, { FC } from 'react';

import { Layout } from '../../widgets/layout';
import { BettingPanel } from './betting-panel';
import { PreviousRolls } from './previous-rolls';
import { Roulette } from './roulette';


const Home:FC = ():JSX.Element => (
  <Layout>
    <Roulette />
    <PreviousRolls />
    <BettingPanel />
  </Layout>
);

export default Home;
