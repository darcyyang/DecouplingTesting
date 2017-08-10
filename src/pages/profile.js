import React,{Component} from 'react'
import Header from "../widgets/header";
import Footer from "../widgets/footer";


export default class Profile extends Component{
    render(){
        return(<div className="App">
            <Header/>
            <div id="content-body" className="color-red" >
            This is Profile info page (login success page)
            </div>
            <Footer/>
        </div>);
    }
}