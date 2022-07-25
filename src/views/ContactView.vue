<template>
  <div class="contact">
    
    <header>
      
    </header>
    Please get in touch and our expert support team will answer all your
    questions.
    <form>
      <input type="text" placeholder="Enter Fullname" name="fname" /><br />
      <input
        type="text"
        placeholder="Enter E-mail Address"
        name="email"
      /><br />
      <tr>
        <td>
          Do you already have an account:<br />
          <input type="radio" name="status" value="Y" />Yes
          <input type="radio" name="status" value="N" />No
        </td>
      </tr>
      <br />
      <tr>
        <td>
          Subject:
          <select name="Subject">
            <br />
            <option value="Comp">Complaint</option>
            <option value="Rev">Review</option>
            <option value="Sugge">Suggestion</option>
            <option value="Inq">Inquiry</option>
          </select>
        </td>
      </tr>
      <br />
      Your Message:<br />
      <textarea
        wrap="virtual"
        name="Comments"
        rows="10"
        cols="50"
        maxlength="=100"
      ></textarea
      ><br />
      <br />
      <tr>
        <td>
          <input type="submit" name="Send" value="Send" />
          <input type="reset" name="Reset" value="Reset" />
        </td>
      </tr>
    </form>
<Footer></Footer>

  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'ContactView',
components: {
  Footer,
    }
}
</script>