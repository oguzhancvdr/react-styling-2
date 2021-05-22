import React from "react";
import CheckBox from "@material-ui/core/Checkbox/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import NetworkCheck from "@material-ui/icons/NetworkCheck";

const CheckBoxComp = () => {
  const [checked, setChecked] = React.useState(false);
  console.log("checked: ", checked);
  return (
    <FormControlLabel
      control={
        <CheckBox
          icon={<NetworkCheck />}
          checkedIcon={<NetworkCheck />}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      label="Network Check"
    />
  );
};

export default CheckBoxComp;
