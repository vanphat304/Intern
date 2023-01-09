import React from "react";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
function Formapply() {
  // const iconclose = document.querySelector('.modal_header-icon-close')
  // const formApply = document.querySelector('.Formapply')
 
  // iconclose.onclick = ()=>{
  //   formApply.style.display = 'none'
  // }
  return (
    <div className="Formapply cover">
      <form action="POST" className="Formapply_modal">
        <div className="Formapply_modal-header">
          <p className="modal_header-name">Ứng tuyển</p>
          <p className="modal_header-position">
            Chuyên viên tuyển dụng (IT Recruiter)
          </p>
          <div className="modal_header-icon-close">
            <CloseOutlined />
          </div>
        </div>
        <div className="Formapply_modal-body">
          <button>
            <UploadOutlined />
            <p>Tải lên CV từ máy tính</p>
          </button>
        </div>

        <div className="Formapply_modal-body-introduce">
          <p className="bold">Thư giới thiệu</p>
          <textarea
            name="letter"
            className="form-control"
            style={{ "font-size": "12px" }}
            rows={3}
            placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) và nêu rõ mong muốn, lý do làm việc tại công ty này. Đây là cách gây ấn tượng với nhà tuyển dụng nếu bạn có chưa có kinh nghiệm làm việc (hoặc CV không tốt)."
            defaultValue={
              "I'm a manual tester with 8 months of experience in Manual testing, and I looking for work at a good company to be able to study and develop my skill .  I can work independently or with a team I would like to be a Senior Test Manager in the future. I have the ability to learn quickly, listen, be eager to learn ,be active and can work Independently or with a good team"
            }
          />
          <div className="Formapply_modal-body-introduce-item">
            <p>Điểm tích lũy hệ 10</p>
            <input type="text" />
          </div>
          <div className="Formapply_modal-body-introduce-item">
            <p>File hồ sơ</p>
            <input type="text" />
          </div>
          <div className="Formapply_modal-body-introduce-item">
            <p>MSSV</p>
            <input type="text" />
          </div>
          <div className="Formapply_modal-body-introduce-item">
            <p>CHUYÊN NGÀNH</p>
            <input type="text" />
          </div>
          <div className="Formapply_modal-body-introduce-item">
            <p>HỌ VÀ TÊN</p>
            <input type="text" />
          </div>
          <div className="Formapply_modal-body-introduce-item">
            <p>LỚP</p>
            <input type="text" />
          </div>
          <div className="Formapply_modal-body-introduce-item">
            <p>Email</p>
            <input type="text" />
          </div>
          <div className="Formapply_modal-body-introduce-item">
            <p>SĐT</p>
            <input type="text" />
          </div>
        </div>
        <div className="Formapply_modal-groupbtn">
          <button className="Formapply_modal-groupbtn-close">Đóng lại</button>
          <button className="Formapply_modal-groupbtn-submit">Nộp CV</button>
        </div>
      </form>
    </div>
  );
}
export default Formapply;
