import React from 'react';

const Tweet = React.createClass({
  getDefaultProps: function() {
    return {
      tweet: 'This is default tweet' //tweet={tweet} if this is not passed in line 41 in app.js
    }
  },
  render: function() {
    return (
      <div>
      This is a tweet:
      <div>{this.props.tweet}</div>
      <button onClick={this.props.onDelete}>Delete</button>
      </div>
      )
  }
})

export default Tweet
