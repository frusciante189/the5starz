import React, { useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { RadioGroup, Radio } from "react-radio-group";

const SecondForm = ({ index, setIndex, secondData, setSecondData }) => {
  const [education, setEducation] = useLocalStorage("education", "");
  const [video, setVideo] = useState("yes");
  const [pu18, setPu18] = useState("1");
  const [po18, setPo18] = useState("1");
  const [marriage, setMarriage] = useState("Single");
  const [living, setLiving] = useLocalStorage("living", "");
  const [spend, setSpend] = useState("Less than $10,000");
  const [skin, setSkin] = useState("Oily");
  const [hair, setHair] = useState("Straight");
  const [pet, setPet] = useLocalStorage("pets", "");
  const [eating, setEating] = useState("");
  const [nature, setNature] = useState("");

  const handleClick = () => {
    setSecondData([
      education,
      video,
      pu18,
      po18,
      marriage,
      living,
      spend,
      skin,
      hair,
      pet,
      eating,
      nature,
    ]);
    setIndex((oldState) => oldState + 1);
  };

  return (
    <div className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b">
      <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">Education</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <div className="">
              <input
                className="border w-full p-3 focus:outline-none"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">I love to create videos of myself</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <select
              className="w-full p-3 border focus:outline-none bg-white"
              name="Select Menu"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="both">
                I would do it for a product I really want
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="font-bold mb-4">People in household under 18</h1>
        <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
          <select
            className="w-full p-3 border focus:outline-none bg-white"
            name="Select Menu"
            value={pu18}
            onChange={(e) => setPu18(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">People in household 18+ (inc. you)</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <select
              className="w-full p-3 border focus:outline-none bg-white"
              name="Select Menu"
              value={po18}
              onChange={(e) => setPo18(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">Marital Status</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <select
              className="w-full p-3 border focus:outline-none bg-white"
              name="Select Menu"
              value={marriage}
              onChange={(e) => setMarriage(e.target.value)}
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="widowed">Widowed</option>
              <option value="divorced">Divorced</option>
              <option value="separated">Separated</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">What do you do for a living</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <div className="">
              <input
                className="border w-full p-3 focus:outline-none"
                value={living}
                onChange={(e) => setLiving(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">
            Household spend per month (average)?
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <select
              className="w-full p-3 border focus:outline-none bg-white"
              name="Select Menu"
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
            >
              <option value="Less than $10,000">Less than $10,000</option>
              <option value="$10,000-$20,000">$10,000-$20,000</option>
              <option value="$20,000-$30,000">$20,000-$30,000</option>
              <option value="$30,000-$40,000">$30,000-$40,000</option>
              <option value="$40,000-$50,000">$40,000-$50,000</option>
              <option value="Over $50,000">Over $50,000</option>
              <option value="I prefer not to say">I prefer not to say</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">Skin Type</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <select
              className="w-full p-3 border focus:outline-none bg-white"
              name="Select Menu"
              value={skin}
              onChange={(e) => setSkin(e.target.value)}
            >
              <option value="Oily">Oily</option>
              <option value="Combination">Combination</option>
              <option value="Dry">Dry</option>
            </select>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">What is your hair type</h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <select
              className="w-full p-3 border focus:outline-none bg-white"
              name="Select Menu"
              value={hair}
              onChange={(e) => setHair(e.target.value)}
            >
              <option value="Straight">Straight</option>
              <option value="Wavey">Wavey</option>
              <option value="Curly">Curly</option>
              <option value="Coily">Coily</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <h1 className="font-bold mb-4">Do you own any pets? If so, which?</h1>
        <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
          <div className="">
            <input
              className="border w-full p-3 focus:outline-none"
              value={pet}
              onChange={(e) => setPet(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
        <div className="">
          <h1 className="font-bold mb-4">
            How important is eating healthy to you?
          </h1>
          <RadioGroup
            className="flex space-x-5 flex-wrap"
            selectedValue={eating}
            onChange={(value) => setEating(value)}
          >
            <label htmlFor="">
              <Radio value="1" /> 1
            </label>
            <label htmlFor="">
              <Radio value="2" /> 2
            </label>
            <label htmlFor="">
              <Radio value="3" /> 3
            </label>
            <label htmlFor="">
              <Radio value="4" /> 4
            </label>
            <label htmlFor="">
              <Radio value="5" /> 5
            </label>
          </RadioGroup>
          <p className="mt-2 text-sm">
            *1 being not important, and 5 Extremely important
          </p>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">How important is nature to you?</h1>
          <div className="flex space-x-5 flex-wrap">
            <RadioGroup
              className="flex space-x-5 flex-wrap"
              selectedValue={nature}
              onChange={(value) => setNature(value)}
            >
              <label htmlFor="">
                <Radio value="1" /> 1
              </label>
              <label htmlFor="">
                <Radio value="2" /> 2
              </label>
              <label htmlFor="">
                <Radio value="3" /> 3
              </label>
              <label htmlFor="">
                <Radio value="4" /> 4
              </label>
              <label htmlFor="">
                <Radio value="5" /> 5
              </label>
            </RadioGroup>
          </div>
          <p className="mt-2 text-sm">
            *1 being not important, and 5 Extremely important
          </p>
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
          onClick={handleClick}
        >
          {index === 2 ? <span>Submit</span> : <span>Next</span>}
        </button>
      </div>
    </div>
  );
};

export default SecondForm;
