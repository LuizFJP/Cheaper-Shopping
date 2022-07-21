import { useState } from "react";
import { Delete, Add, Edit } from '@mui/icons-material'

let count = 1
function List() {
    const [list, setList] = useState([{id: 0, value: ''}]);
    const [empty, setEmpty] = useState(true);

    const handleChange = (value, id ) => {
        setList((prev) => prev.map(item => item.id === id ? { ...item, value } : item ))
    }
    const handleDelete = (id) => {
        setList((prev) => prev.filter((item) => item.id !== id))
        if (list.length === 1) {
            setEmpty(true);
            setList([{id: 0, value: ''}]);
        }
    }
    const handleAdd = (index) => {
        const newItem = { id: count++, value: ''}
        setList((prev) => [...prev.slice(0, index + 1), newItem, ...prev.slice(index + 1)])
    }

    return (
        <div>
            {console.log(empty)}
            {empty ? <button onClick={() => setEmpty(false)}>Adicionar produto</button>
            :
            list.map((item, index) => (
                <div key={item.id}>
                    <input type="text" onChange={e => handleChange(e.currentTarget.value, item.id)}/>
                            <Add onClick={() => handleAdd(index)}></Add>
                            <Delete onClick={() => handleDelete(item.id)}></Delete>
                </div>

            ))
            }
        </div>
    )
}

export default List;