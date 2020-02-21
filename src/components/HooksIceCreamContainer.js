import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
    const numOfIceCream = useSelector(state => state.IceCream.numOfIceCream)
    const dispatchIceCream = useDispatch()
    return (
        <div>
            <h2>Num of IceCream - {numOfIceCream}</h2>
            <button onClick={() => dispatchIceCream(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default HooksIceCreamContainer

