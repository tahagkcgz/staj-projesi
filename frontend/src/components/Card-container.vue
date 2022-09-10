<template>
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item">
            <div class="team-img">
                <img :src="require(`@/assets/img/team-${employee.id}.jpg`)" alt="Team Image">
            </div>
            <div class="team-text">
                <h2>{{ employee.name }}</h2>
                <p>{{ employee.position }}</p>
            </div>
            <div class="team-social">
                <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['employee']
}
</script>
