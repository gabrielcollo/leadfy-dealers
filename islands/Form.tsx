import type { Vehicle } from "deco-sites/leadfy-dealers/components/types.ts";

import { useSignal } from "@preact/signals";

import { formatPrice } from "deco-sites/leadfy-dealers/sdk/format.ts";

export default function Form(
  { vehicle, idLoja }: { vehicle: Vehicle; idLoja: string },
) {
  const nome = useSignal("");
  const sobrenome = useSignal("");
  const telefone = useSignal("");
  const email = useSignal("");
  const CPF = useSignal("");

  const buttonText = useSignal("Tenho interesse");
  const buttonDisabled = useSignal(false);

  function clearFields() {
    nome.value = "";
    sobrenome.value = "";
    telefone.value = "";
    email.value = "";
    CPF.value = "";
  }

  function testSaveLead() {
    const data = {
      "records": [
        {
          "fields": {
            "Nome": nome.value,
            "Sobrenome": sobrenome.value,
            "Telefone": telefone.value,
            "Email": email.value,
            "CPF": CPF.value,
            "Carro": vehicle["g:title"][0],
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
          buttonText.value = "Enviado!";
          buttonDisabled.value = true;
          clearFields();
          setTimeout(() => {
            buttonText.value = "Tenho interesse";
            buttonDisabled.value = false;
          }, 2000);
        }
      });
  }

  return (
    <div>
      <h1 class="text-[34px] text-black louis-bold">
        {vehicle["g:title"][0].toUpperCase()}
      </h1>
      <span class="text-[22px] text-[#d1ad57]">
        {formatPrice(Number(vehicle["g:price"][0]))}
      </span>

      <form
        action=""
        class="py-4 flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          label={"Nome"}
          placeholder={"Seu Nome aqui"}
          value={nome.value}
          changeState={(value) => {
            nome.value = value;
          }}
        />
        <Input
          label={"Sobrenome"}
          placeholder={"Seu Sobrenome aqui"}
          value={sobrenome.value}
          changeState={(value) => {
            sobrenome.value = value;
          }}
        />
        <Input
          label={"Telefone"}
          placeholder={"Seu Telefone aqui"}
          value={telefone.value}
          changeState={(value) => {
            telefone.value = value;
          }}
        />
        <Input
          label={"E-mail"}
          placeholder={"Seu E-mail aqui"}
          value={email.value}
          changeState={(value) => {
            email.value = value;
          }}
        />
        <Input
          label={"CPF"}
          placeholder={"Seu CPF aqui"}
          value={CPF.value}
          changeState={(value) => {
            CPF.value = value;
          }}
        />
        <button
          class="bg-[#d1ad57] text-[white] tracking-[3px] w-full py-2.5 flex justify-center items-center"
          onClick={() => testSaveLead()}
          disabled={buttonDisabled.value}
        >
          {buttonText.value}
        </button>
      </form>
      <div>
        <p
          class="text-[20px]"
          dangerouslySetInnerHTML={{ __html: vehicle["g:description"][0] }}
        >
        </p>
      </div>
    </div>
  );
}

function Input(
  { label, placeholder, value, changeState }: {
    label: string;
    value: string;
    placeholder: string;
    changeState(value: string): void;
  },
) {
  return (
    <div class="flex flex-col gap-2">
      <label htmlFor={label} class="text-[14px] uppercase tracking-[1px]">
        {label}
      </label>
      <input
        type="text"
        value={value}
        name={label}
        id={label}
        placeholder={placeholder}
        onChange={(e) => {
          changeState((e.target as HTMLInputElement)?.value);
        }}
        class="border-[1px] border-[#cccccc] py-2 px-3 focus-visible:border-[#3898ec] focus-visible:outline-none"
      />
    </div>
  );
}
