
/*_ MENU _***************/
var menu = document.querySelector("#menu");
var menuItems = [
	{ "item": "Dashboard", "state": "dashboard", "active": true , "icon": "fas fa-desktop"},
	{ "item": "Actividad Física", "state": "actividad", "active": false, "icon": "fas fa-chart-line" },
	{ "item": "Pasos", "state": "pasos", "active": false, "icon": "fas fa-shoe-prints"},
	{ "item": "Sueño", "state": "suenio", "active": false, "icon": "fas fa-bed"},
	{ "item": "Retos", "state": "retos", "active": false, "icon": "fas fa-chart-area"}
];
var menuContext = { menuItems };
menu.innerHTML = CreateTemplate.menu(menuContext);

function getStateTitle(state) {
	for (var i = 0; i < menuItems.length; i++) {
		if (menuItems[i].state === state) {
			return menuItems[i].item;
		}
	}
};

function changeState(state) {
	var appContentContext = { "state": state, "title": getStateTitle(state) };
	appContent.innerHTML = CreateTemplate.content(appContentContext);

	var bloque = document.querySelector("#" + state);
	bloque.innerHTML = CreateTemplate.dashboard();
	

	$(".menuLinks").removeClass("menuActive");
	$("#" + state + "Link").addClass("menuActive");
};
changeState("dashboard")