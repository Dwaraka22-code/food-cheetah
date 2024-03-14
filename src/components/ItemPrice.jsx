import React from 'react';

const ItemPrice = (props) => {
  console.log(props);
  const { totalprice } = props;

  return <div>{totalprice}</div>;
};

export default ItemPrice;
