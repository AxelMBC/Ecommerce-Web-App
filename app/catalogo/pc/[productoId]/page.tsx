'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Header from '../../../header';
import Footer from '../../../footer';
import { convertirPrecio } from '../../../utils/convertirPrecio';
import { productosPc } from '../productosPc';
import pcGamer from '/public/imagenes/pc/pcGamer.png';

const CatalogoPc = () => {
  const productoId = usePathname().split('/').pop();
  const producto = productosPc.find((producto) => producto.slug === productoId);

  //funcion para convertir el precio que es un numero a una cadena de caracteres que incluya $ y , para separar los miles
  return (
    <div style={{ backgroundColor: '#120925' }}>
      <Header />
      {producto ? (
        <div
          className="container-fluid"
          style={{ backgroundColor: 'white', padding: '70px 0' }}
        >
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <Image
                    src={pcGamer}
                    width={300}
                    height={300}
                    alt={`${producto.nombre} Imagen`}
                  />
                </div>
                <div className="col-12 col-sm-8">
                  <p className="producto-titulo">{producto.detallesTecnicos}</p>
                  <p className="producto-precio">
                    {convertirPrecio(producto.precio)}
                  </p>
                  <div className="d-flex justify-content-start">
                    <button type="button" className="btn btn-tertiary">
                      Agregar al carrito
                    </button>

                    <button type="button" className="btn btn-tertiary">
                      Comprar Ahora
                    </button>
                  </div>
                  <div>
                    Descripcion del producto: <div>{producto.descripcion}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Producto no encontrado</div>
      )}

      <Footer />
    </div>
  );
};

export default CatalogoPc;
