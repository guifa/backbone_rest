var PessoaTableView = Backbone.View.extend({
	template : _.template($('#pessoa-table').html()),

	initialize : function(options) {
		this.pessoas = options.pessoas;
	},

	render : function() {
		$(this.el).html(this.template());
		var self = this;
		this.pessoas.each(function(pessoa) {
			self.$el.find(".row-container").append(new PessoaTableRowView({
				model : pessoa
			}).render().$el);
		}, this);
		return this;
	},
	
	events:{
		"change input":"change",
        "click #search":"searchPessoa"
	},

    change:function (event) {
        var target = event.target;
        console.log('changing ' + target.id + ' from: ' + target.defaultValue + ' to: ' + target.value);
    },
    
    searchPessoa : function() {
    	this.pessoas.search({
    		success: function() {
				
			},
			error: function() {
				
			},
			data: {
				id: $('#id').val(),
	    		dataNascimento:$('#data-nascimento').val(),
	    		cpf:$('#cpf').val(),
	    		nome:$('#nome').val()
			}    		
    	});
    	
	}
});