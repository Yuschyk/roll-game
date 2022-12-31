import React, {FC} from "react";
import {MenuItem, MenuWrapper} from "./styled";


export const Menu:FC = ():JSX.Element => (
    <MenuWrapper>
        <MenuItem>
            ПОМОЩЬ
        </MenuItem>
        <MenuItem>
            КОНТАКТЫ
        </MenuItem>
        <MenuItem>
            ЧЕСТНОСТЬ
        </MenuItem>

    </MenuWrapper>
)
