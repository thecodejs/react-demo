import React from "react";

export function Login() {
  return (
    <div>
      <h2>Login Form</h2>
      <form className="flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-4">
          <label>username</label>
          <input type="text" className="border border-gray-300 px-4 py-2" />
        </div>
        <div className="flex flex-row gap-x-4">
          <label>password</label>
          <input type="password" className="border border-gray-300 px-4 py-2" />
        </div>
      </form>
    </div>
  );
}
