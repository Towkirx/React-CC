import React, { useState } from 'react'

function Counter() {
const [arr, setArr] = useState([])

function addPlus() {
    setArr(prevArr => [...prevArr, "+"])
}

function addMinus() {
    setArr(prevArr => [...prevArr, "-"])
}

    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
        {arr.toString()}
        </div>
    )

}


    //callbacks objects
    // const [cart, setCart] = useState ({
    //     item: 'apple', 
    //     quantity: 0
    // });

    // function addApple() {
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity + 1,
    //     }))
    // }
    // function subtractApple() {
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity - 1,
    //     }))
    // }
    
//     return (
//         <div>
//             <button onClick={subtractApple}>-</button>
//             {cart.quantity}
//             {cart.item}
//             <button onClick={addApple}>+</button>
//         </div>
//     )
// }

export default Counter