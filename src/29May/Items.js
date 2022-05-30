import React from 'react'

const Items = () => {
    const names = ['James','Lavnya', 'Kiran', 'Honey' ];

    const filtered = names.filter(name => name.includes('a'))
  return (
    <div>
        {
            filtered.map((item) => <li>{item}</li>)
        }
    </div>
  )
}

export default Items
