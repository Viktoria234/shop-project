import React from "react";
import image1 from './images/image1.svg';
import image2 from './images/image2.svg'

const Home = () => {
    return(
        <div style={{position: 'relative'}}>
            <img style={{position:'absolute', left: '-0px', bottom: '-0px', zIndex: '1'}} src={image1} alt="1"/>
            <img style={{position:'absolute', right: '-0px', top: '-150px', zIndex:'0' ,border: 'none'}} src={image2} alt="2"/>
            <div style={{position:'relative', zIndex: "11"}} className="home">
                <h1>Добро пожаловать в наш магазин!</h1>
                <p>Тут вы можете найти разнообразные кабеля</p>
            </div>
        </div>
        
    )
    
};

export default Home;