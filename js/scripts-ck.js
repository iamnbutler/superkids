// Load scripts after page loads
$(document).ready(function(){$.localScroll();$(".toc a").click(function(){$(".toc").removeClass("open");return!1});$(".toc-target").click(function(){$(this).parent().toggleClass("open");return!1});$("#panel-4-jobs").waypoint(function(e){$(".jobs-infographic").addClass("active")},{offset:"60%"});$("#panel-4-salary").waypoint(function(e){$(".salary-infographic").addClass("active")},{offset:"60%"});$("#panel-4-gender").waypoint(function(e){$(".gender-infographic").addClass("active")},{offset:"60%"});$("#theprocess").waypoint(function(e){$(".steps").addClass("active")},{offset:"20%"})});