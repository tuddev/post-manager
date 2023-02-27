export const isRequired = (value: string) => (!value ? "The field 'Title' is required" : undefined);

export const checkDescriptionValidity = (value: string) => (value.length <= 20
  ? "Description's length must be more 20 symbols"
  : undefined);
