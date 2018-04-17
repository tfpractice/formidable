import { reduxForm } from "redux-form";

export * from "./fields";

export * from "./validate";

export const resetSuccess = (res, dispatch, { reset }) => reset();

const onSubmitSuccess = resetSuccess;

const enableReinitialize = true;

export const WizForm = form =>
  reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    form: `userWizard`,
  })(form);

export const ClearForm = form =>
  reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize,
    form: `userWizard`,
  })(form);
