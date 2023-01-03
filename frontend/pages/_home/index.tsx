import React from 'react';

import { Layout } from '@widgets';
import { NextPage } from 'next';

import { withAuth } from '../../src/entities/user/model/withAuth';
import { BettingPanel } from './betting-panel';
import { PreviousRolls } from './previous-rolls';
import { Roulette } from './roulette';


const Home:NextPage = ():JSX.Element => (
  <Layout>
    <Roulette />
    <PreviousRolls />
    <BettingPanel />
  </Layout>
);

export default withAuth(Home);
