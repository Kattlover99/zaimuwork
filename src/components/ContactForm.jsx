import { useFormik } from "formik";
import React, { useState } from "react";
import { basicSchema } from "../schemas";
import "../styles/components/Form.scss";

const TelNum = "03-6803-8667";
const LinkTel = `tel:${TelNum}`;

const FORM_SUBMISSION_STATUSES = {
  success: "success",
  error: "error",
  active: "active",
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const onSubmit = async (values, actions) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then((res) => setFormSubmissionStatus(FORM_SUBMISSION_STATUSES.success))
      .catch((error) =>
        setFormSubmissionStatus(FORM_SUBMISSION_STATUSES.error)
      );
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      company: "",
      url: "",
      name: "",
      email: "",
      tel: "",
      cmethod: "お電話",
      message: "",
      agree: false,
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(
    FORM_SUBMISSION_STATUSES.active
  );

  return (
    <>
      <form
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        onSubmit={handleSubmit}
        autoComplete="off"
        className="boxed"
        netlify-honeypot="bot-field"
      >
        <div className="form-row">
          <div className="form-group">
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <label htmlFor="company">会社名</label>
            <input
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.company && touched.company ? "input-error" : ""}
              id="company"
              type="text"
              name="company"
            />
            {errors.company && touched.company && (
              <p className="error_message">{errors.company}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="url">会社URL</label>
            <input
              value={values.url}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.url && touched.url ? "input-error" : ""}
              id="url"
              type="text"
              name="url"
            />
            {errors.url && touched.url && (
              <p className="error_message">{errors.url}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">お名前</label>
            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? "input-error" : ""}
              id="name"
              type="text"
              name="name"
            />
            {errors.name && touched.name && (
              <p className="error_message">{errors.name}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
              id="email"
              type="email"
              name="email"
            />
            {errors.email && touched.email && (
              <p className="error_message">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tel">電話番号</label>
            <input
              value={values.tel}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.tel && touched.tel ? "input-error" : ""}
              type="tel"
              name="tel"
              id="tel"
            />
            {errors.tel && touched.tel && (
              <p className="error_message">{errors.tel}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="cmethod">ご希望連絡方法</label>
            <span className="select_wrapper">
              <select
                name="cmethod"
                id="cmethod"
                value={values.cmethod}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.cmethod && touched.cmethod ? "input-error" : ""
                }
              >
                <option value="お電話">お電話</option>
                <option value="メール">メール</option>
                <option value="どちらでも">どちらでも</option>
              </select>
            </span>
            {errors.cmethod && touched.cmethod && (
              <p className="error_message">{errors.cmethod}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="message">お問合せ内容</label>
            <textarea
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.message && touched.message ? "input-error" : ""}
              id="message"
              wrap="soft"
              name="message"
            ></textarea>
            {errors.message && touched.message && (
              <p className="error_message">{errors.message}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <div className="form-checkbox">
              <input
                value={values.agree}
                onChange={handleChange}
                onBlur={handleBlur}
                type="checkbox"
                name="agree"
                id="agree"
              />
              <label htmlFor="agree">プライバシーポリシーに同意する</label>
            </div>
            {errors.agree && <p className="error_message">{errors.agree}</p>}
          </div>
          <div className="form-group">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn--submit btn--large btn--primary"
            >
              送信する
            </button>
          </div>
        </div>
      </form>
      

      {formSubmissionStatus === FORM_SUBMISSION_STATUSES.success && (
        <div className="form-modal">
          <div className="form-modal-content">
            <div className="form-modal-content-title">
              お問い合わせありがとうございます
            </div>
            <div className="form-modal-content-text">
            <p>お送り頂きました内容を確認の上、1~2営業日以内に折り返しご連絡させて頂きます。
            自動返信にて受付完了メールを送信しております。</p>
            <p>なお、お急ぎの場合は電話でもご相談を受け付けておりますので、<a class="underlink font-sans font-bold" href={LinkTel}>{TelNum}</a>までご遠慮なくご相談ください。</p>
            <div className="notice-small">
            <p className="small"><p>しばらく経ってもメールが届かない場合は、入力頂いたメールアドレスが間違っているか、迷惑メールフォルダに振り分けられている可能性、またはドメイン指定にてメールが受信されない可能性がございます。</p></p>
            </div>
            </div>

            <div className="form-modal-content-foot">
            <button
              onClick={() =>
                setFormSubmissionStatus(FORM_SUBMISSION_STATUSES.active)
              }
              className="btn btn--submit btn--small"
            >
              閉じる
            </button>
            </div>
          </div>
        </div>
      )}
      {formSubmissionStatus === FORM_SUBMISSION_STATUSES.error && (
        <div className="form-modal">
          <div className="form-modal-content">
            <div className="form-modal-content-title form-modal-content-title--error">
            エラーが起きました
            </div>
            <div className="form-modal-content-text">
              フォーム送信時にエラーが起きました。<br/>
              申し訳ございませんが、再度お試しください。
            </div>
            <div className="form-modal-content-foot">
              <button
                onClick={() =>
                  setFormSubmissionStatus(FORM_SUBMISSION_STATUSES.active)
                }
                className="btn btn--submit btn--small"
              >
                閉じる
              </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};
export default ContactForm;
