import styled from "@emotion/styled";
import {TextField} from "@mui/material";

export const CustomizedInput = styled(TextField)`
  max-width: 100%;
  width: 100%;
  margin-bottom: 15px;
  
  &:last-child{
    margin-bottom: 25px;
  }
`;
