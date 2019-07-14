import React,{Component} from 'react';
import {Button,IconButton ,Textfield}from 'react-mdl'

class About extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            color:'',
            no:''
        }
    }
    changeName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    changeNo=(event)=>{
        this.setState({
            no:event.target.value
        })
    }
    changeColor=(event)=>{
        this.setState({
            color:event.target.value
        })
    }
    handleSubmit=(name,no,color)=>{
        alert("Welcome " +this.state.name+". Your contact number is "+this.state.no+". Your fav Color is "+this.state.color);
    }
    render(){
        return(
            <div >
                
                <form onSubmit={this.handleSubmit}>
                    <div >

                        <Textfield
                        
                        label="Text..."
                        style={{width: '200px'}}
                        value={this.state.name}
                        onChange={this.changeName}
                        type="text" placeholder="Enter Name"
                        />
                        <br/>
                         <Textfield
                        
                        label="Text..."
                        style={{width: '200px'}}
                        value={this.state.no}
                        onChange={this.changeNo}
                        type="text" placeholder="Enter Contact No."
                        />
                        <br/>
                         <Textfield
                        
                        label="Text..."
                        style={{width: '200px'}}
                        value={this.state.color}
                        onChange={this.changeColor}
                        type="text" placeholder="Enter Color"
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                    <IconButton name="mood" />
                    </form>
                

            </div>
        );
    }
}
export default About
