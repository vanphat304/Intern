import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div className="box_footer">
      <div className="row">
        <div className="cl-8">
          © 2022 - 2023 <b>Đại học công nghiệp thực phẩm   </b> <br />
          <strong>Create by:</strong> <br /> 2001191213 - Trần Thị Thảo Nguyên <br />
          <strong>Create by:</strong> <br /> 2001190729 - Nguyễn Văn Phát<br />
        </div>
        <div className="cl-4">
          <img
            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
            alt="logo-huit"
            title="logo huit"
          />
        </div>
      </div>
    </div>
  );
}
export default Footer;
