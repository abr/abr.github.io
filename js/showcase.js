// Activate tab in URL
var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
} else {
    // Default to first tab
    $('.nav-tabs li:first-child a').tab('show');
}
// Change hash when tab activated (makes reload work)
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})
