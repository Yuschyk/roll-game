import React, { FC } from 'react';

import { RouletteItem } from './roulette-item';
import { LeftRouletteBlur, RightRouletteBlur, RouletteLine, Wrapper } from './styled';


export const Roulette:FC = ():JSX.Element => (
  <Wrapper>
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />
    <RouletteItem />


    <LeftRouletteBlur />
    <RightRouletteBlur />
    <RouletteLine />
  </Wrapper>
);
