// This file was automatically generated from homeui.soy.
// Please don't edit this file by hand.

if (typeof webcharts == 'undefined') { var webcharts = {}; }
if (typeof webcharts.ui == 'undefined') { webcharts.ui = {}; }
if (typeof webcharts.ui.home == 'undefined') { webcharts.ui.home = {}; }


webcharts.ui.home.mainContent = function(opt_data, opt_ignored) {
  return '<section id="section-home"><ul><li id="li-logo-big" class="horizontal"><a id="logo-big" href="">WebCharts</a><span id="logo-description">' + soy.$$escapeHtml(opt_data.logDescription) + '</span></li><li class="horizontal"><img src="images/home-pic.PNG"></li></ul></section>';
};
