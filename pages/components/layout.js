import Footer from "./footer";
import Image from 'next/image';
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="page-container" >
      <div className="backgroundimage">
      <Image 
        src="/guitarbackground1.webp"
        alt="Guitar background by Shinnosuke Kawabe https://unsplash.com/photos/idya-9U4ZJM"
        fill
        style={{objectFit:"cover"}}
      />  
    </div>
   <div className="content-wrap">
      <Navbar />
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
