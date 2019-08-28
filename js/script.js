$(document).ready(function(){
	const Url = 'https://jsonplaceholder.typicode.com/posts';
  $(".here").click(function(){
    $.ajax({
    	url: Url,
    	type:"GET",
    	success: function(result){
    		console.log(result)
    	},
    	error: function(error){
    		console.log("Error")
    	}
    });
  });
});