'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import categoriaPcImg from '../../public/imagenes/categorias/categoria_pc.jpg';
import chevronIcono from '../../public/imagenes/iconos/chevron.png';
import chevronIconoBlanco from '../../public/imagenes/iconos/chevron-blanco.png';
import categoriaMonitorImagen from '../../public/imagenes/categorias/categoria_monitor.jpg';
import categoriaRealidadVirtual from '../../public/imagenes/categorias/categoria_vr.jpg';
import categoriaAudioImagen from '../../public/imagenes/categorias/categoria_audio.jpg';
import { sign } from 'crypto';

const Catalogo = () => {
  return (
    <div id="categorias" style={{ backgroundColor: '#120925' }}>
      <Header />

      <div className="container-fluid">
        <div className="row justify-content-center titulo-principal my-4">
          <div className="col-10">
            <h2 style={{ color: 'white' }}>Categorias de Productos</h2>
          </div>
        </div>
        <div style={{ backgroundColor: '#FFF5EA' }}>
          <div className="container">
            <div className="row justify-content-start catalogo-seccion align-items-center">
              <div className="col-10 col-lg-4">
                <div className="d-flex justify-content-center">
                  <Image
                    src={categoriaPcImg}
                    alt="Categoria PCs"
                    className="imagen-categoria-pc"
                    style={{
                      width: '90%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
              <div className="col-10 col-lg-6 col-xl-5">
                <h3>PCs</h3>
                <p className="pe-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="col">
                <div className="row justify-content-evenly">
                  <div className="col-auto" style={{ paddingRight: '40px' }}>
                    <Link href="/catalogo/pc" className="">
                      <i className="chevron-icono-oscuro fa-solid fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-start catalogo-seccion align-items-center fc-white">
            <div className="col-10 col-lg-4">
              <div className="d-flex justify-content-center">
                <Image
                  src={categoriaMonitorImagen}
                  alt="Monitor Categoria"
                  style={{
                    width: '70%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
            <div className="col-10 col-lg-6 col-xl-5">
              <h3>Monitores</h3>
              <p className="pe-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col">
              <div className="row justify-content-evenly">
                <div className="col-auto" style={{ paddingRight: '40px' }}>
                  <Link href="/catalogo/monitor">
                    <i className="chevron-icono-claro fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#FFF5EA' }}>
          <div className="container">
            <div className="row justify-content-start catalogo-seccion align-items-center">
              <div className="col-10 col-lg-4">
                <div className="d-flex justify-content-center">
                  <Image
                    src={categoriaRealidadVirtual}
                    alt="Categoria Realidad Virtual"
                    style={{
                      width: '90%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
              <div className="col-10 col-lg-6 col-xl-5">
                <h3>Realidad Virtual</h3>

                <p className="pe-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="col">
                <div className="row justify-content-evenly">
                  <div className="col-auto" style={{ paddingRight: '40px' }}>
                    <Link href="/catalogo/virtual" className="">
                      <i className="chevron-icono-oscuro fa-solid fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
        <div className="container">
          <div className="row justify-content-start catalogo-seccion align-items-center fc-white">
            <div className="col-10 col-lg-4">
              <div className="d-flex justify-content-center">
                <Image
                  src={categoriaAudioImagen}
                  alt="Monitor Categoria"
                  width={300}
                  style={{
                    width: '90%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
            <div className="col-10 col-lg-6 col-xl-5">
              <h3>Audio</h3>

              <p className="pe-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col">
              <div className="row justify-content-evenly">
                <div className="col-auto" style={{ paddingRight: '40px' }}>
                  <Link href="/catalogo/Audio" className="">
                    <i className="chevron-icono-claro fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalogo;
