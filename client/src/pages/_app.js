import "@/styles/globals.css";
import BikeContext from "../store/BikeContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <BikeContext>
        <Component {...pageProps} />
      </BikeContext>
    </>
  );
}
