import { signupFields } from "../constants/FormFields";
import FormAction from "./FormAction";
import Input from "./Input";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate.replace("/recipe");
  }, [user, loading, navigate]);
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => (
    setSignupState({ ...signupState, [e.target.id]: e.target.value })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = e.target.elements;
    
    registerWithEmailAndPassword(username.value, email.value, password.value);
    console.log(signupState);
  };



  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form>

    </>
  );
}
