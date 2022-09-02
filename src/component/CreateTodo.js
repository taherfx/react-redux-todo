import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodoList } from './redux'
const CreateTodo = () => {
    const initialState = ''
    const [heading, setHeading] = useState(initialState)
    const [desc, setDesc] = useState(initialState)
    const [time, setTime] = useState(initialState)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const headingVal = e.target.heading.value 
        const descVal = e.target.desc.value 
        const timeVal = e.target.time.value
        
        const min = 1;
        const max = 100;
        const rand = Math.ceil(min + Math.random() * (max - min));

        const data = {
            heading: headingVal,
            desc: descVal,
            time: timeVal
        }
        dispatch(createTodoList(data, rand))
        resetForm()
    }

    const resetForm = () => {
        setHeading(initialState)
        setTime(initialState)
        setDesc(initialState)   
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='form-head'>
            <div>
                <label>Heading</label>
                <input type='text' name='heading' value={heading} onChange={e => setHeading(e.target.value)} required/>
            </div>

            <div>
                <label>description</label>                
                <textarea value={desc} name='desc' onChange={e => setDesc(e.target.value)}></textarea>
            </div>

            <div>
                <label>Time</label>                
                <input type='text' name='time' value={time} onChange={e => setTime(e.target.value)} required/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateTodo