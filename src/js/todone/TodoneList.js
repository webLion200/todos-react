import React, {Component} from 'react';
import TodoneItem from './TodoneItem';
class TodoneList extends Component {
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
            <ul className="todoList">
                {
                    this.props.todos.map(
                        (value, index)=> {
                            if (value.checked === true) {
                                return <TodoneItem
                                    todos={value}
                                    key={value.id}
                                    index={index}
                                    onChecked={this.handleChecked}
                                    onDel={this.handleDel}/>
                            }
                        }
                    )
                }
            </ul>
        )
    }
}

export default TodoneList;
