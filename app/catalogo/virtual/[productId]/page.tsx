'use client';

import { usePathname } from 'next/navigation';
import Header from '../../../header';
import Footer from '../../../footer';
import ProductoIndividual from '../../ProductoIndividual';
import { productosVirtual } from '../productosVirtual';

const CatalogoVirtual = () => {
  const productoId = usePathname().split('/').pop();
  const producto = productosVirtual.find(
    (producto) => producto.slug === productoId,
  );

  return (
    <div style={{ backgroundColor: '#120925' }}>
      <Header />
      {producto ? (
        <ProductoIndividual producto={producto} />
      ) : (
        <div>Producto not found</div> // Handling undefined here
      )}

      <Footer />
    </div>
  );
};

export default CatalogoVirtual;
