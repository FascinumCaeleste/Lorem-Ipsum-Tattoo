/* sticky header stuff */

const header = document.getElementsByTagName("header")[0];
const header_bg_trigger = document.getElementById("header-bg-trigger");

function toggleHeaderBgrd()
    {
    var trigger = header_bg_trigger.getBoundingClientRect().top;
    if (trigger < 150 && window.scrollY != 0)
        {
        header.id ="";
        }
    else
        {
        header.id = "trans-bg";
        }
    }

toggleHeaderBgrd();

window.addEventListener("scroll", toggleHeaderBgrd);