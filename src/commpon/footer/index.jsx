import { FooterWrap } from './style';

const Footer = () => {
    return (
        <FooterWrap>
            <div className='inner'>
                {/* <h2>하단로고</h2> */}
                <div className="footer_content">
                
                <div >
                    <h4>Sinoon | Creamwave</h4>
                    
                    <p>
                      · 서울시 성동구 아차산로 153 5F<br/>
                      · 5F, 153, Achasan-ro, Seongdong-gu, Seoul, Republic of Korea<br/>
                      · Business License 158-88-01946<br/>
                      · Order License 2021-서울 성동-01816<br/><br/>
                    </p>
                
                </div>
                <div >
                     <h4>Customer Center</h4>
                        <p>
                        · +82 070.4755.8410<br/>
                        · PM 2:00 - PM 5:00 (주말,공휴일 휴무)<br/>
                        · info@sinoon.kr<br/><br/>
                        Copyright © Creamwave Co. All rights reserved.
                        </p>
                </div>
            </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;
