import React from "react";
import './App.css';

function Cards(props){
    return(
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.title}</h5>
            <h6 className="card-price text-center">{props.price}<span class="period">{props.perMonth}</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i class="fas fa-check"></i></span>{props.noOfUser}</li>
              <li><span className="fa-li"><i class="fas fa-check"></i></span>{props.storageSize}</li>
              <li><span className="fa-li"><i class="fas fa-check"></i></span>{props.noOfProjects}</li>
              <li><span className="fa-li"><i class="fas fa-check"></i></span>{props.accessType}</li>
              <li className="fa-li"><span class="fa-li"><i class="fas fa-times"></i></span>{props.project}</li>
              <li className="fa-li"><span class="fa-li"><i class="fas fa-times"></i></span>{props.support}</li>
              <li className="fa-li"><span class="fa-li"><i class="fas fa-times"></i></span>{props.domain}
              </li>
              <li className="fa-li"><span class="fa-li"><i class="fas fa-times"></i></span>{props.status}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cards;