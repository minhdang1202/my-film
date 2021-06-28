import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Pagis from '../pagination/Pagis';
import './Search.css'

const SearchFilm = (props) => {
    const nameSearch = props.match.params.name;
    
    const [filmsLe , setFilmsLe] = useState([])
    const [filmsHoatHinh , setFilmsHoatHinh] = useState([])
    const [filmsBo , setFilmsBo] = useState([])
    const [filmsChieuRap , setFilmsChieuRap] = useState([])
    var listFilm = [];
    
    const createFilm = (film , theloai , index) => {
        return <Link to = {`/film/${theloai}&${film.title}&${index}`} className = 'film-data'>
                <img src = {film.imageUrl}></img>
                <h3>{film.title}</h3>
            </Link>
    }

    // const [data,setData] = useState([]);
    


    var Phimle = fetch('assets/phimle.json')
            .then(reponse => reponse.json());
    var Phimbo = fetch('assets/phimbo.json')
            .then(reponse => reponse.json());
    var Phimchieurap = fetch('assets/phimchieurap.json')
            .then(reponse => reponse.json());
    var Phimhoathinh = fetch('assets/phimhoathinh.json')
            .then(reponse => reponse.json());

    useEffect(() => {
        {
            Phimchieurap 
                .then(films => {
                    const s0 = [];
                    films.map((film,index) => {
                        s0.push(
                            createFilm(film,'phimchieurap' , index )
                        )
                        return(null)
    
                    })
                    setFilmsChieuRap(s0);
                });
            Phimle
                .then(films => {
                    const s1 = [];
                    films.map((film,index) => {
                        s1.push(
                            createFilm(film,'phimle' , index )
                        )
                        return(null)
                    })
                    setFilmsLe(s1);
                })
            Phimhoathinh
                .then(films => {
                    const s2 = [];
                    films.map((film,index) => {
                        s2.push(
                            createFilm(film,'phimhoathinh' , index )
                        )
                        return(null)
                    })
                    setFilmsHoatHinh(s2);
                })
            Phimbo
                .then(films => {
                    const s3 = [];
                    films.map((film,index) => {
                        s3.push(
                            createFilm(film,'phimbo' , index )
                        )
                        return(null)
                    })
                    setFilmsBo(s3);
                })
        }
        
        
        },[])
    listFilm = listFilm.concat(filmsBo,filmsChieuRap,filmsLe,filmsHoatHinh);
    // console.log(listFilm)
  
    
    const data = [];
    listFilm.forEach(film => {
        if(film.props.children[1].props.children.toLowerCase().includes(nameSearch.toLowerCase()) ) {
            data.push(film);
        }
    })

    const[currentPage,setCurrentPage] = useState(1);
    var postsPerPage;
    if(window.innerWidth >= 769){
        postsPerPage = 20;
    } else if(window.innerHeight >= 415){
        postsPerPage = 18;
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = (pageNumber) => setCurrentPage((pageNumber));

    const renderData = (data) =>{
        return(
            <ul className = 'phim-container'>
                {data.map((todo,index)=>{
                    return <li key ={index}>{todo}</li>
                })}
            </ul>
        )
    }

    const checkResult = data.length===0?false:true;

    return (
        <section  className = 'phim'>
            <h1>KẾT QUẢ</h1>
            <span>Mới cập nhật</span>
            <h2 className = {!checkResult?'no-result':'no-result not-active'} >KHÔNG CÓ KẾT QUẢ NÀO</h2>
            {renderData(currentPosts)}
            <Pagis postsPerPage={postsPerPage} totalsPosts={data.length} paginate = {paginate} currentPage = {currentPage} name = {`/timkiem/${nameSearch}`}/>
        </section>
    )
    
}

export default SearchFilm
