document.addEventListener("DOMContentLoaded", function () {
    const consentBanner = document.createElement('div');
    consentBanner.id = "cookie-consent-banner";
    consentBanner.innerHTML = `
    <div style="position: fixed; bottom: 0; left: 0; width: 100%; background-color: #1f2937; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; z-index: 50; box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);">
        <div style="font-size: 0.875rem; padding-right: 1rem;">
            <p style="margin-bottom: 0.5rem;">Wij gebruiken cookies om onze website en services te optimaliseren. Kies welke cookies je wilt toestaan:</p>
        </div>
        <div style="display: flex; gap: 1rem;">
            <button id="accept-all" style="background-color: #16a34a; color: white; padding: 0.5rem 1rem; font-size: 0.875rem; border-radius: 0.375rem; border: none; cursor: pointer;">
                Accepteer Alles
            </button>
            <button id="deny-all" style="background-color: #6b7280; color: white; padding: 0.5rem 1rem; font-size: 0.875rem; border-radius: 0.375rem; border: none; cursor: pointer;">
                Weiger Alles
            </button>
        </div>
    </div>
`;
    if (!localStorage.getItem("cookieConsent")) {
        document.body.appendChild(consentBanner);
    }

    document.getElementById("accept-all")?.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", JSON.stringify({ analytics: true, marketing: true }));
        removeConsentBanner();
        enableAnalytics();
    });

    document.getElementById("deny-all")?.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", JSON.stringify({ analytics: false, marketing: false }));
        removeConsentBanner();
    });

    function removeConsentBanner() {
        const banner = document.getElementById("cookie-consent-banner");
        if (banner) banner.remove();
    }

    function enableAnalytics() {
        const consent = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
        if (consent.analytics) {
            const gaScript = document.createElement("script");
            gaScript.async = true;
            gaScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X"; // Vervang met je Analytics ID
            document.head.appendChild(gaScript);

            gaScript.onload = function () {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'UA-XXXXXXX-X'); // Vervang met je Analytics ID
            };
        }
    }

    if (localStorage.getItem("cookieConsent")) {
        const consent = JSON.parse(localStorage.getItem("cookieConsent"));
        if (consent.analytics) {
            enableAnalytics();
        }
    }
});
