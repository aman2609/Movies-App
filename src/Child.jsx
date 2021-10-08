import React from "react";
class Child extends React.Component{
    constructor(props){
        console.log("constructor was called");
        super(props);
        this.state={on:false}
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        console.log("rendered");
        return(
            <div>
                <button onClick={()=>{
                    if(this.state.on){
                        this.setState({on:false});
                    }else{
                        this.setState({on:true})
                    }
                }}>Toggle State On</button>
            </div>
        );
    }
}
export default Child;