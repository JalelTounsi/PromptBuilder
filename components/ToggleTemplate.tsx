import { Switch } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
/* PRMT = Persona Role Mission Task */
/* RTF =  Role Task Format */
export default function ToggleTemplate({ isPRMT, setIsPRMT }: any) {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch.Label
        as="span"
        className="mr-3 text-sm flex justify-center gap-2 items-center"
      >
        <Image
          src="/PRMT.svg"
          width={25}
          height={25}
          alt="Persona Role Mission Tasks"
          className={`${isPRMT && "opacity-50"}`}
        />
        <span title="Persona Role Mission Tasks"
          className={`font-medium ${
            isPRMT ? "text-gray-400" : "text-gray-900"
          }`}
        >
          {/* Persona Role Mission Tasks  */}
          Persona Role Mission Tasks
        </span>{" "}
      </Switch.Label>
      <Switch
        checked={isPRMT}
        onChange={setIsPRMT}
        className={classNames(
          isPRMT ? "bg-black" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            isPRMT ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <Switch.Label
        as="span"
        className="ml-3 text-sm flex justify-center gap-2 items-center "
      >
        <span title="Persona Role Tasks Format"
          className={`font-medium ${
            !isPRMT ? "text-gray-400" : "text-gray-900"
          }`}
        >
          {/* Persona Role Tasks Format  */}
          Persona Role Tasks Format
        </span>{" "}
        <Image
          src="/PRTF.svg"
          width={30}
          height={30}
          alt="Persona Role Tasks Format"
          className={`${!isPRMT && "opacity-50"}`}
        />
      </Switch.Label>
    </Switch.Group>
  );
}
