import { useEffect, useRef } from "react";

const formStyle = {
    display: 'grid',
    width: 320,
    gap: 8,
    padding: 8,
    border: '1px solid #000000',
};

export default function RefExample() {
    //Ref спрацьовують тільки після монтування, 
    //а потім можна їх використовувати в UseEffect, і callBack функціях!
    //Ref це аналог querySelector, вони нам потрібні аби робити якісь маніпуляції з DOM, тобто використовувати DOM-властивості і DOM-методи, тому що через React, це зробити неможливо
    //Приклади :
    // const myRef = useRef();
    // console.log(myRef);

    // useEffect(() => {
    //     console.log(myRef);
    // }, []);

    // const handleClick = () => {
    //     console.log(myRef);
    // };
    const formRef = useRef();

    const handleScroll = () => {
        const dims = (formRef.current.getBoundingClientRect());

        window.scrollTo({
            top: dims.top,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div>
                <button
                    onClick={handleScroll}
                >Schedule a coaching session</button>
            </div>

            <div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, ipsum ratione veritatis suscipit doloremque numquam sint quos hic perferendis quo voluptatibus, architecto iste placeat asperiores, eius modi quas assumenda deleniti.
               Sint in sequi magni nihil ea ipsam modi nesciunt minus aperiam. Ipsum fugiat quasi accusamus, eveniet sed in obcaecati, voluptatum inventore illum recusandae quaerat unde! Explicabo libero quasi nemo exercitationem.
               Tempore illo ipsam assumenda quos minus dolores qui culpa atque natus asperiores deserunt inventore id perferendis animi libero, nobis, amet sunt aliquid dolor temporibus voluptatem rerum! Error sunt veniam accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis quos voluptatem tempora ex dignissimos sed et iste, repellat numquam error totam quod rerum nihil praesentium quae neque quidem dolore?
               Consequatur perspiciatis quis a nisi adipisci iste, quia mollitia ipsam aperiam doloremque vero deserunt delectus amet quos. Odit, iste et sint aut, accusantium nihil sapiente repellendus alias cum, magnam eaque.
               Cumque vel sit, veniam illo deleniti, amet earum, ipsum velit et nostrum voluptatibus impedit. Porro illo repellat nostrum aliquid ut? Id accusantium cupiditate, eveniet tempora non earum eos sed laudantium.
               Ab neque accusamus perferendis ex reiciendis veniam modi culpa, est iusto exercitationem itaque fuga quo laudantium necessitatibus voluptate a eum odit mollitia esse! Assumenda quod voluptatem nulla facilis et dolore.
               </p> 
            </div>
            <hr />

            <form style={formStyle} ref={formRef}>
                <input type="email" placeholder="Your email" />
                <button>Schedule now</button>
            </form>
        </>
    );
}