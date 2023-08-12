import React, { ChangeEvent, useState, useEffect, FormEvent } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface IReservedForm {
  loading: boolean;
  inputs: {
    bookerFirstName: string;
    bookerLastName: string;
    bookerPhone: string;
    bookerEmail: string;
    bookerOccasion: string;
    bookerRequest: string;
  };
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => Promise<void>;
}

export default function ReservedForm({
  loading,
  inputs,
  handleChangeInput,
  onSubmit,
}: IReservedForm) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    ) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [inputs]);

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 flex flex-wrap justify-between w-[660px]"
    >
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First name"
        name="bookerFirstName"
        value={inputs.bookerFirstName}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last name"
        name="bookerLastName"
        value={inputs.bookerLastName}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone number"
        name="bookerPhone"
        value={inputs.bookerPhone}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Email"
        name="bookerEmail"
        value={inputs.bookerEmail}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Occasion (optional)"
        name="bookerOccasion"
        value={inputs.bookerOccasion}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Requests (optional)"
        name="bookerRequest"
        value={inputs.bookerRequest}
        onChange={handleChangeInput}
      />
      <button
        disabled={disabled || loading}
        type="submit"
        className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
      >
        {loading ? (
          <ClipLoader color={"#fff"} loading={loading} size={30} />
        ) : (
          "Complete reservation"
        )}
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </form>
  );
}
