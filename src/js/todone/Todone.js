import React, {Component} from 'react';
import TodoTitle from '../common/TodoTitle';
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
        let len = this.props.todos.filter(function(el) {
            return el.checked === true
        }).length;
        return (
            <div className="todos">
                <TodoTitle todos={this.props.todos} title="已经完成" len={len}/>
                <TodoneList
                    todos={this.props.todos}
                    onChecked={this.handleChecked}
                    onDel={this.handleDel}/>
            </div>
        );
    }
}

export default ToDone;