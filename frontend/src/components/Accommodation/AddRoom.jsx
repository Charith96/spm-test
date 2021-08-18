import React, { Component } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './AccStyles.css';


export default class AddRoom extends Component {

    constructor(props){
        super(props);
        this.state={
            accommodations:[],
            accName:"",
            roomNo: Number,
            noOfBeds: Number,
            airCondition:"",
            price: Number,
            description:""            
        }        

    }

    //handle input feild
    handleNameChange=(e)=>{
        this.setState({ accName: e.target.value });
    }

    handleRoomNoChange=(e)=>{
        this.setState({ roomNo: e.target.value });
    }

    handleNoOfBedsChange=(e)=>{
        this.setState({ noOfBeds: e.target.value });
    }

    handleConditionChange=(e)=>{
        this.setState({ airCondition: e.target.value });
    }    

    handlePriceChange=(e)=>{
        this.setState({ price: e.target.value });
    }    

    handleDescriptionChange=(e)=>{
        this.setState({ description: e.target.value });
    } 

    //calling the accommodation api
    componentDidMount(){
        this.retrieveAccommodations();
    }
    
    //display accommdation
    retrieveAccommodations(){
        axios.get('http://localhost:8070/accommodation/').then(res => {
            if(res.data.success){
                this.setState({
                    accommodations:res.data.existingAccommodations
                });
                console.log(this.state.accommodations)
            }
        });
    }
   

    onSubmit=(e)=>{
        e.preventDefault();
        const {accName,roomNo,noOfBeds,airCondition,price,description}=this.state;
        const data={
            accName:accName,
            roomNo:roomNo,
            noOfBeds:noOfBeds,
            airCondition:airCondition,
            price:price,
            description:description            
        }

        axios.post("http://localhost:8070/room/add",data).then((res)=>{
            if(res.data.success){
                toast.success('Room no '+this.state.roomNo+' added Successful !');
                this.setState(
                    {
                        accName:"",
                        roomNo: Number,
                        noOfBeds: Number,
                        airCondition:"",
                        price: Number,
                        description:"" 
                    }
                )
            }else{
                toast.error("You have an Error in Inserting");
            }
        });
    };


    render() {
        return (
            <div className="container containerTop">
                <div className="row">
                    <div className="col-2"/>
                    <div className="col-10">
                        <div className="row">
                            <div className="col position-relative link">
                                <p><a href="/Accommodation_Home/">Accommodation Management</a> {'>'} <a href="/Accommodation_Home/Rooms/">Rooms</a> {'>'} Add Room</p>
                            </div>                        
                        </div>
                        <div className="row">
                            <div className="col-9 position-relative">
                                <h2>Add Room</h2>
                                <ToastContainer/>
                            </div>
                            <hr className="hr" style={{ height: '2px', color: '#0a90e8' }} />                        
                        </div>
                        <div className="shadowBoxForm">
                            <div className="row">
                                <div className="col-6 form">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-row">
                                            <div className="form-group col" style={{marginTop:'15px'}}>
                                                <label>Accommodation Name : </label>
                                                <select id="type" className="form-control" name="type" onChange={this.handleNameChange} value={this.state.accName} style={{marginTop:'10px'}} required>
                                                    <option selected>Choose accommodation...</option>
                                                    {this.state.accommodations.map((accommodations) => (
                                                        <option value={accommodations.name} required>{accommodations.name}</option>                                                
                                                    ))}
                                                </select>
                                            </div>   
                                            <div className="form-group col" style={{marginTop:'15px'}}>
                                                <label>Room No : </label>
                                                <input type="text" className="form-control" placeholder="#10XXX" onChange={this.handleRoomNoChange} value={this.state.roomNo} style={{marginTop:'10px'}} required/>
                                            </div>                                 
                                            <div className="form-group col" style={{marginTop:'15px'}}>
                                                <label>Number of Beds : </label>
                                                <input type="number" className="form-control" id="noOfRooms" name="noOfRooms" placeholder="#2" onChange={this.handleNoOfBedsChange} value={this.state.noOfBeds} style={{marginTop:'10px'}} required/>
                                            </div>                                 
                                            <div className="form-group col" style={{marginTop:'15px'}}>
                                                <label>Air Condition : </label>
                                            </div>                             
                                            <div className="radio">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="condition" id="condition"  onChange={this.handleConditionChange}  value="AC"  style={{marginTop:'10px'}} required />
                                                    <label class="form-check-label" for="inlineRadio1">AC</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="condition" id="condition"  onChange={this.handleConditionChange}  value="Non-AC" style={{marginTop:'10px'}}  required />
                                                    <label class="form-check-label" for="inlineRadio2">Non-AC</label>
                                                </div>  
                                            </div>                                                                                                                                           
                                            <div className="form-group col" style={{marginTop:'15px'}}>
                                                <label>Price per Day : </label>
                                                <input type="number" className="form-control" id="telNum" name="telNum" placeholder="#Rs: XXX.XX" onChange={this.handlePriceChange} value={this.state.price} style={{marginTop:'10px'}} required/>
                                            </div> 
                                            <div className="form-group col" style={{marginTop:'15px'}}>
                                                <label>Description : </label>
                                                <input type="textarea" className="form-control" placeholder="#XXXXXXXXX" onChange={this.handleDescriptionChange} value={this.state.description} style={{marginTop:'10px'}}  required/>
                                            </div>                                                                              
                                        </div>
                                        <div className="row">
                                        <div className="form-group btndriver col-12"  style={{marginTop:'15px'}}>
                                            <div className="form-group col"  style={{marginTop:'15px'}}>	              		
                                                <button type="submit" className="btn btn-success acc-button" ><i className="far fa-save"></i>&nbsp;Save</button>&nbsp;&nbsp;
                                                <button type="reset" className="btn btn-primary acc-button"><i class="fas fa-eraser"></i>&nbsp;Clear</button>	              			
                                            </div>
                                            <div className="form-group col"  style={{marginTop:'15px'}}>
                                            <a href="/Accommodation_Home/Rooms/" className="btn btn-danger acc-button"><i className="fas fa-times"></i>&nbsp;Cancel</a>
                                            </div>              			
                                        </div>
                                        <div className="col-6"/>
                                    </div>                                    
                                    </form>
                                </div>
                                <div className="col-6 accImage">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
