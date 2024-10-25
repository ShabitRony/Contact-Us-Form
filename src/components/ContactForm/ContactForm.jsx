import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { TbMessageFilled } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [text, setText] = useState(" ");
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<TbMessageFilled fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<LuPhoneCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA E-MAIL"
          icon={<SiAmazonsimpleemailservice fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="5" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
