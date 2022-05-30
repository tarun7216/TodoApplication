import React from 'react'

const Items = () => {
  const arr = [10,30,50,32,5,70,40]
    const names = ['James','Lavnya', 'Kiran', 'Honey' ];
    const sorting = names.sort();
    const filtered = names.filter(name => name.includes('a'))
    const array = arr.sort(function(a, b){return(a-b)})
  return (
    <div>
        {
          array.map((item) => <li>{item}</li>)
          //  sorting.map((item) => <li>{item}</li>)
            // filtered.map((item) => <li>{item}</li>)
        }
    </div>
  )
}

export default Items
