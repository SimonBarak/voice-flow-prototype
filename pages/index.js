import PlayIco from "../assets/icons/play.svg";
import React, { useState } from "react";

const PhraseBox = ({ dataObj, index, setActiveSlide }) => {
  const [textarea, setTextarea] = useState(dataObj.text);

  const [imgData, setImgData] = useState(null);

  const playAudio = () => {
    console.log(textarea);
    let utterance = new SpeechSynthesisUtterance(textarea);
    speechSynthesis.speak(utterance);
    setActiveSlide(imgData);
  };

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex w-full">
      <div className="m-4 text-gray-500">{index}</div>
      <div className="w-full bg-white mb-2">
        <div className="flex">
          <div>
            <button
              className="w-16 h-16 flex justify-center text-gray-500 bg-gray-100 rounded m-4"
              onClick={playAudio}
            >
              {/* <PlayIco className="fill-current w-4 h-4 lg:w-8 mt-6 " /> */}
              Play
            </button>
          </div>
          <div className="w-full">
            <textarea
              className="w-full p-4"
              value={textarea}
              onChange={handleChange}
              placeholder="Add text"
            />
          </div>

          <div className="w-48">
            <img className="h-16 bg-gray-500" src={imgData} />

            <div className="text-sm">
              <input id="profilePic" type="file" onChange={onChangePicture} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultPrompts = [
  { text: "", imgSrc: "" },
  { text: "", imgSrc: "" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState("");
  const [list, setList] = useState(defaultPrompts);

  const PhrasesList = list.map((dataObj, index) => (
    <PhraseBox
      dataObj={dataObj}
      setActiveSlide={setActiveSlide}
      index={index}
      key={index + dataObj.text}
    />
  ));

  return (
    <div className="flex py-20 ">
      <div className="w-1/2">{PhrasesList}</div>
      <div className="w-1/2">
        <div className="p-2 text-center text-sm">Shared screen</div>
        <div className="p-2 px-8">
          <img src={activeSlide} alt="" />
        </div>
      </div>
    </div>
  );
}
