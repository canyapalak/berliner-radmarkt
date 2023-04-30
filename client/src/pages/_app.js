import "@/styles/globals.css";
import BikeContext from "../store/BikeContext";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <BikeContext>
        <NavigationBar />
        <Component {...pageProps} />
        <Footer />
      </BikeContext>
    </>
  );
}
