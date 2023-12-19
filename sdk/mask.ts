export const normalizePhoneNumber = (value: string | undefined) => {
  if (!value) return "";

  const numericValue = value.replace(/[\D]/g, "");

  return numericValue
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)/, "$1");
};
