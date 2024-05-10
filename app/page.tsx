'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './header';
import Banner from './components/banner';
import Footer from './footer';
import Image from 'next/image';
import laptopGamerImg from '/public/imagenes/categorias/Laptop_Gamer_Categorias.jpg';
import computadoraGamerImg from '/public/imagenes/categorias/Computadoras_Gamer_Categorias.jpg';
import InnovationImage from '../public/imagenes/innovation.jpg';
import monitorGamerimg from '/public/imagenes/categorias/Monitor_gamer_categoria.jpg';
import tecladoimg from '/public/imagenes/categorias/teclado_otro.jpg';
import categoriaPcImg from '/public/imagenes/categorias/categoria_pc.jpg';
import categoriaMonitor from '/public/imagenes/categorias/categoria_monitor.jpg';
import categoriaRealidadVirtual from '/public/imagenes/categorias/categoria_vr.jpg';
import categoriaAudio from '/public/imagenes/categorias/categoria_audio.jpg';

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header />
      <main className="bg-light flex min-h-screen flex-col p-6">
        <div style={{ backgroundColor: '#120925' }}>
          <Banner />
        </div>

        <div className="contenedor-categorias">
          <div
            className="carta-categorias"
            onClick={() => router.push('/catalogo/pc')}
          >
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
            </div>
          </div>
          <div
            className="carta-categorias"
            onClick={() => router.push('/catalogo/monitor')}
          >
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
            </div>
          </div>
          <div
            className="carta-categorias"
            onClick={() => router.push('/catalogo/virtual')}
          >
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
            </div>
          </div>
          <div
            className="carta-categorias"
            onClick={() => router.push('/catalogo/audio')}
          >
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
            </div>
          </div>
        </div>

        <section id="sobre-nosotros" className="my-4 bg-gray-100 py-4">
          <div className="d-flex container mx-auto ">
            <div className="row justify-content-center">
              <div className="col-4">
                <h3 className="mb-4 text-3xl font-bold">Sobre InnovaSphere</h3>
                <p>
                  En InnovaSphere, lideramos la innovación en el comercio
                  electrónico de productos tecnológicos. Nos dedicamos a
                  brindarte lo último en tecnología con un servicio al cliente
                  excepcional y precios sin competencia. Creemos en hacer la
                  tecnología accesible para enriquecer la vida cotidiana de
                  nuestros clientes.
                </p>
                <Link href="/" className="btn-about-us mt-6 inline-block">
                  Conoce Más
                </Link>
              </div>
              <div className="col-8">
                <Image
                  src={InnovationImage}
                  alt="Sobre InnovaSphere"
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
