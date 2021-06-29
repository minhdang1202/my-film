import React, { useEffect, useState } from 'react'
import Pagis from './Pagis';
const Pagination = (props) => {

    const info = props.match.params.name;

    const [data,setData] = useState([]);
    const[currentPage,setCurrentPage] = useState(1);
    var postsPerPage;
    if(window.innerWidth >= 769){
        postsPerPage = 20;
    } else if(window.innerHeight >= 415){
        postsPerPage = 18
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const name = info;
    var titleName = '';
    const createFilm = (film , theloai , index) => {
        return <a href = {`/my-film/#/film/${theloai}&${film.title}&${index}`} className = 'film-data'>
                <img src = {film.imageUrl} alt = {film.title}></img>
                <h3>{film.title}</h3>
            </a>
    }

    var Phimle = fetch('assets/phimle.json')
            .then(reponse => reponse.json());
    var Phimbo = fetch('assets/phimbo.json')
            .then(reponse => reponse.json());
    var Phimchieurap = fetch('assets/phimchieurap.json')
            .then(reponse => reponse.json());
    var Phimhoathinh = fetch('assets/phimhoathinh.json')
            .then(reponse => reponse.json());
    
    var phim = Phimle;
    
    switch(info){
        case 'phimbo':
            phim = Phimbo;
            titleName = 'PHIM BỘ';
            break;
        case 'phimle':
            phim = Phimle;
            titleName ='PHIM LẺ';
            break;
        case 'phimhoathinh':
            phim = Phimhoathinh;
            titleName ='PHIM HOẠT HÌNH';
            break;
        case 'phimchieurap':
            phim = Phimchieurap;
            titleName ='PHIM CHIẾU RẠP';
            break;
        default:
            phim = Phimle;
            break;
    }

    const paginate = (pageNumber) => setCurrentPage((pageNumber));

    const renderData = (data) =>{
        return(
            <ul className = 'phim-container'>
                {data.map((todo,index)=>{
                    return <li key ={index}>{createFilm(todo,name,index)}</li>
                })}
            </ul>
        )
    }

    useEffect(()=>{
        phim
            .then(json => setData(json))
    },[])
    return (
        <section className = 'phim'>
            <h1>{titleName}</h1>
            <span>Mới cập nhật</span>
            {renderData(currentPosts)}
            <Pagis postsPerPage={postsPerPage} totalsPosts={data.length} paginate = {paginate} currentPage = {currentPage}
               name = {name}
            />
        </section>
    )
}

export default Pagination
