import React from 'react';

import './todo-list-item.css';

class TodoListItem extends React.Component {




    render() {
        const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }




        return (
            <span className={classNames}>
              <span
                  onClick={onToggleDone }
                  className="todo-list-item-label">
                {label}
              </span>

              <button type="button"
                      onClick={onToggleImportant}
                      className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
              </button>

              <button type="button"
                      onClick={onDeleted}
                      className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </button>
            </span>
        );
    }
}


export default TodoListItem;
