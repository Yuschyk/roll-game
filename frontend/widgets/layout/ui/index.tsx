import React, {FC} from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import {LayoutProps} from "./types";
import {Content, Wrapper} from "./styled";
import {Chat} from "../../../features/chat";


export const Layout:FC<LayoutProps> = ({ children }):JSX.Element => (
    <Wrapper>
        <Header />
        <Content>
            <Chat />
            {children}
        </Content>
        <Footer />
    </Wrapper>
)
