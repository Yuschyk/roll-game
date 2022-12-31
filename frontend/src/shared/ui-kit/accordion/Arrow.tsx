import React, {FC} from "react";
import styled from "@emotion/styled";


type TArrow = {
    isOpen: boolean;
}


const StyledSvg = styled.svg<TArrow>`
  transform: rotate(${({isOpen}) => isOpen ? '180deg' : 0});
  transition: 0.2s;
`;

export const Arrow:FC<TArrow> = ({isOpen}):JSX.Element => (
    <StyledSvg
        isOpen={isOpen}
        width="24"
        height="14"
        viewBox="0 0 24 14"
        fill="none"
    >
        <path d="M10.9393 0.93934C11.5251 0.353553 12.4749 0.353553 13.0607 0.93934L22.6066 10.4853C23.1924 11.0711 23.1924 12.0208 22.6066 12.6066C22.0208 13.1924 21.0711 13.1924 20.4853 12.6066L12 4.12132L3.51472 12.6066C2.92893 13.1924 1.97919 13.1924 1.3934 12.6066C0.807611 12.0208 0.807611 11.0711 1.3934 10.4853L10.9393 0.93934ZM10.5 3V2H13.5V3H10.5Z" fill="#404040"/>
    </StyledSvg>

)
