import { useDispatch } from "react-redux";
import { translateText } from "../redux/actions";

export default function Button() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(translateText())}>TRANSLATE</button>;
}
