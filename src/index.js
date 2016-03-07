/**
 * Created by jane on 3/5/16.
 */
// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var names = ['jane', 'joe', 'crystal'];
var titles = [
    'It\'s Work!',
    'awesome'
];
ReactDOM.render(
    <div>
        {titles}
    </div>,

    document.getElementById('example')
);

// component
// make sure first letter of class name be uppercase
// prop validation  http://facebook.github.io/react/docs/reusable-components.html
// getDefaultProps
var HelloMsg = React.createClass({
    getDefaultProps: function(){
        return {
            phone: '13512345678'
        }
    },
    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    render: function(){
        return <h1 className= {this.props.class}>hello, {this.props.name}, {this.props.phone}</h1>
    }
});

ReactDOM.render(
    <HelloMsg name = "lucy" class = "component-a" />,
    document.getElementById('classDemo')
);



// this.props.children
// having no child: undefined
// having only one child: object
// having two or more children: array
var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
      {
          React.Children.map(this.props.children, function (child) {
              return <li>{child}</li>;
          })
          }
            </ol>
        );
    }
});

ReactDOM.render(
    <NotesList>
        <span>hello</span>
        <span>world</span>
    </NotesList>,
    document.getElementById('listDemo')
);

//state
// var Timer = React.createClass({
//     getinitionstate : function(){
//         return {
//             secondsElapsed :0
//         }
//     },
//     click : function(){
//         this.setState({this.secondsElapsed : this.state.secondsElapsed +1})
//     },
//     compentInterval : function(){
//         this.interval = setInterval(this.click,1000)
//     },
//     compentClear : function(){
//         clearInterval(this.interval)
//     },
//     render:function(){
//         return <div>secondsElapsed:{this.state.secondsElapsed}</div>
//     }
// });

// ReactDOM.render(
//     <Timer></Timer>,
//     document.getElementById('DataDemo')
// )

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

ReactDOM.render(<Timer />, document.getElementById('DataDemo'));


//

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<TodoApp />, document.getElementById('AddButtonDemo'));