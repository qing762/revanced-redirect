const officialDomain = "revanced.app";
const unofficialDomains = [
    "revanced.net", 
    "revanced.to",
    "revancedextended.com",
    "revancedextended.io",
    "revancedapp.download",
    "revancedapps.com",
    "revancedapk.org",
    "revancedapp.io",
    "revancedapk.net",
    "revancedyoutube.app",
    "revanced-extended.en.uptodown.com",
    "revancedyoutube.org",
    "ytvancedpro.com",
    "revancedmusic.com",
    "revancedextend.com",
    "revanced-extended.com",
    "extendedrevanced.com",
    "vanced-official.com",
    "vanced.pro",
];
const currentDomain = window.location.hostname;
const currentPath = window.location.pathname;

if (unofficialDomains.some(domain => currentDomain.includes(domain))) {
    if (currentPath === "/download") {
        window.location.href = `https://${officialDomain}/download`;
    } else {
        window.location.href = `https://${officialDomain}`;
    }
}

function replaceUnofficialLinks() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        unofficialDomains.forEach(domain => {
            if (link.href.includes(domain)) {
                const url = new URL(link.href);
                url.hostname = officialDomain;
                if (url.pathname === "/download") {
                    url.pathname = '/download';
                } else {
                    url.pathname = '';
                }
                url.search = '';
                link.href = url.toString();
            }
        });
    });
}

replaceUnofficialLinks();

const observer = new MutationObserver(replaceUnofficialLinks);
observer.observe(document.body, { childList: true, subtree: true });