document.addEventListener("DOMContentLoaded",(function(){fetch("/public/api/reviews.php").then((e=>e.json())).then((e=>{const n=document.getElementById("reviews-container");e.forEach((e=>{const t=document.createElement("div");t.innerHTML=`\n                    <h3>${e.name}</h3>\n                    <p>${e.comment}</p>\n                    <small>${e.date}</small>\n                    <div>${"★".repeat(e.rating)}</div>\n                `,n.appendChild(t)}))}))}));