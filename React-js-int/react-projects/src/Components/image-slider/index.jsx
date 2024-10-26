import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill , BsArrowRightCircleFill} from 'react-icons/bs'
import "./style.css"
export default function ImageSlider({url , limit = 5 , page = 1}){
    const [images , setImages] = useState([]);
    // list of images
    const [currentSlide , setCurrentSlide] = useState(0);
    // slide number
    const [errorMsg , setErrorMsg] = useState(null);
    // err msg
    const [loading , setLoading] = useState(false);
    // loading
    
    function handlePrevious(){
        setCurrentSlide( currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 )
    }
    useEffect(()=>{
        async function fetchImages(getUrl){
            try{
                setLoading(true);
                const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
                // Check if the response is OK (status 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const data = await response.json();
                    setImages(data);
                } else {
                    throw new Error("Received non-JSON response");
                }

                setLoading(false);
            }catch(e){
                setErrorMsg(e.message);
                setLoading(false);
            }
        }
        if(url !== ''){
            fetchImages(url);
        }
    },[url,limit,page]);/// dependecies can be variables  , props or functions
    // each change on the url we fetch images if the url is not empty via function fetchImages

    console.log(images);

    if (loading){
        return <div className="container">Still loading ...</div>
    }

    if (errorMsg !== null){
        return <div>Error Ocurred ! {errorMsg} </div>;
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
            {
                images && images.length ? images.map((imageItem,index)=>(
                    <img key={imageItem.id} alt={imageItem.download_url} src={imageItem.download_url} className={currentSlide === index ? "current-image" : "current-image hide-current-image"}/>
                    
                )) : null 
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    images && images.length ? images.map((_,index) => 
                        <button key={index} className={ currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"
                        }
                        onClick={() => setCurrentSlide(index)}
                        ></button>
                    ) : null
                }
            </span>
        </div>
        )
}
