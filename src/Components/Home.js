import React,{Component} from 'react';
import {Grid , Cell} from 'react-mdl'

class Home extends Component{
    render(){
        return(
            <div style={{width:'100%',height:'100%',margin:'auto'}}>
               {/* <h1 > Welcome to Home Page.</h1>
               <div className="pos">
               This is my demo project<br/><br/>
               In this Project i used routers and links to show how the pages are linked.<br/><br/>
               Also i have mentioned my description using navigation bar in about profile and etc.
                </div> */}
                <Grid className='landing-grid' >
                    <Cell col={12}>
                           
                            <img src="https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png"
                            alt='avatar'
                            className='avatar-img'
                            />
                             <p className="name">Vipul Kithani</p>
                            <div className='banner-text'>
                            
                            <h1>Front End Developer</h1>
                            <hr/>
                            <p>HTML | CSS | JS | ReactJs</p>
                            <div className="social-links">
                            {/* Youtube */}
                            <a href="https://www.youtube.com/results?search_query=vipul+kithani" rel="noopener noreffer"target="_blank">
                            <i class="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>
                            {/* Linked In */}
                            <a href="https://www.linkedin.com/in/vipul-kithani-29a0bb163/" rel="noopener noreffer"target="_blank">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            {/* Github     */}
                            <a href="https://github.com/VipulKithani/" rel="noopener noreffer"target="_blank">
                            <i class="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/vipul.kithani" rel="noopener noreffer"target="_blank">
                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                            </div>
                            </div>
                           
                           

                        </Cell>
                    </Grid>
            </div>
        );
    }
}
export default Home