export const content = 
  `<form class="contacts-form">
    <h2 class="contacts-form__title">Contact us</h2>
    <div class="contacts-form__content">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Name"/>
    </div>
    <div class="contacts-form__wrapper">
      <div class="contacts-form__content">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email"/>
      </div>
      <div class="contacts-form__content">
        <label for="phone">Phone:</label>
        <input type="text" id="phone" name="phone" placeholder="Phone"/>
      </div>
    </div>
    <div class="contacts-form__content">
      <label for="message">Message:</label>
      <textarea id="message" placeholder="Message" name="message" rows="5"></textarea>
    </div>
    <div class="contacts-form__content">
      <input class="contacts-form__content-button" type="submit" value="Submit" />
    </div>
    <p class="contacts-form__help">
      Any questions?
      <button class="contacts-form__help-button" type="button">Help</button>
    </p>
	</form>
	<div class="modal">
	  <div class="modal-content">
	    <p class="modal-content__close">&times;</p>
	    <p class="modal-content__text">
	      If you have any questions, please contact us using one of the following methods:
	      <ul class="modal-content__list">
	        <li>
	          <a class="modal-content__link" href="tel:+375000000000">
	            Call us
	          </a> 
	        </li>
	        <li>
	          <a class="modal-content__link" href="mailto:example@gmail.com">
	            Email us
	          </a>
	        </li>
	      </ul>
	    </p>
	  </div>
	</div>`