import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from "./upload/Upload";
import Terminal from "./terminal/Terminal";

class App extends Component{
	constructor(props) {
		super(props);
		this.state ={ filedata: []};
		this.onUploadChange = this.onUploadChange.bind(this);
	}
	
    onUploadChange = (change) => {
        this.setState({filedata: change});
    }
    render() {
    	return (
		    <div className="App">
		        <div className="Card">
		          <Upload onUploadChange={this.onUploadChange}/>
		        </div>
		        <div className="CardRight">
		          <Terminal uploadDate={this.state.filedata}/>
		        </div>
		    </div>
		  );
    }
  
}

export default App;
