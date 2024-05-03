'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../header';
import Banner from '../components/banner';
import Footer from '../footer';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header />
      <div
        className="container"
        style={{ height: '500px', backgroundColor: 'red' }}
      >
        <div
          className="row"
          style={{ backgroundColor: 'blue', height: '200px' }}
        >
          <div
            className="col-12 col-sm-6 col-md-4"
            style={{ backgroundColor: 'purple' }}
          >
            Elemento 1
          </div>
          <div
            className="col-12 col-sm-6 col-md-4"
            style={{ backgroundColor: 'yellow' }}
          >
            Elemento 2
          </div>
          <div
            className="col-12 col-sm-6 col-md-4"
            style={{ backgroundColor: 'gray' }}
          >
            Elemento 3
          </div>
        </div>
        <div
          className="row justify-content-center align-items-center pt-4"
          style={{ backgroundColor: 'green', height: '200px' }}
        >
          <div className="col-4" style={{ backgroundColor: 'aqua' }}>
            Producto 1
          </div>
          <div className="col-4" style={{ backgroundColor: '#DC143C' }}>
            Producto 2
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
