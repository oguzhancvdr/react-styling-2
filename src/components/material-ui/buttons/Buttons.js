import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

const Buttons = () => {
  return (
    <div>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="large"
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
};

export default Buttons;
