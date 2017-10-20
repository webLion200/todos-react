import React, {Component} from 'react';
import Todone from './todone/Todone';
import Todoing from './todoing/Todoing';
class TodoBody extends Component {
    constructor(props) {
        super(props);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleChecked(isChecked, index) {
        this.props.todos[index].checked = isChecked;
        this.props.onChecked(this.props.todos);
    }
    handleDel(index) {
        this.props.todos.splice(index, 1);
        this.props.onDel(this.props.todos);
    }
    render() {
        return (
            <div className="todoBody">
                <Todoing
                    todos={this.props.todos}
                    onChecked={this.handleChecked}
                    onDel={this.handleDel} />
                <Todone
                    todos={this.props.todos}
                    onChecked={this.handleChecked}
                    onDel={this.handleDel} />
            </div>
        )
    }
}

export default TodoBody;