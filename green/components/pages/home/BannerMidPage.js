const BannerMidPage = () => {
  let banners = [
    { id: 1, src: "/banner_coll_1.webp", name: "Nước ép sinh tố" },
    { id: 2, src: "/banner_coll_2.webp", name: "Rau củ hữu cơ" },
    { id: 3, src: "/banner_coll_3.webp", name: "Trái cây hữu cơ" },
  ];
  return (
    <div className="flex justify-between flex-wrap">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="flex flex-col justify-center w-full md:w-1/3"
        >
          <img className="py-2" src={banner.src} title={banner.name} />
        </div>
      ))}
    </div>
  );
};

export default BannerMidPage;
