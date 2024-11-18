import { AboutWrap } from './style';

const About = () => {
    return (
        <AboutWrap>
            <div className="inner">
                {/* <h2>About 페이지 입니다</h2> */}
                <div className="contents">
                    <div className="contact_img">
                        <img src="../images/sinoon1.png" alt="" />
                    </div>
                    <div className="contact_top">
                    <p>브랜드 ‘SINOON’은 우리들의 자연스러운 로망의 무드를 만들어 나갑니다.<br/>
                    주변의 일상 모티브나 다양한 회화작업과 영상, 오브제 등 영감을 받아<br/>
                    그것을 서울의 무드로 재해석하고 있습니다.<br/>
                    또한 ‘SINOON’의 작업물들이 일상에서 그러한 힘을 가지길 바랍니다.<br/></p>
                    <br/>
                    <br/>
                    <br/>
                    <p>‘SINOON’ creates a romantic and easy style for women in Seoul.<br/>
                    We are inspired by various fine artworks, films, and objects<br/>
                    each season and reinterpret them to go with the mood of Seoul.<br/>
                    We wish our work can emit warmth, joy,and natural in<br/>
                    every ‘SINOON’ women daily life.<br/></p>
                    </div>
                    </div>
                    
                    
                </div>
        </AboutWrap>
    );
};

export default About;
