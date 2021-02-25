$document.ready(function(){
    $(".saveButton").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });
}