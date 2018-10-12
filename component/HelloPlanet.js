import React from 'react'
import PropTypes from 'prop-types';
import {PlanetProps} from './planetProps'


export class HelloPlanet extends React.Component{
    constructor(props){
        super();
        // console.log(props)
        this.state = {
            counter: 0,
            counter2: 0
        };
        this.updateThisCounter2 = this.updateThisCounter2.bind(this);

        setInterval (()=>{
            this.setState({
                counter:this.state.counter + 1
            })
        }, 1500);
    }
    updateThisCounter2(){
        this.setState({
            counter2: this.state.counter2 +1
        });
    }
    render(){
        // console.log(this.props)
        return <div>
                    <h2>happening automatically {this.state.counter}</h2>
                    <span>counter2 : {this.state.counter2}</span>
                    {/* <button onClick={() => {this.updateThisCounter2();}}>Update Counter2</button> */}
                        {/* <button onClick={this.updateThisCounter2.bind(this)}>Update Counter2</button> */}
                        <button onClick={this.updateThisCounter2}>Update Counter2</button>

                        <PlanetProps triggerParentUpdate={this.updateThisCounter2} />

                    <h1>Hey!  You are on {this.props.name} and my fav number is {this.props.myobj.myFavNumber}. Testing Default {this.props.num + 5} </h1>
                </div>
    }
}
HelloPlanet.propTypes = {
    num: PropTypes.number
};
HelloPlanet.defaultProps = {
    num: 10
};