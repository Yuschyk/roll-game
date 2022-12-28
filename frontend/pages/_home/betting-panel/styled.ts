import styled from '@emotion/styled';


export const OuterWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.div``;

export const BettingPanelWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  background: #252628;
  border: 2px solid rgba(255, 255, 255, 0.03);
  border-radius: 5px;
  height: 46px;
  display: flex;
  align-items: stretch;
  margin-bottom: 7px;
`;


export const BettingFieldWrapper = styled.div`
  position: relative;
  max-width: 175px;
  width: 100%;

  &:before{
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background-image: url("/balanceIcon.svg");
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
  }
`;

export const BettingField = styled.input`
  max-width: 100%;
  width: 100%;
  height: 100%;
  padding-left: 42px;
  border: 0;
  border-right: 2px solid rgba(255, 255, 255, 0.03);
  background-color: transparent;
  outline: none;
  color: #FFFFFF;
  
  &::placeholder{
    color: #575757;
  }
`;

export const BettingSuggestions = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 15px;
`;

export const SuggestionItem = styled.div`
    padding: 4px 6px;
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.03);
    border-radius: 3px;
    transition: 0.2s;
    text-transform: uppercase;
      cursor: pointer;
  
  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
`;

export const ErrorMessage = styled.div`
  color: #D42626;
  text-align: center;
  font-weight: 400;
  font-size: 13px;
`;
