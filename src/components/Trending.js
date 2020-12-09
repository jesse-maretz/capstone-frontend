import React, { Component } from 'react'
import TrendingStory from './TrendingStory'

class Trending extends Component{
    constructor(props){
        super(props)
        this.state = {
            feed: []
        }
    }






    render(){
        return(
            <div>
                <h1>This is Trending</h1>
                <TrendingStory />
            </div>
        )
    }
}


export default Trending