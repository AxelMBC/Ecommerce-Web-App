'use client';

import { usePathname } from 'next/navigation';
import Header from '../../../header';
import Footer from '../../../footer';
import ProductoIndividual from '../../ProductoIndividual';
import { productosPc } from '../productosPc';

const CatalogoPc = () => {
  const productoId = usePathname().split('/').pop();
  const producto = productosPc.find((producto) => producto.slug === productoId);

  return (
    <div style={{ backgroundColor: '#120925' }}>
      <Header />
      {producto ? (
        <ProductoIndividual producto={producto} categoria="pc" />
      ) : (
        <div>Producto not found</div> // Handling undefined here
      )}

      <Footer />
    </div>
  );
};

export default CatalogoPc;
