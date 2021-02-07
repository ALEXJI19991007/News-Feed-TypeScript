import { useRecoilState } from "recoil";
import * as Atoms from "./atoms & selectors/atoms";

export const NewsListFilter = () => {
  const [filter, setFilter] = useRecoilState(Atoms.newsListFilterState);

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="cnn-world">CNN World</option>
        <option value="cnn-sports">CNN Sports</option>
      </select>
    </>
  );
};
