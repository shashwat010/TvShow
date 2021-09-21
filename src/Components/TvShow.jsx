import React,{useEffect,useState} from 'react'
import ShowList from './ShowList';

const TvShow = () => {
    const [showData, setShowData] = useState([]);
    const getShowData=async ()=>{
        const url='https://api.tvmaze.com/search/shows?q=all';
        const data=await fetch(url);
        const actualData=await data.json();
        setShowData(actualData);
    }
    useEffect(() => {
        getShowData();
    }, [])
    return (
        <>
            <h1 className="text-center text-uppercase" style={{margin:'75px 0 25px 0',fontSize: '2.2rem'}}>Tv Shows List</h1>
            <div className="container">
                <div className="row">
                    {showData.map((element, idx) => {
                        return (
                            <div className="col-md-4 my-3" key={idx}>
                                <ShowList name={element.show.name ? element.show.name : ""} type={element.show.type ? element.show.type : ""} language={element.show.language ? element.show.language : ""} showImage={element.show.image ? element.show.image.medium: `https://source.unsplash.com/514x288?${element.show.name}`} premiered={element.show.premiered} showUrl={element.show.url ? element.show.url : "NULL"}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TvShow
