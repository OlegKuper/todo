import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import React from "react";
import './app.css'
import AddItems from "../add-Items/add-items";

class App extends React.Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoitem('Drink Coffee'),
            this.createTodoitem('Make Awesome App'),
            this.createTodoitem('Have a lunch'),
        ],
        value: '',
        filter: 'all'
    }

    createTodoitem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const newArray = [...todoData]
            const idEl = newArray.findIndex((el) => {
                return el.id === id
            })
            newArray.splice(idEl, 1)
            return {
                todoData: newArray
            }
        })
    }

    addTodoItem = (text) => {
        const newItem = this.createTodoitem(text);
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem]
            return {
                todoData: newArr
            }

        })
    }

    toggleProperty(arr, id, propName) {
        const idEl = arr.findIndex((el) => {
            return el.id === id
        })
        const oldItem = arr[idEl];
        const newItem = {...oldItem, [propName]: !oldItem[propName]}

        return [
            ...arr.slice(0, idEl),
            newItem,
            ...arr.slice(idEl + 1)
        ]

    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }

        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }

        })
    }

    onSearch = (e) => {
        const value = e.target.value
        this.setState({
            value: value
        })
    }

    searchFilter = (value, todoData = []) => {
        if (!value) {
            return todoData
        }
        return todoData.filter((el) => {
            if (el.label.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                return el;
            }
        });

    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((el) => !el.done)
            case 'done':
                return items.filter((el) => el.done)
            default:
                return items
        }
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    render() {

        const {todoData, value, filter} = this.state
        const listSearch = this.filter(this.searchFilter(value, todoData), filter)
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">

                    <SearchPanel
                        onSearch={this.onSearch}
                        label={this.state.value}
                    />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>

                <TodoList
                    todos={listSearch}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItems
                    addListItem={this.addTodoItem}

                />
            </div>
        );
    }
}

export default App;