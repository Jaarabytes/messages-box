
$(document).ready(function () {
    // Get the input element.
    var input = $("#myInput");

    // Add an event listener to the input element.
    input.on("keyup", function () {
        // Get the value of the input element.
        var value = $(this).val().toLowerCase();

        // Filter the chat sections.
        var filteredSections = $(".customer").filter(function () {
            // Check if the title of the section contains the value of the input element, converted to lowercase.
            return $(this).find(".doctor").text().toLowerCase().indexOf(value) > -1;
        });

        // Hide all of the chat sections.
        $(".customer").css("display", "none");

        // Show the filtered chat sections.
        $(filteredSections).show();
    });
});