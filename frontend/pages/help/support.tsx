import React, { ReactElement} from 'react';
import {NextPageWithLayout} from "../_app";
import {HelpLayout} from "../../src/pages/help";
import {Support} from "../../src/pages/help/support";


const SupportPage:NextPageWithLayout = ():JSX.Element => (
    <Support />
);

SupportPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <HelpLayout>
            {page}
        </HelpLayout>
    );
};

export default SupportPage;
