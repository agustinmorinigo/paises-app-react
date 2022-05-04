import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export const ListPagination = ({ listCountries, setCurrentCountries, theme }) => {

    const itemsPerPage = 24; // ESTO VIENE POR PROP.
    const [ itemOffset, setItemOffset ] = useState( 0 );
    const [ pageCount, setPageCount ] = useState( 0 );

    useEffect( () => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentCountries( listCountries.slice(itemOffset, endOffset) );
        setPageCount( Math.ceil(listCountries.length / itemsPerPage) );
    
    }, [itemOffset, listCountries, setCurrentCountries] );
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % listCountries.length;
        setItemOffset(newOffset);
    };

    return (
        listCountries.length > itemsPerPage && 
        <ReactPaginate
            nextLabel=""
            breakLabel="..."
            previousLabel=""
            marginPagesDisplayed={ 2 }
            pageRangeDisplayed={ 3 }
            onPageChange={ handlePageClick }
            pageCount={ pageCount }
            renderOnZeroPageCount={ undefined }
            containerClassName={ `pagination text-center mt-5 ${ styles.myPagination } animate__animated animate__bounceIn animate__faster` }
            pageClassName={ 'page-item' }
            pageLinkClassName={ `page-link ${ theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark' }` }
            previousClassName={ 'page-item' }
            previousLinkClassName={ `page-link ${ theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark' }` }
            nextClassName={ 'page-item' }
            nextLinkClassName={ `page-link ${ theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark' }` }
            breakClassName={ 'page-item' }
            breakLinkClassName={ `page-link ${ theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark' }` }
            activeLinkClassName={ `border border-2 ${ theme === 'dark' ? 'border-warning' : 'border-dark' }` }
            disabledClassName={ 'opacity-50 pe-none' }
        />
    );

}