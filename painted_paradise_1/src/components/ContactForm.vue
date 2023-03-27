<template>
  <div class="container-fluid contact-info">
  <form id="contact-form" method="POST" action="https://formspree.io/f/xqkjbrag" role="form">
      <div class="messages"></div>
      <div class="controls">
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="form_name">Firstname *</label>
                      <input id="form_name" type="text" name="name" class="form-control"
                          placeholder="Please enter your firstname *" required="required"
                          data-error="Firstname is required." />
                      <div class="help-block with-errors"></div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="form_lastname">Lastname *</label>
                      <input id="form_lastname" type="text" name="surname" class="form-control"
                          placeholder="Please enter your lastname *" required="required"
                          data-error="Lastname is required." />
                      <div class="help-block with-errors"></div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="form_email">Email *</label>
                      <input id="form_email" type="email" name="email" class="form-control"
                          placeholder="Please enter your email *" required="required"
                          data-error="Valid email is required." />
                      <div class="help-block with-errors"></div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="form_phone">Phone</label>
                      <input id="form_phone" type="tel" name="phone" class="form-control"
                          placeholder="Please enter your number" />
                      <div class="help-block with-errors"></div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12">
                  <div class="form-group">
                      <label for="form_message">Message *</label>
                      <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *"
                          rows="4" required="required" data-error="Please leave a message."></textarea>
                      <div class="help-block with-errors"></div>
                  </div>
              </div>
              <div class="col-md-12">
                  <input type="submit" class="btn btn-success btn-send" value="Send message" />
              </div>
          </div>
      </div>
  </form>
  </div>

  <div class="container socials text-center">
      <div class="row">
          <div class="col-xs-12 col-md-4">
              <a
                  href="#"><i class="bi bi-facebook"></i></a>
          </div>
          <div class="col-xs-12 col-md-4">
              <a href="#"
                ><i class="bi bi-linkedin"></i></a>
          </div>
          <div class="col-xs-12 col-md-4">
              <a href="#"
                ><i class="bi bi-instagram"></i></a>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      name:'ContactForm'
  }
</script>

<style scoped>
/* Overall container style */
.container-fluid.contact-info {
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #ddd;
}

/* Title style */
.container-fluid.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* Form input style */
.container-fluid.contact-info input[type="text"],
.container-fluid.contact-info input[type="email"],
.container-fluid.contact-info select,
.container-fluid.contact-info textarea {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  box-shadow: none;
}

/* Form input focus style */
.container-fluid.contact-info input[type="text"]:focus,
.container-fluid.contact-info input[type="email"]:focus,
.container-fluid.contact-info select:focus,
.container-fluid.contact-info textarea:focus {
  outline: none;
  border: 2px solid #ff7f50;
}

/* Form submit button style */
.container-fluid.contact-info input[type="submit"] {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  background-color: #ff7f50;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

/* Form submit button hover style */
.container-fluid.contact-info input[type="submit"]:hover {
  background-color: #f37055;
}

/* Social icons container style */
.container.socials {
  margin-top: 2rem;
}

/* Social icon style */
.container.socials a {
  font-size: 2rem;
  margin: 0 1rem;
  transition: color 0.3s;
}

/* Social icon hover style */
.container.socials a:hover {
  color: #ff7f50;
}

/* Form validation error message style */
.help-block.with-errors {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}


/* Form title style */
#register-card-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* Form card container style */
#register-card {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #ddd;
}

/* Form card content style */
#register-card-content {
  text-align: center;
}

</style>