import pcGamer from '/public/imagenes/pc/pcGamer.png';
import pcOficina from '/public/imagenes/pc/pcOficina.png';
import pcTodo from '/public/imagenes/pc/pcTodo.png';
import pcMini from '/public/imagenes/pc/pcMini.png';
import pcVideo from '/public/imagenes/pc/pcVideo.png';
import pcStreaming from '/public/imagenes/pc/pcStreaming.png';

export const monitoresProductos = [
  {
    id: 1,
    slug: 'skytech-pc-gamer',
    nombre: 'Skytech PC Gamer',
    detalles: 'Potencia gráfica ininterrumpida',
    detallesTecnicos:
      'Skytech Shiva Gaming PC Desktop–Intel Core i7 12700F 2.1 GHz, NVIDIA RTX 4060, 1TB NVME SSD, 16GB DDR4 RAM 3200, 650W Gold PSU, 240mm AIO, 11AC Wi-Fi, Windows 11 Home 64-bit',

    descripcion:
      "Procesador de CPU Intel Core i7 12700F 2.1GHz (4.9GHz Max Boost) | SSD NVME de 1TB – hasta 30 veces más rápido que el disco duro tradicional Tarjeta gráfica NVIDIA Geforce RTX 4060 de 8 GB GDDR6 (la marca puede variar) | 16 GB DDR4 RAM 3200 memoria para juegos con disipador de calor | Windows 11 Home 64 bits 802.11 AC | Sin Bloatware | Las opciones de salida gráfica incluyen 1 HDMI y 1 puerto de visualización garantizado, los puertos adicionales pueden variar | Puertos USB incluyendo puertos 2.0, 3.0 y 3.2 Gen1 | Audio HD y micrófono | Teclado y mouse para juegos gratuitos 3 ventiladores de anillo RGB para un máximo flujo de aire | Skytech SHIVA Gaming Case con vidrio templado, color blanco. Montado en los Estados Unidos Este potente PC para juegos es capaz de ejecutar todos tus juegos favoritos como Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PlayerunKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New World, Minecraft, Elden Ring, Rocket Leotardo ague, The Division 2, y más en ajustes Ultra, resolución detallada de 1440p Quad HD y juego fluido de más de 60 FPS",
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
