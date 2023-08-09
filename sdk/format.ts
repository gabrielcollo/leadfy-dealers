export const formatPrice = (
  price: number | undefined,
  currency = "BRL",
  locale = "pt-BR",
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  if (!price) {
    return null;
  }

  return formatter.format(price);
};

export const clearWhatsApp = (phone: string) => {
  return phone.replaceAll(" ", "").replaceAll(")", "").replaceAll("(", "")
    .replaceAll("-", "");
};
