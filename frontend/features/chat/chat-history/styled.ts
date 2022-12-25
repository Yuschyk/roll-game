import styled from "@emotion/styled";


export const Wrapper = styled.div`
  height: 690px;
  position: relative;
  background: #212121;
  border-radius: 5px;
  overflow: auto;
  

  &:before {
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #212121 20.24%, rgba(28, 31, 36, 0) 113.1%);
    
  }
`;
