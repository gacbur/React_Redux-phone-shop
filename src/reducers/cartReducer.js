import * as act from '../actions/actionTypes'

const initialState = {
    products: [
        {
            id: 1,
            name: 'Samsung Galaxy 10',
            img: 'https://www.nokiaskleponline.pl/pol_pl_Samsung-Galaxy-Note-10-Lite-Aura-Glow-Dual-SIM-6-128GB-SM-N770FZSDXEO-12791_2.jpg',
            price: 2400,
            amount: 1
        },
        {
            id: 2,
            name: 'Samsung Galaxy 9',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUWMS-DtcWEXi-0tCR1gQON9S5GL4u8rM1g&usqp=CAU',
            price: 1500,
            amount: 1
        },
        {
            id: 3,
            name: 'Xiaomi Redmi pro 4',
            img: 'https://gsm.magazyn.pl/pic/b/xiaomi-redmi-4-pro.jpg',
            price: 550,
            amount: 1
        },
        {
            id: 4,
            name: 'Samsung Galaxy 7',
            img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2017/7/pr_2017_7_13_14_2_33_296.jpg',
            price: 700,
            amount: 1
        }
    ],
    cart: [],
    total: 0,
    amount: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case act.ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        case act.REMOVE_FROM_CART:

            let tempCart = [...state.cart]
            tempCart = tempCart.filter(item => item.id !== action.payload)

            return {
                ...state,
                cart: [...tempCart]
            }
        case act.DECREASE_AMOUNT:

            let tempCartDecrease = state.cart.map(cartItem => {
                if (cartItem.id === action.payload.id && action.payload.amount > 1) {
                    cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            })
            return { ...state, cart: tempCartDecrease }

        case act.INCREASE_AMOUNT:

            let tempCartIncrease = state.cart.map(cartItem => {
                if (cartItem.id === action.payload) {
                    cartItem = { ...cartItem, amount: cartItem.amount + 1 };
                }
                return cartItem;
            });
            return { ...state, cart: tempCartIncrease };
        case act.GET_TOTALS:

            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal;
                cartTotal.amount += amount;

                return cartTotal
            },
                {
                    total: 0,
                    amount: 0
                }
            );
            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount }
        case act.RESET_CART:
            return { ...state, cart: [] }
        default:
            return state;
    }
}