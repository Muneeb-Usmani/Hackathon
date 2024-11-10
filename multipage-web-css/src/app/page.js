import Overview from './overview/page';
import Services from './services/page';
import Value from './value/page';
import Visionary from './visionary/page';
import Hero from "../components/Hero";
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Hero/>
      <Services />
      <Value />
      <Overview />  
      <Visionary />
      <Footer/>
    </div>
  );
}
