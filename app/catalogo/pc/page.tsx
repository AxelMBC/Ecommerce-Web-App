'use client';

import { useRouter } from 'next/navigation';
import { convertirPrecio } from '../../utils/convertirPrecio';
import Image from 'next/image';
import Header from '../../header';
import Footer from '../../footer';
import { productosPc } from './productosPc';
import chevronIcono from '../../../public/imagenes/iconos/chevron.png';

const CatalogoPc = () => {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: '#120925' }}>
      <Header />

      <div className="container-fluid">
        <div
          className="row justify-content-center"
          style={{ paddingTop: '50px', paddingBottom: '20px' }}
        >
          <div className="col-10">
            <h2 style={{ color: 'white' }}>
              Explora <span className="fancy">PCs</span> de primera categoría
            </h2>
          </div>
        </div>

        <div
          className="row justify-content-center"
          style={{ backgroundColor: '#DEDCD8', padding: '50px 0' }}
        >
          <div className="col-xl-12 col-xxl-11">
            <div className="row ">
              {productosPc.map((producto) => {
                return (
                  <div
                    className="col-sm-12 col-md-6 col-xxl-4"
                    key={producto.id}
                    onClick={() => router.push(`/catalogo/pc/${producto.slug}`)}
                  >
                    <div
                      style={{
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        borderRadius: '30px',
                        margin: '20px',
                        padding: '40px',
                        height: '390px',
                        backgroundColor: 'white',
                        opacity: 0.8,
                      }}
                      className="carta-personalizada"
                    >
                      <div className=" d-flex justify-content-center">
                        {producto.imagen1 ? (
                          <Image
                            alt={`${producto.nombre} Imagen`}
                            src={producto.imagen1}
                            width={200}
                            height={200}
                          />
                        ) : null}
                      </div>
                      <div style={{ paddingTop: '25px' }}>
                        <h3 style={{ fontWeight: 700 }} className="m-0">
                          {producto.nombre}
                        </h3>
                        <p
                          style={{
                            fontWeight: 500,
                            color: 'gray',
                            marginBottom: '10px',
                          }}
                        >
                          {producto.detalles}
                        </p>
                      </div>
                      <div className="d-flex justify-content-end align-items-center">
                        <p
                          style={{ fontSize: '20px', margin: 0 }}
                          className="pe-2"
                        >
                          {convertirPrecio(producto.precio)} MXN
                        </p>
                        <Image
                          width={20}
                          height={20}
                          src={chevronIcono}
                          alt="Chevron Icono"
                          className="chevron-producto"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CatalogoPc;
