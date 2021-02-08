import React from "react";
import { useRecoilState } from "recoil";
import * as Atoms from "./atoms & selectors/atoms";
import { Sections } from "./Sections";

export const NewsListFilter = () => {
  const [filter, setFilter] = useRecoilState(Atoms.newsListFilterState);

  const updateCompanyFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentNewsState = {
      company: e.currentTarget.value,
      section: "headlines",
    }
    setFilter(currentNewsState);
  };


  const updateSectionFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentNewsState = {
      company: filter.company,
      section: e.currentTarget.value,
    }
    setFilter(currentNewsState);
  };

  return (
    <>
      Filter:
      <select value={filter.company} onChange={updateCompanyFilter}>
        <option value="cnn">CNN</option>
        <option value="abc">ABC</option>
      </select>
      <Sections company={filter.company} section={filter.section} updateSectionFilter={updateSectionFilter}/>
      
    </>
  );
};
