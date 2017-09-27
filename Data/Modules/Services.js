/**
 * designService
 * This module is designed to provide additional functionality for easier page decoration
 */
;
(function()
{
    class Services
    {
        static placeItem(element)
        {
            element.style.left = (Math.random() * 100) + "%";
            element.style.top = (Math.random() * 100) + "%";
            element.style.position = "absolute";
        }

        static changeMenu(newMenu)
        {
            document.currentMenu.hide();
            document.currentMenu = newMenu;
            newMenu.show();

        }

        static logout()
        {
            document.currentUser = null;
        }

        static serverCheck(pair)
        {
            // Should send request
            return true;
        }

        static changeUser(pair)
        {
            document.currentUser = {name: pair.name};
            debugger;
            document.profileBlock.changeUser();
            Services.changeMenu(document.mainMenu);
        }

        static checkRegister(userInfo)
        {
            // Should send request
            return true;
        }
    }

    document.Services = Services;
})();
