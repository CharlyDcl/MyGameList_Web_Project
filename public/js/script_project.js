
function Game(id, name, editor, date, picture) {
	this.id = id;
	this.name = name;
	this.editor = editor;
	this.date = date;
	this.picture = picture;
}

function Rate(id, rate) {
	this.id = id;
	this.rate = rate;
}

var app = new Vue({
	el: '.app',
	data: {
		games: [],
		selected: [],
		rates: [],
		options: [
			{ text: '', value: 0},
			{ text: 'Not played', value: 1 },
			{ text: 'Playing', value: 2 },
			{ text: 'Played', value: 3 }
		]
	},
	methods: {
		countAdd: function (i) {
			if(this.rates[i] < 10) {
				Vue.set(this.rates, i, this.rates[i] + 1);
			}
		},
		countMinus: function (i) {
			if(this.rates[i] > 0) {
				Vue.set(this.rates, i, this.rates[i] - 1);
			}
		},
		newAccount: function () {
		},
		sign_in_form: function () {
		},
		connection: function () {
			//check account / password
			//false : error
			//true : initialize rate and selection with user one
			//open game html page

			//var url = window.location.href;
			//url[url.length - 1];
			//to get last url parameter (ex : username after login and on load to the game page)
		},
		register: function () {
			//check account
			//create account
			//initialize rate and selection to 0
			//open game html page
		}
	},
	created: function() {
		this.games.push(new Game(0, 'League Of Legends','RIOT Games', 2009, "https://i.imgur.com/vgERB5I.png"))
		this.games.push(new Game(1, 'Overwatch', 'Blizzard', 2016, "http://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"))
		this.games.push(new Game(2, 'World of Warcraft', 'Blizzard', 2004, "https://cdn.freebiesupply.com/logos/large/2x/world-of-warcraft-logo-png-transparent.png"))
		this.games.push(new Game(3, 'The Elder Scrolls V : Skyrim', 'Bethesda', 2011, "https://i.pinimg.com/originals/4d/87/c3/4d87c3ae77ce4fea831fb41e9838754e.png"))
		this.games.push(new Game(4, 'Minecraft', 'Mojang', 2009, "https://cdn.freebiesupply.com/logos/large/2x/minecraft-1-logo-png-transparent.png"))
		this.games.push(new Game(5, 'Portal', 'Valve', 2007, "https://seeklogo.com/images/A/Aaperture_Science__Portal_-logo-84EA44F1CB-seeklogo.com.png"))
		this.games.push(new Game(6, 'Lea Passion : Veterinaire', 'Ubisoft', 2007, "https://images-na.ssl-images-amazon.com/images/I/51etsxsheUL._SX342_.jpg"))
		this.games.push(new Game(7, 'Pokemon Version Platine', 'Nintendo', 2008, "https://www.freepnglogos.com/uploads/pokemon-go-png-logo/pokemon-go-apk-png-logo-9.png"))
		this.games.push(new Game(8, 'The Legend Of Zelda : BOTW', 'Nintendo', 2017, "https://www.puissance-zelda.com/img/jeux/botw/logo-cover.png"))
		this.games.push(new Game(9, 'Mario Tennis Aces', 'Nintendo', 2018, "https://generation-nintendo.com/images/news/3qsbgf9v.png"))

		for(var i = 0 ; i < this.games.length ; i++) {
			this.selected[i] = 0;
			Vue.set(this.rates,i,0);
		}
	}
});
var userrate = [];
userrate.sort(function(a, b) {
	return b.rate - a.rate;
});

for(var i=0;i<userrate.length;i++){
//console.log(userrate[i].id);
}

var rateorder = [];
for(i=0;i<userrate.length;i++) {
	rateorder[i] = userrate[i].id;
}

function Order(array, order, key) {

	array.sort(function(a, b) {
		var A = a[key], B = b[key];

		if(order.indexOf(A) > order.indexOf(B)){
			return 1;
		} else {
			return -1;
		}
	});
	return array;
};

ordered = Order(app.games, rateorder, 'id');
console.log(app.rates);
