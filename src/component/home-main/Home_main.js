import React from 'react'
import './Home_main.css'

export const Home_main = () => {
    
    const hiddenInputSearch = () =>{
        var a = document.querySelector('.search');
        a.classList.toggle('active');
        
    }
    return (
        <section className = 'home-main'>
            <div className = 'home-main-container'>
                <h1>MINH ĐĂNG FILM</h1>
                <h3>Website xem phim miễn phí</h3>
                <p>Xem phim miễn phí trên các nền tản khác nhau. Xem phim online chất lượng cao tại MINH ĐĂNG FILM</p>
                <button onClick = {hiddenInputSearch}>Tìm phim</button>
                
            </div>
        </section>
    )
}
