import React from 'react';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';
//https://github.com/clauderic/react-sortable-hoc

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const comp = ({ v }) => <li>{v}</li>;

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      <children v={1} />
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

export default SortableList;
