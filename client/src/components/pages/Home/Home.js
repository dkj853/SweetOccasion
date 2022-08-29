import { React } from 'react';
import '../Home/Home.css'
import Carousel from '../Carousel/index'




const Home = () => {
    return (
        <div className='HomeDiv'>

            <h1> The Sweet Occasion!</h1>
            <h3>We believe that any occasion can be a <em><b>Sweet Occasion</b></em>! </h3><br />
            <h3>By specializing in cakes, cookies, cupcakes and cakepops personalized for your wedding, shower, birthday....you name it.... event. </h3>
            <h3>Our love of baking and creating shines through, not only in our exquisite taste and flavor of our creations, but our creativity will amaze you and your guests.</h3>
            <br /> 
            <h3>We also enjoy just making things that taste good. Take a look at our order page and order something special for no reason.</h3>
            
            <div className={"carouselDiv"}>
            <Carousel />
            </div>

        </div>
    )
}
export default Home;