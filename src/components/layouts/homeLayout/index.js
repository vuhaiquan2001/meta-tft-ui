import React from 'react';

import Footer from '../../footer';

function HomeLayout({ children }) {
    return (
        <div>
            <div className="flex justify-center w-full">{children}</div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
