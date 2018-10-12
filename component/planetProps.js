import React from 'react'
import PropTypes from 'prop-types';



export class PlanetProps extends React.Component{
    constructor(props){
        super();
    }
    
    render(){
        // console.log(this.props)
        return <button onClick={this.props.triggerParentUpdate}>Update Parent</button>
    }
}
