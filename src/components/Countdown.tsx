import * as React from "react";

const Countdown = ({start}:{start: number}) => {
    const [time,setTime] = React.useState(start);
    React.useEffect(() => {
        let sig: NodeJS.Timeout;
        sig = setInterval(() => setTime(time - 100),100);
        return () => clearInterval(sig);
    });
    return <h4>{time}</h4>;
}

export default Countdown;