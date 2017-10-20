import React, {Component} from 'react';

class TodoingTitle extends Component {
    render() {
        let len = this.props.todos.filter(function(el) {
            return el.checked === false
        }).length;
        return (
            <div className="todoTitle">
                <h2 className="title">正在进行</h2>
                <span className="count">{len}</span>
            </div>
        )
    }
}

export default TodoingTitle;