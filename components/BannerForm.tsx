// import { API_URL, DEV_API_VERSION } from "@/constants";
import nmsLeft from "./assets/nms_left.png";
import nmsRight from "./assets/nms_right.png";
import Image from "next/image";
import * as React from "react";
import styles from "../styles/Bannerstatic.module.css";
import ReactModal from "react-modal";

// import { SnackbarContext } from "@/context/snackbarContext";

export const API_URL = "https://dev.dashboard.toneop.net/";
export const IMAGE_DOMAIN = "https://toneop.s3.ap-south-1.amazonaws.com/";
export const DEV_API_VERSION = "v4";
const {
  useState,
  useRef,
  //  useContext
} = React;

ReactModal.setAppElement("#__next");

type BannerFormType = {
  submittingFrom: "buy_now" | "banner";
  buttonText?: string;
  closeBannerHandler?: () => void;
};

const BannerForm = ({
  submittingFrom = "banner",
  buttonText = "Details For A Special Discount",
  closeBannerHandler,
}: BannerFormType) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [isThanksModalOpen, setIsThanksModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const bannerFormRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  const isFormEnabled = name && mobileNumber && mobileNumber.length === 10;

  const onMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue: string = e.target?.value;
    const numValue = targetValue.replace(/\D/g, "");
    setMobileNumber(numValue);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    const regex = /^[a-zA-Z ]*$/;
    if (regex.test(targetValue)) {
      setName(targetValue);
    }
  };

  const handleOnInvalid = () => {
    nameRef.current?.setCustomValidity(
      "Enter valid name (more than 3 letters)"
    );
  };

  const handleNumberInvalid = () => {
    numberRef.current?.setCustomValidity("Enter valid number (10 digits)");
  };

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (mobileNumber.length < 10) {
      alert("Enter a valid mobile number");
      setMobileNumber("");
    } else if (!window.navigator.onLine) {
      alert("Internet connection required!");
      return;
    } else {
      setIsLoading(true);
      const params = {
        username: name,
        mobile_number: mobileNumber,
      };
      try {
        const response = await fetch(
          API_URL + "api/" + DEV_API_VERSION + "/call_request_form_web",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params),
          }
        );
        if (response.ok && response.status === 201) {
          if (submittingFrom === "banner") {
            setIsThanksModalOpen(true);
          } else {
            closeBannerHandler?.();
          }
        } else {
          alert("Please try again later!");
        }
      } catch (error) {
        alert("Please try again later!");
      } finally {
        if (submittingFrom === "buy_now") {
          closeBannerHandler?.();
        }
        setIsLoading(false);
        bannerFormRef.current?.reset();
        setName("");
        setMobileNumber("");
      }
    }
  };

  return (
    <>
      <ReactModal
        isOpen={isThanksModalOpen}
        closeTimeoutMS={300}
        className="container-2xl w-3/4 duration-300 ease-in-out"
        style={{
          overlay: {
            zIndex: 1000,
            width: "100%",
            height: "100%",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
          },
        }}
        onRequestClose={() => {
          setIsThanksModalOpen(false);
        }}
      >
        <div className={styles.modal_a}>
          <div>
            <Image
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctGRVPQAGUQJxq5R/oQAAAABJRU5ErkJggg=="
              src={nmsLeft}
              width={160}
              alt="Nutrition made simple left"
              aria-label="Nutrition made simple left"
            />
          </div>
          <div className={styles.modal_b}>
            <section>
              <p className={styles.modal_text}>THANKS FOR SUBMITTING!</p>
            </section>
            <section>
              <p className={styles.modal_text}>
                Your submission has been received.
              </p>
              <p className={styles.modal_text}>
                Our health coaches will be in touch and contact you soon.
              </p>
            </section>
            <button
              onClick={() => {
                setIsThanksModalOpen(false);
              }}
              className={styles.modal_button}
              style={{ outline: "none" }}
            >
              Close
            </button>
          </div>
          <div>
            <Image
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctGRVPQAGUQJxq5R/oQAAAABJRU5ErkJggg=="
              src={nmsRight}
              width={220}
              alt="Nutrition made simple right image"
              aria-label="Nutrition made simple right image"
            />
          </div>
        </div>
      </ReactModal>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <form
          id="call_request_form_web_banner"
          ref={bannerFormRef}
          className={styles.form_container}
          onSubmit={submitHandler}
        >
          <div className={styles.modal_row}>
            <div>
              <Image
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctGRVPQAGUQJxq5R/oQAAAABJRU5ErkJggg=="
                src={nmsLeft}
                width={100}
                className={styles.form_image2}
                alt="Nutrition made simple left"
                aria-label="Nutrition made simple left"
              />
            </div>
            <div
              style={{
                alignSelf: "center",
              }}
            >
              <div className={styles.form_a}>
                <div className={styles.form_b}>
                  <label htmlFor="userName" className={styles.form_lable}>
                    Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    ref={nameRef}
                    onInvalid={handleOnInvalid}
                    required
                    pattern="[A-Za-z ]+"
                    title="Please enter letters and spaces only"
                    minLength={4}
                    className={styles.form_c}
                    name="userName"
                    onChange={onNameChange}
                    value={name}
                    maxLength={60}
                    placeholder="Your Name"
                  />
                </div>
                <div className={styles.form_d}>
                  <label htmlFor="mobileNumber" className={styles.form_lable}>
                    Number <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    onInvalid={handleNumberInvalid}
                    ref={numberRef}
                    className={styles.form_c}
                    name="mobileNumber"
                    maxLength={10}
                    step="any"
                    onPaste={(e) => {
                      e.preventDefault();
                    }}
                    value={mobileNumber}
                    placeholder="Mobile Number"
                    onChange={onMobileNumberChange}
                  />
                </div>
              </div>
              <div>
                <button
                  disabled={!isFormEnabled || isLoading}
                  style={{
                    backgroundColor: !isFormEnabled
                      ? "rgb(111, 213, 101)"
                      : "rgb(128, 181, 59)",
                    outline: "none",
                  }}
                  className={styles.form_button}
                  type="submit"
                >
                  {buttonText}
                </button>
              </div>
            </div>

            <div>
              <Image
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctGRVPQAGUQJxq5R/oQAAAABJRU5ErkJggg=="
                src={nmsRight}
                width={100}
                className={styles.form_image}
                alt="Nutrition made simple right image"
                aria-label="Nutrition made simple right image"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BannerForm;
