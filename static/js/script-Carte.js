var map=document.querySelector("#maps")
var paths = map.querySelectorAll(".maps--image a")
var links = map.querySelectorAll(".maps--liste a")

var activeArea = function(id){
	map.querySelectorAll('.is-active').forEach(function(item){
		item.classList.remove('is-active')
	})
	if (id !== undefined) {
		document.querySelector('#liste-'+id).classList.add("is-active")
		document.querySelector('#Region-'+id).classList.add("is-active")
	}
}

paths.forEach(function(path){
	path.addEventListener('mouseenter', function(){
		var id=this.id.replace('Region-','')
		activeArea(id)
	})
})

links.forEach(function(link){
	link.addEventListener('mouseenter', function(){
		var id=this.id.replace('liste-','')
		activeArea(id)
	})
})

maps.addEventListener('mouseover',function(){
	activeArea()
})


//GET Les données globales connues a l'heure actuelle pour la France
    httpreq2=new XMLHttpRequest();
    httpreq2.open("GET","https://api.covid19api.com/dayone/country/fr",true);
    httpreq2.onreadystatechange=function(){
    if(httpreq2.readyState==4 && httpreq2.status==200){
        let reps=JSON.parse(httpreq2.response);
        const dateAray=[]
        const confirmedAray=[]
        const activAray=[]
        const deathAray=[]
        const recoverdAray=[]
        for(let i=0;i<reps.length;i++){
            dateAray.push(reps[i].Date)
            confirmedAray.push(reps[i].Confirmed)
            activAray.push(reps[i].Active)
            deathAray.push(reps[i].Deaths)
            recoverdAray.push(reps[i].Recovered)
        }
        //Dissener le graphe de paye
        var ctx = document.getElementById('myChart').getContext('2d');
        //effacer l'ancien graphe
        if(window.bar!= undefined) 
        window.bar.destroy(); 
        //construire un nouveaux graphe
        window.bar = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dateAray,
            datasets: [{
                label: 'confirmed',
                borderColor: 'rgb(255, 153, 102)',
                backgroundColor: 'rgba(255, 153, 102,0.25)',
                data: confirmedAray  
            },
            {
            label: 'Active',
            borderColor: 'rgb(0, 0, 255)',
            backgroundColor:'rgba(0, 0, 255,0.25)',
            data:activAray
            },
            {
            label: 'Deaths',
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor:'rgba(255, 0, 0,0.25)',
            data: deathAray
            },
            {
            label: 'Recovered',
            borderColor: 'rgb(0, 255, 0)',
            backgroundColor:'rgba(0, 255, 0,0.25)',
            data:recoverdAray
            }
            ]    
        },

        // Configuration options go here
       /* options: {
            title: {
                display: true,
                text: e.target.innerHTML
            }
            }*/
       });
   }} 
        httpreq2.send(); 

//Get les statistique GLOBAL du FR

httpreq_2=new XMLHttpRequest();
httpreq_2.open("GET","https://coronavirusapi-france.now.sh/FranceLiveGlobalData",true);
httpreq_2.onreadystatechange=function(){
    if(httpreq_2.readyState==4 && httpreq_2.status==200){
        let reponse=JSON.parse(httpreq_2.response)
        var fr=reponse.FranceGlobalLiveData[0]

        document.getElementById("morte").innerHTML="Morts : "+fr.deces;
        document.getElementById("guerie").innerHTML="Gueris : "+fr.gueris;
        document.getElementById("hospitaliste").innerHTML="hospitalises : "+fr.hospitalises;
        document.getElementById("date_para").innerHTML="Dernière mise à jour "+fr.date;
        
    }   
}
httpreq_2.send();


