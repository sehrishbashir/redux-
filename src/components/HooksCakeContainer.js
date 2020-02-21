import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { buyCake } from "../redux";

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.Cake.numOfCakes)
    const dispatchCake = useDispatch()
    return (
        <div>
            <h2>Num Of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatchCake(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer

