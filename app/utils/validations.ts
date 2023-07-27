export const validateRequire = (value: string) => {
  if (!value) return "Field is required";
};

export const validateEmail = (email: string) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email address";
};

export const validateLength = (value: string, length: number) => {
  if (value.length < length)
    return `Field must be at least ${length} characters long`;
};
