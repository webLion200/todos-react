import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        var value = this.textInput.value;
        var id = Date.now();
        var newTodo = {checked: false, value: value, isDone: false, id: id}
        if (value === '') {
           alert('请添加ToDo');
        } else {
            this.props.todos.push(newTodo);
            this.props.onSubmit(this.props.todos);
            this.textInput.value = '';
        }
        e.preventDefault();
    }
    render() {
        return (
            <header className="header">
                <form onSubmit={this.handleSubmit}>
                    <label className="title">ToDoList</label>
                    <input type="text" placeholder="添加ToDo" ref={(input) => {this.textInput = input;}}/>
                </form>
            </header>
        );
    }
}

export default Header;