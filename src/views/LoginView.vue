<template>
  <div class="login">
    <header>
     
    </header>
    <form>
      <div>
        <h2>Log In</h2>
        <input type="text" placeholder="Enter Username" name="uname" /><br />
        <input type="password" placeholder="Enter Password" name="psw" /><br />
        <button type="submit">Login</button> <br />

        <input type="checkbox" checked="checked" name="remember" /> Remember me
        <br />

        <button type="button">Cancel</button>
        <!--Do we add forgot password now itself? if so then it comes here-->
        <p>
          Not a part of our family? Register now as a <br />
          <button type="submit">
            <router-link to="/RegHotel">Hotel</router-link>
          </button>
          <button type="submit">
            <router-link to="/RegTourist">Tourist</router-link>
            </button>
            <br />
        </p>
      </div>
    </form>
 <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'LoginView',
components: {
  Footer,
    }
}
</script>