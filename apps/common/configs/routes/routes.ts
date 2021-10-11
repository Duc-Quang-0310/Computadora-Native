import PasswordRecover from "../../../screens/auth/password-recover/PasswordRecover";
import SignIn from "../../../screens/auth/sign-in/SignIn";
import SignUp from "../../../screens/auth/sign-up/SignUp";
import Blog from "../../../screens/blog/Blog";
import BlogDetails from "../../../screens/blog/Details/BlogDetails";
import BuyHistory from "../../../screens/buy-history/BuyHistory";
import CartAddSuccess from "../../../screens/cart/add-success/CartAddSuccess";
import Cart from "../../../screens/cart/Cart";
import Home from "../../../screens/home/Home";
import LaptopDetails from "../../../screens/laptop/Details.tsx/LaptopDetails";
import Laptop from "../../../screens/laptop/Laptop";
import Loading from "../../../screens/loading/Loading";
import Address from "../../../screens/profile/address/Address";
import Profile  from "../../../screens/profile/Profile";
import PWChange from "../../../screens/profile/pw-change/PWChange";
import  Receipt  from "../../../screens/receipt/Receipt";
import  ReceiptSuccess  from "../../../screens/receipt/receipt-success/ReceiptSuccess";
import  Search  from "../../../screens/search/Search";
import { iRoute, route } from "./routeName";

const routes:iRoute[]=[
    {
        path: route.LOADING,
        exact: true,
        component:Loading
    },
    {
        path: route.HOME,
        exact: true,
        component:Home
    },
    {
        path: route.SIGNIN,
        exact: true,
        component:SignIn
    },
    {
        path: route.SIGNUP,
        exact: true,
        component:SignUp
    },
    {
        path: route.PWRECOVER,
        exact: true,
        component: PasswordRecover
    },
    {
        path: route.LAPTOP,
        exact: true,
        component: Laptop
    },
    {
        path: route.LAPTOP_DETAILS,
        exact: true,
        component: LaptopDetails
    },
    {
        path: route.BLOG,
        exact: true,
        component: Blog
    },
    {
        path: route.BLOG_DETAILS,
        exact: true,
        component: BlogDetails
    },
    {
        path: route.CART,
        exact: true,
        component: Cart
    },
    {
        path: route.CART_ADD_SUCCESS,
        exact: true,
        component: CartAddSuccess
    },
    {
        path: route.BUY_HISTORY,
        exact: true,
        component: BuyHistory
    },
    {
        path: route.SEARCH,
        exact: true,
        component: Search
    },
    {
        path: route.BUY_HISTORY,
        exact: true,
        component: BuyHistory
    },
    {
        path: route.PROFILE,
        exact: true,
        component: Profile
    },
    {
        path: route.PW_CHANGE,
        exact: true,
        component: PWChange
    },
    {
        path: route.ADDRESS,
        exact: true,
        component: Address
    },

    {
        path: route.RECEIPT,
        exact: true,
        component: Receipt
    },
    {
        path: route.RECEIPT_SUCCESS,
        exact: true,
        component: ReceiptSuccess
    },
    
    
]

export default routes