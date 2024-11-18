import { useDispatch, useSelector } from 'react-redux';
import { PaginationWrap } from './PaginationStyle';
import { currentPage, firstPage, lastPage, nextPage, prevPage, totalData } from '../../store/modules/pagenationSlice';
import { useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
const Pagination = () => {
    const {customerData} = useSelector((state)=>state.customer)
    const {noticeData} = useSelector((state)=>state.notice)
    const {currPage, totalPage} = useSelector((state)=>state.pagenation)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(totalData())
    }, [customerData, noticeData])

    const selectPage=(idx)=>{
        if(idx>=1 && idx <= totalPage && idx !==currPage){
            dispatch(currentPage(idx))
        }
    }
    const arr = [...Array(totalPage)]
    return (
        <PaginationWrap>
            <div>
            <button onClick={()=>dispatch(firstPage())}><FaAnglesLeft /></button>
            <button onClick={()=>dispatch(prevPage())}><FaAngleLeft /></button>
            {
                arr.map((_, i)=><button key={i} className={currPage===i+1?'on':''} onClick={()=> selectPage(i+1)}>{i+1}</button>)
            }
            <button onClick={()=>dispatch(nextPage())}><FaAngleRight /></button>
            <button onClick={()=>dispatch(lastPage())}><FaAnglesRight /></button>
            </div>
        </PaginationWrap>
    );
};

export default Pagination;
