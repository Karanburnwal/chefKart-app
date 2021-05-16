import React, { Component } from 'react'
import data from './data'

const RoomContext=React.createContext();


class RoomProvider extends Component {
    state={
        subData:[],
        cond:true,
        nav:0
    }
    componentDidMount(){
        let temp_sub=[];
        temp_sub.push(data[0]);
        temp_sub.push(data[1]);
        this.setState({
            subData:temp_sub
        })
    }
    addSubscription=(index)=>{
        console.log(index);
        let temp_sub=[...this.state.subData];
        temp_sub.push(data[index]);
        this.setState({
            subData:temp_sub
        })

    }

    changeNav=(val)=>{
        this.setState({nav:val})
    }

    render() {
        return (
            <div>
                <RoomContext.Provider value={{...this.state,addSubscription:this.addSubscription,changePage:this.changePage,changeNav:this.changeNav}}>
                        {this.props.children}
                    </RoomContext.Provider>
            </div>
        )
    }
}

const RoomConsumer=RoomContext.Consumer
export {RoomProvider,RoomConsumer,RoomContext}