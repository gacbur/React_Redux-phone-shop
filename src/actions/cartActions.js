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

export const getFeaturedProducts = (products) => {
    return {
        type: action.GET_FEATURED_PRODUCTS,
        payload: products,
    }
}

export const getSortedProducts = (products) => {
    return {
        type: action.GET_SORTED_PRODUCTS,
        payload: products
    }
}

export const changeSortedValues = (name, value) => {
    return {
        type: action.CHANGE_SORTED_VALUES,
        payload: {
            name,
            value
        }
    }
}

export const setSortedProducts = (products) => {
    return {
        type: action.SET_SORTED_PRODUCTS,
        payload: products
    }
}

export const getTotals = () => ({ type: action.GET_TOTALS })
export const resetCart = () => ({ type: action.RESET_CART })

export const addOpinion = (values, id) => {
    const { username, rating, opinion } = values
    return {
        type: action.ADD_OPINION,
        payload: {
            username,
            rating,
            opinion,
            id
        }
    }
}

export const deleteOpinion = (opinionID, productID) => {
    return {
        type: action.DELETE_OPINION,
        payload: {
            opinionID,
            productID
        }
    }
}

export const allActions = {
    addToCart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    getTotals,
    resetCart,
    getFeaturedProducts,
    getSortedProducts,
    changeSortedValues,
    setSortedProducts,
    addOpinion,
    deleteOpinion
}