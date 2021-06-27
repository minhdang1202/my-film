import React, { useState } from 'react'
import './Pagis.css'
import { Link } from 'react-router-dom';
const Pagis = (props) => {
    const pageNumbers = [];
    const {postsPerPage,totalsPosts,paginate,currentPage,name} = props;
    for(let i = 1 ; i <= Math.ceil(totalsPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
    const[pageNumberLimit] = useState(6);
    const[maxPageNumberLimit,setMaxPageNumberLimit] = useState(6);
    const[minPageNumberLimit,setMinPageNumberLimit] = useState(0);
    const [checkNext,setCheckNext] = useState(true);
    const [checkPrev,setCheckPrev] = useState(false);
    var isChangeNext = false;
    var isChangePrev = false;
    const handleNextBtn = () =>{
        if(Math.ceil(totalsPosts/postsPerPage)>pageNumberLimit){
            if(currentPage <Math.ceil(totalsPosts/postsPerPage))
                paginate(currentPage +1 );
            const du = Math.ceil(totalsPosts/postsPerPage)%pageNumberLimit;
            if(currentPage + pageNumberLimit > Math.ceil(totalsPosts/postsPerPage)-1){
                console.log('doi')
                setCheckNext(false);
                setCheckPrev(true);
            }
            else{
                setCheckNext(true);
            }
            if(currentPage +1 > maxPageNumberLimit && currentPage !=Math.ceil(totalsPosts/postsPerPage)){
                setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
                isChangeNext = true;
                setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
            }
            if(isChangeNext) {
                setCheckPrev(true);
            }
        }
    } 
    const handlePrevBtn = () =>{
        if(Math.ceil(totalsPosts/postsPerPage)>pageNumberLimit){
            if(currentPage !== 1){
                paginate(currentPage -1 );
            }
            if(currentPage - pageNumberLimit -1 <=0) {
                setCheckNext(true);
                setCheckPrev(false);
            }
            else{
                setCheckPrev(true);
            }
            if((currentPage - 1) % pageNumberLimit ==0 && currentPage !== 1){
                setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
                setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
                isChangePrev =true
            }
            if(isChangePrev){
                setCheckNext(true)
            }
        }
    } 

    return (
        <nav>
            <ul className = 'pagination'>
                <li className = 'page-item' onClick = {handlePrevBtn}><button>Prev</button></li>
                <li className = {checkPrev ? 'point-item' : 'point-item active'}>. . .</li>
                {pageNumbers.map((number , index)=>{
                    if(number < maxPageNumberLimit+1 && number > minPageNumberLimit){
                        return(
                            <li key={index}
                            onClick ={()=>paginate(number)} 
                            key = {number} id = {number} 
                            className = {currentPage !== number ? 'page-item' : 'page-item active'}  >
                                <Link  to = {`${name}`} className = 'page-link'>
                                    {number}
                                </Link>
                            </li>
                        )
                    }

                })}
                <li className = {(checkNext && Math.ceil(totalsPosts/postsPerPage)>pageNumberLimit) ? 'point-item' : 'point-item active'}>. . .</li>
                <li className = 'page-item' onClick = {handleNextBtn}><button>Next</button></li>

            </ul>
        </nav>
    )
}

export default Pagis
