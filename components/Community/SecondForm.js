import Input from "./Input";
import SelectInput from "./SelectInput";

const SecondForm = () => {
  return (
    <div className="mt-[50px] pb-[60px] border-b">
      <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">Education</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <Input />
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">I love to create videos of myself</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <SelectInput>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="">
                I would do it for a product I really want
              </option>
            </SelectInput>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="font-bold mb-4">People in household under 18</h1>
        <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
          <SelectInput>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5+</option>
          </SelectInput>
        </div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">People in household 18+ (inc. you)</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <SelectInput>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5+</option>
            </SelectInput>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">Marital Status</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <SelectInput>
              <option value="">Single</option>
              <option value="">Married</option>
              <option value="">Widowed</option>
              <option value="">Divorced</option>
              <option value="">Separated</option>
            </SelectInput>
          </div>
        </div>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">What do you do for a living</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <Input />
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">
            Household spend per month (average)?
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <SelectInput>
              <option value="">Less than $10,000</option>
              <option value="">$10,000-$20,000</option>
              <option value="">$20,000-$30,000</option>
              <option value="">$30,000-$40,000</option>
              <option value="">$40,000-$50,000</option>
              <option value="">Over $50,000</option>
              <option value="">I prefer not to say</option>
            </SelectInput>
          </div>
        </div>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">Skin Type</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <SelectInput>
              <option value="">Oily</option>
              <option value="">Combination</option>
              <option value="">Dry</option>
            </SelectInput>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">What is your hair type</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <SelectInput>
              <option value="">Straight</option>
              <option value="">Wavey</option>
              <option value="">Curly</option>
              <option value="">Coily</option>
            </SelectInput>
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <h1 className="font-bold mb-4">Do you own any pets? If so, which?</h1>
        <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
          <Input />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
        <div className="">
          <h1 className="font-bold mb-4">
            How important is eating healthy to you?
          </h1>
          <div className="flex space-x-5 flex-wrap">
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="radio" />
              <span>1</span>
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="radio" />
              <span>2</span>
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="radio" />
              <span>3</span>
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="radio" />
              <span>4</span>
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="radio" />
              <span>5</span>
            </label>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">How important is nature to you?</h1>
          <div className="flex space-x-5 flex-wrap">
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="checkbox" />
              <span>1</span>
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="checkbox" />
              <span>2</span>
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="checkbox" />
              <span>3</span>
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="checkbox" />
              <span>4</span>
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="checkbox" />
              <span>5</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondForm;
