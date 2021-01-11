
//le code principal des calcules des statistique de chaque REGION
var REGION=[
	"Ain", "Allier", "Ardèche", "Cantal", "Drôme", "Isère", "Loire", "Haute-Loire","Puy-de-Dôme", "Rhône", "Savoie" ,"Haute-Savoie",
	"Côte-d'Or","Doubs", "Jura", "Nièvre", "Haute-Saône", "Saône-et-Loire", "Yonne", "Territoire de Belfort",
	"Côtes-d'Armor", "Finistère", "Ille-et-Vilaine" , "Morbihan",
	"Cher", "Eure-et-Loir", "Indre", "Indre-et-Loire", "Loir-et-Cher", "Loiret",
	"Corse-du-Sud" , "Haute-Corse",
	"Ardennes", "Aube", "Marne", "Haute-Marne", "Meurthe-et-Moselle", "Meuse", "Moselle", "Bas-Rhin", "Haut-Rhin" , "Vosges",
	"Aisne", "Nord", "Oise", "Pas-de-Calais" , "Somme",
	"Paris", "Seine-et-Marne", "Yvelines", "Essonne", "Hauts-de-Seine", "Seine-Saint-Denis", "Val-de-Marne" , "Val-d'Oise",
	"Calvados", "Eure", "Manche", "Orne" , "Seine-Maritime",
	"Charente", "Charente-Maritime", "Corrèze", "Creuse", "Dordogne", "Gironde", "Landes", "Lot-et-Garonne", "Pyrénées-Atlantiques", "Deux-Sèvres", "Vienne" , "Haute-Vienne",
	"Ariège", "Aude", "Aveyron", "Gard", "Haute-Garonne", "Gers", "Hérault", "Lot", "Lozère", "Hautes-Pyrénées", "Pyrénées-Orientales", "Tarn" ,"Tarn-et-Garonne",
	"Loire-Atlantique", "Maine-et-Loire", "Mayenne", "Sarthe", "Vendée",
	"Alpes-de-Haute-Provence", "Hautes-Alpes", "Alpes-Maritimes", "Bouches-du-Rhône", "Var" 
]

//fonction permet d'afficher le graphe apres le click sur la liste des payes
var G=document.getElementById('id_table')
var s=0
var dataSet=[]
    httpreq2=new XMLHttpRequest();
    httpreq2.open("GET","https://coronavirusapi-france.now.sh/AllDataByDate?date=2020-11-12",true);
    httpreq2.onreadystatechange=function(){
    if(httpreq2.readyState==4 && httpreq2.status==200){
        let reps=JSON.parse(httpreq2.response);
        reps.allFranceDataByDate.forEach(e => {
            let table=[]
            table.push(e.nom)
            table.push(e.deces)
            table.push(e.gueris)
            table.push(e.hospitalises)
            table.push(e.reanimation)

            dataSet.push(table)
            
        });
    $(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Deces" },
            { title: "Gueris" },
            { title: "Hospitalises" },
            { title: "Reanimation" }
        ]
    } );
} );
    }
    }
       httpreq2.send();  
























