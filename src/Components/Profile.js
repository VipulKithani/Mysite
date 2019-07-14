import React,{Component} from 'react';
import {Tabs,Tab,Grid,Cell,Icon,FABButton,Card,CardText,CardTitle,CardActions,IconButton,Button,CardMenu} from 'react-mdl'

class Profile extends Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0};
    }
    changeTab=(tabId)=>(
        this.setState({
            activeTab: tabId
        })
    )
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className='project-grid'>
                    <Card shadow={0} style={{width: '379px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
            My first Project
            </CardText>
            <CardActions border>
            <Button colored>Get Started</Button>
            <Button colored>Get Started</Button>
            <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
            </Card>

            <Card shadow={0} style={{width: '379px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
            My Second Project
            </CardText>
            <CardActions border>
            <Button colored>Get Started</Button>
            <Button colored>Get Started</Button>
            <Button colored>Get Started</Button>
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" href='https://google.com'/>
            </CardMenu>
            
            </Card>

            <Card shadow={0} style={{width: '379px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
            My Third Project
            </CardText>
            <CardActions border>
            <Button colored>Get Started</Button>
            <Button colored>Get Started</Button>
            <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
            </Card>

                </div>
            
            );
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Second</h1></div>
            );
        }
        else{
            return(
                <div><h1>This is Third</h1></div>
            );
        }
        
    }
    render(){
        return(
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={this.changeTab} ripple>
                    <Tab>First</Tab>
                    <Tab>Second</Tab>
                    <Tab>Third</Tab>
                </Tabs>
                <div >
                    <Grid >
                        <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>
                    
                </div>
                
            </div>
        );
    }
}
export default Profile;