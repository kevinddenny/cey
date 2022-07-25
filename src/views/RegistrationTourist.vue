<template>
  <div class="RegTourist">
     <header>
      
    </header>
    <form>
      <div>
        <h2>Registration</h2>
        <button type="submit">
          <router-link to="/RegHotel">Hotel</router-link>
        </button>
        <button type="submit">
          <router-link to="/RegTourist">Tourist</router-link></button
        ><br />
        <div>
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            name="username"
          />
        </div>
        <div>
          <label for="emailTourist">Email Address</label>
          <input
            id="emailTourist"
            type="text"
            placeholder="Enter E-mail Address"
            name="email"
          />
        </div>

        <div>
          <label for="passwordTourist">Password</label>
          <input
            id="passwordTourist"
            type="password"
            placeholder="Enter Password"
            name="password"
          /><br />
        </div>
        <div>
          <label for="repeatPasswordTourist">Repeat Password</label>
          <input
            id="repeatPasswordTourist"
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
          />
        </div>

        <!--Verification method comes here eg: captcha etc, whatever is easy to implement-->

        <p>
          By creating an account you agree to our
          <a href="TermsAndPrivacy.html">Terms & Privacy</a>
        </p>
        <button type="submit">Register</button>

        <p>Already have an account?</p>
        <button type="submit"><router-link to="/login">Log In</router-link></button>
      </div>
    </form>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'RegistrationTourist',
components: {
  Footer,
    }
}
</script>

<style>
label {
    display: block;
}

.form-group {
    margin-bottom: 1rem;
}

input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem;
}

button {
    border: blue solid 1px;
    border-radius: 5px;
}
</style>