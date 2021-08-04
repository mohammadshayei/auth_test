import React, { useState, usestate } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import ImageSection from "./ImageSection/ImageSection";
import "./SignupPage.scss";
const SignupPage = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "نام",
      },
      value: "",
      isValid: true,
      validation: {
        isRequired: true,
        minLength: 3,
      },
      touched: false,
    },
    family: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "فامیلی",
      },
      value: "",
      isValid: true,
      validation: {
        isRequired: true,
        minLength: 3,
      },
      touched: false,
    },
    username: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "نام کاربری",
      },
      value: "",
      isValid: true,
      validation: {
        isRequired: true,
        minLength: 3,
      },
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "ایمیل",
      },
      value: "",
      isValid: true,
      validation: {
        isEmail: true,
      },
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "پسورد",
      },
      value: "",
      isValid: true,
      validation: {
        minLength: 6,
      },
      touched: false,
    },
  });
  const checkValidaty = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };
  const onChange = (e, key) => {
    let UpdatedOrderForm = { ...orderForm };
    let updatedFormElement = UpdatedOrderForm[key];
    updatedFormElement.value = e.target.value;
    updatedFormElement.isValid = checkValidaty(
      e.target.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    UpdatedOrderForm[key] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in UpdatedOrderForm) {
      formIsValid = UpdatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    setFormIsValid(formIsValid);
    setOrderForm(UpdatedOrderForm);
  };
  const onFormSubmit = (e) => {
    e.preventDefault()
  };
  return (
    <div className="signup-page-layout">
      <div className="signup-page-content">
        <ImageSection />
        <div className="body-content">
          <form onSubmit={onFormSubmit}>
            {Object.entries(orderForm).map(([k, v]) => (
              <Input
                label="نام"
                key={k}
                elementType={v.elementType}
                config={v.elementConfig}
                value={v.value}
                invalid={!v.isValid}
                shouldValidate={v.validation}
                touched={v.touched}
                onChange={(e) => onChange(e, k)}
              />
            ))}
            <Button
              disabled={!formIsValid}
              style={{ marginTop: "1rem" }}
            >
              <p style={{ color: "white" }}>ثبت نام</p>
            </Button>
          </form>
          <p>ثبت نام کرده ام <span style={{color:'blue',fontWeight:'bold',cursor:"pointer"}}> ورود</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
