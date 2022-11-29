import React, { useState } from 'react'

const Folder = ({ data }) => {
    console.log(data);
    const [expand, setExpand] = useState('');
    return (
        <div>
            <span onClick={() => setExpand(!expand)}>
                {data.name}
            </span>
            <br />
            {
                data.isFolder ? <div style={{display: expand ? 'block' : 'none', paddingLeft: '15px'}}>
                {data.items.map(exp => {
                    return <Folder data={exp} />
                })}
            </div>: null
            }
            
        </div>
    )
}

export default Folder;
