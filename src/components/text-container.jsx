import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/slices/translateSlice";
import Loader from "./loader";

export default function TextContainer() {
  const dispatch = useDispatch();
  const { translatedText, isLoading, error } = useSelector(s => s.translateReducer);

  return (
    <div className="container">
      <textarea
        placeholder="Enter text here..."
        onChange={(e) => dispatch(setText(e.target.value))}
      />
      <div className="output">
        {isLoading ? <Loader /> : error ? <p style={{color: 'red'}}>{error}</p> : <p>{translatedText}</p>}
      </div>
    </div>
  );
}