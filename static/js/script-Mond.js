
//le code principal
var list = document.getElementById('paye');
httpreq=new XMLHttpRequest();
httpreq.open("GET","https://api.covid19api.com/countries",true);
httpreq.onreadystatechange=function(){
    if(httpreq.readyState==4 && httpreq.status==200){
        let reponse=JSON.parse(httpreq.response)
        reponse.forEach(e => {
            let d=document.createElement("li")
            d.innerHTML=e.Country
            d.addEventListener('click',divClecked)
            d.className='contries';
            d.setAttribute("id",e.ISO2)
            list.appendChild(d)
            
        }); 
    }   
}
httpreq.send();
//fonction permet d'afficher le graphe apres le click sur la liste des payes
function divClecked(e){
    httpreq2=new XMLHttpRequest();
    httpreq2.open("GET","https://api.covid19api.com/dayone/country/"+e.target.getAttribute('id'),true);
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
        options: {
            title: {
                display: true,
                text: e.target.innerHTML
            }
            }
        });
   }} 
        httpreq2.send(); 
}
// --------- Recherch --------------
function recherche() {
  var input, filter, ul, li,a,i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("paye");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//Get les statistique GLOBAL du FR

httpreq_2=new XMLHttpRequest();
httpreq_2.open("GET","https://coronavirusapi-france.now.sh/FranceLiveGlobalData",true);
httpreq_2.onreadystatechange=function(){
    if(httpreq_2.readyState==4 && httpreq_2.status==200){
        let reponse=JSON.parse(httpreq_2.response)
        var fr=reponse.FranceGlobalLiveData[0]
        
        document.getElementById("date_para").innerHTML="Dernière mise à jour "+fr.date;
        
    }   
}
httpreq_2.send();







