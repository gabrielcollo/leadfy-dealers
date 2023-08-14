import { useSignal } from "@preact/signals";
import Image from "deco-sites/std/components/Image.tsx";

import { clearWhatsApp } from "deco-sites/leadfy-dealers/sdk/format.ts";

export default function WhatsAppButton(
  { whatsapp, logo, idLoja, vehicleName }: {
    whatsapp: string;
    logo: string;
    idLoja: string;
    vehicleName?: string;
  },
) {
  const open = useSignal(false);

  const nome = useSignal("");
  const telefone = useSignal("");

  function saveLead() {
    const data = {
      "records": [
        {
          "fields": {
            "Nome": nome.value,
            "Telefone": telefone.value,
            "Carro": vehicleName || "",
            "Email": "lead@leadfy.me"
          },
        },
      ],
    };

    const options = {
      "method": "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(`/api/airtable?idLoja=${idLoja}`, options)
      .then((response) => {
        if (response.status == 200) {
          window.open(
            `https://api.whatsapp.com/send?text=Olá meu nome é ${nome.value}, gostaria de mais informações sobre as ofertas imperdíveis! Esses são os meus contatos:%0D%0A Telefone: ${telefone.value}&phone=${
              clearWhatsApp(whatsapp)
            }`,
            "_blank",
          );
        }
      });
  }

  return (
    <>
      <div id="wpp-fix" class="fixed bottom-8 right-8 z-20">
        <button
          id="wpp-link"
          class={`wpp-form wpp-link transition-all bg-[#25D366] p-4 flex items-center justify-center rounded-full shadow-md ${
            open.value ? "hidden" : "flex"
          }`}
          onClick={() => {
            open.value = true;
          }}
        >
          <span class="hidden">Chamar no WhatsApp</span>
          <svg
            height="36pt"
            viewBox="-23 -21 682 682.667"
            width="36pt"
            xmlns="https://www.w3.org/2000/svg"
            fill="white"
          >
            <path
              d="M544.387 93.008C484.512 33.063 404.883.035 320.05 0 145.246 0 2.98 142.262 2.91 317.113c-.024 55.895 14.577 110.457 42.331 158.551L.25 640l168.121-44.102c46.324 25.27 98.477 38.586 151.55 38.602h.134c174.785 0 317.066-142.273 317.132-317.133.036-84.742-32.921-164.418-92.8-224.36zM320.05 580.94h-.11c-47.296-.02-93.683-12.73-134.16-36.742l-9.62-5.715-99.766 26.172 26.628-97.27-6.27-9.972c-26.386-41.969-40.32-90.476-40.296-140.281.055-145.332 118.305-263.57 263.7-263.57 70.406.023 136.59 27.476 186.355 77.3s77.156 116.051 77.133 186.485C583.582 462.69 465.34 580.94 320.05 580.94zm144.586-197.418c-7.922-3.968-46.883-23.132-54.149-25.78-7.258-2.645-12.547-3.962-17.824 3.968-5.285 7.93-20.469 25.781-25.094 31.066-4.625 5.29-9.242 5.953-17.168 1.985-7.925-3.965-33.457-12.336-63.726-39.332-23.555-21.012-39.457-46.961-44.082-54.89-4.617-7.938-.04-11.813 3.476-16.173 8.578-10.652 17.168-21.82 19.809-27.105 2.644-5.29 1.32-9.918-.664-13.883-1.977-3.965-17.824-42.969-24.426-58.84-6.437-15.445-12.965-13.36-17.832-13.601-4.617-.231-9.902-.278-15.187-.278-5.282 0-13.868 1.98-21.133 9.918-7.262 7.934-27.73 27.102-27.73 66.106s28.394 76.683 32.355 81.972c3.96 5.29 55.879 85.328 135.367 119.649 18.906 8.172 33.664 13.043 45.176 16.695 18.984 6.031 36.254 5.18 49.91 3.14 15.226-2.277 46.879-19.171 53.488-37.68 6.602-18.51 6.602-34.374 4.617-37.683-1.976-3.304-7.261-5.285-15.183-9.254zm0 0"
              fill-rule="evenodd"
            >
            </path>
          </svg>
        </button>

        <div
          class={`form-wpp fixed bottom-[100px] sm:bottom-0 left-[calc(50%-175px)] sm:left-0 transition-all w-[350px] shadow rounded ${
            open.value ? "block" : "hidden"
          } sm:relative`}
        >
          <div class="head-wpp bg-[#0c6156] flex items-center justify-between p-4">
            <div class="flex gap-2 items-center">
              <Image
                src={logo}
                width={50}
                alt="Imagem perfil"
                class="rounded-full"
              />
              <h3 class="text-white font-semibold">Chame no WhatsApp</h3>
            </div>

            <button
              onClick={() => {
                open.value = false;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                height="16px"
                width="16px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 460.775 460.775"
              >
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
              </svg>
            </button>
          </div>

          <div
            class="form-content bg-[#e9e0d7] bg-center bg-cover flex flex-col gap-2 p-4 rounded"
            style="background-image: url(https://www.davidsonsilva.com.br/wp-content/uploads/2023/04/bg-whatsapp.png)"
          >
            <p class="buss-msg bg-[white] w-5/6 p-2 rounded text-base relative">
              Olá, quer saber mais sobres nossas ofertas exclusivas? Me informe
              seus dados, por favor.
            </p>

            <form
              action="/"
              method="post"
              id="wpp-form"
              class="flex flex-col gap-2 items-end"
              onSubmit={(e) => {
                saveLead();
                e.preventDefault();
              }}
            >
              <div class="campo w-5/6">
                <label for="nome" class="hidden">Nome</label>
                <span class="form-control-wrap">
                  <input
                    type="text"
                    name="nome"
                    aria-required="true"
                    placeholder="Nome"
                    required
                    class="w-full rounded-tl rounded-bl px-4 py-2 bg-[#e7ffe7] border border-[#e7ffe7] text-base"
                    value={nome.value}
                    onChange={(e) =>
                      nome.value = (e.target as HTMLInputElement)?.value}
                  />
                </span>
              </div>
              <div class="campo w-5/6">
                <label for="telefone" class="hidden">Telefone</label>
                <span class="form-control-wrap">
                  <input
                    type="text"
                    name="telefone"
                    id="telefone"
                    aria-required="true"
                    placeholder="Telefone"
                    maxLength={15}
                    title="Insira um telefone válido"
                    required
                    class="w-full px-4 py-2 bg-[#e7ffe7] border border-[#e7ffe7] text-base"
                    value={telefone.value}
                    onChange={(e) =>
                      telefone.value = (e.target as HTMLInputElement)?.value}
                  />
                </span>
              </div>
              <div class="">
                <button
                  type="submit"
                  class="transition-all bg-[#0c6156] border border-[#0c6156] text-white font-semibold rounded px-6 py-3 flex items-center gap-2"
                >
                  Iniciar conversa
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    height="16px"
                    width="16px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 512.001 512.001"
                  >
                    <g>
                      <g>
                        <path d="M483.927,212.664L66.967,25.834C30.95,9.695-7.905,42.023,1.398,80.368l21.593,89.001    c3.063,12.622,11.283,23.562,22.554,30.014l83.685,47.915c6.723,3.85,6.738,13.546,0,17.405l-83.684,47.915    c-11.271,6.452-19.491,17.393-22.554,30.015l-21.594,89c-9.283,38.257,29.506,70.691,65.569,54.534l416.961-186.83    C521.383,282.554,521.333,229.424,483.927,212.664z M359.268,273.093l-147.519,66.1c-9.44,4.228-20.521,0.009-24.752-9.435    c-4.231-9.44-0.006-20.523,9.434-24.752l109.37-49.006l-109.37-49.006c-9.44-4.231-13.665-15.313-9.434-24.752    c4.229-9.44,15.309-13.666,24.752-9.435l147.519,66.101C373.996,245.505,374.007,266.49,359.268,273.093z" />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="mask transition-all"></div>
      </div>
    </>
  );
}
