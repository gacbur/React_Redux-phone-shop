import * as act from '../actions/actionTypes'

const initialState = {
    products: [
        {
            id: 1,
            name: 'Samsung Galaxy 10 4/256GB',
            img: ['https://www.nokiaskleponline.pl/pol_pl_Samsung-Galaxy-Note-10-Lite-Aura-Glow-Dual-SIM-6-128GB-SM-N770FZSDXEO-12791_2.jpg', 'https://stat-m7.ms-online.pl/media/cache/gallery/rc/ff88wxog/images/20/20961680/samsung-galaxy-note-10-aura-glow-4.jpg', 'https://stat-m9.ms-online.pl/media/cache/gallery/rc/gjzntksf/images/20/20961680/samsung-galaxy-note-10-aura-glow-5.jpg'],
            description: 'The Galaxy S10 packs in a 3400mAh battery and manages to deliver over one day of battery life. It sports a triple camera setup at the back onsisting of a 12-megapixel telephoto camera, 12-megapixel wide-angle camera and 16-megapixel ultra wide camera.',
            price: 650,
            ram: '4GB',
            memory: "256GB",
            case_included: true,
            free_shipping: true,
            os: 'android',
            amount: 1
        },
        {
            id: 2,
            name: 'Samsung Galaxy 9 3/64GB',
            img: ['https://nupro.pl/userdata/public/gfx/627/3.jpg', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKQM_7ZbrLidapAKR4CTcRLNmW9VOVufwwOlKYUk9xeX4QD-pKVL7nwDrnl9HcwpWnfWE1vAv5mAyAV52slbDhDyW4BY3S&usqp=CAY', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQ19D40dpV3yQ1JQkSsWsf_-4lzDeX-PIzrHv5U7fQz3y_93fKrBNpHs-0EgVwA6EJfdKyJ3G9khN_y5Mqtf7LZ_6GYrUDAg&usqp=CAY'],
            description: 'The Samsung Galaxy S9 is a smartphone that was tested with the Android 8.0. 0 operating system. This model weighs 5.6 ounces, has a 5.8 inch touch screen display, 12-megapixel main camera, and 8-megapixel selfie camera. It comes with 4GB of RAM.',
            price: 450,
            ram: '3GB',
            memory: "64GB",
            case_includede: true,
            free_shipping: false,
            os: 'android',
            amount: 1
        },
        {
            id: 3,
            name: 'Xiaomi Redmi 9C 2/32GB (szary)',
            img: ['https://f00.esfr.pl/foto/8/70820600665/f3bcf844ed6e011fcfbadbd6c12d4006/xiaomi-smartfon-redmi-9c-gray-xiaomi,70820600665_8.jpg', 'https://f01.esfr.pl/foto/8/70820600665/a1daee2386a4e6c2a53bdbdb3a586dee/xiaomi-smartfon-redmi-9c-gray-xiaomi,70820600665_8.jpg', 'https://f00.esfr.pl/foto/8/70820600665/153a5e16f0a8340e92e0f130df239e63/xiaomi-smartfon-redmi-9c-gray-xiaomi,70820600665_8.jpg'],
            description: 'The Xiaomi Redmi 9C. The smartphone is powered by the MediaTek Helio G35 Octa-core processor while the GPU is Mali-G31. The smartphone comes in 6.53 inches size and the display is IPS LCD capacitive touchscreen that provides 720 x 1600 pixels resolution.',
            price: 150,
            ram: '2GB',
            memory: "32GB",
            case_included: false,
            os: 'android',
            amount: 1
        },
        {
            id: 4,
            name: 'Samsung Galaxy 7 edge 3/32GB White',
            img: ['https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2017/7/pr_2017_7_13_14_2_33_296.jpg', 'https://a.allegroimg.com/original/03a032/f68fc5f34e0d8c5c94e84beb22ed/Samsung-Galaxy-S7-edge-32GB-White-Black-Gold-Pink', 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2016/02/galaxy-s7-edge-white-back-2_0.jpg?itok=KfiebvAn'],
            description: 'The Galaxy S7 edge is an evolution of the prior year model, with upgraded hardware, design refinements, and the restoration of features removed from the Galaxy S6, such as IP certification for water and dust resistance, as well as expandable storage with a MicroSD card. Succeeding the S6 and S6 Edge+, respectively, the S7 is produced in a standard model with a display size of 5.1-inch (130 mm) as well as an Edge variant whose display is curved along the wide sides of the screen and also has a larger 5.5-inch (140 mm) display. ',
            price: 200,
            ram: '3GB',
            memory: "32GB",
            case_included: true,
            free_shipping: false,
            os: 'android',
            amount: 1
        },
        {
            id: 5,
            name: 'Apple iPhone 12 4/256GB‌',
            img: ['https://f01.esfr.pl/foto/9/72565423201/c9cb977a131b39ace5e4cf83c97abc05/apple-iphone-12-czarny,72565423201_8.jpg', 'https://www.mall.cz/i/51888157/450/450', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/10/pr_2020_10_14_12_31_9_909_00.jpg'],
            description: 'The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at an Apple Special Event, held virtually, on October 13, 2020 alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships at Apple Park in Cupertino, California. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.',
            price: 1200,
            ram: '4GB',
            memory: "256GB",
            case_included: true,
            free_shipping: true,
            os: 'ios',
            amount: 1
        },
        {
            id: 6,
            name: 'Apple iPhone X 3/128GB',
            img: ['https://www.secondhandphones.com.au/wp-content/uploads/2018/09/iphone-x-black.jpg', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/10/pr_2020_10_14_12_31_9_909_00.jpg', 'https://img.gadgethacks.com/img/79/10/63647536884828/0/essential-iphone-x-tips-for-6-million-lucky-people-who-got-one-black-friday.1280x600.jpg'],
            description: 'The iPhone X used a glass and stainless-steel form factor and "bezel-less" design, shrinking the bezels while not having a "chin", unlike many Android phones. It was the first iPhone to use an OLED screen. The home buttons fingerprint sensor was replaced with a new type of authentication called Face ID, which used sensors to scan the user face to unlock the device. This face-recognition capability also enabled emojis to be animated following the user expression (Animoji). With a bezel-less design, iPhone user interaction changed significantly, using gestures to navigate the operating system rather than the home button used in all previous iPhones.',
            price: 750,
            ram: "3GB",
            memory: "128GB",
            case_included: true,
            free_shipping: true,
            os: 'ios',
            amount: 1
        }
    ],
    sortedProducts: [],
    sortingValues: {
        name: '',
        price: 0,
        case_included: false,
        free_shipping: false,
        os: 'all',
        ram: 'all',
        memory: 'all',
        by_price: 'all'
    },
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
        case act.GET_SORTED_PRODUCTS:
            return {
                ...state,
                sortedProducts: action.payload
            }
        case act.CHANGE_SORTED_VALUES:
            return {
                ...state,
                sortingValues: {
                    ...state.sortingValues,
                    [action.payload.name]: action.payload.value
                }
            }
        case act.SET_SORTED_PRODUCTS:
            return {
                ...state,
                sortedProducts: action.payload
            }
        default:
            return state;
    }
}