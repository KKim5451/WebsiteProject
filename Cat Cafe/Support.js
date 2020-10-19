$(document).ready(function() { //Accordion function
    $( "#accordion" ).accordion();

    $.ajax({ //AJAX file request
		type: "get",
		url: "Project_XML.xml", //Name of the file request
		beforeSend: function() {
			$("#Project_XML").html("Loading...");
		},
		timeout: 10000,
		error: function(xhr, status, error) {
			alert("Error: " + xhr.status + " - " + error);
		},
		dataType: "xml",
		success: function(data) {
			$("#Project_XML").html("");
			$(data).find("food_informations").children().each(function() {
				var xmlDoc = $(this);
				$("#Project_XML").append("<h3>" + 
					xmlDoc.find("name").text() + "</h3>" + 
					xmlDoc.find("title").text() + "<br>" + 
					xmlDoc.find("info").text() + "<br>");
			});
		}
	});
});