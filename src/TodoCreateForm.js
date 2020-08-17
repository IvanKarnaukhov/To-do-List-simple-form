import React, {useState} from 'react';


function TodoCreateForm(props) {


    const [inputValue, setInputValue] = useState(" ")
    // const inputOnChange = e => setInputValue(e.target.value)
    const inputOnChange = (e) => {      //const inputOnChange =e => setInputValue(e.target.value) как можно записать по другому
        setInputValue(e.target.value)
    }

    const onCreate = () => {
        props.create(inputValue)
        setInputValue('0')
    }


    return (
        <div>
            To do Create Form

            <input value={inputValue} onChange={inputOnChange}/>
            {/*<input value={inputValue} onChange={e => setInputValue(e.target.value)}/> как можно записать по другому*/}
            <button onClick={onCreate}>create</button>
            {/*<button onClick={ () => props.create(inputValue)}>create</button>*/}

        </div>
    );
}

export default TodoCreateForm;
