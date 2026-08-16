import nmsLeft from "./assets/nms_left.png";
import nmsRight from "./assets/nms_right.png";
import Image from "next/image";
import * as React from "react";
import ReactModal from "react-modal";

export const API_URL = "https://dev.dashboard.toneop.net/";
export const IMAGE_DOMAIN = "https://toneop.s3.ap-south-1.amazonaws.com/";
export const DEV_API_VERSION = "v4";

const { useState, useRef } = React;

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
    const targetValue = e.target?.value;
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
      {/* THANK YOU MODAL */}
      <ReactModal
        isOpen={isThanksModalOpen}
        closeTimeoutMS={300}
        className="w-[90%] max-w-5xl outline-none"
        style={{
          overlay: {
            zIndex: 1000,
            width: "100%",
            height: "100%",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(15,23,42,0.65)",
            padding: "20px",
          },
        }}
        onRequestClose={() => setIsThanksModalOpen(false)}
      >
        <div className="flex flex-row items-center justify-between overflow-hidden rounded-2xl bg-[#CCFD7F] dark:bg-mealflow-darkCard shadow-2xl">
          <div className="shrink-0">
            <Image
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctGRVPQAGUQJxq5R/oQAAAABJRU5ErkJggg=="
              src={nmsLeft}
              width={160}
              alt="Nutrition made simple left"
              aria-label="Nutrition made simple left"
              className="max-w-full object-contain"
            />
          </div>

          <div className="flex flex-col items-start justify-center px-4 py-6 sm:px-8 sm:py-10">
            <p className="text-lg font-semibold text-mealflow-text dark:text-mealflow-white">
              THANKS FOR SUBMITTING!
            </p>

            <p className="mt-3 text-base text-mealflow-text dark:text-mealflow-mutedDark">
              Your submission has been received.
            </p>

            <p className="mt-1 text-base text-mealflow-text dark:text-mealflow-mutedDark">
              Our health coaches will be in touch and contact you soon.
            </p>

            <button
              type="button"
              onClick={() => setIsThanksModalOpen(false)}
              className="mt-5 h-10 w-[100px] rounded-[7px] border-0 bg-mealflow-orange text-white outline-none transition hover:brightness-95"
            >
              Close
            </button>
          </div>

          <div className="shrink-0">
            <Image
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctGRVPQAGUQJxq5R/oQAAAABJRU5ErkJggg=="
              src={nmsRight}
              width={220}
              alt="Nutrition made simple right image"
              aria-label="Nutrition made simple right image"
              className="max-w-full object-contain"
            />
          </div>
        </div>
      </ReactModal>

      {/* BANNER FORM */}
      <div className="mt-[5%] flex justify-center px-4">
        <form
          id="call_request_form_web_banner"
          ref={bannerFormRef}
          onSubmit={submitHandler}
          className="w-[90%] min-[768px]:w-[60%] rounded-[10px] border border-mealflow-border bg-[#F8FBF5] p-4 shadow-sm dark:border-mealflow-borderDark dark:bg-mealflow-darkCard"
        >
          <div className="flex flex-row items-center justify-between gap-2">
            {/* LEFT IMAGE */}
            <div className="hidden min-[768px]:block shrink-0">
              <Image
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctGRVPQAGUQJxq5R/oQAAAABJRU5ErkJggg=="
                src={nmsLeft}
                width={100}
                alt="Nutrition made simple left"
                aria-label="Nutrition made simple left"
                className="h-[200px] w-[150px] object-contain"
              />
            </div>

            {/* FORM CONTENT */}
            <div className="flex-1 self-center">
              <div className="flex w-full flex-col justify-around gap-2 min-[768px]:flex-row">
                {/* NAME */}
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="userName"
                    className="text-[18px] font-medium text-mealflow-text dark:text-mealflow-white"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>

                  <input
                    type="text"
                    ref={nameRef}
                    onInvalid={handleOnInvalid}
                    required
                    pattern="[A-Za-z ]+"
                    title="Please enter letters and spaces only"
                    minLength={4}
                    name="userName"
                    onChange={onNameChange}
                    value={name}
                    maxLength={60}
                    placeholder="Your Name"
                    className="mt-1 h-10 w-full rounded-lg border-0 bg-[#E9ECE9] px-3 text-sm text-mealflow-text outline-none transition focus:ring-2 focus:ring-mealflow-orange dark:bg-mealflow-navy dark:text-mealflow-white dark:placeholder:text-mealflow-mutedDark"
                  />
                </div>

                {/* MOBILE */}
                <div className="mb-4 flex flex-col min-[768px]:ml-5">
                  <label
                    htmlFor="mobileNumber"
                    className="text-[18px] font-medium text-mealflow-text dark:text-mealflow-white"
                  >
                    Number <span className="text-red-600">*</span>
                  </label>

                  <input
                    type="tel"
                    required
                    onInvalid={handleNumberInvalid}
                    ref={numberRef}
                    name="mobileNumber"
                    maxLength={10}
                    step="any"
                    onPaste={(e) => e.preventDefault()}
                    value={mobileNumber}
                    placeholder="Mobile Number"
                    onChange={onMobileNumberChange}
                    className="mt-1 h-10 w-full rounded-lg border-0 bg-[#E9ECE9] px-3 text-sm text-mealflow-text outline-none transition focus:ring-2 focus:ring-mealflow-orange dark:bg-mealflow-navy dark:text-mealflow-white dark:placeholder:text-mealflow-mutedDark"
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <button
                disabled={!isFormEnabled || isLoading}
                type="submit"
                className={`mt-2 w-full rounded-lg border-0 p-2 text-[16px] font-semibold text-white outline-none transition-all duration-200 ${
                  !isFormEnabled || isLoading
                    ? "cursor-not-allowed bg-[#6FD565]"
                    : "cursor-pointer bg-[#80B53B] hover:brightness-95"
                }`}
              >
                {isLoading ? "Submitting..." : buttonText}
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden min-[768px]:block shrink-0">
              <Image
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctGRVPQAGUQJxq5R/oQAAAABJRU5ErkJggg=="
                src={nmsRight}
                width={100}
                alt="Nutrition made simple right image"
                aria-label="Nutrition made simple right image"
                className="h-[200px] w-[180px] object-cover"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BannerForm;