import Loading from "@/components/svg/Loading";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="absolute  bottom-3 right-4 cursor-pointer">
      {pending ? (
        <Loading className="h-5" />
      ) : (
        <PaperPlaneIcon className="w-auto h-5 " />
      )}
    </button>
  );
}
