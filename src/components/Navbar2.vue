<template>
    <div id="app">
   <body>

    <!--  Die Komponente Navbar enthält die Links zu Seiten. 
    Sie sind mit "Router-link" zugänglich, der ein spezieller Vue-Tag ist. 
    Dieser ersetzt den HTML-Tag <a>. Sein Zweck ist es, den Kunden von 
    einer Seite zur anderen springen zu lassen, ohne dass die 
    Seite aktualisiert wird.
    Die Links verschwinden auf den kleinen Bildschirmen (Weniger als 1000px) 
    und lassen Platz für das "Menü", das wiederum per Mausklick 
    die Verknüpfungen zu den Seiten anzeigt. -->

    <Transition name="anima" appear>
    <header class="mt-12 navi">
        <input type ="checkbox" name ="" id ="chk1">
        <div class="logo"><v-img src="@/assets/logo1.png" height="65"></v-img></div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><a href="/Products">Products</a></li>
                <li><router-link to="/About">About</router-link></li> 
                <li><router-link to="/Contact">Contact</router-link></li> 
                <li><router-link to="/Request">Request ?</router-link></li>
                <li class="social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </li>
            </ul>
            <div class="menu">
                <label for="chk1">
                    <i class="fa fa-bars"></i>
                </label>
            </div>
    </header>
    </Transition>
</body>
</div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
    data(){
        return{
        icon : 'fas fa-tree '
    }
    },
  }
</script>

<style scoped>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial;
    z-index:-2;
}
body{
    background-size: cover;
    background-position: center;
     /* z-index:2; */
}
header{
    width:100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 99;
    box-shadow: 0 0 10px #000;
    /* background: rgba(0,0,0,0.5); */
    background-color:white;
     /* z-index:2; */
}
#chk1{
    display: none;
    background-color: #2E64FE;

}
i{
    color: #a9a9a9;
    cursor: pointer;
}
header .logo{
    flex: 1;
    color:#004474;
     
    margin-left: 50px;
    text-transform: uppercase;
    font-size: 15px;
}

@media(max-width:680px){
    header .logo{
        width: 50%;
        margin-left:0;
    }
}

header .search-box{
    flex: 1;
    position: relative;
}


header ul {
    flex:2;
    display: flex;
    justify-content: space-evenly;
}
header ul li{
    list-style: none;
}
header ul li a{
    text-decoration: none;
    color:#a9a9a9;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 15px;
    /* font-family: Montserrat, sans-serif; */
}
header ul li a:hover{
    border-bottom: 2px solid #004474;
    color : #004474;
}
header .menu{
    font-size: 2.5em;
    display: none;
}

.navi:hover{
      height:170px;

}


@media(max-width:1000px){
    .search-box button{
        position: absolute;
    }
    header ul{
        position: fixed;
        top:100px;
        right: -100%;
        background: rgba(0,0,0,0.5);
        height: calc(100vh - 100px);
        width:50%;
        flex-direction: column;
        align-items: center;
        transition: right 0.5s linear;
    }
     
    header .menu{
        display: block;
        width:100px;
        text-align: center;
    }
    #chk1:checked ~ ul{
        right: 0;
        
    }
  
}

.anima-enter-active{
    transition:opacity 2.5s ease-out;
}

.anima-enter{
    opacity:0;
}



</style>