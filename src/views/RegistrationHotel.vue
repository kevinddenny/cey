<template>
  <div class="RegHotel">
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
        <div class="from-group">
          <label for="hotelName">Hotel Name</label>
          <input
            id="hotelName"
            type="text"
            placeholder="Enter Hotel Name"
            name="Hname"
          />
        </div>
        <div class="from-group">
          <label id="repName" for="repName">Representative Name </label>
          <input
            id="repName"
            type="text"
            placeholder="Enter Representative Name"
            name="repname"
          />
        </div>
        <div class="from-group">
          <label for="emailHotel">Email Address</label>
          <input
            id="emailHotel"
            type="text"
            placeholder="Enter E-mail Address"
            name="email"
          />
        </div>
        <div class="from-group">
          <label for="passwordHotel">Password</label>
          <input
            id="passwordHotel"
            type="password"
            placeholder="Enter Password"
            name="psw"
          />
        </div>
        <div class="from-group">
          <label for="repeatPasswordHotel">Repeat Password</label>
          <input
            id="repeatPasswordHotel"
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
          />
        </div>
        <!--Verification method comes here eg: captcha etc, whatever is easy to implement-->
        <p>
          By creating an account you agree to our
          <a href="TermsAndPrivacy.html">Terms & Privacy</a>
        </p>
        <!-- this alert needs to come when submit is pressed-->
        <strong>Success!</strong> You will recieve your verification status
        through e-mail within 2-3 business days. Thank you! <br />
        <button type="submit">Register</button>
        <button type="reset">Clear</button>
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
name: 'RegistrationHotel',
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