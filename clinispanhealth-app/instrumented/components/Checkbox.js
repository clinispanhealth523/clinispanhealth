// Requires different inputs (e.g. string, numerical, etc depending on the field)
const Checkbox = (props) => {
    const type = props.forName === 'pw' || 'emailAddress' ? 'text' : 'number'
    // need to redo placeholder so that it 
    const placeholder = props.placeholder != null ? props.placeholder : ''
 
    return (
        <div className="checkboxContainer">
            <input className="checkbox" type="checkbox" placeholder={placeholder}></input>
            <label className="checkboxLabel" forName={type}>{props.label}</label><br/>
        </div>
    )
}

export default Checkbox;