var B = function function_bt(){
    var object = document.getElementsByTagName("path");
    for (var i = object.length - 1; i >= 0; i--) {
        object[i].setAttribute("class","path");
    }
    var outre=0;
    var mort=0,autre=0;//k=Object.keys(REGION)[i];
    httpreq=new XMLHttpRequest();
    httpreq.open("GET","https://coronavirusapi-france.now.sh/AllDataByDate?date=2020-11-12",true);
    httpreq.onreadystatechange=function(){
    if(httpreq.readyState==4 && httpreq.status==200){
        let reponse=JSON.parse(httpreq.response)
        console.log(reponse)
        reponse.allFranceDataByDate.forEach(e => {
                if ( e.nom == "Auvergne-Rhône-Alpes" ) {
                    mort=e.deces
                    let T=document.getElementById("Auvergne-Rhône-Alpes")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                    console.log("hi")
                }if ( e.nom == "Provence-Alpes-Côte d'Azur" ) {
                    mort=e.deces
                    let T=document.getElementById("Provence-Alpes-Côte d'Azur")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Pays de la Loire" ) {
                    mort=e.deces
                    let T=document.getElementById("Pays de la Loire")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Normandie" ) {
                    mort=e.deces
                    let T=document.getElementById("Normandie")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")               
                }if ( e.nom == "Hauts-de-France" ) {
                    mort=e.deces
                   let T=document.getElementById("Hauts-de-France")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Occitanie" ) {
                    mort=e.deces
                   let T=document.getElementById("Occitanie")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Île-de-France" ) {
                    mort=e.deces
                    let T=document.getElementById("Île-de-France")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Corse" ) {
                    mort=e.deces
                    let T=document.getElementById("Corse")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Centre-Val de Loire" ) {
                    mort=e.deces
                    let T=document.getElementById("Centre-Val de Loire")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Bretagne" ) {
                    mort=e.deces
                    let T=document.getElementById("Bretagne")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Bourgogne-Franche-Comté" ) {
                    mort=e.deces
                    let T=document.getElementById("Bourgogne-Franche-Comté")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Nouvelle-Aquitaine" ) {
                    mort=e.deces
                   let T=document.getElementById("Nouvelle-Aquitaine")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }if ( e.nom == "Grand Est" ) {
                    mort=e.deces
                    let T=document.getElementById("Grand Est")
                    T.innerHTML=mort;
                    T.setAttribute("class","red")
                }
               /* if (( e.nom == "Guadeloupe" )||( e.nom == "Martinique" )||( e.nom == "Guyane" )||( e.nom == "La Réunion" )||( e.nom == "Mayotte" )||( e.nom == "Saint-Pierre-et-Miquelon" )||( e.nom == "Saint-Barthélemy" )||( e.nom == "Saint-Martin" )||( e.nom == "Wallis-et-Futuna" )||( e.nom == "Polynésie française" )||( e.nom == "Nouvelle-Calédonie" )||( e.nom == "Terres australes et antarctiques françaises" )||( e.nom == "Clipperton" )){
                    autre+=e.deces
                    document.getElementById("p_mere").innerHTML=autre;
                }*/
        });
    }   
}

httpreq.send();
}

var C = function function_bt_2(){
    var object = document.getElementsByTagName("path");
    for (var i = object.length - 1; i >= 0; i--) {
        object[i].setAttribute("class","path");
    }
    var outre=0;
    var mort=0,autre=0//k=Object.keys(REGION)[i];
    httpreq5=new XMLHttpRequest();
    httpreq5.open("GET","https://coronavirusapi-france.now.sh/AllDataByDate?date=2020-11-12",true);
    httpreq5.onreadystatechange=function(){
    if(httpreq5.readyState==4 && httpreq5.status==200){
        let reponse=JSON.parse(httpreq5.response)
        reponse.allFranceDataByDate.forEach(e => {
                if ( e.nom == "Auvergne-Rhône-Alpes" ) {
                    mort=e.gueris
                    let T=document.getElementById("Auvergne-Rhône-Alpes")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Provence-Alpes-Côte d'Azur" ) {
                    mort=e.gueris
                    let T=document.getElementById("Provence-Alpes-Côte d'Azur")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Pays de la Loire" ) {
                    mort=e.gueris
                    let T=document.getElementById("Pays de la Loire")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Normandie" ) {
                    mort=e.gueris
                    let T=document.getElementById("Normandie")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")               
                }if ( e.nom == "Hauts-de-France" ) {
                    mort=e.gueris
                   let T=document.getElementById("Hauts-de-France")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Occitanie" ) {
                    mort=e.gueris
                   let T=document.getElementById("Occitanie")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Île-de-France" ) {
                    mort=e.gueris
                    let T=document.getElementById("Île-de-France")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Corse" ) {
                    mort=e.gueris
                    let T=document.getElementById("Corse")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Centre-Val de Loire" ) {
                    mort=e.gueris
                    let T=document.getElementById("Centre-Val de Loire")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Bretagne" ) {
                    mort=e.gueris
                    let T=document.getElementById("Bretagne")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Bourgogne-Franche-Comté" ) {
                    mort=e.gueris
                    let T=document.getElementById("Bourgogne-Franche-Comté")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Nouvelle-Aquitaine" ) {
                    mort=e.gueris
                   let T=document.getElementById("Nouvelle-Aquitaine")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }if ( e.nom == "Grand Est" ) {
                    mort=e.gueris
                    let T=document.getElementById("Grand Est")
                    T.innerHTML=mort;
                    T.setAttribute("class","green")
                }
               /* if (( e.nom == "Guadeloupe" )||( e.nom == "Martinique" )||( e.nom == "Guyane" )||( e.nom == "La Réunion" )||( e.nom == "Mayotte" )||( e.nom == "Saint-Pierre-et-Miquelon" )||( e.nom == "Saint-Barthélemy" )||( e.nom == "Saint-Martin" )||( e.nom == "Wallis-et-Futuna" )||( e.nom == "Polynésie française" )||( e.nom == "Nouvelle-Calédonie" )||( e.nom == "Terres australes et antarctiques françaises" )||( e.nom == "Clipperton" )){
                    autre+=e.deces
                    document.getElementById("p_mere").innerHTML=autre;
                }*/
        });
    }   
}

httpreq5.send();
}

