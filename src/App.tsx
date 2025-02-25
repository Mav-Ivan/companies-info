import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { Mosaic, MosaicBranch, MosaicNode } from "react-mosaic-component";

import { NavBar } from "@/components/navbar/Navbar";
import Window from "@/components/window/Window";
import { fetcher } from "@/utils/utils";
import { WindowData } from "@/consts/types";

const App = () => {
  const [currentNode, setCurrentNode] = useState<
    null | string | MosaicNode<string>
  >(null);

  const { data, isLoading, error } = useSWR("/companies-lookup.json", fetcher);

  useEffect(() => {
    if (data && !isLoading && !error) {
      const initialValue: MosaicNode<string> = {
        direction: "row",
        first: data[0].id,
        second: {
          direction: "column",
          first: data[1].id,
          second: data[2].id,
        },
      };

      setCurrentNode(initialValue);
    }
  }, [data, error, isLoading]);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <>
      <NavBar />
      <Mosaic
        initialValue={currentNode}
        renderTile={(id: string, path: MosaicBranch[]) => {
          const windowData = data.find((item: WindowData) => item.id === id);
          return <Window path={path} data={windowData} />;
        }}
      />
    </>
  );
};

export default App;
