import { useState } from 'react';

const useClock = () => {
    const [time, setTime] = useState('')

    // const time = date.toLocaleTimeString();
    // console.log(time)
    const myTimer = () => {
        const date = new Date();
        setTime(date.toLocaleTimeString())
    }
    setInterval(myTimer, 1000);
    return (time);
};

export default useClock;