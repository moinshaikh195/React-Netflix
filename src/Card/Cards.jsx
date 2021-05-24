import react from 'react';
import CardUI from './CardUI';

function Cards(props){
    return(
        <>
        <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                    <CardUI 
                        imgsrc ='https://picsum.photos/200'
                        title="A Netflix Originsl Series"
                        sname = "Dark" 
                    />
                </div>
                <div className='col-md-4'>
                    <CardUI 
                        imgsrc ='https://picsum.photos/200'
                        title="A Netflix Originsl Series"
                        sname = "Ninja" 
                    />
                </div>
                <div className='col-md-4'>
                    <CardUI 
                        imgsrc ='https://picsum.photos/200'
                        title="A Netflix Originsl Series"
                        sname = "Radhee" 
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default Cards