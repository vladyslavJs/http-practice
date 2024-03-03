import { useEffect, useRef } from "react";

export const Timer = () => {
    const intervalId = useRef();

    useEffect(() => {
        //Робимо змінну, intervalId
        intervalId.current = setInterval(() => {
            console.log(Date.now());
        }, 1000);

        //Потім зактдуємо її в метод clearInterval і повертаємо
        //Таким чином зупиняємо наший інтервал,
        return () => {
            clearInterval(intervalId.current);
         }
    }, []);

    const stopInterval = () => {
        clearInterval(intervalId.current)
    }

    return (
        <div>
            <button onClick={stopInterval}>Stop Interval</button>
        </div>
    );
}

export default Timer;


//useRef використовується в більшості кейсів аби імітувати querySelector, 
// для того аби зберегти якесь значення, між оновленими компонентами 