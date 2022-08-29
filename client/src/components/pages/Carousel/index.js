import { useEffect, useState } from 'react';
import '../Carousel/style.css';
import cakepops2 from '../Carousel/CarouselPhotos/cakepops2.jpg';
import cookies from '../Carousel/CarouselPhotos/cookies.jpg';
import cupcake from '../Carousel/CarouselPhotos/cupcake.jpg';
import handpies from '../Carousel/CarouselPhotos/handpies.jpg';
import rosecake from '../Carousel/CarouselPhotos/rosecake.jpg';
import weddingcake from '../Carousel/CarouselPhotos/weddingcake.jpg';
import showermacaroons from '../Carousel/CarouselPhotos/showermacaroons.jpg';



const Carousel = () => {
    // let slideIndex = 1;
    // function showSlides(n) {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     // above creates an array of the photos
    //     let dots = document.getElementsByClassName("dot");
    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }
    //     for (i = 0; i < slides.length; i++) {
    //         // console.log("slides[i].style",slides[i].style);
    //         slides[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     console.log("slides", slides[slideIndex - 1])
    //     slides[slideIndex - 1].style.display = "block";
    //     // dots[slideIndex - 1].className += " active";
    // }
    // // Next/previous controls
    // function plusSlides(n) {
    //     // console.log("plusSlides()",slideIndex);
    //     showSlides(slideIndex += n);
    // }
    // // Thumbnail image controls
    // function currentSlide(n) {
    //     // console.log("currentSlide()",slideIndex);
    //     showSlides(slideIndex = n);
    // }
    // showSlides(slideIndex);



    useEffect(() => {
        showSlides();
       
    })
    // below code is for automated slides
    let slideIndex = 0;
    
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 2 seconds
      }

    return (
        <div>

            {/* // Slideshow container */}
            <div className="slideshow-container">

                {/* Full-width images with number and caption text */}
                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={cakepops2} alt="cakepops"style={{ height: 300, width: 400 }} />
                    <div className="text">Cake Pops</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={weddingcake} alt="weddingcake"style={{ height: 300, width: 400 }} />
                    <div className="text">Wedding Cakes</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={cookies} alt="cookies" style={{ height: 300, width: 400 }} />
                    <div className="text">Cute Cookies</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={rosecake} alt="rosecake" style={{ height: 300, width: 400 }} />
                    <div className="text">Roses Cake</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={showermacaroons} alt="macaroons" style={{ height: 300, width: 400 }} />
                    <div className="text">Shower Treats</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={cupcake} alt="cupcake" style={{ height: 300, width: 400 }} />
                    <div className="text">Cupcakes</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={handpies} style={{ height: 300, width: 400 }} />
                    <div className="text">HandPies</div>
                </div>

                {/* Next and previous buttons*/}
                {/* added the preventDefault to keep this and dots from loading before the rest of page loads */}
                {/* <a className="prev" onClick={(e) => { e.preventDefault(); plusSlides(-1) }}>&#10094;</a>
                <a className="next" onClick={(e) => { e.preventDefault(); plusSlides(1) }}>&#10095;</a> */}
            </div>

            {/* The dots/circles  */}
            {/* <div style={{ textAlign: "center" }}>
                <span className="dot" onClick={(e) => { e.preventDefault(); currentSlide(1) }}></span>
                <span className="dot" onClick={(e) => { e.preventDefault(); currentSlide(2) }}></span>
                <span className="dot" onClick={(e) => { e.preventDefault(); currentSlide(3) }}></span>
                <span className="dot" onClick={(e) => { e.preventDefault(); currentSlide(4) }}></span>
                <span className="dot" onClick={(e) => { e.preventDefault(); currentSlide(5) }}></span>
            </div> */}

        </div>

    )
}

export default Carousel