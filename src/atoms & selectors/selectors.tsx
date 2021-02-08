import { selector } from "recoil";
import * as Atoms from "./atoms";
import Parser from "rss-parser";

// The filteredNewsListState internally keeps track of two atom dependencies: newsListFilterState
// and newsListState so that it re-runs if either of those change.
const parser: Parser = new Parser();

export const filteredNewsListState = selector({
  key: "filteredTodoListState",
  get: async ({ get }) => {
    const filter = get(Atoms.newsListFilterState);


    let url = Atoms.RSS_URL_MAP.get(`${filter.company}-${filter.section}`);
    if (url === undefined) {
      url = "https://rss.app/feeds/zGG8egDOhD9ew9nb.xml";
    }
    const feed = await parser.parseURL(url);
    let newsList: Atoms.Item[] = [];
    feed.items.forEach((item) => {
      newsList.push({
        link: item.link,
        title: item.title,
      });
    });
    return {
      title: feed.title,
      list: newsList,
    };
  },
});
