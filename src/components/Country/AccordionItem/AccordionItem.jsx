export const AccordionItem = ({ id, title, text, accordionId, hasBorders }) => {

    return(
      <div className="accordion-item">
  
        <h2 className="accordion-header" id={ `title-${ id }` }>
          <button className={ 'accordion-button ' + ( hasBorders ? 'collapsed' : '' ) } type="button" data-bs-toggle="collapse" data-bs-target={ `#${ `collapse-${ id }` }` } aria-expanded="true" aria-controls={ `collapse-${ id }` }>
            { title }
          </button>
        </h2>
  
        <div 
          id={ `collapse-${ id }` }
          className={ 'accordion-collapse collapse text-dark ' + ( !hasBorders ? 'show' : '' ) } 
          aria-labelledby={ `title-${ id }` } 
          data-bs-parent={ accordionId }
        >
          <div className="accordion-body">
            { text }
          </div>
        </div>
  
      </div>
    );
    
}