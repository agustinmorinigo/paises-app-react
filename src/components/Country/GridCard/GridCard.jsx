import { Link } from 'react-router-dom';
import styles from './GridCard.module.scss';

export const GridCard = ({ region, capital, name, flags, cca3 }) => {
  // CAMBIAR EL NOMBRE DE ESTE COMPONENTE POR CountryCard

  const goToTop = () => {
      window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  return (

    <div 
      className="card w-100 h-100 p-3 rounded-2 shadow bg-light animate__animated animate__bounceIn animate__faster"
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

  )

};
