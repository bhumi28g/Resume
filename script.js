// form repeater
$(document).ready(function() {
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function() {
            $(this).slideDown();
            generateCV(); // Call generateCV() when a repeater is shown
        },
        hide: function(deleteElement) {
            $(this).slideUp(deleteElement);
            generateCV(); // Call generateCV() when a repeater is hidden
        },
        isFirstItemUndeletable: true
    });
});
