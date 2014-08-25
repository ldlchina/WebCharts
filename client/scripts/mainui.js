// This file was automatically generated from mainui.soy.
// Please don't edit this file by hand.

if (typeof webcharts == 'undefined') { var webcharts = {}; }
if (typeof webcharts.ui == 'undefined') { webcharts.ui = {}; }
if (typeof webcharts.ui.main == 'undefined') { webcharts.ui.main = {}; }


webcharts.ui.main.body = function(opt_data, opt_ignored) {
  return '<header><a id="logo" href="">WebCharts</a><nav><a id="nav-home" class="active">' + soy.$$escapeHtml(opt_data.navHomeText) + '</a><a id="nav-guide">' + soy.$$escapeHtml(opt_data.navGuideText) + '</a><a id="nav-faq">' + soy.$$escapeHtml(opt_data.navFAQText) + '</a><a id="nav-dashboards">' + soy.$$escapeHtml(opt_data.navDashboardsText) + '</a></nav><hr/></header><div id="main-content"></div><footer><hr/><div id="footer-content">' + soy.$$escapeHtml(opt_data.copyright) + '</div></footer>';
};
