import styled from "styled-components";

const Cards = styled.div``;
const FresherDay = () => {
  let products = [
    {
      id: 1,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 0,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 2,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 2,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 3,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 0,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 4,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 3,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 5,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 4,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 6,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 5,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 7,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 0,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 8,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 0,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 9,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 0,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 10,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 0,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
    {
      id: 11,
      name: "Cam sành măng đen DoEco - PTCT: hữu cơ",
      price: 60000,
      star: 0,
      image: "/cam-sa-nh-ma-ng-den.webp",
    },
  ];
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between items-center flex-wrap">
        <div className="uppercase text-5xl text-[#3a445e] cursor-pointer hover:text-[#547f44]">
          Tươi mới mỗi ngày
        </div>
        <div className="flex text-2xl capitalize flex-wrap pt-10 sm:pt-0">
          <div className="bg-[#eee] mt-5 sm:mt-0 ml-4 hover:text-white px-10 py-5 rounded-full cursor-pointer hover:bg-[#547f44]">
            Trái cây hữu cơ
          </div>
          <div className="bg-[#eee] mt-5 sm:mt-0 ml-4 hover:text-white px-10 py-5 rounded-full cursor-pointer hover:bg-[#547f44]">
            Bếp nóng thuần chay
          </div>
          <div className="bg-[#eee] mt-5 sm:mt-0 ml-4 hover:text-white px-10 py-5 rounded-full cursor-pointer hover:bg-[#547f44]">
            Bếp nóng vị bắc
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap -m-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 sm:w-1/2 lg:w-1/5 cursor-pointer"
          >
            <Cards className="drop-shadow-lg bg-white rounded-2xl overflow-hidden hover:!text-[#547f44]">
              <img className="object-center" src={product.image} />
              <div className="p-5">
                <div className="truncate text-2xl capitalize product_title">
                  {product.name}
                </div>
                <div className="text-[#ffbe02] text-2xl flex py-2">
                  {[...Array(5)].map((star, i) => (
                    <i
                      key={i}
                      className={
                        product.star >= i + 1
                          ? "fa-solid fa-star pr-2"
                          : "fa-regular fa-star pr-2"
                      }
                    ></i>
                  ))}
                </div>
                <div className="text-[#f4383d] text-3xl font-bold">
                  {product.price.toLocaleString("en-US")}
                  <span>₫</span>
                </div>
              </div>
            </Cards>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-10 py-3 text-[#547f44] hover:text-white hover:bg-[#547f44] text-3xl bg-white border border-solid rounded-full">
          Xem tất cả
        </button>
      </div>
    </div>
  );
};

export default FresherDay;
