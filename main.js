var home = $("#home");
var features = $("#features");
var contact = $("#contact");
var homebutton = $("#homebutton");
var featuresbutton = $("#featuresbutton");
var featuresbutton2 = $("#featuresbutton2");
var contactbutton = $("#contactbutton");

var pages = [home, features, contact];
var buttons = [homebutton, featuresbutton, contactbutton];

// home: 0, features: 1, contact: 2
var currentPage;

function switchPages(toPage, fade, fadeInSpeed, fadeOutSpeed) {
	if (currentPage == toPage) { return }
	pages[currentPage].fadeOut(fadeOutSpeed, () => {
		pages[toPage].fadeIn(fadeInSpeed);
		currentPage = toPage;
	});
}

function switchActive(to) {
	for (var i = 0; i < buttons.length; i++) {
		button = buttons[i]
		if (i !== to) {
			button.removeClass("active");
		} else {
			button.addClass("active");
		}
	}
}

homebutton.click(() => {
	switchPages(0, true, 100, 200);
	switchActive(0);
});
contactbutton.click(() => {
	switchPages(2, true, 100, 200);
	switchActive(2);
});
featuresbutton.click(() => {
	switchPages(1, true, 100, 200);
	switchActive(1);
});
featuresbutton2.click(() => {
	switchPages(1, true, 100, 200);
	switchActive(1);
});

// Setup
contact.hide();
features.hide();
currentPage = 0;
switchActive(0);