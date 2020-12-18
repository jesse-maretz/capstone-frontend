import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class TrendingStory extends Component{
    constructor(props){
        super(props)
        this.state = {
            feed: []
        }
    }



    componentDidMount = () => {
        let url = "http://newsapi.org/v2/top-headlines?q=climate&apiKey=26d0575e08314d76855c5f4e867d9a6b"
        fetch(url)
            .then(res => res.json())
            .then(news => {
                this.setState({feed: news.articles})
                console.log(this.state.feed)
            })
    }



    render(){
        return(
            <div className="trendingDiv">
                <h1>Climate change in the news</h1>
                {
                    this.state.feed.length ?
                    this.state.feed.map((news, i)=>{
                        console.log(news)
                        return <div key={i}>
                            <a href={news.url}>
                            {news.title}<br/>
                            </a>
                            <br/>
                        </div>
                    }) : ""
                }
            </div>
        )
    }
}


export default TrendingStory;