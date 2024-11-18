
import {  Routes, Route, Link, HashRouter as Router } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './commpon/Layout';
import NotFiles from './pages/notfile';
import Main from './pages/main';

import {About, Product, Notice, Cart,Join, Login, Logout,  Customer} from './pages';
import {NoticeDetail,CustomerAdd,CustomerEdit,CustomerDetail } from './components'

const App = () => {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='/about'element={<About />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/cart' element={<Cart/>} />
                        <Route path='/join' element={<Join/>} />
                        <Route path='/logout' element={<Logout/>} />
                        <Route path='/login' element={<Login/>} />

                        <Route path='/notice'>
                            <Route index element={<Notice/>}/>
                            <Route path=":noticeID" element={<NoticeDetail/>}/>
                        </Route>
                        <Route path='/customer'>
                            <Route index element={<Customer/>}/>
                            <Route path="customeradd" element={<CustomerAdd/>}/>
                            <Route path="customeredit" element={<CustomerEdit/>}/>
                            <Route path=":customerID" element={<CustomerDetail/>}/>
                        </Route>
                    </Route>

                    <Route path='*' element={<NotFiles />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
