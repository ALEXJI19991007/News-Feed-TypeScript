import { atom, RecoilState } from "recoil";

// One news item
export interface Item {
  link?: string;
  title?: string;
}

// let initialList: Item[] = [];

// // This atom is our news feed list
// export const newsListState: RecoilState<Item[]> = atom({
//   key: "newsListState",
//   default: initialList,
// });

// This atom is the current showing state
export const newsListFilterState: RecoilState<string> = atom({
    key: "newsListFilterState",
    default: "cnn-world",
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
]); 