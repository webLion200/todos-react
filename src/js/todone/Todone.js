import React, {Component} from 'react';
import TodoneTitle from './TodoneTitle';
import TodoneList from './TodoneList';

class ToDone extends Component {
    constructor(props) {
        super(props);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleChecked(isChecked, index) {
        this.props.todos[index].checked = isChecked;
        this.props.onChecked(isChecked, index);
    }
    handleDel(index) {
        this.props.onDel(index);
    }
    render() {
        return (
            <div className="todoList">
                <TodoneTitle todos={this.props.todos} />
                <TodoneList
                    todos={this.props.todos}
                    onChecked={this.handleChecked}
                    onDel={this.handleDel}/>
            </div>
        );
    }
}

export default ToDone;