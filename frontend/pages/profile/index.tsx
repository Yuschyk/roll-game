import React, {ReactElement} from 'react';


import {Profile, ProfileLayout} from '../../src/pages/profile';
import {NextPageWithLayout} from "../_app";


const ProfilePage:NextPageWithLayout = ():JSX.Element => (
  <Profile />
);

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <ProfileLayout>
            {page}
        </ProfileLayout>
    );
};

export default ProfilePage;
