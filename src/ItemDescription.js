import React from 'react';

function ItemDescription({name,description}) {
  return <div>
    <h2>{name}</h2>

<h4>{description}</h4>
  </div>;
}

export default ItemDescription;
