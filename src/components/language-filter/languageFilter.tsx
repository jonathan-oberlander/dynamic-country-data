import { useAllLanguages, useLanguageFilter } from "../../app/store/selectors";
import { Heading } from "../styled/typography";
import { Select } from "./lanFilter.style";

export const LanguageFilter = () => {
  const { allLanguages } = useAllLanguages();
  const { languageFilter, setLanguageFilter } = useLanguageFilter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageFilter(e.target.value);
  };

  return (
    <label>
      {/* <Heading>Pick Country Language: </Heading> */}
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
