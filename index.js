import React, { Component } from 'react';
import { render } from 'react-dom';
import SortableList from './sortableList';
import { arrayMove, SortableElement } from 'react-sortable-hoc';
const SortableItem1 = SortableElement(({ value }) => <li>{value}</li>);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
        'Item 11',
        'Item 12',
        'Item 13',
        'Item 14',
        'Item 15',
        'Item 16',
        'Item 17',
        'Item 18',
        'Item 19',
      ],
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = arrayMove(this.state.items, oldIndex, newIndex);
    console.log(newItems);
    this.setState({
      items: newItems,
    });
  };

  render() {
    return (
      <SortableList
        items={this.state.items}
        onSortEnd={this.onSortEnd}
        itemCard={}
      >
 {SortableItem1}
       </SortableList>
    );
  }
}

render(<App />, document.getElementById('root'));
