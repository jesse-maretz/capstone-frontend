import React, { Component } from 'react'
import './../style/TrendingStory.css'

class TrendingStory extends Component{
    constructor(props){
        super(props)
        this.state = {
            feed: []
        }
    }



    componentDidMount = () => {
        let url = "http://newsapi.org/v2/everything?q=climate-change&from=2020-11-09&sortBy=publishedAt&apiKey=26d0575e08314d76855c5f4e867d9a6b"
        fetch(url)
            .then(res => res.json())
            .then(news => {
                this.setState({feed: news.articles})
                console.log(this.state.feed)
            })
    }



    render(){
        return(
            <div className="stories">
                <h1>This is TrendingStory</h1>
                {
                    this.state.feed.length ?
                    this.state.feed.map((news, i)=>{
                        console.log(news)
                        return <div key={i}>
                            {news.title}<br/>
                            <br/>
                        </div>
                    }) : ""
                }
            </div>
        )
    }
}


export default TrendingStory