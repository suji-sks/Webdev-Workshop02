const products = [
  {
    title: "Clothes",
    image: "https://picsum.photos/300?1",
  },
  {
    title: "Health & Personal Care",
    image: "https://picsum.photos/300?2",
  },
  {
    title: "Furniture",
    image: "https://picsum.photos/300?3",
  },
  {
    title: "Electronics",
    image: "https://picsum.photos/300?4",
  },
  {
    title: "Beauty Picks",
    image: "https://picsum.photos/300?5",
  },
  {
    title: "Pet Care",
    image: "https://picsum.photos/300?6",
  },
  {
    title: "New Arrival in Toys",
    image: "https://picsum.photos/300?7",
  },
  {
    title: "Fashion Trends",
    image: "https://picsum.photos/300?8",
  },
];

function ShopSection() {
  return (
    <div className="shop-section">
      {products.map((item, index) => (
        <div className="box" key={index}>
          <div className="box-content">
            <h2>{item.title}</h2>

            <div
              className="box-img"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>

            <p>See More</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopSection;