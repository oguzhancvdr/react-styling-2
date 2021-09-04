import TextField from "@material-ui/core/TextField/TextField";

const TextFieldComp = () => {
  return (
    <div>
      <TextField
        color="secondary"
        variant="filled"
        type="email"
        label="The email"
        placeholder="mui@mui.com"
      />
    </div>
  );
};

export default TextFieldComp;
