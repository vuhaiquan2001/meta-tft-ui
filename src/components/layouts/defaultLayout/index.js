import React from 'react';
import Footer from '../../footer';
import PageHeader from '../../pageheader';

function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col items-center">
            <PageHeader />
            <div className="flex flex-col w-full items-center justify-center">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
