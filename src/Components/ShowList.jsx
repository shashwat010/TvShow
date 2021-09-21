import React from 'react'

const ShowList = (props) => {
    const{name,type,language,showImage,premiered,showUrl}=props
    return (
        <>
           <div>
                <img style={{height:'23rem'}} src={showImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Show Type: <b>{type}</b></p>
                    <p className="card-text">Show Language: <b>{language}</b> </p>
                    <p className="card-text">Premiered Date: {new Date(premiered).toDateString()}</p>
                    <a rel="noreferrer" href={showUrl} target="_blank" className="btn btn-outline-info">Summmary</a>
                </div>
            </div> 
        </>
    )
}

export default ShowList

