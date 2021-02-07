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
    ["cnn-world", "https://rss.app/feeds/KfbyOQkOttKtkLZq.xml"],
    ["cnn-sports", "https://rss.app/feeds/LmOxYnSzPWPhlUGu.xml"]
]); 