import Input from "./Input";
import SelectInput from "./SelectInput";

const FirstForm = () => {
  return (
    <div className="mt-[50px] pb-[60px] border-b">
      <div>
        <h1 className="font-bold mb-4">
          Name{" "}
          <span className="font-bold text-primaryRed text-xl text-center inline-block">
            *
          </span>
        </h1>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
          <Input label="First Name" />
          <Input label="Last Name" />
        </div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">
            Email{" "}
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <Input />
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">
            Phone{" "}
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <Input />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="font-bold mb-4">
          Address{" "}
          <span className="font-bold text-primaryRed text-xl text-center inline-block">
            *
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
          <Input label="Street Address" />
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
          <Input label="City" />
          <Input label="State / Province / Region" />
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
          <Input label="ZIP / Postal Code" />
          <Input label="Country" />
        </div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">
            Birthday{" "}
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-3 sm:gap-x-5 gap-x-4 gap-y-4 sm:gap-y-0 lg:w-1/2 md:w-2/3 w-3/4">
            <Input placeholder="DD" />
            <Input placeholder="MM" />
            <Input placeholder="YYYY" />
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">
            Instagram / Facebook{" "}
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
