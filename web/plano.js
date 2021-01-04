//******************************************************
// Get DOM objects
//******************************************************

// Ligth shadows
var LuzMesaComedor = document.getElementById('LuzMesaComedor');
var LuzSofa = document.getElementById('LuzSofa');
var LuzAseo = document.getElementById('LuzAseo');
var LuzHabitacion = document.getElementById('LuzHabitacion');
var LuzCocina = document.getElementById('LuzCocina');
var LuzTerraza = document.getElementById('LuzTerraza');
var LuzTerrazaSalon = document.getElementById('LuzTerrazaSalon');
var LuzEscobas = document.getElementById('LuzEscobas');
var LuzSofaAmbiente = document.getElementById('LuzSofaAmbiente');

// Ligth shadows
var LuzMesaComedorOn1 = document.getElementById('LuzMesaComedorOn1');
var LuzSofaOn1 = document.getElementById('LuzSofaOn1');
var LuzAseoOn1 = document.getElementById('LuzAseoOn1');
var LuzHabitacionOn1 = document.getElementById('LuzHabitacionOn1');
var LuzCocinaOn1 = document.getElementById('LuzCocinaOn1');
var LuzTerrazaOn1 = document.getElementById('LuzTerrazaOn1');
var LuzTerrazaSalonOn1 = document.getElementById('LuzTerrazaSalonOn1');
var LuzEscobasOn1 = document.getElementById('LuzEscobasOn1');
var LuzSofaAmbienteOn1 = document.getElementById('LuzSofaAmbienteOn1');

// Ligth bulbs
var LuzMesaComedorOn2 = document.getElementById('LuzMesaComedorOn2');
var LuzSofaOn2 = document.getElementById('LuzSofaOn2');
var LuzAseoOn2 = document.getElementById('LuzAseoOn2');
var LuzHabitacionOn2 = document.getElementById('LuzHabitacionOn2');
var LuzCocinaOn2 = document.getElementById('LuzCocinaOn2');
var LuzTerrazaOn2 = document.getElementById('LuzTerrazaOn2');
var LuzTerrazaSalonOn2 = document.getElementById('LuzTerrazaSalonOn2');
var LuzEscobasOn2 = document.getElementById('LuzEscobasOn2');
var LuzSofaAmbienteOn2 = document.getElementById('LuzSofaAmbienteOn2');

// Moving parts
var PantallaMovil = document.getElementById('Pantalla_x0020_Movil');
var Persiana = document.getElementById('Persiana');

//******************************************************
// Init Objects
//******************************************************

// Set Ligths Shadows status
LuzMesaComedorOn2.setAttribute('PowerOn','0');
LuzSofaOn2.setAttribute('PowerOn','0');
LuzAseoOn2.setAttribute('PowerOn','0');
LuzHabitacionOn2.setAttribute('PowerOn','0');
LuzCocinaOn2.setAttribute('PowerOn','0');
LuzTerrazaOn2.setAttribute('PowerOn','0');
LuzTerrazaSalonOn2.setAttribute('PowerOn','0');
LuzEscobasOn2.setAttribute('PowerOn','0');
LuzSofaAmbienteOn2.setAttribute('PowerOn','0');

// Set Ligths Shadows opacity to 0
LuzMesaComedorOn1.style.opacity=0;
LuzSofaOn1.style.opacity=0;
LuzAseoOn1.style.opacity=0;
LuzHabitacionOn1.style.opacity=0;
LuzCocinaOn1.style.opacity=0;
LuzTerrazaOn1.style.opacity=0;
LuzTerrazaSalonOn1.style.opacity=0;
LuzEscobasOn1.style.opacity=0;
LuzSofaAmbienteOn1.style.opacity=0;

// Set Bulbs Shadows opacity to 0
LuzMesaComedorOn2.style.opacity=0;
LuzSofaOn2.style.opacity=0;
LuzAseoOn2.style.opacity=0;
LuzHabitacionOn2.style.opacity=0;
LuzCocinaOn2.style.opacity=0;
LuzTerrazaOn2.style.opacity=0;
LuzTerrazaSalonOn2.style.opacity=0;
LuzEscobasOn2.style.opacity=0;
LuzSofaAmbienteOn2.style.opacity=0;

