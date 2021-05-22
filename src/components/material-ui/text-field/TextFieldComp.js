import TextField from '@material-ui/core/TextField/TextField'


const TextFieldComp = () => {
    return (
        <div>
            <TextField 
            color="secondary"
            variant="filled" 
            type="email" 
            label="The Email"
            // defaultValue="muı@muı.com"
            placeholder="muı@muı.com"
            
            />
        </div>
    )
}

export default TextFieldComp
