import { Bookmark } from 'lucide-react'
import React from 'react'

const Card = (props) => {
  return (
    
         <div className='card'>

        <div className="top">
          <div>
          <img src={props.logo} alt="" />
          </div>
          <div>
          <button> Save<Bookmark size={20} /></button>
          </div>
        </div>

        <div className="center">
          <h3>{props.company}<span>{props.date}</span></h3>
          <h2>{props.position}</h2>

          <div className='tag'><h4>{props.tag1} </h4>
          <h4>{props.tag2}</h4></div>
        </div>

        <div className="bottom">
           
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
      
        
      </div>

  )
}

export default Card