import { useState } from 'react';

function useModal() {
    const [isShowing, setIsShowing] = useState(false);

    function setShow() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        setShow,
    };
}

export default useModal;
