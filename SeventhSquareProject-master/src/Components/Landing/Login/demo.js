

import React, { Component } from 'react'
import axios from "axios";
export class demo extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
          posts: [],
        };
      }
      componentDidMount() {
        axios
          .get("https://api.seventhsq.com/user_profile/get_profile/",{ 'headers':{ "Authorization": "Token f35c416c44ad568f3e40ef914ee77ac5392adb8a58116c77a968bb36294c9e3f"}})
          .then((response) => {
            this.setState({ posts: response.data });
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    render() {
        return (
            <div>
                {this.state.posts.id}
            </div>
        )
    }
}

export default demo

