/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displayWhatsAppModal = signal(false);
const whatsAppModalInformation = signal({
  vehicle: "",
});

const state = {
  displayWhatsAppModal,
  whatsAppModalInformation,
};

export const useUI = () => state;
