<template>
  <div class="wrapper">
    <div id="homecarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#homecarousel" data-slide-to="0" class="active"></li>
        <li data-target="#homecarousel" data-slide-to="1"></li>
        <li data-target="#homecarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/img/carousel-1.jpg" alt="Carousel Image">
          <div class="carousel-caption">
            <p class="animated fadeInRight">Uzman Ekip</p>
            <h1 class="animated fadeInLeft">Hayalinizdeki Şirket Yönetimi İçin</h1>
            <a class="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Teklif
              Alın</a>
          </div>
        </div>

        <div class="carousel-item">
          <img src="@/assets/img/carousel-2.jpg" alt="Carousel Image">
          <div class="carousel-caption">
            <p class="animated fadeInRight">Güçlü Bulut Tabanı</p>
            <h1 class="animated fadeInLeft">Bilgilere En Hızlı Şekilde Erişebilmeniz İçin</h1>
            <a class="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Teklif
              Alın</a>
          </div>
        </div>

        <div class="carousel-item">
          <img src="@/assets/img/carousel-3.jpg" alt="Carousel Image">
          <div class="carousel-caption">
            <p class="animated fadeInRight">Yüksek Müşteri Memnuniyeti</p>
            <h1 class="animated fadeInLeft">Bize Gönül Rahatlığıyla Güvenebilirsiniz</h1>
            <a class="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Teklif
              Alın</a>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" role="button" href="#homecarousel" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" role="button" href="#homecarousel" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer-comp.vue'
export default {
  name: 'HomeView',
  components: {
    Footer
  },
  mounted () {
    document.title = 'Ana Sayfa - Ata ERP'
  }
}
</script>
