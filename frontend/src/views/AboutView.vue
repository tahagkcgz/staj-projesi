<template>
  <div class="wrapper">
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <div class="about-img">
              <img src="https://www.woggleconsulting.com/wp-content/uploads/2021/05/what-is-an-erp.jpg" alt="Image">
            </div>
          </div>
          <div class="col-lg-7 col-md-6">
            <div class="section-header text-left">
              <p>ATA ERP'ye Hoşgeldiniz</p>
              <h2>8 Yıllık Deneyim</h2>
            </div>
            <div class="about-text">
              <p>
                Kurumsal kaynak planlama (ERP), kurumların muhasebe, satın alma, proje yönetimi, risk yönetimi ve
                mevzuat uyumunun yanı sıra tedarik zinciri operasyonları gibi günlük iş faaliyetlerini yönetmek için kullandığı
                bir yazılım türünü ifade eder. Eksiksiz bir ERP ürün seti, bir kurumun finansal sonuçlarını planlamaya,
                bütçelemeye, tahmin etmeye ve raporlamaya yardımcı olan Enterprise Performance Management yazılımını da
                içerir.
              </p>
              <p>
                ERP sistemleri, çok sayıda iş sürecini bir araya getirir ve bu iş süreçleri arasında veri akışı sağlar.
                ERP sistemleri, birden fazla kaynaktan organizasyonun ortak işlemsel verilerini toplayarak veri
                yinelemesini ortadan kaldırır ve "gerçeğin tek versiyonu" ile veri bütünlüğü sağlar.
              </p>
              <p>
                ERP sistemleri günümüzde, her sektörden tüm büyüklüklerdeki binlerce işletmenin yönetiminde kritik önem
                taşımaktadır. Bu şirketler için ERP, tıpkı elektrik enerjisi gibi vazgeçilmezdir.
              </p>
              <a class="btn" href="">Daha Fazla Bilgi Edinin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer-comp.vue'
export default {
  name: 'AboutView',
  components: {
    Footer
  },
  mounted () {
    document.title = 'Hakkımızda - Ata ERP'
  }
}
</script>
