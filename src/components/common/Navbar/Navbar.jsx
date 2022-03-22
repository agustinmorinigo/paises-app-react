import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss';

export const Navbar = () => {

  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark p-4">
      <div className="container-fluid">

        <NavLink className="navbar-brand" to="/">Countries App</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 'nav-link ' + (isActive ? `${ styles.active }` : '')}
                to="/"
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="continents-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Continentes
              </span>
              <ul className="dropdown-menu" aria-labelledby="continents-dropdown">

                <li>
                  <NavLink 
                    className={({ isActive }) => 'dropdown-item ' + (isActive ? `${ styles.subActive }` : '')}
                    to="continent/americas"
                  >
                    América
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className={({ isActive }) => 'dropdown-item ' + (isActive ? `${ styles.subActive }` : '')}
                    to="continent/europe"
                  >
                    Europa
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className={({ isActive }) => 'dropdown-item ' + (isActive ? `${ styles.subActive }` : '')}
                    to="continent/africa"
                  >
                    África
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className={({ isActive }) => 'dropdown-item ' + (isActive ? `${ styles.subActive }` : '')}
                    to="continent/asia"
                  >
                    Asia
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className={({ isActive }) => 'dropdown-item ' + (isActive ? `${ styles.subActive }` : '')}
                    to="continent/oceania"
                  >
                    Oceanía
                  </NavLink>
                </li>

              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="languages-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Idiomas
              </span>
              <ul className="dropdown-menu" aria-labelledby="languages-dropdown">
                <li>
                  <NavLink 
                    className={({ isActive }) => 'dropdown-item ' + (isActive ? `${ styles.subActive }` : '')}
                    to="/language/spa"
                  >
                    Español
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className={({ isActive }) => 'dropdown-item ' + (isActive ? `${ styles.subActive }` : '')}
                    to="/language/eng"
                  >
                    Inglés
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className={({ isActive }) => 'dropdown-item ' + (isActive ? `${ styles.subActive }` : '')}
                    to="/language/fra"
                  >
                    Francés
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className={({ isActive }) => 'dropdown-item ' + (isActive ? `${ styles.subActive }` : '')}
                    to="/language/zho"
                  >
                    Chino
                  </NavLink>
                </li>
              </ul>
            </li>

          </ul>

          <form className="d-flex" noValidate autoComplete="off">
            <input className="form-control me-2" type="search" placeholder="Buscar país..." aria-label="Search" />
            <button className="btn btn-warning" type="submit">Buscar</button>
          </form>

        </div>

      </div>
    </nav>
  );
  
}
