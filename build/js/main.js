const count=document.getElementById("buttonCountNumber");function countPlus(){+count.innerHTML<=10&&count.innerHTML++}function countMinus(){+count.innerHTML>=2&&count.innerHTML--}function setOnClickHandlerByElemId(n,e){document.getElementById(n).addEventListener("click",e)}setOnClickHandlerByElemId("buttonCountPlus",countPlus),setOnClickHandlerByElemId("buttonCountMinus",countMinus);const faIcon=document.createElement("i");function createIcon(n,e){const t=document.getElementById(n);faIcon.classList.add("fa",e),faIcon.setAttribute("aria-hidden","true"),t.appendChild(faIcon)}function changeIcon(n){n.preventDefault(),faIcon.className="fa fa-check",faIcon.style.color="green"}createIcon("icon","fa-balance-scale"),setOnClickHandlerByElemId("buyButton",changeIcon);