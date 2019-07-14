import React, { Component } from 'react';
import { Card,CardTitle,CardActions,CardText,CardMenu,IconButton, Grid, Cell,Button } from 'react-mdl';
import Column from './Column';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid2">
          
            

            <div>
            
                <Card shadow={0} style={{width: '256px', height: '256px', background: 'url(https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/46495925_2102218823207227_722988977560223744_n.jpg?_nc_cat=104&_nc_oc=AQmzIVHzOEJrFD30cLVSribmvpVvOQhHjhwQyd38_rrdm8giU8xEMaKe4an7HwOumoI&_nc_ht=scontent-bom1-1.xx&oh=d151dca34104e8677fa47b3e116626a0&oe=5DB82B9B) center / cover', margin: '10px'}}>
                <CardTitle expand />
                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                Vipul Kithani
                </span>
                </CardActions>

                </Card>

                <Card shadow={0} style={{width: '512px',height: '256px', margin: '-264px 0px 0px 280px'}}>
                
                <CardText >
                    <p className='card1'>
                
                <table>
                    <tbody>
                        <Column/>
                    </tbody>
                 </table>
                </p>
                </CardText>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
              
              


            </div>
          
        </Grid>
      </div>
    )
  }
}

export default Landing;
