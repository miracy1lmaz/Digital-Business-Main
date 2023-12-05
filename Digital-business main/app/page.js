import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import Brandingvideo from '@/src/components/BrandingVideo/brandingvideo';
import Whatwedo from '@/src/components/whatwedo/Whatwedo';
import OurDiff from '@/src/components/OurDiff/OurDiff';
import Howitworks from '@/src/components/HowItWorks/Howitworks';
import Whowe from '@/src/components/Whowe/Whowe';
import Footer from '@/src/components/Footer/Footer';

export default function Home() {

  return (
    <div  className="app">


      <Navbar/>
      <Hero/>
      <Brandingvideo/>  
      <Whatwedo/>
      <OurDiff/>
      <Howitworks/>
      <Whowe/>
      <Footer/>
    </div>
  );
}
