import Navbar from "../navigations/navbar"
import Footer from "../navigations/footer"
import { check_authenticated, load_user, refresh } from '../../redux/actions/auth';
import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Alert from "../notification/alert";


const Layout = ({ title, content, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(check_authenticated());
    dispatch(load_user());
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Alert/>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'Surf',
  content: 'Surf'
}

export default Layout