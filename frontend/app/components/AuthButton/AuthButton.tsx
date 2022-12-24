import React, {FC} from "react";
import {CustomizedButton} from "./styled";

export const AuthButton:FC = ():JSX.Element => (
    <CustomizedButton
        variant="contained"
        type="submit"
    >
        ВОЙТИ В АККАУНТ
    </CustomizedButton>
)
