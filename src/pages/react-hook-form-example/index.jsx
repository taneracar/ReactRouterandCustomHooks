import React from "react";
import { useForm } from "react-hook-form";

const ReactHookFormExamplePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmitForm(formData) {
    console.log(formData);
    reset();
  }

  return (
    <div>
      <h1>ReactHookFormExamplePage</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            name="email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bold", margin: "20px" }}>
              Email is reqired
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            type="password"
            name="password"
          />
          {errors.password && errors.password.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bold", margin: "20px" }}>
              Password is reqired
            </p>
          ) : null}
          {errors.password && errors.password.type === "minLength" ? (
            <p style={{ color: "red", fontWeight: "bold", margin: "20px" }}>
              Password must be longer than 8 charachters
            </p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactHookFormExamplePage;
