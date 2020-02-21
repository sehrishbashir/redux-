import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.Cake 
    ? state.Cake.numOfCakes 
    : state.IceCream.numOfIceCream

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.Cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);
