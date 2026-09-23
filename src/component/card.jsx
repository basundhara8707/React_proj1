import React from 'react'
import {User} from 'lucide-react'
const Card = (props) => {
  return(
<div className="card">
<div className="top"><h3>$32/hr</h3></div>
<div className="middle">
<img src={props.image} />
<h2>{props.name}</h2>
<h4>{props.role}</h4>
<h5 id="user"><User />{props.job}</h5>
<div className="tag"><h5>{props.skill1}</h5> <h5>{props.skill2}</h5><h5>{props.skill3}</h5></div>
<p>{props.bio}</p>

</div>
<div className="bottom"><button>View Profile</button></div>




</div>



  )
}

export default Card