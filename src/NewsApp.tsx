import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { Item } from "./atoms & selectors/atoms";
import * as Selectors from "./atoms & selectors/selectors";
import { NewsListFilter } from "./NewsListFilter";

export const NewsApp = () => {
  const newsFeedLoadable = useRecoilValueLoadable(
    Selectors.filteredNewsListState
  );

  switch (newsFeedLoadable.state) {
    case "hasValue":
      const myNewsFeed = newsFeedLoadable.contents;
      return (
        <>
          <NewsListFilter />
          <div>{myNewsFeed.title}</div>
          {/* render news */}
          {myNewsFeed.list.map((item: Item, index: number) => {
            if (item === undefined) {
              return <div></div>;
            }
            return (
              <div key={index}>
                <br />
                <div>{item.title}</div>
                <a href={item.link}>{item.link}</a>
              </div>
            );
          })}
        </>
      );
    case "hasError":
      return <div>damn...</div>;
    case "loading":
      return <div>Loading...</div>;
  }
};
