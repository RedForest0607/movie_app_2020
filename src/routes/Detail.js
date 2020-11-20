import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            /* 리다이렉트 */
            history.push("/");
        }
    }
    render(){
        const {location}=this.props;
        if(location.state){
            console.log("page rendered succesfuly");
            return (<span style={{position:"absolute", top:"200px"}}>{location.state.title}</span>);
        } else{
            console.log("fail");
            return null;
        }
    }
}

export default Detail;