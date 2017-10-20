import React, {Component} from 'react';
import Header from './Header';
import TodoBody from './TodoBody';

import '../css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleSubmit(value) {
        this.setState({
            todos: value
        })
    }
    handleChecked(value) {
        this.setState({
            todos: value
        })
    }
    handleDel(value) {
        this.setState({
            todos: value
        })
    }
    render() {
        return (
            <div className="App">
                <Header todos={this.state.todos} onSubmit={this.handleSubmit} />
                <TodoBody
                    todos={this.state.todos}
                    onChecked={this.handleChecked}
                    onDel={this.handleDel}/>
            </div>
        );
    }
}

export default App;
