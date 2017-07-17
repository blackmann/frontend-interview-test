import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {links: []};
        this.displayLinks = this.displayLinks.bind(this);
    }

    static getLink(id) {
        return "/"+id;
    }

    displayLinks() {
        return this.state.links.map((item, index) => {
            return (
                <li key={index}><Link to={Home.getLink(item.id)}>{item.name}</Link></li>
            );
        })
    }

    render() {
        return (
            <div>
                <h1>News API</h1>
                <h3>Gaming Category</h3>
                <ul>
                    {this.displayLinks()}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        axios.get("https://newsapi.org/v1/sources?category=gaming")
            .then((response) => {
                console.log(response.data.sources);
                this.setState({links: response.data.sources});
            })
    }
}

export default Home