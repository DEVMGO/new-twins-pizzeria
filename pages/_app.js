// components
import DefaultLayout from '@/components/layouts/defaultLayout';
// styles
import '@/styles/globals.css'

const layouts = {
  L1: DefaultLayout,
};

export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return <Layout><Component {...pageProps} /></Layout>
}
