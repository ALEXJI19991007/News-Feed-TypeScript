import { atom, RecoilState } from "recoil";

// One news item
export interface Item {
  link?: string;
  title?: string;
}

// This atom is the current showing state
interface NewsState {
  company: string;
  section: string;
}

export const newsListFilterState: RecoilState<NewsState> = atom({
  key: "newsListFilterState",
  default: {
    company: "cnn",
    section: "headlines",
  },
});

export const RSS_URL_MAP = new Map([
  ["cnn-headlines", "https://rss.app/feeds/zGG8egDOhD9ew9nb.xml"],
  ["cnn-world", "https://rss.app/feeds/KfbyOQkOttKtkLZq.xml"],
  ["cnn-us", "https://rss.app/feeds/SySCkLYx5ra73U0n.xml"],
  ["cnn-sports", "https://rss.app/feeds/LmOxYnSzPWPhlUGu.xml"],
  ["cnn-politics", "https://rss.app/feeds/NRcF5OoiTVkEPonK.xml"],
  ["cnn-business", "https://rss.app/feeds/jq6vrWXcnqB93oTT.xml"],
  ["cnn-entertainment", "https://rss.app/feeds/szQNc8el656rUQsZ.xml"],
  ["cnn-opinions", "https://rss.app/feeds/VLIBTg1ylOuKVEYG.xml"],
  ["abc-headlines", "https://rss.app/feeds/uaBU90xsyKwpXhhp.xml"],
  ["abc-us", "https://rss.app/feeds/8jquWlniHtti2q99.xml"],
  ["abc-international", "https://rss.app/feeds/HnA00oAqEMZQHgze.xml"],
  ["abc-politics", "https://rss.app/feeds/eLCGMz7vLjSnE53c.xml"],
  ["abc-entertainment", "https://rss.app/feeds/Xnx6eqtdZ9rKCUv8.xml"],
  ["abc-business", "https://rss.app/feeds/i8BEq1dlTvIHoK1R.xml"],
  ["abc-technology", "https://rss.app/feeds/wERs9qNuDSz6DRb3.xml"],
  ["abc-sports", "https://rss.app/feeds/OPix0uWprDZHTP1S.xml"],
  ["abc-health", "https://rss.app/feeds/AtW4Oenc1bICBcjX.xml"],
]);