// Set Ligths onclick functions
//LuzMesaComedor.onclick=
LuzMesaComedorOn1.addEventListener("click", function(){ligthclick(LuzMesaComedorOn2);}, false); 
LuzMesaComedorOn2.addEventListener("click", function(){ligthclick(LuzMesaComedorOn2);}, false); 
LuzMesaComedor.addEventListener("click", function(){ligthclick(LuzMesaComedorOn2);}, false); 
LuzSofaOn2.addEventListener("click", function(){ligthclick(LuzSofaOn2);}, false); 
LuzSofa.addEventListener("click", function(){ligthclick(LuzSofaOn2);}, false); 
LuzAseoOn2.addEventListener("click", function(){ligthclick(LuzAseoOn2);}, false); 
LuzAseo.addEventListener("click", function(){ligthclick(LuzAseoOn2);}, false); 
LuzHabitacionOn2.addEventListener("click", function(){ligthclick(LuzHabitacionOn2);}, false); 
LuzHabitacion.addEventListener("click", function(){ligthclick(LuzHabitacionOn2);}, false); 
LuzCocinaOn2.addEventListener("click", function(){ligthclick(LuzCocinaOn2);}, false); 
LuzCocina.addEventListener("click", function(){ligthclick(LuzCocinaOn2);}, false); 
LuzTerrazaOn2.addEventListener("click", function(){ligthclick(LuzTerrazaOn2);}, false); 
LuzTerraza.addEventListener("click", function(){ligthclick(LuzTerrazaOn2);}, false); 
LuzTerrazaSalonOn2.addEventListener("click", function(){ligthclick(LuzTerrazaSalonOn2);}, false); 
LuzTerrazaSalon.addEventListener("click", function(){ligthclick(LuzTerrazaSalonOn2);}, false); 
LuzEscobasOn2.addEventListener("click", function(){ligthclick(LuzEscobasOn2);}, false); 
LuzEscobas.addEventListener("click", function(){ligthclick(LuzEscobasOn2);}, false); 
LuzSofaAmbienteOn2.addEventListener("click", function(){ligthclick(LuzSofaAmbienteOn2);}, false); 
LuzSofaAmbiente.addEventListener("click", function(){ligthclick(LuzSofaAmbienteOn2);}, false); 

// Setup ClipPath rectangle to the Moving Parts
var ClipPantalla=initpersiana(PantallaMovil,"ClipPantalla");
var ClipPersiana=initpersiana(Persiana,"ClipPersiana");

var pos=0;
var dir=0.1;


// Periodic Call to functions
setInterval(fadeligths,20);
setInterval(pantalla,20);

// FADE LIGTHS FUNCTION
function fadeligths()
	{
	changeopacity(LuzMesaComedorOn1,LuzMesaComedorOn2);
	changeopacity(LuzSofaOn1,LuzSofaOn2);
	changeopacity(LuzAseoOn1,LuzAseoOn2);
	changeopacity(LuzHabitacionOn1,LuzHabitacionOn2);
	changeopacity(LuzCocinaOn1,LuzCocinaOn2);
	changeopacity(LuzTerrazaOn1,LuzTerrazaOn2);
	changeopacity(LuzTerrazaSalonOn1,LuzTerrazaSalonOn2);
	changeopacity(LuzEscobasOn1,LuzEscobasOn2);
	changeopacity(LuzSofaAmbienteOn1,LuzSofaAmbienteOn2);
	}

// COMPUTE AND CHANGE LIGHTS OPACITY FUNCTION
function changeopacity(object1,object2)
	{
	var OPMULT=0.25;
	var OPINC=0.02;
	var opacity=parseFloat(object2.style.opacity)
	
	if (object2.getAttribute('PowerOn')=='1' && opacity<1) 
		{
		opacity+=OPINC;
		object2.style.opacity=opacity;
		object1.style.opacity=opacity*OPMULT;
		}	
		
	if (object2.getAttribute('PowerOn')=='0' && opacity>0) 
		{
		opacity-=OPINC;
		object2.style.opacity=opacity;
		object1.style.opacity=opacity*OPMULT;
		}
	}

// LIGHTS CLICK FUNCTION
function ligthclick(Ligth)
	{
	if (Ligth.getAttribute('PowerOn')=='1')Ligth.setAttribute('PowerOn','0'); else Ligth.setAttribute('PowerOn','1');
	}

	
function pantalla()
  {
  movepersiana(Persiana,ClipPersiana,pos);
  movepersiana(PantallaMovil,ClipPantalla,pos);
  if (pos>=100) dir=-0.1;
  if (pos<=0) dir=0.1;
  pos+=dir;
  }

function initpersiana(persiana,clippathid)
	{
	var svg = document.getElementsByTagName('svg')[0];
	var svgNS = svg.namespaceURI;
	var box = persiana.getBBox();

	var clipPath = document.createElementNS(svgNS,'clipPath');
	clipPath.setAttribute('id',clippathid);
	    var rect = document.createElementNS(svgNS,'rect');
	    rect.setAttribute('x',box.x);
	    rect.setAttribute('y',box.y);
	    rect.setAttribute('width',box.width);
	    rect.setAttribute('height',box.height);
    clipPath.appendChild(rect);
	
	persiana.setAttribute('clip-path','url(#'+clippathid+')');

	return svg.appendChild(clipPath);;

	}

function movepersiana(persiana,clippathid,pos)
	{
	var box = persiana.getBBox();
	var Y=-1*((box.height*pos)/100);

	persiana.setAttribute("transform","translate(0,"+Y.toString()+")");  
	clippathid.setAttribute("transform","translate(0,"+(Y*-1).toString()+")");  

	}
