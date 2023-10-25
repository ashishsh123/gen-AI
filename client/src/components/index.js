import React, { useState } from "react";
import "./styles.css";

const FetchContent = () => {
  const [purpose, setPurpose] = useState("select purpose");
  const [genres, setGenres] = useState("select genre");
  const [editorial, setEditorial] = useState("select editorial");
  const [tone, setTone] = useState("select tone");
  const [writeType, setWriteType] = useState("select writing type");
  const [nature, setNature] = useState("select nature");

  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");

  const selectStyle = {
    borderRadius: "8px",
    fontFamily: "sans-serif",
  };
  const handleGenerateContent = async () => {
    // Create an object to send to the API
    const requestData = {
      purpose,
      genres,
      editorial,
      tone,
      writeType,
      nature,
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
    setInputText(" ");
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
            <p className="">Purpose of the Article</p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option selected>select purpose</option>
              <option selected value="1">
                Generate
              </option>
              <option value="2">profanity check</option>
              <option value="3">Jargon and Obscure Word</option>
              <option value="4">Buzzwords and Clichés</option>
              <option value="5">Proof Read</option>
              <option value="6">Reset the length of content</option>
            </select>
          </div>
          <div className="heading1  text-start fst-italic fw-bold">
            <p className="">Genres</p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
            >
              <option selected>select genre</option>
              <option selected value="1">
                Current Events
              </option>
              <option value="2">Policy and Governance</option>
              <option value="3">Technology</option>
              <option value="4">Health and Wellness</option>
              <option value="5">Education</option>
              <option value="6">Environment</option>
              <option value="7">Culture and Arts</option>
              <option value="8">Social Issues</option>
            </select>
          </div>
          <div className="heading1 mt-4 text-start fst-italic fw-bold">
            <p className="">Editorial Will</p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={editorial}
              onChange={(e) => setEditorial(e.target.value)}
            >
              <option selected>select editorial</option>
              <option value="1">Explain or Interpret</option>
              <option value="2">Critical Analysis or review</option>
              <option value="3">Persuade or reform</option>
              <option value="4">Recommend</option>
              <option value="5">Opinion</option>
              <option value="6">Elaborate </option>
              <option value="7">Infer or deduce or conclude</option>
              <option value="8">List </option>
              <option value="9">Narrow down focus</option>
              <option value="10">Outline</option>
              <option value="11">Predict</option>
              <option value="12">Produce</option>
              <option value="13">Propose</option>
              <option value="14">Rephrase</option>
              <option value="15">reword</option>
              <option value="16">Sum up </option>
              <option value="17">Summarise</option>
              <option value="18">Suggest </option>
              <option value="19">Translate</option>
              <option value="20">Argue</option>
              <option value="21">combine</option>
              <option value="22">Compare</option>
              <option value="23">Differentiate </option>
              <option value="23">Discuss </option>
            </select>
          </div>

          <div className="heading2 mt-4 text-start fst-italic fw-bold">
            <p className="">Tone of the Piece: </p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option selected>select tone</option>
              <option value="1">Positive</option>
              <option value="2">Negative</option>
              <option value="3">Neutral</option>
            </select>
          </div>

          <div className="heading3 mt-4 text-start fst-italic fw-bold">
            <p className="">Preferred Writing Style</p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={writeType}
              onChange={(e) => setWriteType(e.target.value)}
            >
              <option selected>select writing type</option>
              <option value="1">Narrative</option>
              <option value="2">Descriptive</option>
              <option value="3">Expository</option>
              <option value="4">Persuasive</option>
              <option value="5">Creative</option>
              <option value="6">Objective</option>
              <option value="7">Subjective</option>
              <option value="8">Review</option>
              <option value="9">Poetic</option>
              <option value="10">Technical</option>
            </select>
          </div>

          <div className="heading3 mt-4 text-start fst-italic fw-bold">
            <p className="">Nature of Article</p>
            <select
              className="form-select w-110"
              aria-label="Default select example"
              style={selectStyle}
              value={nature}
              onChange={(e) => setNature(e.target.value)}
            >
              <option selected>select nature</option>
              <option value="1">Political</option>
              <option value="2">Investigative</option>
              <option value="3">Reporting in-depth</option>
              <option value="4">Gossip</option>
              <option value="5">Humorous</option>
              <option value="6">Blog / Essay</option>
              <option value="7">Personality / Profile</option>
              <option value="8">Advice</option>
              <option value="9">Editorial</option>
              <option value="10">Critical/Judgemental/Analysis</option>
              <option value="11">Review - Book or Movie</option>
              <option value="12">Food Columns</option>
              <option value="13">View / Counter-View (Point)</option>
              <option value="14">Explanation or recommendation</option>
              <option value="15">Quotation and facts</option>
              <option value="16">Opening Remark/thesis</option>
              <option value="17">Objective explanation</option>
              <option value="18">Analogies/history/examples</option>
              <option value="19">Set up example</option>
            </select>
          </div>

          {/* <div className=" mt-5 text-start fst-italic  ">
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
          </div> */}

          {/* <div className="mt-4">
            <button
              className="btn btn-primary w-110 "
              onClick={handleGenerateContent}
              style={{ borderRadius: "10px" }}
            >
              Submit
            </button>
          </div> */}
        </div>

        <div
          className="vertical-line"
          style={{ border: "1px solid gray", marginLeft: "130px" }}
        ></div>

        <div>
          <div className="form-floating " style={{ position: "relative" }}>
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
            <input
              type="text"
              placeholder="Send a message"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                padding: "7px",
                width: "80%",
                borderRadius: "8px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
                fontFamily: "sans-serif",
                position: "absolute",
                bottom: "15px",
                left: "10px",
              }}
            ></input>
          </div>
          <div className="mt-4" style={{ position: "relative" }}>
            <button
              className="btn btn-primary w-110 "
              onClick={handleGenerateContent}
              style={{
                borderRadius: "10px",
                position: "absolute",
                bottom: "40px",
                right: "10px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchContent;
