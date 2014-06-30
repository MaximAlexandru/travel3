function navbar_init(){
	$('#list_view').append('<li>'+
								'<a href="#acasa" data-transitio="slide" class="menu">'+
									'<h3>Acasa</h3>'+
									'<p>evenimete,oferte,recomandari</p>'+
							'	</a>'+
							'</li>'+
							'<li>'+
								'<a href="#categorie" data-transition="slide" class="menu" onclick="populate(1)">'+
									'<h3>Dorm</h3>'+
									'<p>hoteluri,moteluri,pensiuni,vile</p>'+
								'</a>'+
							'</li>'+
							'<li>'+
								'<a href="#categorie" data-transition="slide" onclick="populate(2)">'+
									'<h3>Mananc</h3>'+
									'<p>restaurante,baruri,cafenele,pub-uri</p>'+
								'</a>'+
							'</li>'+
							'<li>'+
								'<a href="#categorie" data-transition="slide">'+
									'<h3>Fac Ceva</h3>'+
									'<p>tururi,excursii</p>'+
								'</a>'+
							'</li>');
							
					
}

function init(){

navbar_init();
}

