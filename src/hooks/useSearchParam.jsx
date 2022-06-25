// import { useLocation } from 'react-router-dom';
// import queryString from 'query-string';

// export const useSearchParam = path => {

//     const location = useLocation();
//     const { search } = queryString.parse( location.search );
//     const route = search ? `${ path }?search=${ search }` : path; 

//     // METER ESTO EN UN CUSTOM HOOK, PORQUE LO USA ESTE ARCHIVO Y TAMBIÉN LO VA A USAR EL SEARCH PAGE, ADEMÁS ES LO MÁS ESCALABLE. EL CUSTOM HOOK VA A RETORNAR TODA LA RUTA DIRECTA A DONDE TIENE QUE REDIRIGIR.

//     console.log( route );
    
//     return route;

// }
