import styles from './Title.module.scss';

export const Title = ({ children }) => {

    return(
        <h1 className={ `text-uppercase text-center display-3 fw-bold mb-5 pb-5 animate__animated animate__bounceIn animate__faster ${ styles.title }` }>
            {/* { showIcons && <i className="d-none d-xl-inline-block fa-solid fa-earth-americas"></i> } */}
            <span className="d-inline-block mx-5">{ children }</span>
            {/* { showIcons && <i className="d-none d-xl-inline-block fa-solid fa-earth-americas"></i> } */}
        </h1>
    );
    
}