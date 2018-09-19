// Activate tab in URL
var url = document.location.toString();
if (url.match('#')) {
    $('#' + url.split('#')[1] + '-collapse').collapse('show');
}
// Change hash when tab activated (makes reload work)
$('.panel-collapse').on('show.bs.collapse', function (e) {
    console.log(e);
    window.location.hash = e.target.id.split("-")[0];
})
