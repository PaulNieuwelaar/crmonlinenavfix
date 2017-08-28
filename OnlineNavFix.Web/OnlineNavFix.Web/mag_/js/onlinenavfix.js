// Custom Enable Rule on hidden ribbon buttons to fix the nav
function fixNav(retryCount) {
    try {
        setTimeout(function () {
            // Overwrite the onclick event for the button
            top.$("#TabArrowDivider").unbind().click(function () { top.$(".navTabButton[name=TabHome]").click(); });

            // Global context bar/navigation refreshes randomly when forms open etc so recur for 5 seconds to be sure
            if (retryCount === undefined || retryCount > 0) {
                fixNav(retryCount !== undefined ? retryCount - 1 : 100);
            }
        }, 50);
    } catch (e) { }

    // Always hide the button
    return false;
}