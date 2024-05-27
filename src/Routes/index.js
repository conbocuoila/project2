import HomePage from "../Pages/Home/HomePage";
import OrderPage from "../Pages/Order/OrderPage";
import ProductPage from "../Pages/Product/ProductPage";
import NotFoundPages from "../Pages/NotFoundPage/NotFoundPages";
import TypeProduct from "../Pages/TypeProduct/TypeProduct";
import SingInPage from "../Pages/SignIn/SingInPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import ProductDetail from "../Pages/ProductDetailPage/ProductDetail";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/product",
    page: ProductPage,
    isShowHeader: true,
  },

  {
    path: "/type",
    page: TypeProduct,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPages,
  },
  {
    path: "/signin",
    page: SingInPage,
    isShowHeader: false,
  },
  {
    path: "/signup",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/productdetail",
    page: ProductDetail,
    isShowHeader: true,
  },
];
