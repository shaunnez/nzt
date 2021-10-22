// import { useGetDataQuery } from "generated";
import { useParams } from "react-router";

import data from "utilities/data";

const Layout = ({ children }) => {
  // @ts-ignore
  const { id } = useParams();
  // const { data, isFetching, isRefetching } = useGetDataQuery();
  // if (isFetching && !isRefetching) {
  //   return <div></div>;
  // }
  let mindset = null;
  // @ts-ignore
  mindset = data.mindsets.find((mindset: any) => {
    return mindset.head.replace(/ /g, "-").toLowerCase() === id;
  });
  return children({
    home: data.homes[0],
    appendix: data.appendices[0],
    mindsets: data.mindsets,
    mindset: mindset,
    activities: data.activities,
  });
};

export default Layout;
