// pages/api/test.js

export default function handler(req, res) {
  let { productId } = req.query;

  // productId가 배열 형태로 전달된 경우에 대한 처리
  if (!Array.isArray(productId)) {
    try {
      productId = JSON.parse(productId);
    } catch (error) {
      return res.status(400).json({ error: "Invalid productId" });
    }
  }

  // 200개의 더미 제품 데이터 생성
  const products = {};
  for (let i = 1; i <= 2000; i++) {
    products[i] = {
      productId: i,
      name: `제품${i}`,
      maker: `메이커${i}`,
      price: Math.floor(Math.random() * 100000) + 10000, // 10000부터 100000까지의 랜덤 가격
      reviewCount: Math.floor(Math.random() * 1000), // 0부터 1000까지의 랜덤 리뷰 수
      img: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
    };
  }

  const result = productId.map((id) => products[parseInt(id)]);

  res.status(200).json(result);
}
