import { useIsIndexRoute } from "hooks/useIsIndexRoute";
import { Link, NavLink } from "react-router-dom";
import styles from './CountryNav.module.scss';


export const CountryNav = ({ cca3, borders }) => {

    const isIndexRoute = useIsIndexRoute( cca3 );
    // HACER que CountryPage no retorne todo el país, sino que solo retorne estos dos datos, porque sino estoy enviando mucha info al pedo.

    return (

        <div className="btn-group w-100 flex-wrap flex-md-column">

            <NavLink
                className={ ({ isActive }) => 'country-link btn btn-warning flex-shrink-0 m-1 m-md-0 mb-md-1 p-2 rounded ' + ( isActive && isIndexRoute ? `${ styles.myActive }` : '' )} to=""
            >
                General
            </NavLink>

            <NavLink className={ ({ isActive }) => 'country-link btn btn-warning flex-shrink-0 m-1 m-md-0 mb-md-1 p-2 rounded ' + ( isActive ? `${ styles.myActive }` : '' ) } to="geography">
                Geografía
            </NavLink>

            {
                borders && (
                    <NavLink className={ ({ isActive }) => 'country-link btn btn-warning flex-shrink-0 m-1 m-md-0 mb-md-1 p-2 rounded ' + ( isActive ? `${ styles.myActive }` : '' ) } to="borders">
                        Países limítrofes
                    </NavLink>
                )
            }

            <NavLink className={ ({ isActive }) => 'country-link btn btn-warning flex-shrink-0 m-1 m-md-0 mb-md-1 p-2 rounded ' + ( isActive ? `${ styles.myActive }` : '' ) } to="extra-info">
                Otros
            </NavLink>
            
        </div>

    );

}
