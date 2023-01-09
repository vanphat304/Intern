import React, { Component } from "react";
import './Search.css'
function Search() {
  return (
    <div className="search_job">
      <div className="box-search-job box">
        <form method="get" id="frm-search-job" onsubmit="return false;">
          <div className="row-search">
            <div className="input-data search-input">
              <input placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."/>
            </div>
            <div className="input-data search-select">
              <select
                id="category"
                className="form-control select_form-findJob"
                style={{ width: "100%" }}
                tabIndex={-1}
                aria-hidden="true"
              >
                <option value="">Tất cả ngành nghề</option>
                <option value={10001}>Kinh doanh / Bán hàng</option>
                <option value={10003}>Biên / Phiên dịch</option>
                <option value={10004}>Báo chí / Truyền hình</option>
                <option value={10005}>Bưu chính - Viễn thông</option>
                <option value={10006}>Bảo hiểm</option>
                <option value={10007}>Bất động sản</option>
                <option value={10008}>Chứng khoán / Vàng / Ngoại tệ</option>
                <option value={10009}>Công nghệ cao</option>
                <option value={10010}>Cơ khí / Chế tạo / Tự động hóa</option>
                <option value={10011}>Du lịch</option>
                <option value={10012}>Dầu khí/Hóa chất</option>
                <option value={10013}>Dệt may / Da giày</option>
                <option value={10014}>Dịch vụ khách hàng</option>
                <option value={10015}>Điện tử viễn thông</option>
                <option value={10016}>Điện / Điện tử / Điện lạnh</option>
                <option value={10017}>Giáo dục / Đào tạo</option>
                <option value={10018}>Hoá học / Sinh học</option>
                <option value={10019}>Hoạch định/Dự án</option>
                <option value={10020}>Hàng gia dụng</option>
                <option value={10021}>Hàng hải</option>
                <option value={10022}>Hàng không</option>
                <option value={10023}>Hành chính / Văn phòng</option>
                <option value={10024}>In ấn / Xuất bản</option>
                <option value={10025}>IT Phần cứng / Mạng</option>
                <option value={10026}>IT phần mềm</option>
                <option value={10027}>Khách sạn / Nhà hàng</option>
                <option value={10028}>Kế toán / Kiểm toán</option>
                <option value={10029}>Marketing / Truyền thông / Quảng cáo</option>
                <option value={10030}>Môi trường / Xử lý chất thải</option>
                <option value={10031}>Mỹ phẩm / Trang sức</option>
                <option value={10032}>Mỹ thuật / Nghệ thuật / Điện ảnh</option>
                <option value={10033}>Ngân hàng / Tài chính</option>
                <option value={10034}>Nhân sự</option>
                <option value={10035}>Nông / Lâm / Ngư nghiệp</option>
                <option value={10036}>Luật/Pháp lý</option>
                <option value={10037}>Quản lý chất lượng (QA/QC)</option>
                <option value={10038}>Quản lý điều hành</option>
                <option value={10039}>Thiết kế đồ họa</option>
                <option value={10042}>Thời trang</option>
                <option value={10043}>Thực phẩm / Đồ uống</option>
                <option value={10045}>Tư vấn</option>
                <option value={10046}>Tổ chức sự kiện / Quà tặng</option>
                <option value={10047}>Vận tải / Kho vận</option>
                <option value={10048}>Logistics</option>
                <option value={10049}>Xuất nhập khẩu</option>
                <option value={10050}>Xây dựng</option>
                <option value={10051}>Y tế / Dược</option>
                <option value={10052}>Công nghệ Ô tô</option>
                <option value={10101}>An toàn lao động</option>
                <option value={10102}>Bán hàng kỹ thuật</option>
                <option value={10103}>Bán lẻ / bán sỉ</option>
                <option value={10104}>Bảo trì / Sữa chữa</option>
                <option value={10110}>Dược phẩm / Công nghệ sinh học</option>
                <option value={10111}>Địa chất / Khoáng sản</option>
                <option value={10113}>Hàng cao cấp</option>
                <option value={10117}>Hàng tiêu dùng</option>
                <option value={10120}>Kiến trúc</option>
                <option value={10124}>Phi chính phủ / Phi lợi nhuận</option>
                <option value={10125}>Sản phẩm công nghiệp</option>
                <option value={10126}>Sản xuất</option>
                <option value={10127}>Tài chính / Đầu tư</option>
                <option value={10128}>Thiết kế nội thất</option>
                <option value={10129}>Thư ký / Trợ lý</option>
                <option value={10130}>Spa / Làm đẹp</option>
                <option value={10131}>Công nghệ thông tin</option>
                <option value={10132}>NGO / Phi chính phủ / Phi lợi nhuận</option>
                <option value={11000}>Ngành nghề khác</option>
              </select>
            </div>
            <div className="input-data search-select-company">
              <select
                id="company-field-advanced"
                className="form-control select_form-findJob"
                style={{ width: "100%" }}
                tabIndex={-1}
                aria-hidden="true"
              >
                <option value="">Tất cả lĩnh vực công ty</option>
                <option value={1}>IT - Phần mềm</option>
                <option value={2}>Kế toán / Kiểm toán</option>
                <option value={3}>Luật</option>
                <option value={4}>Bảo hiểm</option>
                <option value={5}>Bất động sản</option>
                <option value={6}>Dược phẩm / Y tế / Công nghệ sinh học</option>
                <option value={7}>Internet / Online</option>
                <option value={8}>Marketing / Truyền thông / Quảng cáo</option>
                <option value={9}>Nhà hàng / Khách sạn</option>
                <option value={10}>In ấn / Xuất bản</option>
                <option value={11}>Bán lẻ - Hàng tiêu dùng - FMCG</option>
                <option value={12}>Sản xuất</option>
                <option value={13}>Chứng khoán</option>
                <option value={14}>Xây dựng</option>
                <option value={15}>Ngân hàng</option>
                <option value={16}>Nhân sự</option>
                <option value={17}>Thiết kế / kiến trúc</option>
                <option value={18}>Môi trường</option>
                <option value={19}>Xuất nhập khẩu</option>
                <option value={20}>Bảo trì / Sửa chữa</option>
                <option value={21}>Điện tử / Điện lạnh</option>
                <option value={22}>Thời trang</option>
                <option value={23}>Cơ khí</option>
                <option value={24}>Tư vấn</option>
                <option value={25}>Viễn thông</option>
                <option value={26}>Giáo dục / Đào tạo</option>
                <option value={27}>Thương mại điện tử</option>
                <option value={28}>Logistics - Vận tải</option>
                <option value={29}>Tổ chức phi lợi nhuận</option>
                <option value={30}>Cơ quan nhà nước</option>
                <option value={31}>Du lịch</option>
                <option value={32}>Tự động hóa</option>
                <option value={33}>Agency (Design/Development)</option>
                <option value={34}>Agency (Marketing/Advertising)</option>
                <option value={35}>Năng lượng</option>
                <option value={36}>Giải trí</option>
                <option value={37}>IT - Phần cứng</option>
                <option value={38}>Nông Lâm Ngư nghiệp</option>
                <option value={39}>Tài chính</option>
                <option value={10000}>Khác</option>
              </select>
            </div>
            <div className="input-data search-select">
              <select
                className="form-control select_form-findJob"
                id="city"
                style={{ width: "100%" }}
                tabIndex={-1}
                aria-hidden="true"
              >
                <option value="">Tất cả địa điểm</option>
                <option value={1}>Hà Nội</option>
                <option value={2}>Hồ Chí Minh</option>
                <option value={3}>Bình Dương</option>
                <option value={4}>Bắc Ninh</option>
                <option value={5}>Đồng Nai</option>
                <option value={6}>Hưng Yên</option>
                <option value={7}>Hải Dương</option>
                <option value={8}>Đà Nẵng</option>
                <option value={9}>Hải Phòng</option>
                <option value={10}>An Giang</option>
                <option value={11}>Bà Rịa-Vũng Tàu</option>
                <option value={12}>Bắc Giang</option>
                <option value={13}>Bắc Kạn</option>
                <option value={14}>Bạc Liêu</option>
                <option value={15}>Bến Tre</option>
                <option value={16}>Bình Định</option>
                <option value={17}>Bình Phước</option>
                <option value={18}>Bình Thuận</option>
                <option value={19}>Cà Mau</option>
                <option value={20}>Cần Thơ</option>
                <option value={21}>Cao Bằng</option>
                <option value={22}>Cửu Long</option>
                <option value={23}>Đắk Lắk</option>
                <option value={24}>Đắc Nông</option>
                <option value={25}>Điện Biên</option>
                <option value={26}>Đồng Tháp</option>
                <option value={27}>Gia Lai</option>
                <option value={28}>Hà Giang</option>
                <option value={29}>Hà Nam</option>
                <option value={30}>Hà Tĩnh</option>
                <option value={31}>Hậu Giang</option>
                <option value={32}>Hoà Bình</option>
                <option value={33}>Khánh Hoà</option>
                <option value={34}>Kiên Giang</option>
                <option value={35}>Kon Tum</option>
                <option value={36}>Lai Châu</option>
                <option value={37}>Lâm Đồng</option>
                <option value={38}>Lạng Sơn</option>
                <option value={39}>Lào Cai</option>
                <option value={40}>Long An</option>
                <option value={41}>Miền Bắc</option>
                <option value={42}>Miền Nam</option>
                <option value={43}>Miền Trung</option>
                <option value={44}>Nam Định</option>
                <option value={45}>Nghệ An</option>
                <option value={46}>Ninh Bình</option>
                <option value={47}>Ninh Thuận</option>
                <option value={48}>Phú Thọ</option>
                <option value={49}>Phú Yên</option>
                <option value={50}>Quảng Bình</option>
                <option value={51}>Quảng Nam</option>
                <option value={52}>Quảng Ngãi</option>
                <option value={53}>Quảng Ninh</option>
                <option value={54}>Quảng Trị</option>
                <option value={55}>Sóc Trăng</option>
                <option value={56}>Sơn La</option>
                <option value={57}>Tây Ninh</option>
                <option value={58}>Thái Bình</option>
                <option value={59}>Thái Nguyên</option>
                <option value={60}>Thanh Hoá</option>
                <option value={61}>Thừa Thiên Huế</option>
                <option value={62}>Tiền Giang</option>
                <option value={63}>Toàn Quốc</option>
                <option value={64}>Trà Vinh</option>
                <option value={65}>Tuyên Quang</option>
                <option value={66}>Vĩnh Long</option>
                <option value={67}>Vĩnh Phúc</option>
                <option value={68}>Yên Bái</option>
                <option value={100}>Nước Ngoài</option>
              </select>
            </div>
            <div className="input-data search-submit">
              <button type="submit" className="btn btn-search btn-primary btn-primary-hover">
                Tìm kiếm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
