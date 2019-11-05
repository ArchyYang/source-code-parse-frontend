import React, { Component } from "react";
import Terminal from 'terminal-in-react';


class TerminalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.commands = ["get"];
        this.getLineComments = this.getLineComments.bind(this);
        this.getBlockComments = this.getBlockComments.bind(this);
    }
    getLineComments(filename) {
      return this.props.uploadDate["lineComments"];
    }

    getBlockComments(filename) {
      return this.props.uploadDate["blockComments"];
    }
    render() {
      let that = this;
        return (
            <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width:"100%"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='white'
          style={{fontWeight: "bold", fontSize: "0.8em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: this.showMsg,
            'get-line-comments': {
              method: (args, print, runCommand) => {
                that.getLineComments(args["_"][0]).map(item => print(item["comment"]));
              },
            },
            'get-block-comments': {
              method: (args, print, runCommand) => {
                that.getBlockComments(args["_"][0]).map(item => item["blockComment"].
                  map( comment => print(comment["comment"])

                  ));
              },
            },
          }}

          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            'get-line-comments': 'to get all the line comments. For example, get-line-comments filename.extension', 
            'get-block-comments': 'to get all the block comments. For example, get-block-comments filename.extension',
            'get-TODO': 'to get the number of TODOs. For example, get-TODO filename.extension',
            'get-total-number-lines': 'to get the number of TODOs. For example, getTODO filename.extension'
          }}
          msg='You type "help" to see what commands are here.'
        />
      </div>);
    }
}

export default TerminalComponent;