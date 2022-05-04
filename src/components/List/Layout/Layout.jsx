import { Card } from '../../Common/Card/Card';

export const ListLayout = ({ countries }) => {

    if( !countries ) return null;

    return(
      <div className="container-fluid">
        <div className="row">
          {
            countries.map( country => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={ country.cca3 }>
                <Card { ...country } />
              </div>
            ) )
          }
        </div>
      </div>
    );
    
}