import React, {FC} from 'react';
import {DEFAULT_PAGE_TITLE, MainLayout} from "../../components/MainLayout/MainLayout";

const Favorite: FC = () => {
    return (
        <MainLayout title={DEFAULT_PAGE_TITLE + " | Избранное"}>
            <div>
                FAVORITE
            </div>
        </MainLayout>
    );
};

export default Favorite
