import pcGamer from '/public/imagenes/pc/pcGamer.png';
import pcOficina from '/public/imagenes/pc/pcOficina.png';
import pcTodo from '/public/imagenes/pc/pcTodo.png';
import pcMini from '/public/imagenes/pc/pcMini.png';
import pcVideo from '/public/imagenes/pc/pcVideo.png';
import pcStreaming from '/public/imagenes/pc/pcStreaming.png';

export const monitoresProductos = [
  {
    id: 1,
    slug: 'samsung-monitor-curvo-27',
    nombre: 'Samsung Monitor Curvo 27',
    detalles: 'Potencia gráfica ininterrumpida',
    detallesTecnicos:
      'SAMSUNG Monitor Curvo 27" pulgadas, sin biseles, FHD 1920x1080, Game Mode, FreeSync, Eco Saving Plus, Flicker Free, 1x HDMI 1.4, 1x D-sub, 4ms(GTG), Dark Blue Gray (LC27R500FHLXZX)',

    descripcion:
      'Experiencia de visualización cómoda e inmersiva: gracias a su curvatura de 1800R brinda uniformidad en relación a la distancia entre el OJO-OBJTO. Lo que proporciona una experiencia de visualización más cómoda y también más inmersiva a comparación de los monitores planos. Bezel-less Design: Pantalla sin bisel de 3 lados, se extiende de borde a borde para una visualización máxima. Con su refinado exterior y base de soporte en forma de Y, la pantalla brinda un aspecto más elegante y moderno. Flicker Free & Eye Saver Mode: Un descanso para tus ojos, la tecnología Flicker Free reduce el parpadeo de la pantalla para que tus ojos descansen, permitiéndote así trabajar o jugar durante más tiempo. De esta forma, reducirás la fatiga visual y disfrutarás de una mejor experiencia inmersiva. Game mode: Experiencia de juego con optimización en el contraste, los colores y las sombras. Lo que te permitirá un fácil reconocimiento de tus enemigos en los lugares más oscuros. Free-sync (AMD): Brinda una respuesta de juego sin Tearing y la velocidad de escaneo del contenido del juego y el monitor se sincroniza en tiempo real. Tipo de base: Sencilla; Montura de pared: 75 x 75; Inclinación: -2.0° (±2.0°) ~ 22.0° (±2.0°)',
    precio: 22058,
    imagen: pcGamer,
  },
  {
    id: 2,
    slug: 'pc-hp-oficina',
    nombre: 'PC HP Oficina',
    detalles: 'Rendimiento fiable reacondicionado',
    detallesTecnicos:
      'Blair Technology Group HP 6200 Elite - computadora de sobremesa, Intel Core i5 de 3,1 GHz, RAM de 8 GB, Disco Duro de 1 TB, DVDRW, Monitor LCD de 19 Pulgadas, WiFi, Windows 10 (Reacondicionado)',
    descripcion:
      'PC para oficina con procesador Intel Core i5, 8GB de RAM, 500GB de almacenamiento y tarjeta gráfica integrada',
    precio: 3200,
    imagen: pcOficina,
  },
  {
    id: 3,
    slug: 'mac-studio',
    nombre: 'Mac Studio',
    detalles: 'Potencia creativa sin límites',
    detallesTecnicos:
      'Mac Studio CPU de 12 núcleos GPU de 30 núcleos Neural Engine de 16 núcleos',
    descripcion:
      'PC diseñado para edición de video con procesador AMD Ryzen 7, 32GB de RAM, 2TB de almacenamiento SSD y tarjeta gráfica NVIDIA GeForce RTX 3070',
    precio: 45999,
    imagen: pcVideo,
  },
  {
    id: 4,
    slug: 'lenovo-ideacentre',
    nombre: 'Lenovo IdeaCentre',
    detalles: 'Todo en uno eficiente',
    detallesTecnicos:
      'Lenovo All in One IdeaCentre AIO 3 24IAP7 Intel Celeron 7305 RAM 8GB SSD 256GB Disco Duro de 1TB Windows 11 Home',
    descripcion:
      'PC todo en uno con procesador Intel Core i5, 8GB de RAM, 1TB de almacenamiento y tarjeta gráfica integrada',
    precio: 8589,
    imagen: pcTodo,
  },
  {
    id: 5,
    slug: 'pc-mini',
    nombre: 'PC Mini',
    detalles: 'Compacto y potente',
    detallesTecnicos:
      'Beelink Mini PC, Mini S Intel 11th Gen 4-Cores N5095, Mini computadora de Escritorio 8GB DDR4 RAM 128GB SSD, Mini computadora Dual HDMI 4K UHD/Gigabit Ethernet/Dual WiFi/BT4.0/HTPC/Family- NAS',
    descripcion:
      'PC mini con procesador Intel Core i3, 4GB de RAM, 256GB de almacenamiento y tarjeta gráfica integrada',
    precio: 2999,
    imagen: pcMini,
  },
  {
    id: 6,
    slug: 'pc-streaming',
    nombre: 'PC Streaming',
    detalles: 'Optimizado para streaming',
    detallesTecnicos:
      'XTREME PC GAMING MSI AMD Radeon Vega Renoir Ryzen 7 5700G 16GB SSD 500GB 3TB WiFi',
    descripcion:
      'PC optimizado para streaming con procesador Intel Core i9, 32GB de RAM, 1TB SSD y tarjeta gráfica NVIDIA GeForce RTX 3080, incluye tarjeta de captura 4K',
    precio: 7999,
    imagen: pcStreaming,
  },
];
