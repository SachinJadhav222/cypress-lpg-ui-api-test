// Page elements , store elements in key value , Key should be readable name and value must be locators
module.exports = {
	loc02_registration_journey: '#registrationJourney',
	loc02_title_dropdown: '#title',
	loc02_first_name: '#forename',
	loc02_surname: 'input[name="map(lastName)"]',
	loc02_email: 'input[name="map(email)"]',
	loc02_phone: 'input[name="map(phone)"]',
	loc02_mobile: 'input[name="map(mobile)"]',
	loc02_address1: 'input[name="map(address1)"]',
	loc02_city: 'input[name="map(addressCity)"]',
	loc02_county: 'input[name="map(addressCity)"]',
	loc02_postcode: 'input[name="map(postCode)"]',
	loc02_country: '#countryList',

	loc02_username: 'input[name="map(userName)"]',
	loc02_password1: 'input[name="map(password)"]',
	loc02_password1_error: '//*[@id="signupForm"]/fieldset[3]/label[4]',
	
	loc02_passwordConfirm: 'input[name="map(passwordConfirm)"]',


    
	loc02_accept_terms_checkbox: 'input[name="map(terms)"]',
    loc02_join_now_button: '#form',
    loc02_required_filed_ERROR: '//*[@id="signupForm"]/fieldset[1]/label[5]',

}
