import React,{useState} from 'react'
import reactDom from 'react-dom';
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {

    const [click ,setclick] = useState(false);
    const handleClick = () => {
        if(!click){
            setclickSearch(false)
        }
        setclick(!click);
    }
    
    const [clickMode ,setclickMode] = useState(true);
    const handleClickMode = () => {
        const light = document.getElementById('root');
        reactDom.findDOMNode(light).classList.toggle('theme-light');
        setclickMode(!clickMode)
    };

    const [clickSearch,setclickSearch] = useState(false);

    const handleClickSearch = () => {
        document.getElementsByClassName('search-input')[0].value = ''
        setclickSearch(!clickSearch);
        
    }

    window.addEventListener('scroll', function(){
        const navbar = this.document.querySelector('.navbar');
        navbar.classList.toggle('sticky' , window.scrollY > 0);
    })

    
    const onKeyUp = (e) => {
        if(e.keyCode ===13){
          let text = e.target.value;
          if(!text || text.trim() ==='') return;
          window.location = `/my-film/#/timkiem/${text}`;
          e.target.value = '';
          handleNavItem();
        }
        
    }
    const handleNavItem = () => {
        setclickSearch(false);
        setclick(false);
    }

    return (
        <div className = 'header'>

            <nav className = 'navbar'>
               
                    <Link to = '/' className = 'navbar-logo'>
                        MINH DANG <span>FILM</span> <i class="fas fa-film"></i>
                    </Link>
                    <div className = 'menu-icon' onClick = {handleClick}>
                            <i className  = {click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                            <li className ='nav-item item1' onClick = {handleNavItem}>
                                <Link to = '/' className = 'nav-links '>
                                    Home
                                </Link>
                            </li>
                            <li className ='nav-item item2' onClick = {handleNavItem}>
                                <Link to = '/phimbo' className = 'nav-links'>
                                    Phim bộ
                                </Link>
                            </li>
                            <li className ='nav-item item3' onClick = {handleNavItem}>
                                <Link to = '/phimle' className = 'nav-links'>
                                    Phim lẻ
                                </Link>
                            </li>
                            <li className ='nav-item item4' onClick = {handleNavItem}>
                                <Link to = '/phimhoathinh' className = 'nav-links'>
                                    Phim hoạt hình
                                </Link>
                            </li>
                            <li className ='nav-item item5' onClick = {handleNavItem}>
                                <Link to = '/phimchieurap' className = 'nav-links'>
                                    Phim chiếu rạp
                                </Link>
                            </li>
                            <li className ='nav-item item6'>
                                <div onClick = {handleClickMode} className = 'mode'>
                                    <i className= {clickMode ? 'far fa-moon' : 'far fa-sun'}></i>
                                </div>
                            </li>
                            <li className ='nav-item item7' >
                                <div onClick = {handleClickSearch}>
                                    <i className="fas fa-search"></i>
                                </div>
                            </li>
                    </ul>
            </nav>
            <div className = {((clickSearch && click) || (clickSearch && window.innerWidth >= 769)) ? 'search active' : 'search'}>
                <i className="fas fa-search"></i>
                <input type = 'text' name='search-name' placeholder='Enter for searching .....' className = 'search-input' onKeyUp ={onKeyUp} />
            </div>
        
                
            <div className='clear'></div>
            
        </div>
    )
}

