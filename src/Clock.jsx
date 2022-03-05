import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    render(){
        return(
            <>
                <h1>Uhrzeit:</h1>
                <h2>Es ist {this.state.date.toLocaleTimeString('de-De')} !</h2>
            </>
        )
    }
}

export default Clock;