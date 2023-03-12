import React from 'react';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items, itemCard }) => {
  return (
    <ul>
      <children v={1} />
      {items.map((value, index) => (
        <>
          <SortableItem key={`item-${index}`} index={index} value={value} />
        </>
      ))}
    </ul>
  );
});

export default SortableList;
