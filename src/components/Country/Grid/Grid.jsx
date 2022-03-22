import { GridCard } from "../GridCard/GridCard";

export const Grid = ({ countries }) => {

    if( !countries ) return null;

    return(
      <div className="container-fluid">
        <div className="row">
          {
            countries.map( country => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={ country.cca3 }>
                <GridCard { ...country } />
              </div>
            ) )
          }
        </div>
      </div>
    );
    
}