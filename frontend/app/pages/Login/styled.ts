import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OuterFormWrapper = styled.div`
  max-width: 430px;
  width: 100%;
`;

export const InnerFormWrapper = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.04204);
  border-radius: 3px;
  padding: 54px 45px 45px 45px;
`;

export const FormTitle = styled.div`
  font-size: 28px;
  color: #202002;
  text-align: center;
  margin-bottom: 7px;
`;

export const FormSubtitle = styled.div`
  font-weight: 300;
  font-size: 18px;
  color: #202002;
  opacity: 0.5;
  text-align: center;
  margin-bottom: 50px;
`;
