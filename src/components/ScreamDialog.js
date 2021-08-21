import React, { Fragment } from "react";

//MUI
import { Dialog } from "@material-ui/core";

//My Components
import MyButton from "../util/MyButton";

//Icons
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

const ScreamDialog = () => {
  return (
    <Fragment>
      <MyButton tip='Expand Scream!!!'>
        <UnfoldMoreIcon color='primary' />
      </MyButton>
      <Dialog></Dialog>
    </Fragment>
  );
};

export default ScreamDialog;
