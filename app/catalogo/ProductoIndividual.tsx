'use client';

import Image from 'next/image';
import { convertirPrecio } from '../utils/convertirPrecio';
import Link from 'next/link';
// import { productosMonitor } from '../productosMonitor';

type Producto = {
  id: number;
  slug: string;
  nombre: string;
  titulo: string;
  detalles: string;
  detallesTecnicos: string;
  descripcion: string;
  precio: number;
  imagen1: any;
  imagen2?: any; // Make optional if not always present
  imagen3?: any; // Make optional if not always presen
};

interface ProductoIndividualProps {
  producto: Producto;
  categoria: string; // Add the 'categoria' property here
}

const ProductoIndividual = ({
  producto,
  categoria,
}: ProductoIndividualProps) => {
  // console.log(producto);

  //funcion para convertir el precio que es un numero a una cadena de caracteres que incluya $ y , para separar los miles
  return (
    <>
      {producto ? (
        <div
          id="catalogo"
          className="container-fluid"
          style={{
            backgroundColor: 'white',
            padding: '70px 0',
            minHeight: '68vh',
          }}
        >
          <div style={{ paddingLeft: '200px' }}>
            <li
              className="content__item__producto"
              style={{ maxWidth: '280px' }}
            >
              <Link
                className="link link--ersa fc-black"
                href={`/catalogo/${categoria}`}
              >
                Regresar a Catalogo
              </Link>
            </li>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-9">
              <div className="row">
                <div
                  className="col-12 col-sm-4"
                  style={{ paddingTop: '200px' }}
                >
                  <Image
                    src={producto.imagen1}
                    width={300}
                    height={300}
                    alt={`${producto.titulo} Imagen`}
                  />
                </div>
                <div className="col-12 col-sm-8">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="producto-titulo">{producto.titulo}</p>
                    <div className="highlight-container">
                      <span className="highlight">
                        {convertirPrecio(producto.precio)}
                        <span className="ms-1">MX</span>
                      </span>
                    </div>
                  </div>

                  {/* <div className="espaciado-precio">
                    <p className="producto-precio">
                      <span style={{ color: 'black' }}>Precio:</span>{' '}
                      {convertirPrecio(producto.precio)} MXN
                    </p>
                  </div> */}

                  <div style={{ fontWeight: 400 }}>
                    <p
                      style={{
                        color: '#33001b',
                        fontSize: '20px',
                      }}
                    >
                      Descripcion del producto:
                    </p>
                    <div>{producto.descripcion}</div>
                  </div>

                  <div style={{ paddingBottom: '25px' }}>
                    <p
                      style={{
                        color: '#33001b',
                        fontSize: '20px',
                        paddingTop: '50px',
                      }}
                    >
                      Detalles Tecnicos:
                    </p>

                    <ul>
                      {producto.detallesTecnicos
                        .split(',')
                        .map((detalle, index) => (
                          <li key={index}>{detalle.trim()}</li>
                        ))}
                    </ul>
                  </div>

                  <div className="d-flex justify-content-start py-4">
                    <div style={{ paddingRight: '25px' }}>
                      <button type="button" className="btn-producto">
                        <span className="btn-producto-text">
                          Agregar al carrito{' '}
                        </span>
                        <div className="fill-container"></div>
                      </button>
                    </div>

                    <div style={{ paddingRight: '25px' }}>
                      <button type="button" className="btn-producto">
                        <span className="btn-producto-text">
                          Comprar Ahora{' '}
                        </span>
                        <div className="fill-container"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Producto no encontrado</div>
      )}
    </>
  );
};

export default ProductoIndividual;
