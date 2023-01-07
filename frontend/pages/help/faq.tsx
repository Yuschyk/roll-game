import React, { ReactElement } from 'react';

import { HelpLayout } from "../../src/pages/help";
import {NextPageWithLayout} from "../_app";
import { Faq } from "../../src/pages/help/faq";

const FaqPage:NextPageWithLayout = ():JSX.Element => (
    <Faq/>
);

FaqPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <HelpLayout>
            {page}
        </HelpLayout>
    );
};

export default FaqPage;
