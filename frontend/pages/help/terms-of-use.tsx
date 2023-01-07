import React, { ReactElement} from 'react';
import {HelpLayout} from "../../src/pages/help";
import {NextPageWithLayout} from "../_app";
import {TermsOfUse} from "../../src/pages/help/terms-of-use";


const TermsOfUsePage:NextPageWithLayout = ():JSX.Element => (
    <TermsOfUse />
);

TermsOfUsePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <HelpLayout>
            {page}
        </HelpLayout>
    );
};

export default TermsOfUsePage;
