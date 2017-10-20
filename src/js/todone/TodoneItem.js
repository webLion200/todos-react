import React, {Component} from 'react';

class TodoneItem extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleChange() {
        var isChecked = this.props.todos.checked;
        this.props.todos.checked = !isChecked;
        this.props.onChecked(!isChecked, this.props.index);
    }
    handleDel() {
        this.props.onDel(this.props.index);
    }
    render() {
        return (
            <li className="todoItem">
                <input type="checkbox" onChange={this.handleChange} checked={this.props.todos.checked}/>
                <span>{this.props.todos.value}</span>
                <a href="javascript:void(0)" onClick={this.handleDel}>-</a>
            </li>
         );
    }
}

export default TodoneItem;