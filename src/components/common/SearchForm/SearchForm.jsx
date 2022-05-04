export const SearchForm = () => {

    return (

        <form className="d-flex" noValidate autoComplete="off">
            <input className="form-control me-2" type="search" placeholder="Buscar país..." aria-label="Search" />
            <button className="btn btn-warning" type="submit">Buscar</button>
        </form>

    );

}
