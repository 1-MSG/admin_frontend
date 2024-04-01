export default function handler(req, res) {
  if (req.method === "GET") {
    const totalSales = 1000;
    const profit = 500;
    const totalShippingCost = 200;

    res.status(200).json({ totalSales, profit, totalShippingCost });
  } else {
    res.status(405).json({ message: "Only GET requests are allowed" });
  }
}
