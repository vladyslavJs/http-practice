import { useMemo, useState } from "react";

export const UseMemoExample = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    //хук UseMemo використовується аби оптимізувати обчислення, на рендерах де залежності цього обличслення не змінюється
    // UseMemo для обчислень
    // UseEffect для запису в локал сторедж щось, або запустити якийсь http запит!
    const value = useMemo(() => {
        console.log('Calculating value a + b');
        return a + b;
    }, [a, b]);

    return (
        <div>
            <button onClick={() => setA(a + 1)}>update a: {a}</button>
            <button onClick={() => setB(b + 1)}>update b: {b}</button>
            <button onClick={() => setC(c + 1)}>update c: {c}</button>
            <p>value: {value}</p>
        </div>
    );
};

export default UseMemoExample;

