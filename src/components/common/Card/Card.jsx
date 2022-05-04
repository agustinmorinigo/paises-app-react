import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'contexts/ThemeContext';
import styles from './Card.module.scss';
import { goToTop } from 'helpers';

export const Card = ({ region, capital, name, flags, cca3 }) => {

  const { theme } = useContext( ThemeContext );

  return (

    <div 
      className={ `card w-100 h-100 p-3 rounded-2 shadow animate__animated animate__bounceIn animate__faster ${ theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark' }` }
      style={{ transition: 'background-color .3s ease, color .3s ease' }}
    >

      <div className={ `d-block w-100 ${ styles.imageContainer }` }>
        <img src={ flags?.svg || flags?.png } className="card-img-top rounded-2" alt={ name?.common || name?.official } />
      </div>

      <div className="card-body p-0 pt-3 m-0 d-flex flex-column w-100">
          <h5 className="card-title h4 mb-0">{ name?.common || name?.official }</h5>
          <p className="card-text m-0 my-2 mb-md-4">
          <span className="d-block">
              { capital?.length > 0 && <span>{ capital[0] }, </span> }
              <span className={ `${ styles.bold }` }>{ region }</span>
          </span>
          </p>
          <Link className="btn btn-warning mt-auto" to={ `/country/${ cca3 }` } onClick={ goToTop }>
              Detalles
          </Link>
      </div>
        
    </div>

  );

};
