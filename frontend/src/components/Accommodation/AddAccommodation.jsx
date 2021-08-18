import React, { Component } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './AccStyles.css';

export default class AddAccommodation extends Component {

    constructor(props){
        super(props);
        this.state={
            accommodationType:"",
            name:"",
            noOfRomm:Number,
            mobile:Number
        }
    }

    handleTypeChange=(e)=>{
        this.setState(
            {accommodationType: e.target.value});
    }

    handleNameChange=(e)=>{
        this.setState({ name: e.target.value, });
    }

    handleRoomNoChange=(e)=>{
        this.setState({ noOfRomm: e.target.value, });
    }

    handleMobileChange=(e)=>{
        this.setState({ mobile: e.target.value });
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const {accommodationType,name,noOfRomm,mobile}=this.state;
        const data={
            accommodationType:accommodationType,
            name:name,
            noOfRomm:noOfRomm,
            mobile:mobile
        }

        axios.post("http://localhost:8070/accommodation/add",data).then((res)=>{
            if(res.data.success){
                toast.success("New Accommodation Added");
                this.setState(
                    {
                        accommodationType:"",
                        name:"",
                        noOfRomm:Number,
                        mobile:Number                        
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
                                <p><a href="/Accommodation_Home/">Accommodation Management</a> {'>'} <a href="/Accommodation_Home/Accommodation/">Accommodation</a> {'>'} Add Accommodation</p>
                            </div>                        
                        </div>
                        <div className="row">
                            <div className="col-9 position-relative">
                                <h2>Add Accommodation</h2>
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
                                                <label>Accommodation type : </label>
                                                <select id="type" className="form-control" name="type" onChange={this.handleTypeChange} value={this.state.accommodationType} required>
                                                    <option selected>Choose type...</option>
                                                    <option value="Hotel">Hotel</option>
                                                    <option value="Motels">Motels</option>
                                                    <option value="Gest House">Gest House</option>
                                                    <option value="Apartment">Apartment</option>
                                                    <option value="Luxury Lodges">Luxury Lodges</option>
                                                </select>
                                            </div>   
                                            <div className="form-group col" style={{marginTop:'15px'}}>
                                                <label>Accommodation Name : </label>
                                                <input type="text" className="form-control" placeholder="#River side" onChange={this.handleNameChange} value={this.state.name}  required/>
                                            </div>                                 
                                            <div className="form-group col" style={{marginTop:'15px'}}>
                                                <label>Number of Rooms : </label>
                                                <input type="number" className="form-control" id="noOfRooms" name="noOfRooms" placeholder="#20.." onChange={this.handleRoomNoChange} value={this.state.noOfRomm} required/>
                                            </div>                                 
                                            <div className="form-group col" style={{marginTop:'15px'}}>
                                                <label>Telephone Number : </label>
                                                <input type="number" className="form-control" id="telNum" name="telNum" placeholder="011456XXXX" onChange={this.handleMobileChange} value={this.state.mobile} required/>
                                            </div>                                 
                                        </div>
                                        <div className="row">
                                        <div className="form-group btndriver col-12"  style={{marginTop:'15px'}}>
                                            <div className="form-group col"  style={{marginTop:'15px'}}>	              		
                                                <button type="submit" className="btn btn-success acc-button" ><i className="far fa-save"></i>&nbsp;Save</button>&nbsp;&nbsp;
                                                <button type="reset" className="btn btn-primary acc-button"><i class="fas fa-eraser"></i>&nbsp;Clear</button>	              			
                                            </div>
                                            <div className="form-group col"  style={{marginTop:'15px'}}>
                                            <a href="/Accommodation_Home/Accommodation/" className="btn btn-danger acc-button"><i className="fas fa-times"></i>&nbsp;Cancel</a>
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
