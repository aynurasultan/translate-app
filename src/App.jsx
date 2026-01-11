import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLanguages } from "./redux/actions";
import LanguageSelect from "./components/language-select";
import TextContainer from "./components/text-container";
import Button from "./components/button";
import "./index.css"; 

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  return (
    <div className="main-page">
      <div className="container">
        <h1>Translate App <span className="dot">.</span></h1>
        
        <LanguageSelect />
        <TextContainer />
        <Button />
        
    
      </div>
    </div>
  );
}