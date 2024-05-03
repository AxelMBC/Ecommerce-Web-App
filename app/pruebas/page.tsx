import Link from 'next/link';
import Header from '../header';
import Banner from '../components/banner';
import Footer from '../footer';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header />
      <div className = "container" style={{height:"500px", background: "red"}}>
        <div className="row" style={{height:"200px", background:"blue"}}>
        </div>
        <div className="col-4" style={{backgroundColor: 'aqua'}}>
            producto 1
        </div>
        <div className="col-4" style={{backgroundColor: 'aqua'}}>
            producto 1
        </div>
      </div>
      
      <Footer/>

        
    </div>
  );
};

export default Home;
