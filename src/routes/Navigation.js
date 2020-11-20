import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";
function Navigation(){
    return (<div className="navigation">
        <Link to ="/" className="linkToHome">Home</Link>
        <Link to="/about" className="linkToAbout">About</Link>
        {/* a href와 달리 리액트를 죽이지 않으면서, 각각의 라우터들의 뷰를 정확하게 가져온다*/}
    </div>
    );
}

export default Navigation;