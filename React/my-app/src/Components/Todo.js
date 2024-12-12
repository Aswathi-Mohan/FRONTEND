import React from 'react'
import { useState } from 'react'

function Todo() {
    const [userInput, setuserInput] = useState("")
    const [todos, settodos] = useState([])
    // const [btnText,setbtnText]=useState("Add Task")
    const [toggleSubmit, settoggleSubmit] = useState(true)
    const [isEditItrem, setisEditItrem] = useState(null)

    const handleSubmit = e => {
        if (!userInput) {
            alert("Please Fill The Data")
        } else if (userInput && !toggleSubmit) {
            e.preventDefault();
            settodos(
                todos.map((item) => {
                    if (item.id === isEditItrem) {
                        return { ...item, task: userInput }
                        
                    }
                    return item
                    console.log(item);
                })
            )
            setuserInput('');
            settoggleSubmit(true)
            setisEditItrem(null)
        }else{
            e.preventDefault();
        console.log(userInput)
        const allInputData = { id: Math.random(), task: userInput }
        settodos([...todos, allInputData])
        console.log(todos)
        //reset inputfield after submit
        setuserInput("")
        }
        

    }

    
    const editTodo = index => {
        // alert(index)
        const filtervalue = index;
        const getvalue = todos.find(item => item.id === filtervalue).task
        // console.log(getvalue)
        setuserInput(getvalue);
        settoggleSubmit(false)
        setisEditItrem(filtervalue)
        // setbtnText("Edit Task")

    }

    const deleteTodo = (id) => {
        const deleteText = todos.filter((item) => {
            return id !== item.id
        })
        settodos(deleteText)
    }



    return (

        <div className='container px-5'>
            <h2>Todo List</h2>
            <hr className='pb-5' />
            <form>
                <input
                    type='text'
                    className='form-control p-3'
                    id='txtinput'
                    placeholder='Add Item...'
                    value={userInput}
                    onChange={(e) => setuserInput(e.target.value)} autoFocus/>
                {
                    toggleSubmit ? <button className='btn btn-dark text-white p-2 px-5 mt-3' onClick={handleSubmit}>Add Item</button> :
                        <button className='btn btn-dark text-white p-2 px-5 mt-3' onClick={handleSubmit}>Edit Item</button>
                }

                {console.log(todos)}
            </form>

            <div>

                {todos.map((item, index) => {
                    return (
                        <div className="d-flex w-50 justify-content-center">
                            <div className="me-auto p-2 bd-highlight">{item.task}</div>
                            <div className="p-2"><button className='btn btn-primary p-2' onClick={() => editTodo(item.id)}>Edit</button></div>
                            <div className="p-2"><button className='btn btn-primary p-2' onClick={() => deleteTodo(item.id)}>Delete</button></div>
                        </div>
                    )
                })};
            </div>

        </div>

    )
}

export default Todo
