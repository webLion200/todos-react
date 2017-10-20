import React, {Component} from 'react';
import TodoingTitle from './TodoingTitle';
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
        return (
            <div className="todos">
                <TodoingTitle todos={this.props.todos} />
                <TodoingList
                    todos={this.props.todos}
                    onChecked={this.handleChecked}
                    onDel={this.handleDel}/>
            </div>
        );
    }
}

export default ToDoing;