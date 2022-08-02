import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [pirat,setPirat] = useState("")
   

    function pirat1() {
        setPirat("https://www.youtube.com/embed/SBxju8HuSIQ")
        return pirat
    }

    function pirat2() {
        setPirat("https://www.youtube.com/embed/HbqM7MpuSoQ")
        return pirat
    }

    function pirat3() {
        setPirat("https://www.youtube.com/embed/TV0j8S7JUpA")
        return pirat
    }

    function pirat4() {
        setPirat("https://www.youtube.com/embed/xICp7J0kEmY")
        return pirat
    }

    function pirat5() {
        setPirat("https://www.youtube.com/embed/GQR23Ri73pE")
        return pirat
    }


    return (
        <div className='films'>
            <h1 className='pirat-title'>Pirates of the Caribbean: The Curse of the Black Pearl</h1>
            <div className='pirat'>
                <img width={300} className='img-pirat1' src="https://www.film.ru/sites/default/files/movies/posters/Pirates-of-the-Caribbean-The-Curse-of-the-Black-Pearl-4.jpg" alt="1" />
                <div className='pirat-video'>    
                    <div className='pirat-btns'>

                        <button onClick={()=>pirat1()} className="pirat-btn">1 Part</button>
                        <button onClick={()=>pirat2()} className="pirat-btn">2 Part</button>
                        <button onClick={()=>pirat3()} className="pirat-btn">3 Part</button>
                        <button onClick={()=>pirat4()} className="pirat-btn">4 Part</button>
                        <button onClick={()=>pirat5()} className="pirat-btn">5 Part</button>
                    </div>

                    {console.log(pirat)}
                    <iframe width="500" height="350" title="Пираты Карибского моря: Проклятие Черной жемчужины (2003) — русский трейлер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src={pirat}></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;