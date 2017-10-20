import React, {Component} from 'react';

class TodoneTitle extends Component {
    render() {
        let len = this.props.todos.filter(function(el) {
            return el.checked === true
        }).length;
        return (
            <div className="todoTitle">
                <h2 className="title">已经完成</h2>
                <span className="count">{len}</span>
            </div>
        )
    }
}

export default TodoneTitle;