var D = function function_bt_3(){
    var object = document.getElementsByTagName("path");
    for (var i = object.length - 1; i >= 0; i--) {
        object[i].setAttribute("class","path");
    }
    var outre=0;
    var mort=0,autre=0//k=Object.keys(REGION)[i];
    httpreq6=new XMLHttpRequest();
    httpreq6.open("GET","https://coronavirusapi-france.now.sh/AllDataByDate?date=2020-11-12",true);
    httpreq6.onreadystatechange=function(){
    if(httpreq6.readyState==4 && httpreq6.status==200){
        let reponse=JSON.parse(httpreq6.response)
        reponse.allFranceDataByDate.forEach(e => {
                if ( e.nom == "Auvergne-Rhône-Alpes" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Auvergne-Rhône-Alpes")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Provence-Alpes-Côte d'Azur" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Provence-Alpes-Côte d'Azur")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Pays de la Loire" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Pays de la Loire")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Normandie" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Normandie")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")               
                }if ( e.nom == "Hauts-de-France" ) {
                    mort=e.hospitalises
                   let T=document.getElementById("Hauts-de-France")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Occitanie" ) {
                    mort=e.hospitalises
                   let T=document.getElementById("Occitanie")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Île-de-France" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Île-de-France")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Corse" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Corse")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Centre-Val de Loire" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Centre-Val de Loire")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Bretagne" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Bretagne")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Bourgogne-Franche-Comté" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Bourgogne-Franche-Comté")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Nouvelle-Aquitaine" ) {
                    mort=e.hospitalises
                   let T=document.getElementById("Nouvelle-Aquitaine")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }if ( e.nom == "Grand Est" ) {
                    mort=e.hospitalises
                    let T=document.getElementById("Grand Est")
                    T.innerHTML=mort;
                    T.setAttribute("class","blue")
                }
               /* if (( e.nom == "Guadeloupe" )||( e.nom == "Martinique" )||( e.nom == "Guyane" )||( e.nom == "La Réunion" )||( e.nom == "Mayotte" )||( e.nom == "Saint-Pierre-et-Miquelon" )||( e.nom == "Saint-Barthélemy" )||( e.nom == "Saint-Martin" )||( e.nom == "Wallis-et-Futuna" )||( e.nom == "Polynésie française" )||( e.nom == "Nouvelle-Calédonie" )||( e.nom == "Terres australes et antarctiques françaises" )||( e.nom == "Clipperton" )){
                    autre+=e.deces
                    document.getElementById("p_mere").innerHTML=autre;
                }*/
        });
    }   
}

httpreq6.send();
}

// prepare les nombre sur la carte : deces/gueris/confirmes
REGION=["Grand Est","Nouvelle-Aquitaine","Auvergne-Rhône-Alpes","Bourgogne-Franche-Comté","Bretagne","Centre-Val de Loire","Corse","Île-de-France","Occitanie","Hauts-de-France","Normandie","Pays de la Loire","Provence-Alpes-Côte d'Azur"]
