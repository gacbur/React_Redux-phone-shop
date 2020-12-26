import * as action from './actionTypes'

export const addToCart = (item) => {
    return {
        type: action.ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (id) => {
    return {
        type: action.REMOVE_FROM_CART,
        payload: id
    }
}

export const increaseAmount = (id) => {
    return {
        type: action.INCREASE_AMOUNT,
        payload: id,
    }
}

export const decreaseAmount = (id, amount) => {
    return {
        type: action.DECREASE_AMOUNT,
        payload: {
            id,
            amount
        }
    }
}

export const getTotals = () => {
    return {
        type: action.GET_TOTALS
    }
}

export const toggleAmount = (id, toggle) => {
    return {
        type: action.TOGGLE_AMOUNT, payload: {
            id,
            toggle
        }
    }
}

export const allActions = {
    addToCart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    getTotals
}