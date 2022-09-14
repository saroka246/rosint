$(document).ready(function(){
    $('.accordion').accordion({
        heightStyle: 'content',
        header: '> .accordion-item > .accordion-header',
        active: 2,
        collapsible: true
    });
});