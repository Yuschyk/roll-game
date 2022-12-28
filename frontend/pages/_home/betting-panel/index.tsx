import React, { FC, useState } from 'react';

import {
  BettingFieldWrapper,
  BettingField,
  InnerWrapper,
  OuterWrapper,
  BettingSuggestions,
  SuggestionItem, ErrorMessage, BettingPanelWrapper,
} from './styled';


export const BettingPanel:FC = ():JSX.Element => {
  const [value, setValue] = useState('');

  return (
    <OuterWrapper>
      <InnerWrapper>
        <BettingPanelWrapper>
          <BettingFieldWrapper>
            <BettingField
              placeholder="Введите сумму..."
            />
          </BettingFieldWrapper>
          <BettingSuggestions>
            <SuggestionItem>
              CLEAR
            </SuggestionItem>
            <SuggestionItem>
              +10
            </SuggestionItem>
            <SuggestionItem>
              +20
            </SuggestionItem>
            <SuggestionItem>
              +50
            </SuggestionItem>
            <SuggestionItem>
              +100
            </SuggestionItem>
            <SuggestionItem>
              +500
            </SuggestionItem>
            <SuggestionItem>
              1/2
            </SuggestionItem>
            <SuggestionItem>
              MAX
            </SuggestionItem>
          </BettingSuggestions>
        </BettingPanelWrapper>

        <ErrorMessage>Недостастаточно кредитов</ErrorMessage>
      </InnerWrapper>
    </OuterWrapper>
  );
};
