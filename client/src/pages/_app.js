import "@/styles/globals.css";
import BikeContext from "../store/BikeContext";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { AuthContextProvider } from "@/store/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <BikeContext>
        <AuthContextProvider>
          <NavigationBar />
          <Component {...pageProps} />
          <Footer />
        </AuthContextProvider>
      </BikeContext>
    </>
  );
}
