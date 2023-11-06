import "./Loader.css";

import spinner from "../../assets/spinner.svg";

export default function Loader() {
  return (
    <div className="loading">
        <img className="loading-spinner" src={spinner} alt="Loading spinner"></img>
    </div>
  )
}