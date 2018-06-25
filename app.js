require(['libs/text!home.html'], function (homeTpl) {
	
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": "home",
			"*actions": "home"
		},
		initialize: function() {
		},
		home: function() {
			this.homeView = new HomeView();
			this.homeView.render();
		}
	});
	Data = new Backbone.Model();
	Data.set({
		'specs' : {
			'size' : null,
			'color' : null,
			'quantity' : null
		},
		'address' : {
			'address1' : null,
			'address2' : null,
			'city' : null,
			'state' : null,
			'zipcode' : null
		},
	})
	HomeView = Backbone.View.extend({
		el: "#content",
		// template: "home.html",
		template: homeTpl,
		events: {
			'click #submitButton' : function(e) {
				e.preventDefault();
				this.buildFormData();
			},
			'click #nextButton' : function(e) {
				e.preventDefault();
				$('#addressSection').css('display', 'block');
			}
		},
		_modelBinder: undefined,
		initialize: function() {
		},
		render: function() {
			$(this.el).html(_.template(this.template));
            return this;
		},
		buildFormData: function() {
			var color = $('#color').val();
			var size =  $('#size').val();
			var quantity = $('#quantity').val();
			var address1 = $('#address1').val();
			var address2 = $('#address2').val();
			var city = $('#city').val();
			var state = $('#state').val();
			var zipcode = $('#zipcode').val();
			Data.set({
				'specs': {size: size, color: color, quantity: quantity},
				'address' : {address1: address1, address2: address2, city: city, state: state, zipcode: zipcode}
			});
		}
	});
	
	
	app = new ApplicationRouter();
	Backbone.history.start();	
});


