let buttons=Array.from(document.getElementsByClassName("addtocart"))
let cartDiv=document.getElementById("cart")
buttons.forEach(btn=>btn.addEventListener("click",addHandler))
let cartItems=[]
function addHandler(e){
    let parent=e.target.parentNode
    let id=parent.getAttribute("id")
    if(!cartItems.includes(id)){
    	cartItems.push(id)
    	let div=document.createElement("div")
    	div.setAttribute("id","star"+id)
    	div.setAttribute("class","star")
    	parent.appendChild(div)
    }else{
    	cartItems=cartItems.filter(e=>id!=e)
    	let div=document.getElementById("star"+id)
    	parent.removeChild(div)
    }
	cartDiv.innerText=cartItems.length
	console.log(id)

}

function myFunction() {
  var para = document.createElement("P");
  para.innerHTML = "This is a paragraph.";
  document.getElementById("myDIV").appendChild(para);
}