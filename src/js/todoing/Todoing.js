import React, {Component} from 'react';
import TodoTitle from '../common/TodoTitle';
import TodoingList from './TodoingList';

class ToDoing extends Component {
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
            return el.checked === false
        }).length;
        return (
            <div className="todos">
                <TodoTitle todos={this.props.todos} title="正在进行" len={len}/>
                <TodoingList
                    todos={this.props.todos}
                    onChecked={this.handleChecked}
                    onDel={this.handleDel}/>
            </div>
        );
    }
}

export default ToDoing;