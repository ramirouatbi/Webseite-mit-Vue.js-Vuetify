<template>

    <!-- Footer wird in drei Teile gegliedert, wobei der erste Teil w
	ichtige Links zum Unternehmen enthält, der zweite die Produkte
	 und der dritte die Links aus den sozialen Netzwerken. -->

  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="/About">about us</a></li>
  	 				<li><a href="/Contact">Contact</a></li>
					<li><a href="/Request">Request ?</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>products</h4>
  	 			<ul>
  	 				<li><a href="/Products">Panneaux Mélaminé</a></li>
  	 				<li><a href="/Products">Panneaux High Gloss</a></li>
  	 				<li><a href="/Products">Panneaux Placage</a></li>
  	 				<li><a href="/Products">Panneaux Digital Polylac</a></li>
					<li><a href="/Products">Panneaux Polylac</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f" style='color:#0B0B61'></i></a>
  	 				<a href="#"><i class="fab fa-twitter" style='color:#0B0B61'></i></a>
  	 				<a href="#"><i class="fab fa-instagram" style='color:#0B0B61'></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in" style='color:#0B0B61'></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
</template>

<script>

  export default {
    name: 'Footer',

    data(){
        return{
        icon : 'fas fa-tree ',
        drawer: false,
      tab: null,
    }
    }
    
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');



body{
	line-height: 1.5;
	font-family: 'Poppins', sans-serif;
}

*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}
.container{
	max-width: 1170px;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
}
.footer{
	background-color: #EDEEEC;
    padding: 70px 0;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	/* color: #ffffff; */
	color:#bbbcba;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #0B0B61;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #7B7B7B;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #7B7B7B;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}


@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}


</style>