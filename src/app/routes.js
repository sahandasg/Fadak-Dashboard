import Orders from "./components/Body/Dashboard/Orders";
import Inventory from "./components/Body/Dashboard/Inventory";
import Overview from "./components/Body/Dashboard/Overview";
import Sales from "./components/Body/Dashboard/Sales";
import Analytics from "./components/Body/Dashboard/Analytics";
import Products from "./components/Body/Ecommerce/Products";
import AddProducts from "./components/Body/Ecommerce/AddProducts";
import Comments from "./components/Body/Ecommerce/Comments";
import Discounts from "./components/Body/Ecommerce/Discounts";
import SellerProfile from "./components/Body/Profile/SellerProfile";
import Bills from "./components/Body/Profile/Bills";
import Schedule from "./components/Body/Profile/Schedule";
import Message from "./components/Body/Profile/Message";
import SalesReport from "./components/Body/Reports/SalesReport";
import UsersReport from "./components/Body/Reports/UsersReport";
import StoreReport from "./components/Body/Reports/StoreReport";
import Profile from "./components/Body/Setting/Profile";
import ChangePassword from "./components/Body/Setting/ChangePassword";


const routes = [
    {path: "/dashboard/overview", element: <Overview/>},
    {path: "/dashboard/orders", element: <Orders/>},
    {path: "/dashboard/sales", element: <Sales/>},
    {path: "/dashboard/inventory", element: <Inventory/>},
    {path: "/dashboard/analytics", element: <Analytics/>},
    {path: "/e-commerce/products", element: <Products/>},
    {path: "/e-commerce/add-products", element: <AddProducts/>},
    {path: "/e-commerce/comments", element: <Comments/>},
    {path: "/e-commerce/discounts", element: <Discounts/>},
    {path: "/profile/seller-profile", element: <SellerProfile/>},
    {path: "/profile/bills", element: <Bills/>},
    {path: "/profile/schedule", element: <Schedule/>},
    {path: "/profile/message", element: <Message/>},
    {path: "/reports/sales-report", element: <SalesReport/>},
    {path: "/reports/users-report", element: <UsersReport/>},
    {path: "/reports/store-report", element: <StoreReport/>},
    {path: "/setting/profile", element: <Profile/>},
    {path: "/setting/change-password", element: <ChangePassword/>},
]

export default routes;