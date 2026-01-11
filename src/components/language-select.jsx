import { useDispatch, useSelector } from "react-redux";
import { setSource, setTarget } from "../redux/slices/translateSlice";

export default function LanguageSelect() {
  const dispatch = useDispatch();
  const { languages } = useSelector((s) => s.languageReducer);
  const { sourceLang, targetLang } = useSelector((s) => s.translateReducer);

  return (
    <div className="select-area">
      <select 
        value={sourceLang?.value || "auto"}
        onChange={(e) => {
          const selected = languages.find(l => l.value === e.target.value);
          dispatch(setSource(selected || { value: "auto", label: "Dili algıla" }));
        }}
      >
        <option value="auto"></option>
        {languages.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
      </select>

      <select 
        value={targetLang.value}
        onChange={(e) => {
          const selected = languages.find(l => l.value === e.target.value);
          dispatch(setTarget(selected));
        }}
      >
        {languages.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
      </select>
    </div>
  );
}