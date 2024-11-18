import NoticeList from '../../components/notice/NoticeList';
import Pagination from '../../components/pagination/Pagination';
import { NoticeWrap } from './style';

const Notice = () => {
    return (
        <NoticeWrap>
            <div className='inner'>
                <h2>공지사항</h2>
                <NoticeList />
                <Pagination />
            </div>
        </NoticeWrap>
    );
};

export default Notice;
