import { useEffect, useState } from "react"

const UseHookType1 = () => {

    const [time, setTime] = useState(new Date().toUTCString());
    // const [count, setCount] = useState(0);
    // const [total, setTotal] = useState(0);
    // useEffect(() => {
    //     console.log(" will run on only 1st time when component is mounted ");
    // }, []) // empty array as dependency

    // useEffect(() => {
    //     console.log(" will run on every render ");
    // })

    // useEffect(() => {
    //     console.log(" will run when count increments ");
    // },[count]);

    // useEffect(() => {
    //     console.log(" will run when count increments ");
    // },[count,total]);

    useEffect(() => {

        console.log("component mounted (clock started)!");
        let clock = start();

        return () => {
            console.log("component unmounted (clock stopped) ");
            stopClock(clock);
        }

    }, [])

    function start() {
        return setInterval(() => {
            setTime(new Date().toUTCString())
        }, 1000);
    }
    function stopClock(clock) {
        clearInterval(clock);
    }
    // function reset()
    // {

    // }

    // function updateCount() {
    //     setCount(count + 1);
    // }
    return (
        <>
            {/* <h1 className="text-center">Count: {count}     total : {total}</h1>
            <div className="flex justify-center">
                <button onClick={updateCount} className="btn btn-primary">increment count</button> &nbsp;
                <button onClick={() => setTotal(total + 1)} className="btn btn-secondary">increment total </button>
            </div> */}
            <h1 className="text-center">{time}</h1>
            <div className="flex justify-center">
                {/* <button onClick={start} className="btn btn-primary">start</button> &nbsp;
                <button onClick={stopClock} className="btn btn-secondary">stop</button>
                <button onClick={reset} className="btn btn-warning">reset</button> */}
            </div>
        </>
    )
}

export default UseHookType1

// import { useEffect, useState } from "react";

// const UseHookType1 = () => {
//   const [time, setTime] = useState(0); // Stopwatch time in seconds
//   const [isRunning, setIsRunning] = useState(false); // Track if the stopwatch is running

//   useEffect(() => {
//     let timer;

//     if (isRunning) {
//       timer = setInterval(() => {
//         setTime(prevTime => prevTime + 1); // Increment time every second
//       }, 1000);
//     }

//     // Cleanup interval on component unmount or when `isRunning` changes
//     return () => {
//       clearInterval(timer);
//     };
//   }, [isRunning]);

//   const start = () => {
//     setIsRunning(true);
//   };

//   const stop = () => {
//     setIsRunning(false);
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setTime(0); // Reset time to 0
//   };

//   const formatTime = () => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//   };

//   return (
//     <>
//       <h1 className="text-center">{formatTime()}</h1>
//       <div className="flex justify-center">
//         <button onClick={start} className="btn btn-primary">Start</button> &nbsp;
//         <button onClick={stop} className="btn btn-secondary">Stop</button> &nbsp;
//         <button onClick={reset} className="btn btn-warning">Reset</button>
//       </div>
//     </>
//   );
// };

// export default UseHookType1;
