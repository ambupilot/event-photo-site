document.addEventListener("DOMContentLoaded",(function(){const e=document.createElement("div");function t(){const e=document.getElementById("cookie-consent-banner");e&&e.remove()}function n(){if(JSON.parse(localStorage.getItem("cookieConsent")||"{}").analytics){const e=document.createElement("script");e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X",document.head.appendChild(e),e.onload=function(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-XXXXXXX-X")}}}if(e.id="cookie-consent-banner",e.innerHTML='\n        <div class="fixed bottom-0 left-0 w-full bg-gray-800 text-white px-10 py-6 flex justify-between items-center z-50 shadow-lg">\n            <div class="text-sm pr-4">\n                <p class="mb-2">\n                    Wij gebruiken cookies om onze website en services te optimaliseren. Kies welke cookies je wilt toestaan:\n                </p>\n            </div>\n            <div class="flex space-x-4">\n                <button id="accept-all" class="bg-green-600 text-white px-6 py-2 text-sm rounded hover:bg-green-700 transition">\n                    Accepteer Alles\n                </button>\n                <button id="deny-all" class="bg-gray-500 text-white px-6 py-2 text-sm rounded hover:bg-gray-600 transition">\n                    Weiger Alles\n                </button>\n            </div>\n        </div>\n    ',localStorage.getItem("cookieConsent")||document.body.appendChild(e),document.getElementById("accept-all")?.addEventListener("click",(function(){localStorage.setItem("cookieConsent",JSON.stringify({analytics:!0,marketing:!0})),t(),n()})),document.getElementById("deny-all")?.addEventListener("click",(function(){localStorage.setItem("cookieConsent",JSON.stringify({analytics:!1,marketing:!1})),t()})),localStorage.getItem("cookieConsent")){JSON.parse(localStorage.getItem("cookieConsent")).analytics&&n()}}));