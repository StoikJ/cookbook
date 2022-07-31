import React from 'react';
import GlobalHeader from "../components/GlobalHeader";


class ShoppingList extends React.Component {

    state = {
        input: '',
        items: [
            'Chicken',
            'Lamb',
            'Black pepper'
        ]

    }

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    addItem(event) {
        this.setState((state) => (
            {
                items: state.items.concat(this.state.concat)
            }
        ))
        event.preventDefault();
    }

    removeItem(event) {
        let newList = this.state.items;
        newList.pop();

        this.setState((state) => (
            { items: newList }
        ))
    }

    handleInput(event) {
        this.setState(({
            input: event.target.value
        }))
    }

    render() {







        return (
            <><GlobalHeader /><div className="ShoppingList bg-indigo-100 h-screen">

                <div className="">


                    <h2 className="bg-indigo-500 text-gray-50 text-center max-w-2xl text-5xl shadow-xl font-medium m-auto mt-5 p-5 rounded-lg">Shopping List</h2>
                    <List items={this.state.items} removeItem={this.removeItem}></List>


                    <div className="flex justify-center">
                        <form onSubmit={this.addItem}>
                            <div className="space-x-5">
                                <input onChange={this.handleInput} placeholder="Grocery Item" type="text" className="pl-2 p-2 border-2 border-indigo-300 rounded w-64" />
                                <button type="submit" className="bg-green-600 hover:bg-green-800 text-white rounded font-medium">Add New Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div></>
        )
    }

}
function List(props) {
    return (
        <div className="grid justify-items-center">
            {props.items.map((item, index) => {
                return (
                    <Item removeItem={props.removeItem} name={item} key={index}></Item>
                )
            })}
        </div>
    )
}

function Item(props) {
    return (
        <div className="bg-white text-center m-5 rounded-xl p-6 w-2/6">
            <div className="flex justify-between space-x-5">
                <h5 className="font-sans font-semibold text-2xl">{props.name}</h5>
                <button onClick={props.removeItem} className="bg-red-600 hover:bg-red-800 text-white rounded font-medium">Remove Item</button>
            </div>
        </div>

    )
}



export default ShoppingList