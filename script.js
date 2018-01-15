$(document).ready(function () {
    $("#title").on("click", function () {
        window.location = "file:///Users/willscott/Desktop/GitHub%20Repositories/wikipediaViewer/index.html";
    })
    $("#search").on("click", function () {
        $("#replace").html('<div id="search-replaced" class="front-page-buttons"><input type="search" placeholder="Search" required id="search-bar" class="searchers"><button type="submit" id="search-button" class="searchers">Submit</button></div>');
        $("#search-button").on("click", function () {
            var result = $("#search-bar").val();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + result;
            $.getJSON(url, function (json) {
                console.log(json);

                function getSearchResults() {
                    var code = "";
                    for (i = 0; i < json[1].length; i++) {
                        code += '<div id="search-result-' + i + '" class="front-page-buttons"><a href=' + json[3][i] + ">" + json[1][i] + "</a><p>" + json[2][i] + "</p></div>";
                    };
                    return code;
                };
                $("#search-results").html(getSearchResults());
            });
        });
    });
    $("#random").on("click", function () {
        window.location = "https://en.wikipedia.org/wiki/Special:Random";
    });
});