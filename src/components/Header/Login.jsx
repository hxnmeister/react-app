import { TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Login = ({ toggleRegistration }) => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6, "Password to short!").max(20, "Password to long!").required(),
    repeatPassword: Yup.string().oneOf([Yup.ref('password')], "Password don`t match!"),
  });

  const initialValues = {
    email: "",
    password: "",
    repeatPassword: "",
  };
  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={schema}
      >
        {(props) => (
          <Form>
            <TextField
              id="email"
              label="Email"
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={props.touched.email ? props.errors.email : ""}
              error={props.touched.email && Boolean(props.errors.email)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={props.touched.password ? props.errors.password : ""}
              error={props.touched.password && Boolean(props.errors.password)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="repeatPassword"
              label="Repeat Password"
              type="password"
              value={props.values.repeatPassword}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={props.touched.repeatPassword ? props.errors.repeatPassword : ""}
              error={props.touched.repeatPassword && Boolean(props.errors.repeatPassword)}
              margin="dense"
              variant="outlined"
              fullWidth
            />

            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
              <Button variant="contained" type="submit">Login</Button>
              <Button variant="outlined" onClick={ toggleRegistration }>Go to Registration</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
