import React, { Component } from 'react'
import data from './data'

const RoomContext=React.createContext();


class RoomProvider extends Component {
    state={
        subData:[],
        nav:0
    }
    componentDidMount(){
        let temp_sub=[];
        temp_sub.push(data[1]);
        temp_sub.push(data[7]);
        this.setState({
            subData:temp_sub
        })
    }
    addSubscription=(index)=>{
        let temp_sub=[...this.state.subData];
        let value=temp_sub.filter(member=>data[index]===member)
        if(value.length===0){
            temp_sub.push(data[index]);
            this.setState({
                subData:temp_sub,
            })
        }
    }
    removeSubscription=(name)=>{
        let temp_sub_0=[...this.state.subData];
        let temp_sub=temp_sub_0.filter((member)=>name!==member.name)
        data.map((member,index)=>{
            if(member.name===name){
                member.mark=false;
            }
        })
        // data[index].mark=false;
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
                <RoomContext.Provider value={{...this.state,addSubscription:this.addSubscription,changeNav:this.changeNav,removeSubscription:this.removeSubscription}}>
                        {this.props.children}
                    </RoomContext.Provider>
            </div>
        )
    }
}

const RoomConsumer=RoomContext.Consumer
export {RoomProvider,RoomConsumer,RoomContext}