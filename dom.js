document.addEventListener("DOMContentLoaded", (e) => {


  let expenseItems = document.querySelector("#expenseInput");
  let expensePrice = document.querySelector("#expensePrice");
  let submitBtn = document.querySelector("#submitBtn");
  let list = document.querySelector("#detailsList");
 expenseItems.value="";
 expensePrice.value="";
 let total1=document.querySelector(".total")


 
  list.style.border = "3px dotted blue";

  submitBtn.style.backgroundColor = "grey";


  let total= 0;



  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
 
    let eiValue = expenseItems.value;
    let epValue = expensePrice.value;
    

    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    editBtn.appendChild(document.createTextNode("EDIT"));
    deleteBtn.appendChild(document.createTextNode("DETELE"));
    editBtn.setAttribute("class", "edit");
    deleteBtn.setAttribute("class", "delete");
editBtn.style.float="right";
deleteBtn.style.float="right";

    let li = document.createElement("li");
    let span=document.createElement("span")

    let span2=document.createElement("span")

    li.appendChild(document.createTextNode("Expense Item :  "));
    span.appendChild(document.createTextNode(eiValue.toUpperCase()));
    li.appendChild(span)
    li.appendChild(document.createTextNode("        Price :  "));
 
    span2.appendChild(document.createTextNode(epValue));
li.appendChild(span2)
    li.appendChild(document.createTextNode("           Date of Expense : "));
    let date = new Date();

    li.appendChild(
      document.createTextNode(
        date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
      )
    );
    
    total+=+epValue;
    total1.innerText=`TODAYS EXPENSE -:> ${total}`
    total1.style.whiteSpace = "pre";
    
    total1.style.color="orange"
    total1.setAttribute("class", "value");

    total1.style.color = "#b02a37";
    total1.style.fontWeight="bold";

    total1.style.fontSize = "16px";
    total1.style.listStyleType="none"


    span.style.color="orange"
    span2.style.color="orangE"
    span.style.backgroundColor="green"
    span2.style.backgroundColor="green"
    list.appendChild(li);
    li.style.whiteSpace = "pre";

    li.setAttribute("class", "value");

    li.style.color = "#b02a37";
    li.style.fontWeight="bold";

    li.style.fontSize = "21px";
    editBtn.style.fontSize = "14px";
    deleteBtn.style.fontSize = "14px";
    editBtn.style.backgroundColor = "yellow";
    deleteBtn.style.backgroundColor = "red";
    
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    

    let obj = {
      item: eiValue,
      price: epValue,
    };
    localStorage.setItem(obj.item.toUpperCase(), obj.price);
  });

  list.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.style.display = "none";

      localStorage.removeItem(e.target.parentElement.childNodes[1].innerText);
    } else if (e.target.classList.contains("edit")) {
      submitBtn.style.display = "none";
      let btn = document.createElement("button");
      let btn2 = document.createElement("button");
      let newdiv = document.createElement("div");
      newdiv.setAttribute("class", "row");

      btn2.appendChild(document.createTextNode("Edit"));

      btn.appendChild(document.createTextNode("Cancel"));
      btn.setAttribute("class", "col-2");
      btn2.setAttribute("class", "col");
      btn.style.backgroundColor = "red";
      btn2.style.backgroundColor = "green";
      btn.style.color = "white";
      btn2.style.color = "white";
      
      newdiv.appendChild(btn2);
      newdiv.appendChild(btn);
      document.querySelector("#inputForm").appendChild(newdiv);

      document.getElementById("expenseInput").value =
        e.target.parentElement.childNodes[1].innerText;
     
      document.getElementById("expensePrice").value =
        e.target.parentElement.childNodes[3].innerText;
      let x = e.target.parentElement;
      e.target.parentElement.style.backgroundColor = "rgb(161, 117, 59)";

      let upperE = e.target.parentElement;

      btn2.addEventListener("click", (e) => {
        e.preventDefault();
        let oldValue=  localStorage.getItem(upperE.childNodes[1].innerText);

        let oldKey= upperE.childNodes[1].innerText;
        if (
          document.getElementById("expenseInput").value !=
            upperE.childNodes[1].innerText &&
          document.getElementById("expenseInput").value != "" &&
          document.getElementById("expensePrice").value == upperE.childNodes[3].innerText
        ) {
          localStorage.removeItem(oldKey);
          
      
          upperE.childNodes[1].innerText =
            document.getElementById("expenseInput").value.toUpperCase();
            localStorage.setItem( upperE.childNodes[1].innerText,oldValue)
        } else if (
          document.getElementById("expensePrice").value !=
            upperE.childNodes[3].innerText &&
          document.getElementById("expensePrice").value != "" &&
          document.getElementById("expenseInput").value == upperE.childNodes[1].innerText
        ) {
            localStorage.setItem(
                upperE.childNodes[1].innerText,
                document.getElementById("expensePrice").value
              );
      
          upperE.childNodes[3].innerText =
            document.getElementById("expensePrice").value;
        }
      
        else if (
            document.getElementById("expensePrice").value !=
              upperE.childNodes[3].innerText &&
            document.getElementById("expenseInput").value != upperE.childNodes[1].innerText          )
            {
                upperE.childNodes[1].innerText =
                document.getElementById("expenseInput").value.toUpperCase();
                upperE.childNodes[3].innerText =
                document.getElementById("expensePrice").value;
                localStorage.removeItem(oldKey);

localStorage.setItem(document.getElementById("expenseInput").value,document.getElementById("expensePrice").value)
            }
        expenseItems.value = "";
        expensePrice.value = "";
        btn2.style.display = "none";
        btn.style.display = "none";
        x.style.backgroundColor = "burlywood";
        submitBtn.style.display = "unset";
      });

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        expenseItems.value = "";
        expensePrice.value = "";
        btn2.style.display = "none";
        btn.style.display = "none";
        submitBtn.style.display = "unset";

        x.style.backgroundColor = "burlywood";
      });
    }
  });
 

  for(let i=0;i<localStorage.length;i++){
    let x= localStorage.key(i);
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    editBtn.appendChild(document.createTextNode("EDIT"));
    deleteBtn.appendChild(document.createTextNode("DETELE"));
    editBtn.setAttribute("class", "edit");
    deleteBtn.setAttribute("class", "delete");
editBtn.style.float="right";
deleteBtn.style.float="right";


    let li = document.createElement("li");
    let span=document.createElement("span")
    
    let span2=document.createElement("span")

    li.appendChild(document.createTextNode("Expense Item :  "));
    span.appendChild(document.createTextNode(x));
    li.appendChild(span)
    li.appendChild(document.createTextNode("        Price :  "));
 
    span2.appendChild(document.createTextNode(localStorage.getItem(x)));
li.appendChild(span2)
    li.appendChild(document.createTextNode("           Date of Expense : "));
    let date = new Date();

    li.appendChild(
      document.createTextNode(
        date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
      )
    );
    span.style.color="orange"
    span2.style.color="orange"
    span.style.backgroundColor="green"
    span2.style.backgroundColor="green"
   
    li.style.whiteSpace = "pre";

    li.setAttribute("class", "value");
    
    li.style.color = "#b02a37";
    li.style.fontWeight="bold"
    li.style.fontSize = "21px";
    editBtn.style.fontSize = "14px";
    deleteBtn.style.fontSize = "14px";
    editBtn.style.backgroundColor = "yellow";
    deleteBtn.style.backgroundColor = "red";
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
    
      }
    
});
