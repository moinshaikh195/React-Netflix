import react from 'react';
import './card-style.css';
import Cards from './Cards';


function CradUI(props){
    
    return(
        <>
        <div className="card text-center shadow">
            <div className="overflow">
                <img className='card-img-top' src={props.imgsrc} alt="Image Here!"/>
            </div>
            <div className='card-body text-dark'>
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-text text-secondary'>{props.sname}</p>
            <a href='#' className='btn btn-outline-success'>Watch Now</a>
        </div>
        </div> 
        </>
    );
}
export default CradUI;