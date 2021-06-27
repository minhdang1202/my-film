import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import './Home.css'

SwiperCore.use([Navigation, Pagination]);

const Home = () => {
    const [filmsLe , setFilmsLe] = useState([])
    const [filmsHoatHinh , setFilmsHoatHinh] = useState([])
    const [filmsBo , setFilmsBo] = useState([])
    const [filmsChieuRap , setFilmsChieuRap] = useState([])

    const createFilm = (film , theloai , index) => {
        return <Link to = {`/film/${theloai}&${film.title}&${index}`} className = 'film-data'>
                <img src = {film.imageUrl}></img>
                <h3>{film.title}</h3>
            </Link>
    }

    var Phimle = fetch('../assets/phimle.json')
            .then(reponse => reponse.json());
    var Phimbo = fetch('../assets/phimbo.json')
            .then(reponse => reponse.json());
    var Phimchieurap = fetch('../assets/phimchieurap.json')
            .then(reponse => reponse.json());
    var Phimhoathinh = fetch('../assets/phimhoathinh.json')
            .then(reponse => reponse.json());

    useEffect(() => {
        Phimchieurap
            .then(films => {
                const s0 = [];
                for (let i = 0; i <= 11; i++) {
                    s0.push(
                        createFilm(films[i],'phimchieurap' , i )
                    )
                }
                setFilmsChieuRap(s0);
            });
        Phimle
            .then(films => {
                const s1 = [];
                for (let i = 0; i <= 11; i++) {
                    s1.push(
                        createFilm(films[i],'phimle' , i )
                    )
                }
                setFilmsLe(s1);
            })
        Phimhoathinh
            .then(films => {
                const s2 = [];
                for (let i = 0; i <= 11; i++) {
                    s2.push(
                        createFilm(films[i],'phimhoathinh' , i )
                    )
                }
                setFilmsHoatHinh(s2);
            })
        Phimbo
            .then(films => {
                const s3 = [];
                for (let i = 0; i <= 11; i++) {
                    s3.push(
                        createFilm(films[i],'phimbo' , i )
                    )
                }
                setFilmsBo(s3);
            })
    },[])


    const filmsMoi = [
        ...filmsLe.slice(0,3),
        ...filmsChieuRap.slice(0,3),
        ...filmsBo.slice(0,3),
        ...filmsHoatHinh.slice(0,3),
    ];

    const filmsHay = [
        ...filmsLe.slice(10,13),
        ...filmsChieuRap.slice(10,13),
        ...filmsBo.slice(10,13),
        ...filmsHoatHinh.slice(10,13),
    ]


    return (
        <>
            <section className = 'phim'>
                <h1>PHIM HAY</h1>
                <span>Mới cập nhật</span>
                <Swiper tag='section' wrapperTag='ul' id='main' navigation 
                    
                    breakpoints ={{
                        376 : {
                            slidesPerView : 1,
                        },
                        415 : {
                            slidesPerView : 3,
                        },
                        769 : {
                            slidesPerView : 4
                        }
                    }}
                    
                    loop
                    className = 'phim-container'
                >
                {filmsHay.map((film , index)=>{
                    return (
                        <SwiperSlide tag = 'li' key= {index}>
                            {film}
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </section>
            <section className = 'phim'>
                <h1>PHIM MỚI</h1>
                <span>Mới cập nhật</span>
                <div className = 'phim-container'>
                    {filmsMoi}
                </div>
            </section>
            <section className = 'phim'>
                <h1>PHIM CHIẾU RẠP</h1>
                <span>Mới cập nhật</span>
                <div className = 'phim-container'>
                    {filmsChieuRap}
                </div>
            </section>
            <section className = 'phim'>
                <h1>PHIM LẺ</h1>
                <span>Mới cập nhật</span>
                <div className = 'phim-container'>
                    {filmsLe}
                </div>
            </section>
            <section className = 'phim'>
                <h1>PHIM HOAT HÌNH</h1>
                <span>Mới cập nhật</span>
                <div className = 'phim-container'>
                    {filmsHoatHinh}
                </div>
            </section>
            <section className = 'phim'> 
                <h1>PHIM BO</h1>
                <span>Mới cập nhật</span>
                <div className = 'phim-container'>
                    {filmsBo}
                </div>
            </section>

        </>
    )
}

export default Home
