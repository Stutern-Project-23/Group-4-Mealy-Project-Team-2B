import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const FormValidationContext = createContext();

const ValidationProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [discountChecked, setDiscountChecked] = useState(false);
  const [discountCheckedError, setDiscountCheckedError] = useState("");

  const [agreeChecked, setAgreeChecked] = useState(false);
  const [agreeCheckedError, setAgreeCheckedError] = useState("");

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhoneNumber = () => {
    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required.");
      return false;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Invalid phone number format.");
      return false;
    }
    setPhoneNumberError("");
    return true;
  };

  const validateFirstName = () => {
    if (firstName.trim() === "") {
      setFirstNameError("First Name is required.");
      return false;
    }
    setFirstNameError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required.");
      return false;
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required.");
      return false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const validateLastName = () => {
    if (!lastName) {
      setLastNameError("Last name is required.");
      return false;
    }
    setLastNameError("");
    return true;
  };
  const validateDiscountChecked = () => {
    // Discount checkbox validation logic
    // ...
  };

  const validateAgreeChecked = () => {
    if (!agreeChecked) {
      setAgreeCheckedError("You must agree to the Terms of Service.");
      return false;
    }
    setAgreeCheckedError("");
    return true;
  };

  const value = useMemo(
    () => ({
      email,
      setEmail,
      emailError,
      setEmailError,
      validateEmail,
      phoneNumber,
      setPhoneNumber,
      phoneNumberError,
      setPhoneNumberError,
      validatePhoneNumber,
      firstName,
      setFirstName,
      firstNameError,
      setFirstNameError,
      validateFirstName,
      lastName,
      setLastName,
      lastNameError,
      setLastNameError,
      validateLastName,
      password,
      setPassword,
      passwordError,
      setPasswordError,
      validatePassword,
      confirmPassword,
      setConfirmPassword,
      confirmPasswordError,
      setConfirmPasswordError,
      validateConfirmPassword,
      discountChecked,
      setDiscountChecked,
      discountCheckedError,
      setDiscountCheckedError,
      validateDiscountChecked,
      agreeChecked,
      setAgreeChecked,
      agreeCheckedError,
      setAgreeCheckedError,
      validateAgreeChecked,
    }),
    [
      email,
      setEmail,
      emailError,
      setEmailError,
      validateEmail,
      phoneNumber,
      setPhoneNumber,
      phoneNumberError,
      setPhoneNumberError,
      validatePhoneNumber,
      firstName,
      setFirstName,
      firstNameError,
      setFirstNameError,
      validateFirstName,
      lastName,
      setLastName,
      lastNameError,
      setLastNameError,
      validateLastName,
      password,
      setPassword,
      passwordError,
      setPasswordError,
      validatePassword,
      confirmPassword,
      setConfirmPassword,
      confirmPasswordError,
      setConfirmPasswordError,
      validateConfirmPassword,
      discountChecked,
      setDiscountChecked,
      discountCheckedError,
      setDiscountCheckedError,
      validateDiscountChecked,
      agreeChecked,
      setAgreeChecked,
      agreeCheckedError,
      setAgreeCheckedError,
      validateAgreeChecked,
    ],
  );

  return (
    <FormValidationContext.Provider value={value}>
      {children}
    </FormValidationContext.Provider>
  );
};

ValidationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ValidationProvider;
