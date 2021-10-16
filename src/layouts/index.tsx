import { useGetDataQuery } from "generated";
import { useParams } from "react-router";

const Layout = ({ children }) => {
  // @ts-ignore
  const { id } = useParams();
  const { data, isFetching, isRefetching } = useGetDataQuery();
  if (isFetching && !isRefetching) {
    return <div>LOADING</div>;
  }
  let mindset = null;
  // @ts-ignore
  mindset = data.mindsets.find((mindset: any) => {
    return mindset.head.replace(/ /g, "-").toLowerCase() === id;
  });
  return children({
    mindsets: data.mindsets,
    mindset: mindset,
    activities: data.activities,
  });
};

export default Layout;
