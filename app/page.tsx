'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './header';
import Banner from './components/banner';
import Footer from './footer';
import Image from 'next/image';
import InnovationImage from '../public/imagenes/innovation.jpg';
import categoriaPcImg from '/public/imagenes/categorias/categoria_pc.jpg';
import categoriaMonitor from '/public/imagenes/categorias/categoria_monitor.jpg';
import categoriaRealidadVirtual from '/public/imagenes/categorias/categoria_vr.jpg';
import categoriaAudio from '/public/imagenes/categorias/categoria_audio.jpg';

const Home = () => {
  const router = useRouter();
  const [padding, setPadding] = useState('0px');

  useEffect(() => {
    const updatePadding = () => {
      const angle = 11; // Skew angle in degrees
      const radians = (angle * Math.PI) / 180; // Convert to radians
      const containerWidth = window.innerWidth; // Get container width
      const calculatedPadding = (Math.tan(radians) * containerWidth) / 2; // Calculate padding
      document.documentElement.style.setProperty(
        '--dynamic-padding',
        `${calculatedPadding}px`,
      ); // Update CSS variable
    };

    updatePadding(); // Initial calculation
    window.addEventListener('resize', updatePadding); // Update on resize

    return () => window.removeEventListener('resize', updatePadding); // Cleanup
  }, []);

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div style={{ backgroundColor: '#120925' }}>
          <Banner />
        </div>

        <div className="contenedor-categorias">
          <div className="carta-categorias">
            <div className="image">
              <Image
                src={categoriaPcImg}
                alt="Laptop Gamer"
                width={400}
                height={200}
              />
            </div>
            <div className="content">
              <h3>PCs</h3>
              <p>
                Esta categoría incluye computadoras de escritorio, laptops, y
                componentes esenciales como tarjetas gráficas, procesadores,
                memorias RAM, y discos duros. Es ideal para gamers y
                profesionales que buscan alto rendimiento y personalización en
                sus equipos.
              </p>
              <button
                className="btn btn-custom"
                onClick={() => router.push('/catalogo/pc')}
              >
                Ir a PCs
              </button>
            </div>
          </div>
          <div className="carta-categorias">
            <div className="image">
              <Image
                src={categoriaMonitor}
                alt="Laptop Gamer"
                width={400}
                height={200}
              />
            </div>
            <div className="content">
              <h3>Monitores y Accesorios</h3>
              <p>
                Aquí se ofrecen monitores de alta resolución y baja latencia,
                cruciales para una experiencia de juego óptima. También se
                incluyen accesorios como teclados mecánicos, ratones con alta
                precisión y alfombrillas de ratón diseñadas para el gaming.
              </p>
              <button
                className="btn btn-custom"
                onClick={() => router.push('/catalogo/monitor')}
              >
                Ir a Monitores
              </button>
            </div>
          </div>
          <div className="carta-categorias">
            <div className="image">
              <Image
                src={categoriaRealidadVirtual}
                alt="Laptop Gamer"
                width={400}
                height={200}
              />
            </div>
            <div className="content">
              <h3>Realidad Virtual y Simulación</h3>
              <p>
                Esta categoría abarca desde gafas de realidad virtual hasta
                accesorios de simulación como volantes y joysticks. Es perfecta
                para usuarios que buscan una inmersión total en sus juegos o
                experiencias virtuales.
              </p>
              <button
                className="btn btn-custom"
                onClick={() => router.push('/catalogo/virtual')}
              >
                Ir a Realidad Virtual
              </button>
            </div>
          </div>
          <div className="carta-categorias">
            <div className="image">
              <Image
                src={categoriaAudio}
                alt="Laptop Gamer"
                width={400}
                height={200}
              />
            </div>
            <div className="content">
              <h3>Audio</h3>
              <p>
                Equipos de audio de alta fidelidad, micrófonos, y cámaras para
                streaming conforman esta categoría. Esencial para gamers que
                comparten su juego en línea o para aquellos que disfrutan de la
                máxima calidad de audio en sus sesiones de juego.
              </p>
              <button
                className="btn btn-custom"
                onClick={() => router.push('/catalogo/audio')}
              >
                Ir a Audio
              </button>
            </div>
          </div>
        </div>
        <div className="container-diagonal">
          <div className="diagonal-box">
            <div className="container-fluid">
              <div className="row justify-content-evenly align-items-center">
                <div className="col-12 col-md-4">
                  <h3 className="position-relative mb-4 text-3xl font-bold ">
                    Sobre InnovaSphere
                  </h3>
                  <p
                    className="position-relative"
                    style={{ fontSize: '18px', paddingBottom: '25px' }}
                  >
                    En InnovaSphere, lideramos la innovación en el comercio
                    electrónico de productos tecnológicos. Nos dedicamos a
                    brindarte lo último en tecnología con un servicio al cliente
                    excepcional y precios sin competencia. Creemos en hacer la
                    tecnología accesible para enriquecer la vida cotidiana de
                    nuestros clientes.
                  </p>
                  <button type="button" className="btn-lead">
                    <span className="btn-lead-text">Conoce Mas </span>
                    <div className="fill-container"></div>
                  </button>
                </div>
                <div className="col-12 col-md-5 z-1">
                  <Image
                    src={InnovationImage}
                    alt="Sobre InnovaSphere"
                    style={{
                      width: '80%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
