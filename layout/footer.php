
	
	<a href="javascript:void(0);" id="scroll" title="Top"><span></span></a><!--back to top-->
	
	
	<script src="assets/vendors/bootstrap-5.2.3-beta3-dist/js/bootstrap.bundle.min.js"></script>
	<script src="assets/js/style.js"></script>
		<script src="assets/vendors/fancybox/js/fancybox.js"></script>
<script>
	$(document).ready(function() {
		
		$(".filter-button").click(function() {
			var value = $(this).attr('data-filter');
			
			if (value == "all") {
				//$('.filter').removeClass('hidden');
				$('.filter').show('1000');
				} else {
				// $('.filter[filter-item="'+value+'"]').removeClass('hidden');
				// $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
				$(".filter").not('.' + value).hide('3000');
				$('.filter').filter('.' + value).show('3000');
				
			}
		});
		
		if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		}
		$(this).addClass("active");
		
		$(".blog_menu li a").click(function() {
			$(".blog_menu li a").removeClass("active_blog");
			$(this).addClass("active_blog");
		});
		
	});
	
	$(document).ready(function() {
		$(".filter_menu li .filter-button").click(function() {
			$(".filter_menu li .filter-button").removeClass("active_filter");
			$(this).addClass("active_filter");
		});
	});
	
	// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});

</script>			
</body>
</html>
