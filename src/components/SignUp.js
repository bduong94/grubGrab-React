import React from "react";

export default function SignUp() {
  return (
    <>
      <form class="row g-3 needs-validation" id="signup" novalidate>
        <div class="col-md-4">
          <label for="signup-email" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="signup-email"
            value="Mark"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="signup-password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="signup-password"
            value="Otto"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="signup-name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="signup-name"
            value="Otto"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="signup-surname" class="form-label">
            Surname
          </label>
          <input
            type="text"
            class="form-control"
            id="signup-surname"
            value="Otto"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <label for="signup-address" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="signup-address"
            required
          />
          <div class="invalid-feedback">Please provide a valid address.</div>
        </div>
        <div class="col-md-6">
          <label for="signup-city" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="signup-city" required />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-3">
          <label for="signup-province" class="form-label">
            Province
          </label>
          <select class="form-select" id="signup-province" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Please select a valid province.</div>
        </div>
        <div class="col-md-3">
          <label for="signup-postal-code" class="form-label">
            Postal Code
          </label>
          <input
            type="text"
            class="form-control"
            id="signup-postal-code"
            required
          />
          <div class="invalid-feedback">
            Please provide a valid postal code.
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
}
