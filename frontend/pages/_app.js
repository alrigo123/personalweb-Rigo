import 'rigo/styles/globals.css'
import Navbar from 'rigo/components/Navbar'


export default function App({ Component, pageProps }) {
  return (
    <>
    {/* This is when will repeat navbar */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}