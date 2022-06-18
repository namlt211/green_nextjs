const MenuHome = () => {
  let imageList = [
    {
      id: 1,
      src: "/brand_1.jpg",
      name: "Khuyến mãi",
    },
    {
      id: 2,
      src: "/brand_2.webp",
      name: "Rau củ hữu cơ",
    },
    {
      id: 3,
      src: "/brand_3.webp",
      name: "Trái cây hữu cơ",
    },
    {
      id: 4,
      src: "/brand_4.webp",
      name: "Tươi sống",
    },
    {
      id: 5,
      src: "/brand_5.jpg",
      name: "Bếp chay",
    },
    {
      id: 6,
      src: "/brand_6.webp",
      name: "Café đóng chai",
    },
    {
      id: 7,
      src: "/brand_7.webp",
      name: "Hạt đậu & gạo",
    },
    {
      id: 8,
      src: "/brand_8.webp",
      name: "Nấm",
    },
  ];

  return (
    <div className="flex justify-between flex-wrap -m-4">
      {imageList.map((img) => (
        <div key={img.id} className="sm:w-auto lg:1/4  w-1/2">
          <div className="flex flex-col">
            <img
              src={img.src}
              className="rounded-full w-[120px] h-[120px] hover:border-solid hover:border-[4px] border-[#547f44]"
            />
            <div className="flex w-full justify-center mt-5">
              <span className="uppercase font-bold text-2xl text-[#3d4760]">
                {img.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuHome;
