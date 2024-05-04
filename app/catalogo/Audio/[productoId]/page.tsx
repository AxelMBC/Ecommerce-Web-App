'use client';

import { usePathname } from 'next/navigation';
import Header from '../../../header';
import Footer from '../../../footer';
import { productosAudio } from '../productosAudio';
import ProductoIndividual from '../../ProductoIndividual';

const CatalogoAudio = () => {
  const productoId = usePathname().split('/').pop();
  const producto = productosAudio.find(
    (producto) => producto.slug === productoId,
  );

  return (
    <div style={{ backgroundColor: '#120925' }}>
      <Header />
      {producto ? (
        <ProductoIndividual producto={producto} />
      ) : (
        <div>Producto No Encontrado </div>
      )}
      <Footer />
    </div>
  );
};

export default CatalogoAudio;
