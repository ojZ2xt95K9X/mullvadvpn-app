export const toCssVariables = (variables: Record<string, string>) => {
  return Object.entries(variables).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`--${key}`]: value,
    };
  }, {});
};

export const toCssVariablesString = (variables: Record<string, string>): string =>
  Object.entries(variables)
    .map(([key, value]) => `--${key}: ${value};`)
    .join(' ');
