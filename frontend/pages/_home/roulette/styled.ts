import styled from '@emotion/styled';


export const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 0;
  overflow: auto;
`;

export const RouletteLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5px;
  height: 100%;
  background: rgba(153, 153, 153, 0.8);
  box-shadow: 0px 4px 38px rgba(196, 54, 78, 0.33);
`;

export const LeftRouletteBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 220px;
  background: linear-gradient(90deg, #1E1E1E 15.71%, rgba(37, 37, 37, 0) 100%);
`;

export const RightRouletteBlur = styled(LeftRouletteBlur)`
  transform: matrix(-1, 0, 0, 1, 0, 0);
  left: unset;
  right: 0;
`;

