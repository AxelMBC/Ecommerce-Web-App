'use client';

import Image from 'next/image';
import { convertirPrecio } from '../utils/convertirPrecio';
// import { productosMonitor } from '../productosMonitor';

type Producto = {
  id: number;
  slug: string;
  nombre: string;
  detalles: string;
  detallesTecnicos: string;
  descripcion: string;
  precio: number;
  imagen1: any;
  imagen2?: any; // Make optional if not always present
  imagen3?: any; // Make optional if not always presen
};

interface ProductoIndividualProps {
  producto: Producto; // Use the `Producto` type here
}

const ProductoIndividual = ({ producto }: ProductoIndividualProps) => {
  console.log(producto);

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
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <Image
                    src={producto.imagen1}
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

                  <div>
                    Descripcion del producto: <div>{producto.descripcion}</div>
                  </div>

                  <div className="d-flex justify-content-start py-4">
                    <div style={{ paddingRight: '25px' }}>
                      <button type="button" className="btn btn-primary">
                        Agregar al carrito
                      </button>
                    </div>

                    <button type="button" className="btn btn-primary">
                      Comprar Ahora
                    </button>
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
