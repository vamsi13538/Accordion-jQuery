// Creating and storing variables
var speed = 500;
var action = 'click';

$(document).ready(function () {

    $('li.q').on(action, function () {
        $(this).next()
            .slideToggle(speed)
            // Siblings and slideup functions are used to hide sibling and display only one element when clicked
            // .siblings('li.a')
            // .slideUp();

        // Dropdown buttons handling done by using jQuery
        var DropDownButton = $(this).children('i')
        $('i').not(DropDownButton).removeClass('rotate')
        DropDownButton.toggleClass('rotate');

        // Dropdown buttons handling done by using javascript
        // const DropDownButtons = document.querySelectorAll('.fa-sharp');
        // DropDownButtons.forEach((icon) => {
        //     icon.addEventListener('click', () => {
        //         icon.classList.toggle('rotate');
        //     })
        // })

    });

});