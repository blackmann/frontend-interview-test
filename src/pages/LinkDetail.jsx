import React, {Component} from "react";
import axios from "axios";


class LinkDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {articles: []};
        this.getAllLinks = this.getAllLinks.bind(this);
        this.getLink = this.getLink.bind(this);
    }

    componentDidMount() {
        let _articlesLink = "https://newsapi.org/v1/articles/?source="+this.props.match.params.id;
        _articlesLink += "&apiKey=aed9659f383f4b28b6ba9d30a3cb78c0";
        axios.get(_articlesLink)
            .then((response) => {
                this.setState({articles: response.data.articles});
            })
    }

    getLink(article, index) {
        return (
            <div className="container article" key={index}>
                <h3>{article.title}</h3>
                <h6>{article.author || "Not Available" }</h6>
                <p>{article.description}</p><br/>
                <a className="button" href={article.url}>Read Full Article</a>
            </div>
        )
    }

    getAllLinks() {
        return this.state.articles.map((article, index) => {
            return this.getLink(article, index);
        })
    }

    render() {
        return (
            <div>
                <h1 className="page-title">{this.props.match.params.id ? "Articles from "+this.props.match.params.id : "Getting articles..."}</h1>
                {this.getAllLinks()}
            </div>
        );
    }
}

export default LinkDetail;