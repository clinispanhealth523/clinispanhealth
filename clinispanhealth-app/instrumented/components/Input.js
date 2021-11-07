// Requires different inputs (e.g. string, numerical, etc depending on the field)
const Input = (props) => {
    const type = props.forName === 'pw' || 'emailAddress' ? 'text' : 'number'
    // need to redo placeholder so that it 
    const placeholder = props.placeholder != null ? props.placeholder : ''
 
    return (
        <div className='inputContainer'>
            <label className="fieldLabel" forName={type}>{props.label}</label><br/>
            <input className="input" type={type} placeholder={placeholder}></input>
        </div>
    )
}

export default Input;