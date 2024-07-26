import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
function DialogBox() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger className="md:text-base text-sm font-medium hover:bg-[#ffff00]/90 underline-offset-4 bg-[#ffff00] rounded-lg text-black px-4 py-2">
          Add
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Content className="fixed flex flex-col gap-3 bg-[#010536] rounded p-6 shadow-lg md:max-w-xl w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Description className="mt-2 text-lg font-medium dark:text-gray-300">
                Tech Stack
              </Dialog.Description>
              <select {...register("techStack", { required: true })}
                className="h-10 border bg-[#010536] px-3 w-full rounded-md text-sm dark:text-gray-200 focus:bg-[#010536] focus:border-[#010536]">
                <option value="" disabled selected className=" text-gray-500 text-sm">Select Tech Stack</option>
                <option value="angular">Angular</option>
                <option value="react">React</option>
                <option value="docker">Docker</option>
              </select>
              <Dialog.Title className="text-lg font-medium  dark:text-gray-300">
                Title
              </Dialog.Title>
              <input
                {...register("title", { required: true })}
                className=" h-10 placeholder:bg-[#010536] border bg-[#010536] px-3 placeholder:w-full w-full rounded-md placeholder:px-3 text-sm dark:text-gray-200 focus:bg-[#010536] focus:px-3 focus:border-[#010536]"
                placeholder="Enter Title"
                type="text"
              />
              <Dialog.Description className="mt-2 text-lg font-medium dark:text-gray-300">
                Description
              </Dialog.Description>
              <input
                {...register("description", { required: true })}
                className=" h-10 placeholder:bg-[#010536] border bg-[#010536] px-3 placeholder:w-full w-full rounded-md placeholder:px-3  text-sm dark:text-gray-200 focus:bg-[#010536] focus:px-3 focus:border-[#010536]"
                placeholder="Enter Description"
                type="textfield"
              />
              <Dialog.Description className="mt-2 text-lg font-medium dark:text-gray-300">
                Command
              </Dialog.Description>
              <input
                {...register("command", { required: true })}
                className=" h-10 placeholder:bg-[#010536] border bg-[#010536] px-3 placeholder:w-full w-full rounded-md placeholder:px-3  text-sm dark:text-gray-200 focus:bg-[#010536] focus:px-3 focus:border-[#010536]"
                placeholder="Enter Command"
                type="textfield"
              />

              <div className="mt-4">
                <button className="text-normal font-medium hover:bg-[#ffff00]/90 underline-offset-4 bg-[#ffff00] rounded-lg text-black px-4 py-2">
                  Action
                </button>
              </div>
              <Dialog.Close asChild>
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </form>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
export default DialogBox;
