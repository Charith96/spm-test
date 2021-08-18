import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//importing react components
import Dashboard from "./components/Dashboard";
import Accommodation_Home from "./components/Accommodation/AccommodationHome";
import DisplayAccommodation from "./components/Accommodation/Accommodations";
import AddAccommodation from "./components/Accommodation/AddAccommodation";
import EditAccommodation from "./components/Accommodation/EditAccommodation";
import DisplayRooms from "./components/Accommodation/Rooms";
import AddRoom from "./components/Accommodation/AddRoom";
import EditRoom from "./components/Accommodation/EditRoom";

export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        
        {/* Accommodation management start */}

        <Route path="/" exact component={Dashboard}/>
        <Route path="/Accommodation_Home/" exact component={Accommodation_Home} />
        <Route path="/Accommodation_Home/Accommodation/" exact component={DisplayAccommodation} />
        <Route path="/Accommodation_Home/Accommodation/add" exact component={AddAccommodation} />
        <Route path="/Accommodation_Home/Accommodation/edit/:id" exact component={EditAccommodation} /> 
        <Route path="/Accommodation_Home/Rooms/" exact component={DisplayRooms} /> 
        <Route path="/Accommodation_Home/Rooms/add" exact component={AddRoom} /> 
        <Route path="/Accommodation_Home/Rooms/edit/:id" exact component={EditRoom} />
         

        {/* End */}
      </div>
    </Router>
  );
}
