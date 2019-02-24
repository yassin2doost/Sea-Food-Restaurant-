import React, { Component} from 'react';


class Fish extends Component {
    render() {
        return(
            <li className="menu-fish">
              <img src={this.props.details.image} alt={this.props.details.name}/>
              <h3 className="fish-name">  {this.props.details.name } </h3>
             
            </li>
        )
    }
}


export default Fish;