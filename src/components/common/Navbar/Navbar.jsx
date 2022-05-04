import { NavLink } from 'react-router-dom';
import { ThemeIcon } from '../ThemeIcon/ThemeIcon';
import { SearchForm } from '../SearchForm/SearchForm';
import { continents, languages } from 'data';
import styles from './Navbar.module.scss';
import { ThemeContext } from 'contexts/ThemeContext';
import { useContext } from 'react';

export const Navbar = () => {

  const { theme } = useContext( ThemeContext );
  
  return (
    <nav className={ `navbar navbar-expand-md p-4 fixed-top ${ theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light' }` }> 
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

                {
                  continents.map( ({ name, route }) => (
                    <li key={ route }>
                      <NavLink
                        className={({ isActive }) => 'dropdown-item ' + (isActive ? `${styles.subActive}` : '')}
                        to={ route }
                      >
                        { name }
                      </NavLink>
                    </li>
                  ) )
                }

              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="languages-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Idiomas
              </span>
              <ul className="dropdown-menu" aria-labelledby="languages-dropdown">
                
                {
                  languages.map( ({ name, route }) => (
                    <li key={ route }>
                      <NavLink
                        className={({ isActive }) => 'dropdown-item ' + (isActive ? `${styles.subActive}` : '')}
                        to={ route }
                      >
                        { name }
                      </NavLink>
                    </li>
                  ) )
                }
                
              </ul>
            </li>

            <li className={ `nav-item m-md-0 mx-md-4 d-md-flex justify-content-md-center align-items-md-center` }>
              <ThemeIcon />
            </li>

          </ul>

          <SearchForm />

        </div>

      </div>
    </nav>
  );
  
}