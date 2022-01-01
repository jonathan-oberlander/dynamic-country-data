import { setLanguageFilter } from "../../app/rtk/slice/coreSlice";
import { useAllLanguages, useAppDispatch } from "../../app/rtk/hooks";
import { Select } from "./lanFilter.style";
import { useLanguageFilter } from "../../app/rtk/selectors";

export const LanguageFilter = () => {
  const { allLanguages } = useAllLanguages();
  const languageFilter = useLanguageFilter();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguageFilter(e.target.value));
  };

  return (
    <label>
      <Select value={languageFilter} onChange={handleChange}>
        {allLanguages?.map((l, i) => (
          <option key={i} value={l}>
            {l}
          </option>
        ))}
      </Select>
    </label>
  );
};
