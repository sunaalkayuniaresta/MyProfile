// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
<script src="<%= Url.Content("~/Scripts/jquery - 1.4.1.js") %>" type = "text/javascript" ></script >
<script>
    $(".show-hide").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "Password") {
        input.attr("type", "text");
            } else {
        input.attr("type", "Password");
            }
        });
</script>