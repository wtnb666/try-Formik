import type { NextPage } from "next";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

type FormErrors = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
};

// const validate = (values: FormValues): FormErrors => {
//   const errors: FormErrors = {
//     firstName: null,
//     lastName: null,
//     email: null,
//   };

//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 15) {
//     errors.lastName = "Must be 15 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

const Home: NextPage = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     lastName: Yup.string()
  //       .max(20, "Must be 20 characters or less")
  //       .required("Required"),
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //   }),
  //   onSubmit: (values: FormValues) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  return (
    <div className=" p-8">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            className="form-input"
            type="text"
            placeHolder="First Name"
          />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            className="form-input"
            type="text"
            placeHolder="Last Name"
          />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field
            name="email"
            className="form-input"
            type="email"
            placeHolder="***@**.**"
          />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Home;
