$(document).ready(function() {

// Add Item to List ///
var price=0;


	$( "input" )
	  .keydown(function(e) {

		    var itemName = $( this ).val();
		    var checkButton= "<span class= 'checkButton'><i class='fa fa-check-circle'></i> </span>"
		    var uncheckButton= "<span class='uncheckButton'><i class='fa fa-times-circle'></i></span>"
		    var removeButton= "<span class='removeButton'> <i class='fa fa-minus-circle'></i></span>"
		    
		    if (e.keyCode == 13) {

		     		 $(".on-the-list ul").append('<li>' + itemName +' '+ checkButton + uncheckButton  + removeButton + '</li>')
		     	   	 $('input').val("");

		 	}	

		 	
		  	$(".removeButton").click(function(){
			$(this).parent().remove();
		 	})



		 	$(".uncheckButton").click(function() {
		   	$(this).parent().addClass('cross');
		   	})


		 	$(".checkButton").click(function() {
		 	$(this).parent().addClass('tick'); 
		 	})


				
		 	

	});





});

