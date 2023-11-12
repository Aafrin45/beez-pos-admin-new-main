import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ aspect, title, data }) => {
  const getChartData = (data) => {
    const result = [];
    if (!data) return result;

    data.reduce(function (res, value) {
      if (!res[value.orderDate]) {
        res[value.orderDate] = {
          orderDate: value.orderDate,
          sales: 0,
          items: 0,
        };
        result.push(res[value.orderDate]);
      }
      res[value.orderDate].sales += value.totalSales;
      res[value.orderDate].items += value.totalQty;
      return res;
    }, {});

    // Sort by Order date
    const sorted = result.sort((a, b) => {
      return new Date(a.orderDate) - new Date(b.orderDate);
    });

    return sorted;
  };

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={getChartData(data)}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="green" stopOpacity={0.8} />
              <stop offset="95%" stopColor="green" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorItems" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="green" stopOpacity={0.8} />
              <stop offset="95%" stopColor="green" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="orderDate" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="green"
            fillOpacity={1}
            fill="url(#colorSales)"
          />
          <Area
            type="monotone"
            dataKey="items"
            stroke="green"
            fillOpacity={1}
            fill="url(#colorItems)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
