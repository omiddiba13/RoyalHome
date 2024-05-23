import React from "react";

export default function SignUp() {
  return (
    <div className="bg-dark rounded shadow-5-strong p-5 text-white">
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6 position-relative">
          <label for="validationTooltip01" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip01"
            required
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-6 position-relative">
          <label for="validationTooltip02" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip02"
            required
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col position-relative text-center">
          <label for="validationTooltipUsername" class="form-label">
            Username
          </label>
          <div class="input-group has-validation">
            <span
              class="input-group-text"
              id="validationTooltipUsernamePrepend">
              @
            </span>
            <input
              type="text"
              class="form-control"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div class="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
        <div class="col-12 position-relative">
          <label for="validationTooltipEmail" class="form-label">
            Email
          </label>
          <div class="input-group has-validation">
            <input
              type="email"
              class="form-control"
              id="validationTooltipEmail"
              aria-describedby="validationTooltipEmailPrepend"
              required
            />
            <div class="invalid-tooltip">Email Please</div>
          </div>
        </div>
        <div class="col-12 position-relative">
          <label for="validationTooltipPassword" class="form-label">
            password
          </label>
          <div class="input-group has-validation">
            <input
              type="password"
              class="form-control"
              id="validationTooltipPassword"
              aria-describedby="validationTooltipPasswordPrepend"
              required
            />
            <div class="invalid-tooltip">password Please</div>
          </div>
        </div>

        <div class="col-12 ">
          <button class="btn btn-danger-v2 m-1 w-100" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
