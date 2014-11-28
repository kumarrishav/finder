(function () {

    // Add behaviour for option buttons
    app(function (api) {

        /**
         * Actions to perform when reset button is clicked
         */
        var resetbtn_action = function () {
            api.reset();
            if ($(api.args.searchinput)) {
                $(api.args.searchinput).value = "";
                $(api.args.searchinput).focus();
            }
            $("#home section").innerHTML = riot.render($("#tmpl-home-stock").innerHTML.trim());
        };

        /**
         * Actions to perform when search button is clicked
         */
        var searchbtn_action = function () {
            api.search($(api.args.searchinput).value.trim());
        };

        /**
         * Bind delegated listeners for elements in topnav
         */
        $(api.args.topnav).addEventListener("click", function (e) {

            if (e.target && e.target.id) {

                switch ("#" + e.target.id) {

                case api.args.searchbtn:
                    searchbtn_action();
                    break;

                }
            }

        }, false);

        /**
         * Bind delegated listeners for elements in bottomnav
         */
        $(api.args.bottomnav).addEventListener("click", function (e) {

            if (e.target && e.target.id) {

                switch ("#" + e.target.id) {

                case api.args.resetbtn:
                    resetbtn_action();
                    break;

                }
            }

        }, false);

        /**
         * Bind delegated listeners for form handling
         */
        api.args.root.addEventListener("submit", function (e) {
            e.preventDefault();

            if (e.target && e.target.id && e.target.id === api.args.searchform.substr(1)) {
                searchbtn_action();
            }
            return false;
        }, false);

    });
})();
