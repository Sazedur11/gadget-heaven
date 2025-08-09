import { useLoaderData } from "react-router-dom";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="bg-themecolor pt-10 pb-15 text-white">
        <h2 className="text-3xl font-bold text-center">Statistics</h2>
        <p className="text-center my-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br /> to the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="w-250 h-100 mx-auto">
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="gadget_name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Area type="monotone" dataKey="rating" fill="#8884d8" stroke="#8884d8" /> */}
            <Bar dataKey="price" barSize={35} fill="#413ea0" stroke="#8884d8" />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#ff7300"
              fill="#413ea0"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
