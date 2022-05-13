import PlayIco from "../assets/icons/play.svg";
import React, { useState, useEffect } from "react";

const PhraseBox = ({ dataObj, index, saveData }) => {
  const [text, setText] = useState(dataObj.text);
  const [imgSrc, setImgSrc] = useState(dataObj.imgSrc);

  // const playAudio = () => {
  //   let utterance = new SpeechSynthesisUtterance(text);
  //   speechSynthesis.speak(utterance);
  //   localStorage.setItem("voice-flow-slide", JSON.stringify({ data: imgSrc }));
  // };

  const playAudio = () => {
    console.log(dataObj.audioUrl);
    let utterance = new Audio(dataObj.audioUrl);
    console.log(utterance);
    utterance.play();

    if (imgSrc)
      localStorage.setItem(
        "voice-flow-slide",
        JSON.stringify({ data: imgSrc })
      );
  };

  const handleChange = (event) => {
    dataObj.text = event.target.value;
    setText(event.target.value);
    saveData();
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        dataObj.imgSrc = reader.result;
        setImgSrc(reader.result);
        //saveData();
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex w-full">
      <div className="m-4 text-gray-500">{index}</div>
      <div className="bg-white mb-2">
        <div className="flex">
          <div>
            <button
              className="w-16 h-16 flex justify-center text-gray-500 bg-gray-100 rounded m-4"
              onClick={playAudio}
            >
              {/* <PlayIco className="fill-current w-4 h-4 lg:w-8 mt-6 " /> */}

              <div className="w-4 h-4 lg:w-8 mt-6">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3546 9.61852C17.0583 9.99551 17.0583 11.0045 16.3546 11.3815L5.47222 17.2113C4.80605 17.5682 4 17.0856 4 16.3298L4 4.67017C4 3.91443 4.80606 3.43181 5.47222 3.78869L16.3546 9.61852Z"
                    fill="current"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="w-full">
            <textarea
              className="w-60 p-4"
              value={dataObj.text}
              onChange={handleChange}
              placeholder="Add text"
            />
          </div>

          <div className="w-48">
            <img className="h-16" src={imgSrc} />

            <div className="text-sm">
              <input id="profilePic" type="file" onChange={onChangePicture} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const audioUrl = "https://wavepagestorage.blob.core.windows.net/audiofiles/";

const defaultPrompts = [
  {
    text: "Which album should I choose?",
    imgSrc: "/a-1.jpg",
    audioUrl: `${audioUrl}d-56355.mp3`,
  },
  {
    text: "Here we go, we will be there in 10mins",
    imgSrc: "/a-2.jpg",
    audioUrl: `${audioUrl}d-98025.mp3`,
  },
  {
    text: "I don't understand",
    imgSrc: "",
    audioUrl: `${audioUrl}d-84718.mp3`,
  },
  {
    text: "What is the address?",
    imgSrc: "",
    audioUrl: `${audioUrl}d-34242.mp3`,
  },
  {
    text: "Do you want to open the calendar?",
    imgSrc: "/a-3.jpg",
    audioUrl: `${audioUrl}d-52333.mp3`,
  },
];

export default function Home() {
  const [isPresenationView, setIsPresenationView] = useState(false);
  const [activeSlide, setActiveSlide] = useState("");
  const [prompBoxs, setPrompBoxs] = useState(defaultPrompts);

  useEffect(() => {
    // Update the document title using the browser API
    const savedString = localStorage.getItem("voice-flow-data");
    if (savedString) {
      const { prompBoxs } = JSON.parse(localStorage.getItem("voice-flow-data"));
      if (prompBoxs) setPrompBoxs(prompBoxs);
    }

    setInterval(() => {
      const slideDataString = localStorage.getItem("voice-flow-slide");
      if (slideDataString) {
        const { data } = JSON.parse(slideDataString);
        if (data !== activeSlide) setActiveSlide(data);
      }
    }, 1000);
  }, []);

  const addPrompBox = (prompObj) => {
    setPrompBoxs([...prompBoxs, { text: "", imgSrc: "" }]);
  };

  const saveData = (second) => {
    localStorage.setItem("voice-flow-data", JSON.stringify({ prompBoxs }));
  };

  const toggleView = (params) => {
    setIsPresenationView(!isPresenationView);
  };

  const PhrasesList = prompBoxs.map((dataObj, index) => (
    <PhraseBox
      dataObj={dataObj}
      saveData={saveData}
      index={index}
      key={index + dataObj.text}
    />
  ));

  return (
    <div className="">
      {isPresenationView ? (
        <div className="flex py-20">
          <div>
            <img src={activeSlide} alt="" className="bg-contain bg-center" />
          </div>
        </div>
      ) : (
        <div className="flex py-20 bg-gray-200">
          <div className="w-full ">
            <div>{PhrasesList}</div>
            <div>
              <button
                onClick={addPrompBox}
                className="p-2 ml-10 rounded bg-gray-100"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0  p-2">
        <label
          htmlFor="toggle-example"
          className="flex items-center cursor-pointer relative mb-4"
        >
          <input
            type="checkbox"
            id="toggle-example"
            className="sr-only"
            onChange={toggleView}
          />
          <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
          <span className="ml-3 text-gray-900 text-sm font-medium">P</span>
        </label>
      </div>
    </div>
  );
}
