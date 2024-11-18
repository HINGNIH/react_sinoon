import { NoticeListWrap } from './NoticeStyle';
import NoticeItem from './NoticeItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addData } from '../../store/modules/pagenationSlice';

const NoticeList = () => {
    const {noticeData} = useSelector(state=>state.notice)
    const {currPage, postsPerPage, pageData} = useSelector(state=>state.pagenation);
    const dispatch = useDispatch();
    
    const lastPost = currPage * postsPerPage;
    const firstPost = lastPost-postsPerPage;
    const currentsPosts = pageData.slice(firstPost, lastPost);

    useEffect(()=>{
        dispatch(addData(noticeData))
    }, [noticeData])
    return (
        <NoticeListWrap>
            <table className='noticeTable'>
                <caption>notice</caption>
                <colgroup>
                    <col className='num' />
                    <col className='title' />
                    <col className='date' />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentsPosts.map((item)=>
                            <NoticeItem key={item.id} item={item}/>
                        )
                    }
                    
                </tbody>
            </table>
        </NoticeListWrap>
    );
};

export default NoticeList;
