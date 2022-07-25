<template>
  <div class="home">
   <body>
    <header>
     
    </header>
    <!-- Text needs to be within the image-->
    <!-- we could change this by putting this before the nav, so then each page would have the search bar too-->
    <div>
      <img src="Images/HomePage.jpg" alt="HomePage" />
      <div>
        <b><i>Ayubowan! </i></b>
        <br />
        Come See Lanka... <br />
        <input type="text" placeholder="Search.." />
      </div>
    </div>

    <h1>An island escape awaits you</h1>
    <!--flex boxes needed here three rows three coloumns-->
    <div>
      <div>
        <img src="Images/WildLife.jpg" alt="Wildlife" />
        <div><router-link to="/wild">WILDLIFE </router-link></div>
      </div>
      <div>
        <img src="Images/Beaches.jpg" alt="Beaches" />
        <div><router-link to="/beach">BEACHES </router-link></div>
      </div>
      <div>
        <img src="Images/Heritages.jpg" alt="Heritages" />
        <div><router-link to="/heritage">HERITAGES </router-link></div>
      </div>
      <div>
        <img src="Images/Pilgrimage.jpg" alt="Pilgrimage" />
        <div><router-link to="/pilgrim">PILGRIMAGE </router-link></div>
      </div>
      <div>
        <img src="Images/Scenic.jpg" alt="Scenic" />
        <div><router-link to="/scenic">SCENIC </router-link></div>
      </div>
      <div>
        <img src="Images/Adventure.jpg" alt="Adventure" />
        <div><router-link to="/adventure">ADVENTURE </router-link></div>
      </div>
      <div>
        <img src="Images/Relaxation.jpg" alt="Relaxation" />
        <div><router-link to="/relax">RELAXATION </router-link></div>
      </div>
      <div>
        <img src="Images/Cultural.jpg" alt="Cultural" />
        <div><router-link to="/cultural">CULTURAL </router-link></div>
      </div>
      <div>
        <img src="Images/Botanical.jpg" alt="Botanical" />
        <div><router-link to="/botanical">BOTANICAL </router-link></div>
      </div>
    </div>

    <!--Text within image, transparency of image needs to be reduced, so we will have an offers page?-->
    <div>
      <img src="Images/Offers.jpg" alt="Offers" />
      <div>
        <router-link to="/offer">CHECK OUT AVAILABLE OFFERS</router-link>
      </div>
    </div>

    <!--Cambio wanted a place like this which can be easily updated, so admin would have an easy fill and submit?-->
    <div>
      <h1>Special Notices For Tourists</h1>
      <p>
        <ul>
        <li>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
        </li>
        <li>
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in
        </li>
        <li>
            voluptate velit esse cillum dolore e.
        </li>
        </ul>
      </p>
    </div>

    <!-- Weather Widget comes here-->
 <Footer></Footer>
  </body>
  </div>
</template>

<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'HomeView',
components: {
  Footer,
    }
}
</script>
