<template>
    <div class="wrapper">
        <TopBar></TopBar>
        <NavBar></NavBar>
        <div class="contact wow fadeInUp">
            <div class="container">
                <div class="section-header text-center">
                    <p>Sorularınız İçin</p>
                    <h2>İletişime Geçin</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="flaticon-address"></i>
                                <div class="contact-text">
                                    <h2>Adres</h2>
                                    <p>Atatürk Mah. 13/B, Amasya</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="flaticon-call"></i>
                                <div class="contact-text">
                                    <h2>Telefon</h2>
                                    <p>+905436010979</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="flaticon-send-mail"></i>
                                <div class="contact-text">
                                    <h2>Email</h2>
                                    <p>gokcegoz.taha@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-form">
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div class="control-group" v-if="!token">
                                    <input type="text" class="form-control" id="name" placeholder="Adınız Soyadınız"
                                        required="required" data-validation-required-message="Lütfen Adınızı Girin" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group" v-if="!token">
                                    <input type="email" class="form-control" id="email" placeholder="Email Adresiniz"
                                        required="required"
                                        data-validation-required-message="Lütfen Emailinizi Girin" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="form-control" id="subject" placeholder="Konu"
                                        required="required" data-validation-required-message="Lütfen Bir Konu Başlığı Girin" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea v-if="token" class="form-control" id="message" placeholder="Mesajınız"
                                        required="required"
                                        data-validation-required-message="Lütfen mesajınızı belirtin" style="height: 276px"></textarea>
                                    <textarea v-if="!token" class="form-control" id="message" placeholder="Mesajınız"
                                        required="required"
                                        data-validation-required-message="Lütfen mesajınızı belirtin"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn" type="submit" id="sendMessageButton">Mesaj Gönder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import TopBar from '../components/TopBar.vue'
import Footer from '../components/FooterComp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'contact-view',
  components: {
    Footer,
    TopBar,
    NavBar
  },
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  computed: mapGetters(['userData']),
  methods: mapActions(['getUserData']),
  created () {
    this.getUserData().catch(() => {})
  },
  mounted () {
    document.title = 'Bize Ulaşın - Teknik ERP'
  }
}
</script>
