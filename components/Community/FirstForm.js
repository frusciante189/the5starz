import Input from "./Input";
import { useForm } from "react-hook-form";

const FirstForm = ({ index, setIndex }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    setIndex((oldState) => oldState + 1);
  };

  return (
    <form
      className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h1 className="font-bold mb-4">
          Name{" "}
          <span className="font-bold text-primaryRed text-xl text-center inline-block">
            *
          </span>
        </h1>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
          <div>
            <input
              {...register("name", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {errors.name && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              First Name
            </label>
          </div>
          <div>
            <input
              {...register("lastname", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {errors.lastname && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              Last Name
            </label>
          </div>
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
            <div>
              <input
                {...register("email", { required: true })}
                className="border w-full p-3 focus:outline-none"
              />
              {errors.email && (
                <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                  This field is required
                </p>
              )}
            </div>
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
            <div>
              <input
                {...register("phone", { required: true })}
                className="border w-full p-3 focus:outline-none"
              />
              {errors.phone && (
                <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                  This field is required
                </p>
              )}
            </div>
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
          <div>
            <input
              {...register("address", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {errors.address && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              Street Address
            </label>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
          <div>
            <input
              {...register("city", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {errors.city && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              City
            </label>
          </div>
          <div>
            <input
              {...register("state", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {errors.state && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              State / Province / Region
            </label>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
          <div>
            <input
              {...register("zip", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {errors.zip && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              ZIP / Postal Code
            </label>
          </div>
          <div>
            <input
              {...register("country", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {errors.country && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              Country
            </label>
          </div>
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
            <div>
              <input
                {...register("dd", { required: true })}
                className="border w-full p-3 focus:outline-none"
                placeholder="DD"
              />
              {errors.dd && (
                <p className="w-full p-2 mt-2 border border-primaryRed text-primaryRed font-semibold text-xs">
                  This field is required
                </p>
              )}
            </div>
            <div>
              <input
                {...register("mm", { required: true })}
                className="border w-full p-3 focus:outline-none"
                placeholder="MM"
              />
              {errors.mm && (
                <p className="w-full p-2 mt-2 border border-primaryRed text-primaryRed font-semibold text-xs">
                  This field is required
                </p>
              )}
            </div>
            <div>
              <input
                {...register("yyyy", { required: true })}
                className="border w-full p-3 focus:outline-none"
                placeholder="YYYY"
              />
              {errors.yyyy && (
                <p className="w-full p-2 mt-2 border border-primaryRed text-primaryRed font-semibold text-xs">
                  This field is required
                </p>
              )}
            </div>
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
            <div>
              <input
                {...register("socials", { required: true })}
                className="border w-full p-3 focus:outline-none"
              />
              {errors.socials && (
                <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                  This field is required
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        {index >= 1 && (
          <button
            className="bg-white border-2 border-primaryRed text-primaryRed px-[30px] py-4 font-bold text-lg"
            onClick={() => setIndex((oldState) => oldState - 1)}
          >
            PREVIOUS
          </button>
        )}
        <button
          className="bg-primaryRed text-white px-[30px] py-4 font-bold text-lg"
          type="submit"
        >
          {index === 2 ? <span>Submit</span> : <span>Next</span>}
        </button>
      </div>
    </form>
  );
};

export default FirstForm;
