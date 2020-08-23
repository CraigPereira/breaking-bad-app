import React from 'react';
import '../css/Searchbar.css'

const Searchbar = () => {
    return (
        <div className="container">
          <div className="col s12 l5">
            <form  className="form ">
              <div className="row">
                <div className="input-field  col s3 l4">
                    <input type="text" placeholder="Say my name" className=" left-align validate"/>       
                </div>  
              </div>           
            </form>
          </div>
        </div>
    )
}


export default Searchbar; 