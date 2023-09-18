import styles from "./ResetForm.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import supabase from "../supabase";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password length should be at least 6 characters"),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .min(6, "Password length should be at least 6 characters")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

export default function ResetForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const { password, confirm_password } = data;

    if (password !== confirm_password) {
      setMessage("Passwords do not match.");
      return;
    }
    const token = router.query.token;

    try {
      const { error } = await supabase.auth.updateUser(token, { password });
      if (error) {
        setMessage("Password reset failed.");
      } else {
        setMessage("Password reset successfully.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };
  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="Reset"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label>New Password:</label>
        <input
          className={styles["form-field"]}
          type="password"
          name="password"
          {...register("password")}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p className={styles.err}>{message}</p>}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          className={styles["form-field"]}
          type="password"
          name="confirm_password"
          {...register("confirm_password")}
        />
        <ErrorMessage
          errors={errors}
          name="confirm_password"
          render={({ message }) => <p className={styles.err}>{message}</p>}
        />
      </div>
      <button type="submit" className={styles.button}>
        Reset Password
      </button>
      {message && <p className={styles.err}>{message}</p>}
    </form>
  );
}
