import { TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import React, { useState } from "react";
import * as Yup from "yup";

const Registration = ({ toggleRegistration }) => 
{
    const [passVisible, setPassVisible] = useState(false);

    const togglePassVisibility = () => setPassVisible(!passVisible);

  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6, "Password to short!").max(20, "Password to long!").required(),
    repeatPassword: Yup.string().oneOf([Yup.ref('password')], "Password don`t match!"),
    name: Yup.string().min(3).required(),
    age: Yup.number().min(16).required()
  });

  const initialValues = {
    email: "",
    password: "",
    repeatPassword: "",
    name: "",
    age: 16
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
              id="name"
              label="Name"
              value={props.values.name}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={props.touched.name ? props.errors.name : ""}
              error={props.touched.name && Boolean(props.errors.name)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="age"
              label="Age"
              type="number"
              value={props.values.age}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={props.touched.age ? props.errors.age : "Minimal age is 16!"}
              error={props.touched.age && Boolean(props.errors.age)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
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
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <TextField
                id="password"
                label="Password"
                type={passVisible ? "text" : "password"}
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                helperText={props.touched.password ? props.errors.password : ""}
                error={props.touched.password && Boolean(props.errors.password)}
                margin="dense"
                variant="outlined"
                fullWidth
                />
                { passVisible ? <VisibilityIcon onClick={ togglePassVisibility }/> : <VisibilityOffIcon onClick={ togglePassVisibility }/> }
            </div>
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
              <Button variant="contained" type="submit">Registrate</Button>
              <Button variant="outlined" onClick={ toggleRegistration }>Back to Login</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
