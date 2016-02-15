//https://github.com/rackt/react-router
import React, { Component } from "react";
import Tweet from './tweet';

let App = React.createClass({

  getInitialState: function() {
    return {
      value: '',
      tweets: []
    }
  },
  handleChange: function(e){
    this.setState({
      value: e.target.value
    })
  },
  handleKeyUp: function(e) {
    if (e.key === 'Enter') {
      this.setState({
        value: '',
        tweets: this.state.tweets.concat([this.state.value])
      })
    }
  },
  handleDelete: function(index) {
    this.state.tweets.splice(index, 1);
    this.setState({
      tweets: this.state.tweets
    })
  },
  render() { //derived from value and tweets
    //this.state.value and this.state.tweets to access the aboves
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>

        <div>
        {
          this.state.tweets.map((tweet, index) => <Tweet key={index} tweet={tweet} onDelete={() => this.handleDelete(index)}/>)
        }
        </div>
      </div>
    )
  }
})

export default App;
