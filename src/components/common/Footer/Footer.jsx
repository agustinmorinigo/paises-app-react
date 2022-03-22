import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className='bg-dark text-light p-5'>
      <p className={ `text-center p-0 m-0 fw-bold h6 text-uppercase ${ styles.footer }` }>
        Aplicación Web desarrollada por Agustín Morinigo.
      </p>
    </footer>
  )
}
