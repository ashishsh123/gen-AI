import React, { useState } from "react";
import "./styles.css";

const FetchContent = () => {
  const [genres, setGenres] = useState("1");
  const [writeType, setWriteType] = useState("Open this select menu");
  const [nature, setNature] = useState("Open this select menu");
  const [purpose, setPurpose] = useState("Open this select menu");
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");

  const selectStyle = {
    borderRadius: "8px",
    fontFamily: "sans-serif",
  };
  const handleGenerateContent = async () => {
    // Create an object to send to the API
    const requestData = {
      genres,
      writeType,
      nature,
      purpose,
      inputText,
    };

    // Make a POST request to your API with the requestData
    const response = await fetch("http://localhost:3001/generation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const data = await response.json();
      // Set the output in the state
      setOutput(data.summary);
    } else {
      console.error("Error generating content");
    }
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#F1F1F1", fontFamily: "serif" }}
      >
        {/* <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "#9B4819" }}>
            TIMES AI
          </a>
        </div> */}
      </nav>
      <div
        className=" d-flex  px-5 justify-content-between "
        style={{
          backgroundColor: "#F1F1F1",
        }}
      >
        <div>
          <div className="heading1  text-start fst-italic fw-bold">
            <p className="">Genres</p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
            >
              <option selected value="1">
                Current Events
              </option>
              <option value="2">Policy and Governance</option>
              <option value="3">Technology</option>
              <option value="3">Health and Wellness</option>
              <option value="3">Education</option>
              <option value="3">Environment</option>
              <option value="3">Culture and Arts</option>
              <option value="3">Social Issues</option>
            </select>
          </div>
          <div className="heading1 mt-4 text-start fst-italic fw-bold">
            <p className="">What do you want to write</p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={writeType}
              onChange={(e) => setWriteType(e.target.value)}
            >
              <option selected>Open this select menu</option>
              <option value="1">Article</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="heading2 mt-4 text-start fst-italic fw-bold">
            <p className="">Nature of the Article</p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={nature}
              onChange={(e) => setNature(e.target.value)}
            >
              <option selected>Open this select menu</option>
              <option value="1">Research</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="heading3 mt-4 text-start fst-italic fw-bold">
            <p className="">Purpose of the Article</p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option selected>Open this select menu</option>
              <option value="1">publishing</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className=" mt-5 text-start fst-italic  ">
            <p className="fw-bold">What are you Researching...</p>
            <input
              type="text"
              placeholder="Send a message"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                padding: "7px",
                width: "200%",
                borderRadius: "8px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
                fontFamily: "sans-serif",
              }}
            ></input>
          </div>

          <div className="mt-4">
            <button
              className="btn btn-primary w-110 "
              onClick={handleGenerateContent}
              style={{ borderRadius: "10px" }}
            >
              Submit
            </button>
          </div>
        </div>

        <div
          className="vertical-line"
          style={{ border: "1px solid gray", marginLeft: "130px" }}
        ></div>

        <div>
          <div className="form-floating ">
            <textarea
              className="textarea form-control  bg-dark"
              placeholder="Leave a comment here"
              value={output}
              readOnly
              style={{
                height: "570px",
                width: "510px",
                borderRadius: "20px",
                color: "green",
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchContent;
