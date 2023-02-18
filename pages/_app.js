// components
import DefaultLayout from "@/components/layouts/defaultLayout";
import { ToastContainer } from "react-toastify";
// styles
import "@/styles/globals.css";
import "@/styles/styleSwiper.css";
import "react-toastify/dist/ReactToastify.css";

const layouts = {
  L1: DefaultLayout,
};

export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-left"
        theme="dark"
        autoClose={3000}
        // hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
}
