import React from "react";
import Navbar from "../../../components/common/navbar";
import styles from "./create.module.css";
import frontPageImage from "../../../Assets/frontPageImg.png";
import CreateDialog from "../../../components/createDialog";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateProject = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (!userDetails) {
      toast.error("Please Sign Up to continue");
      return;
    } else setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const productsPage = () => {
    navigate("/display-project");
  };

  const handleAccountPageRedirect = () => {
    navigate("/account");
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.iconsArea}>
        <div className={styles.backToHome} onClick={productsPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15.0613 8.18399L21.1252 13.6415V23.1132H18.6996V15.8366H11.423V23.1132H8.99746V13.6415L15.0613 8.18399ZM15.0613 4.92163L2.93359 15.8366H6.57191V25.5388H13.8486V18.2621H16.2741V25.5388H23.5507V15.8366H27.1891L15.0613 4.92163Z"
              fill="#3C3C3C"
            />
          </svg>
          <p className={styles.backToHomeDesc}> Back To Home</p>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon2} onClick={handleAccountPageRedirect}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.4483 47.3175C34.2233 48.8475 32.8283 50.0625 31.1633 50.0625H22.8383C21.1733 50.0625 19.7783 48.8475 19.5758 47.205L18.9683 42.9525C18.3608 42.6375 17.7758 42.3 17.1908 41.9175L13.1408 43.5375C11.5658 44.1225 9.83327 43.47 9.06827 42.075L4.95077 34.9425C4.16327 33.4575 4.50077 31.7025 5.76077 30.7125L9.20327 28.035C9.18077 27.6975 9.15827 27.36 9.15827 27C9.15827 26.6625 9.18077 26.3025 9.20327 25.965L5.78327 23.2875C4.45577 22.275 4.11827 20.4525 4.95077 19.0575L9.11327 11.88C9.87827 10.485 11.6108 9.85496 13.1408 10.4625L17.2133 12.105C17.7983 11.7225 18.3833 11.385 18.9683 11.07L19.5758 6.77246C19.7783 5.19746 21.1733 3.95996 22.8158 3.95996H31.1408C32.8058 3.95996 34.2008 5.17496 34.4033 6.81746L35.0108 11.07C35.6183 11.385 36.2033 11.7225 36.7883 12.105L40.8383 10.485C42.4358 9.89996 44.1683 10.5525 44.9333 11.9475L49.0733 19.1025C49.8833 20.5875 49.5233 22.3425 48.2633 23.3325L44.8433 26.01C44.8658 26.3475 44.8883 26.685 44.8883 27.045C44.8883 27.405 44.8658 27.7425 44.8433 28.08L48.2633 30.7575C49.5233 31.77 49.8833 33.525 49.0958 34.9425L44.9108 42.1875C44.1458 43.5825 42.4133 44.2125 40.8608 43.605L36.8108 41.985C36.2258 42.3675 35.6408 42.705 35.0558 43.02L34.4483 47.3175ZM23.8958 45.5625H30.1058L30.9383 39.825L32.1308 39.33C33.1208 38.925 34.1108 38.34 35.1458 37.575L36.1583 36.81L41.5133 38.97L44.6183 33.57L40.0508 30.015L40.2083 28.755L40.2153 28.6944C40.2804 28.1311 40.3433 27.5865 40.3433 27C40.3433 26.3925 40.2758 25.8075 40.2083 25.245L40.0508 23.985L44.6183 20.43L41.4908 15.03L36.1133 17.19L35.1008 16.4025C34.1558 15.6825 33.1433 15.0975 32.1083 14.67L30.9383 14.175L30.1058 8.43746H23.8958L23.0633 14.175L21.8708 14.6475C20.8808 15.075 19.8908 15.6375 18.8558 16.425L17.8433 17.1675L12.4883 15.03L9.36077 20.4075L13.9283 23.9625L13.7708 25.2225C13.7033 25.8075 13.6358 26.415 13.6358 27C13.6358 27.585 13.6808 28.1925 13.7708 28.755L13.9283 30.015L9.36077 33.57L12.4658 38.97L17.8433 36.81L18.8558 37.5975C19.8233 38.34 20.7908 38.9025 21.8483 39.33L23.0408 39.825L23.8958 45.5625ZM34.8758 27C34.8758 31.3492 31.35 34.875 27.0008 34.875C22.6515 34.875 19.1258 31.3492 19.1258 27C19.1258 22.6507 22.6515 19.125 27.0008 19.125C31.35 19.125 34.8758 22.6507 34.8758 27Z"
                fill="#3C3C3C"
              />
            </svg>
          </div>
          <div className={styles.icon3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M31.9998 58C34.9332 58 37.3332 55.6 37.3332 52.6667H26.6665C26.6665 55.6 29.0665 58 31.9998 58ZM47.9998 42V28.6667C47.9998 20.48 43.6532 13.6267 35.9998 11.8133V10C35.9998 7.78667 34.2132 6 31.9998 6C29.7865 6 27.9998 7.78667 27.9998 10V11.8133C20.3732 13.6267 15.9998 20.4533 15.9998 28.6667V42L10.6665 47.3333V50H53.3332V47.3333L47.9998 42ZM42.6665 44.6667H21.3332V28.6667C21.3332 22.0533 25.3598 16.6667 31.9998 16.6667C38.6398 16.6667 42.6665 22.0533 42.6665 28.6667V44.6667Z"
                fill="#3C3C3C"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <h2 className={styles.heading}>Create a New Project</h2>
        <img src={frontPageImage} alt="" className={styles.img} />
        <p className={styles.desc}>
          Welcome to our platform, where your ideas come to life! Create your
          dream project effortlessly with our intuitive tools and resources.
          Whether you're envisioning a personal blog, an innovative app, a
          stunning portfolio, or a thriving e-commerce store, our platform
          provides the canvas for your creativity. Start from scratch or choose
          from our array of customizable templates - unleash your imagination
          and build your project today. Sign up now to embark on your journey of
          bringing your ideas to reality!
        </p>
        <div className={styles.button} onClick={handleClickOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
          >
            <path
              d="M25.8806 42.7186H31.4663V31.5484H42.6376V25.9633H31.4663V14.7931H25.8806V25.9633H14.7093V31.5484H25.8806V42.7186ZM28.6734 56.6814C24.81 56.6814 21.1793 55.9478 17.7814 54.4808C14.3834 53.0138 11.4277 51.0246 8.91415 48.5131C6.4006 45.9998 4.41117 43.0444 2.94587 39.6468C1.48056 36.2492 0.746979 32.6189 0.745117 28.7558C0.745117 24.8928 1.4787 21.2625 2.94587 17.8649C4.41304 14.4673 6.40246 11.5118 8.91415 8.99854C11.4277 6.48524 14.3834 4.49601 17.7814 3.03085C21.1793 1.56569 24.81 0.832184 28.6734 0.830322C32.5368 0.830322 36.1675 1.56383 39.5655 3.03085C42.9634 4.49787 45.9192 6.4871 48.4327 8.99854C50.9463 11.5118 52.9366 14.4673 54.4038 17.8649C55.8709 21.2625 56.6036 24.8928 56.6017 28.7558C56.6017 32.6189 55.8681 36.2492 54.401 39.6468C52.9338 43.0444 50.9444 45.9998 48.4327 48.5131C45.9192 51.0264 42.9634 53.0166 39.5655 54.4836C36.1675 55.9506 32.5368 56.6832 28.6734 56.6814Z"
              fill="#F8F8F8"
            />
          </svg>
          <p className={styles.buttonContent}>Create New Project</p>
        </div>
      </div>
      <CreateDialog
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default CreateProject;
