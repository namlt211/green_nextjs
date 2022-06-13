import styled from "styled-components";
import Image from "next/image";
import {
  faLocationDot,
  faEnvelope,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faBehance,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  background-color: #547f44;
  padding: 0 5%;
  margin: 0;
`;
const Footer = () => {
  return (
    <Container>
      <div className="container md:mx-auto">
        <div className="grid grid-cols-4 gap-0 text-white py-10">
          <div>
            <h4 className="text-3xl uppercase font-semibold py-4 px-2">
              Về chúng tôi
            </h4>
            <a>
              <Image src="/logo-footer.webp" width={100} height={84} />
            </a>
            <p className="text-2xl py-2 px-2">
              CÔNG TY TNHH THE FRESH GARDEN MST: 0315701288 Do sở kế hoạch và
              đầu tư Thành phố Hồ Chí Minh cấp ngày 12 tháng 08 năm 2021
            </p>
            <div className="md:flex py-2 px-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="ml-4 text-[15px]">
                Địa chỉ: 49 Đường Số 4, KP4, P.An Phú, TP.Thủ Đức, TP.HCM
              </div>
            </div>
            <div className="md:flex py-2 text-2xl px-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="ml-3">Email: xinchao@greennow.vn</div>
            </div>
            <div className="md:flex py-2 text-2xl px-2">
              <FontAwesomeIcon icon={faMobileScreen} />
              <div className="ml-4 ">093 858 7191</div>
            </div>
          </div>
          <div>
            <h4 className="text-3xl uppercase font-semibold py-4 px-2">
              hướng dẫn
            </h4>
            <div className="text-2xl py-2 px-2">Điều khoản</div>
            <div className="text-2xl py-2 px-2">Mua hàng và thanh toán</div>
            <div className="text-2xl py-2 px-2">Chính sách giao hàng</div>
            <div className="text-2xl py-2 px-2">Chính sách đổi trả</div>
            <div className="text-2xl py-2 px-2">Chính sách hoàn tiền</div>
            <div className="text-2xl py-2 px-2">
              Chính sách bảo mật và thông tin
            </div>
          </div>
          <div>
            <h4 className="text-3xl uppercase font-semibold py-4 px-2">
              thông tin
            </h4>
            <div className="text-2xl py-2 px-2">Trang chủ</div>
            <div className="text-2xl py-2 px-2">Giới thiệu</div>
            <div className="text-2xl py-2 px-2">Tuyển dụng</div>
          </div>
          <div>
            <h4 className="text-3xl uppercase font-semibold py-4 px-2">
              Theo dõi chúng tôi
            </h4>
            <div className="text-white md:flex py-2">
              <div className="text-5xl py-2 px-2">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="text-5xl py-2 px-2">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="text-5xl py-2 px-2">
                <FontAwesomeIcon icon={faBehance} />
              </div>
              <div className="text-5xl py-2 px-2">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
            <div className="py-2">
              <Image src="/logo_bct.webp" width={200} height={76} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
