export type FormContent = {
  message: string;
  error: string | undefined;
  values: {
    from: string;
    subject: string;
    message: string;
  };
};
