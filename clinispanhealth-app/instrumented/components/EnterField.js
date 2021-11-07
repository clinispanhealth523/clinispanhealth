// Requires different inputs (e.g. string, numerical, etc depending on the field)
const EnterField = (props) => {
    const type = props.forName === 'pw' || 'emailAddress' || 'fn' || 'ln' ? 'text' : 'number'
    const placeholder = props.placeholder != null ? props.placeholder : ''
    return (
        <div className='form'>
            <label forName={type}>{props.label}</label><br/>
            <input type={type} placeholder={placeholder}></input>
        </div>
    )
}




export default EnterField