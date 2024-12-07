const officialDomain = "revanced.app";
const unofficialDomains = ["revanced.net", "revanced.to", "revancedextended.com", "revancedextended.io", "revancedapp.download", "revancedapps.com", "revancedapk.org", "revancedapp.io", "revancedapk.net", "revancedyoutube.app"];

const currentDomain = window.location.hostname;

if (unofficialDomains.some(domain => currentDomain.includes(domain))) {
    window.location.href = `https://${officialDomain}`;
}

function replaceUnofficialLinks() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        unofficialDomains.forEach(domain => {
            if (link.href.includes(domain)) {
                const url = new URL(link.href);
                url.hostname = officialDomain;
                url.pathname = '';
                url.search = '';
                link.href = url.toString();
            }
        });
    });
}

replaceUnofficialLinks();

const observer = new MutationObserver(replaceUnofficialLinks);
observer.observe(document.body, { childList: true, subtree: true });