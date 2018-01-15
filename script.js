$(document).ready(function () {
    $("#title").on("click", function () {
        window.location = "file:///Users/willscott/Desktop/GitHub%20Repositories/wikipediaViewer/index.html";
    })
    $("#search").on("click", function () {
        $("#replace").html('<div id="search-replaced" class="front-page-buttons"><input type="text" placeholder="Search" required id="search-bar" class="searchers"><button type="submit" id="search-button" class="searchers">Submit</button></div>');
    });
    $("#random").on("click", function () {
        window.location = "https://en.wikipedia.org/wiki/Special:Random";
    });
});