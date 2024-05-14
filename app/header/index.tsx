import Image from 'next/image';
import LogoImg from '../../public/imagenes/logo/logo-principal.png';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={`navbar navbar-expand-lg navbar-dark custom-header`}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand" style={{ marginLeft: '50px' }}>
          CiberEspacio
          <Image
            src={LogoImg}
            alt="Logo de la empresa"
            width={50}
            height={50}
            style={{ marginLeft: '20px' }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="container-fluid">
          <ol
            className="content row justify-content-end"
            style={{ paddingRight: '80px' }}
          >
            <li className="content__item col-auto">
              <Link className="link link--ersa fc-white" href="/catalogo">
                Catalogo
              </Link>
            </li>
            <li className="content__item col-auto ">
              <Link className="link link--ersa fc-white" href="/nosotros">
                Nosotros
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </header>
  );
};

export default Header;
