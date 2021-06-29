import React, {useEffect , useState}from 'react'
import Iframe from 'react-iframe';
import './FilmDetail.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination]);
const FilmDetail = (props) => {
    const info = props.match.params.name.split('&');
    // console.log(info)
    const [films, setFilms] = useState([])
    const [sliders,setSliders] = useState([]);
    const [episode, setEpisode] = useState([]);
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

    switch(info[0]){
        case 'phimbo':
            phim = Phimbo;
            break;
        case 'phimle':
            phim = Phimle;
            break;
        case 'phimhoathinh':
            phim = Phimhoathinh;
            break;
        case 'phimchieurap':
            phim = Phimchieurap;
            break;
        default:
            phim = Phimle;
            break;
    }
    useEffect(() => {
        phim
            .then(films => {
                const sl = []
                const slide = []
                const es = []
                let i = 0;
                films.map((film , index)=>{
                    // console.log(film)
                    if(film.episode){
                        if(film.episode[0]){
                            sl.push(
                                film.episode[0].url
                            )
                        }
                        if(film.episode.length>1 && tap !== 0){
                            sl.pop();
                            sl.push(
                                film.episode[tap].url
                            )
                        }
                    }
                    if(i<15){
                        slide.push(
                            <SwiperSlide tag = 'li' key={index}>
                                {createFilm(films[i],info[0] , i )}
                            </SwiperSlide>
                        )
                        i++;
                    }
                    if(film.episode.length >0){
                        es.push(
                            film.episode
                        )
                    }

                    return null
                })
                setFilms(sl);
                setSliders(slide);
                setEpisode(es);
            });
            
        }, [])
    
    const SetTitle =  (index ,tap) =>{
            var title ='';
            if(typeof (episode[index]) !== 'undefined') {
                if(episode[index][tap]){
                    if(episode[index][tap].episode){
                        title = episode[index][tap].episode ==='' ? '' : ` - Tập ${episode[index][tap].episode} `;
                        url = episode[index][tap].url;
                    }
                }
            }
            return (
                <h1>{info[1]}{title}</h1>
            )
        }
    var tap = 0;
    var url = films[info[2]];
    const [newTitle , setNewTitle] = useState(SetTitle(info[2] , 0));
    const [newUrl , setNewUrl] = useState(films[info[2]]);
    const [check, setCheck] = useState(true)
    const clickTap=(index , indexTap)=>{
        tap = indexTap
        setNewTitle(SetTitle(index,tap));
        setNewUrl(url)
        setCheck(false);
    }
    

    const createTapList = (index) => {
        const list = []
        if(typeof (episode[index]) !== 'undefined'){
            const duTap = episode[index][0].episode;
            episode[index].map( (film , indexII) =>{
                list.push(
                    <div className='tap-item' key={indexII} onClick = {() =>clickTap(info[2],film.episode-duTap)}>{film.episode}</div>
                )
                return null;
            })
        }
        return list;
    }
    return (
        <>
            <section className = 'film-detail'>
                <div className = 'film-container'>
                    {check ?  SetTitle(info[2] , tap)  : newTitle}
                </div>
                <div className = 'film-container'>
                    <div className = 'frame-container'>
                        <Iframe url = { check ? films[info[2]] : newUrl } className = 'frame' autoplay />
                    </div>
                </div>
                <div className = 'tap-list'>
                    {createTapList(info[2])}
                </div>
            </section>
            <section className = 'phim'>
                <h1>PHIM LIÊN QUAN</h1>
                <span>Mới cập nhật</span>
                <Swiper tag='section' wrapperTag='ul' id='main' navigation 
                    breakpoints ={{
                        415 : {
                            slidesPerView : 3,
                        },
                        769 : {
                            slidesPerView : 4
                        },
                    }}
                    loop
                    className = 'phim-container'
                >
                {sliders}
                </Swiper>

            </section>
        </>
    )
}

export default FilmDetail
