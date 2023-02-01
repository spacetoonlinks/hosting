<script id="rendered-js" >
//<![CDATA[
$(document).ready(function () {
  var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;

  var popup = $("#popupContainer").dxPopup({
    title: "dragon ball super",
    fullScreen: true,
    contentTemplate: '<div style="overflow: ' + (iOS ? 'auto' : 'hidden') + '; -webkit-overflow-scrolling: touch; position: absolute; top: 20px; right: 20px; bottom: 20px; left: 20px;"><iframe width="100%" height="100%" frameborder="0" src="https://www.spacetoonlinks.xyz/2022/09/my-hero-academia-season-2-ar-dub.html" allowfullscreen></iframe></div>',
    onInitialized: function (e) {
      e.component.content().css('position', 'relative');
    } }).
  dxPopup("instance");

  $("#buttonContainer").dxButton({
    text: "dragon ball super",
    onClick: function () {
      popup.show();
    } });

});
//]]>
//# sourceURL=pen.js
</script>