import React, { Component } from 'react';
const marked=require('marked');
class App extends Component {
  constructor(){
    super();
    this.state={
      val:'',
    };
  }
  change=(e)=>{
    this.setState({
      val:e.target.value,
    })
  }
  render() {
    return (
      <div className="App container-fluid h-100">
        <div className="row text-light text-center h-100">
          <div className="col-md-6 col-sm-12 bg-primary">
            <h2 className="display-4 mb-5">Markdown input</h2>
            <div className="form-group">
              <textarea 
              name="markdown" 
              className="form-control" 
              placeholder="Enter markdown" 
              value={this.state.val} 
              onChange={this.change.bind(this)}></textarea>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 bg-dark">
            <h2 className="display-4">Markdown output</h2>
            <div className="text-left p-4" dangerouslySetInnerHTML={{__html:marked(this.state.val)}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
