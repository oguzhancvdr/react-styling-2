import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  btn: {
    background: "Linear-gradient(45deg, #FF688B, #FF8E53)",
    border:0,
    borderRadius:7,
    color:'#fff',
    padding: "5px 30px",
    marginBottom:"1rem",
  }
})

const StyledButton = () => {

  const classes = useStyles();

  return (
    <>
      <Button className={classes.btn}>Styled Button with makeStyles</Button>
    </>
  );
};

export default StyledButton;
