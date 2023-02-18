document.addEventListener("DOMContentLoaded", (e)=>{

   let expenseItems =document.querySelector("#expenseInput");
   let expensePrice= document.querySelector("#expensePrice");
   let submitBtn=document.querySelector("#submitBtn");
let list=document.querySelector("#detailsList");
let count=1;

   submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
  
    let eiValue=expenseItems.value;
    let epValue=expensePrice.value;

  
    let deleteBtn= document.createElement("button");
    

 
    deleteBtn.appendChild(document.createTextNode("DETELE"));
   
    deleteBtn.setAttribute("class","delete")

   
    let li=document.createElement("li");
    
    li.appendChild(document.createTextNode("Expense Name : "+eiValue + "    "))
    li.appendChild(document.createTextNode("-       Price : "+epValue));
    list.appendChild(li);
 
    li.setAttribute("class","value")
    
 
   
    li.appendChild(deleteBtn);


    let obj={
        "item":eiValue,
        "price":epValue
    }


    localStorage.setItem("Item no:"+count++ +":", JSON.stringify(obj));


       })
   
list.addEventListener("click",(e)=>{
    if (e.target.classList.contains("delete")){
        e.target.parentElement.style.display="none";
      
    }
})




})