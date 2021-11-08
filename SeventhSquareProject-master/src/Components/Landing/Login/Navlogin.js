import React, { Component } from 'react'
import axios from "axios";
import Cookies from 'universal-cookie';
class Navlogin extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
          posts: [],
          token:''
        };
      }
      componentDidMount() {
        const cookies = new Cookies();
        this.setState({token:"Token "+cookies.get('myToken')});
        axios
          .get("https://api.seventhsq.com/user_profile/get_profile/",{ 'headers':{ "Authorization": "Token 42b2206cc0603dd74499c5c510cd72f7d47bf01cf57c7ca391818f8b3a3a04e8"}})
          .then((response) => {
            this.setState({ posts: response.data });
          })
          .catch((error) => {
            console.log(error);
          });

      }

    render() {
        return (
            <div>
                {this.state.token}
                {console.log(this.state.token)}
            </div>
        )
    }
}

export default Navlogin;