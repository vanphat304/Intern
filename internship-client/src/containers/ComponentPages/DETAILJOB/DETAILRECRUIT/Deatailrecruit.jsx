import {
  BookFilled,
  ContactsFilled,
  CopyOutlined,
  DollarCircleFilled,
  ShoppingFilled,
  SignalFilled,
  SmileFilled,
} from "@ant-design/icons";
import React from "react";
import Formapply from "../FORMAPPLY/Formapply";
import Reportjob from "../REPORTJOB/Reportjob";
function Detailrecruit() {
  // const buttonCoppy = document.querySelector('.btn-copy button');
  // const notify = document.querySelector('.Notify')
  // buttonCoppy.onclick = ()=>{
  //   notify.style.display == "block" ? notify.style.display = "none" : notify.style.display = "block"
  // }
  return (
    <div className="Detailrecruit">
      <Formapply/>
      <nav className="Detailrecruit-nav">
        <div className="Detailrecruit-navItem active-nav">
          <a href="#scross-recruit">Tin tuyển dụng</a>
        </div>
        <div className="Detailrecruit-navItem">
          <a href="">Thông tin công ty</a>
        </div>
      </nav>

      <div className="Detailrecruit-box">
        <div className="Detailrecruit-box-title">
          <p className="Detailrecruit-box-title-name des_company-title">
            Chi tiết tin tuyển dụng
          </p>
        </div>
        <div className="row">
          <div className="cl-8">
            <div id="scross-recruit" className="Detailrecruit-box-generalIf">
              <div className="Detailrecruit-box-generalIf-title">
                <span className="generalIf-title-name">Thông tin chung</span>
              </div>
              <div className="Detailrecruit-box-generalIf-detail">
                <div className="generalIf-detail-left">
                  <div className="generalIf-detail-item">
                    <div className="generalIf-detail-item-icon">
                      <DollarCircleFilled />
                    </div>
                    <div className="generalIf-detail-item-content">
                      <span className="generalIf-detail-item-header">
                        Mức lương
                      </span>
                      <span className="generalIf-detail-item-body">
                        Tới 30 triệu
                      </span>
                    </div>
                  </div>
                  <div className="generalIf-detail-item">
                    <div className="generalIf-detail-item-icon">
                      <ShoppingFilled />
                    </div>
                    <div className="generalIf-detail-item-content">
                      <span className="generalIf-detail-item-header">
                        Hình thức làm việc
                      </span>
                      <span className="generalIf-detail-item-body">
                        Toàn thời gian
                      </span>
                    </div>
                  </div>
                  <div className="generalIf-detail-item">
                    <div className="generalIf-detail-item-icon">
                      <ContactsFilled />
                    </div>
                    <div className="generalIf-detail-item-content">
                      <span className="generalIf-detail-item-header">
                        Giới tính
                      </span>
                      <span className="generalIf-detail-item-body">
                        Không yêu cầu
                      </span>
                    </div>
                  </div>
                </div>
                <div className="generalIf-detail-right">
                  <div className="generalIf-detail-item">
                    <div className="generalIf-detail-item-icon">
                      <SmileFilled />
                    </div>
                    <div className="generalIf-detail-item-content">
                      <span className="generalIf-detail-item-header">
                        Số lượng tuyển
                      </span>
                      <span className="generalIf-detail-item-body">
                        1 người
                      </span>
                    </div>
                  </div>
                  <div className="generalIf-detail-item">
                    <div className="generalIf-detail-item-icon">
                      <SignalFilled />
                    </div>
                    <div className="generalIf-detail-item-content">
                      <span className="generalIf-detail-item-header">
                        Cấp bậc
                      </span>
                      <span className="generalIf-detail-item-body">
                        Nhân viên
                      </span>
                    </div>
                  </div>
                  <div className="generalIf-detail-item">
                    <div className="generalIf-detail-item-icon">
                      <BookFilled />
                    </div>
                    <div className="generalIf-detail-item-content">
                      <span className="generalIf-detail-item-header">
                        Kinh nghiệm
                      </span>
                      <span className="generalIf-detail-item-body">3 năm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Detailrecruit-box-address">
              <p className="generalIf-title-name">Địa điểm làm việc</p>
              <span className="Detailrecruit-box-address-content">
                - Hà Nội: Tầng 18-19-20, Tháp C, Toà nhà Central Point, 219
                Trung Kính, phường Yên Hòa, Cầu Giấy
              </span>
            </div>

            <div className="Detailrecruit-job-data">
              <p className="Detailrecruit-job-data-title">Mô tả công việc</p>
              <div className="content-tab">
                <ul>
                  <li>
                    Cùng đội ngũ senior &amp; team leader phát triển các hệ
                    thống với CCU (Concurrent Users) và chịu tải cao;
                  </li>
                  <li>
                    Tham gia các công đoạn phát triển phần mềm tìm hiểu yêu cầu,
                    phân tích, thiết kế;
                  </li>
                  <li>
                    Được tham gia nghiên cứu &amp; phát triển các sản phẩm Web
                    sử dụng ngôn ngữ/công nghệ: NodeJS(NestJS), JavaScript/Vuejs
                    (NuxtJS) / ReactJS (NextJS), Golang, MySQL, MongoDB,
                    Memcached, Redis, Docker, Kubernetes, Socket.io,
                    Elasticsearch,...
                  </li>
                  <li>
                    Làm việc, phối hợp công việc theo nhóm dưới sự phân công
                    công việc của team leader.
                  </li>
                </ul>
              </div>
              <p className="Detailrecruit-job-data-title">Yêu cầu ứng viên</p>
              <div className="content-tab">
                <ul>
                  <li>
                    Từ 3 năm kinh nghiệm làm việc ở vị trí Back-end Developer,
                    sử dụng NodeJS;
                  </li>
                  <li>
                    Sử dụng thành thạo ngôn ngữ NodeJS, TypeScript, có kinh
                    nghiệm làm việc với NestJS framework;
                  </li>
                  <li>Nắm vững git, git flow;</li>
                  <li>
                    Sử dụng thành thạo ít nhất 1 trong các hệ quản trị cơ sở dữ
                    liệu: MySQL, MongoDB, Redis;
                  </li>
                  <li>
                    Có kinh nghiệm viết API chuẩn RESTful, viết tài liệu API sử
                    dụng Swagger;
                  </li>
                  <li>
                    Hiểu và nắm rõ 1 trong số design pattern: Singleton, Fluent
                    Interface, Repository,...
                  </li>
                  <li>Có kinh nghiệm về unit tests;</li>
                  <li>Đã từng sử dụng AWS là 1 lợi thế;</li>
                  <li>Có khả năng xây dựng hệ thống thời gian thực cao;</li>
                  <li>Ưu tiên ứng viên đã có kinh nghiệm lead team;</li>
                  <li>
                    Có khả năng làm việc độc lập tốt, chịu được áp lực cao trong
                    công việc.
                  </li>
                </ul>
                <p>Ưu tiên ứng viên:</p>
                <ul>
                  <li>Có kiến thức về AWS là một lợi thế;</li>
                  <li>
                    Yêu thích việc phân tích thiết kế hệ thống là một lợi thế.
                  </li>
                </ul>
                <p>Yêu cầu khác</p>
                <ul>
                  <li>Có tinh thần trách nhiệm cao trong công việc;</li>
                  <li>Có khả năng làm việc độc lập/khả năng teamwork tốt.</li>
                </ul>
              </div>
              <p className="Detailrecruit-job-data-title">Quyền lợi</p>
              <div className="content-tab">
                <ul>
                  <li>
                    Mức lương khởi điểm hấp dẫn, cạnh tranh, tương xứng với năng
                    lực và kinh nghiệm làm việc;
                  </li>
                  <li>
                    Thu nhập: 13 tháng lương/năm + thưởng dự án, thưởng Tết và
                    các dịp lễ…;
                  </li>
                  <li>
                    Xét tăng lương 2 lần/năm theo năng lực và hiệu quả công
                    việc;
                  </li>
                  <li>
                    Nghỉ thứ 7, Chủ nhật + Nghỉ phép theo Quy định của Pháp luật
                    hiện hành;
                  </li>
                  <li>
                    Được tham gia bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất
                    nghiệp theo Quy định của Pháp luật hiện hành và quy định
                    công ty;
                  </li>
                  <li>Khám sức khỏe định kỳ 1 năm/1 lần;</li>
                  <li>Bảo hiểm chăm sóc sức khỏe 24/24 ( PVI Care);</li>
                  <li>
                    Trợ cấp tiếng Nhật và các chứng chỉ IT liên quan (hình thức:
                    khen thưởng, tăng lương...);
                  </li>
                  <li>
                    Được tham gia các Câu lạc bộ của Công ty: CLB Bóng đá, các
                    CLB Game…..
                  </li>
                  <li>
                    Được tham gia các hoạt động tập thể sôi động của công ty:
                    Nghỉ mát hàng năm, Teambuilding hàng quý, Gala cuối
                    năm….&nbsp;
                  </li>
                </ul>
                <p>Đặc biệt</p>
                <ul>
                  <li>
                    Được hỗ trợ 100% chi phí tham gia các khóa học kỹ năng mềm
                    và các khóa đào tạo chuyên môn, luyện thi các chứng chỉ uy
                    tín trong và ngoài nước;
                  </li>
                  <li>
                    Cơ hội làm việc và đào tạo tại Nhật Bản với các ứng viên có
                    tiếng Nhật;
                  </li>
                  <li>
                    Làm việc trong môi trường chuyên nghiệp, được hỗ trợ phát
                    huy khả năng, phát triển công việc tối đa.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cl-4">
            <div className="recruit_shareJob share_CPN">
              <p className="title_adressCPN bold">Chia sẻ tin tuyển dụng</p>
              <p className="title_map">Sao chép đường dẫn</p>
              <div className="box-copy">
                <input
                  type="text"
                  defaultValue="https://www.topcv.vn/cong-ty/cong-ty-co-phan-vnext-software/1469.html"
                  className="url-copy"
                  readOnly
                />
                <div className="btn-copy">
                  <button className="btn-copy-url">
                    <CopyOutlined />
                  </button>
                </div>
              </div>
            </div>
            <Reportjob/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detailrecruit;
