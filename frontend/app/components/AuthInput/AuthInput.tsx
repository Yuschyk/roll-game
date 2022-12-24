import React, {FC} from "react";
import { CustomizedInput } from "./styled";
import {AuthInputProps} from "./types";

export const AuthInput:FC<AuthInputProps> = ({label, name, type = 'text'}):JSX.Element => (
    <CustomizedInput
        name={name}
        label={label}
        type={type}
        variant="outlined"
    />
)
