import ContextProvider from "@/context/ContextProvider";
import "../../public/assets/vendors/animate.css";
import "../../public/assets/vendors/font-awesome.min.css";
import "../../public/assets/vendors/lums-icon/style.css";
import "../../public/assets/fonts/spartan-mb/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-circular-progressbar/dist/styles.css";
// import "react-modal-video/css/modal-video.min.css";
// import "tiny-slider/dist/tiny-slider.css";

// extra css
import "@/styles/style.css";
import "@/styles/responsive.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
