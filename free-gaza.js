// Load Font Awesome if not already loaded
if (!document.querySelector(&#39;link[href*=&quot;font-awesome&quot;]&#39;)) {
    const fontAwesome = document.createElement(&#39;link&#39;);
    fontAwesome.rel = &#39;stylesheet&#39;;
    fontAwesome.href = &#39;https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css&#39;;
    document.head.appendChild(fontAwesome);
}

// Animated messages
const messages = [
    { text: &quot;Free Gaza&quot;, icon: &quot;fa-dove&quot;, colorClass: &quot;color-free-gaza&quot; },
    { text: &quot;Save Gaza&quot;, icon: &quot;fa-heart&quot;, colorClass: &quot;color-save-gaza&quot; },
    { text: &quot;Free Palestine&quot;, icon: &quot;fa-flag&quot;, colorClass: &quot;color-free-palestine&quot; },
    { text: &quot;Save Palestine&quot;, icon: &quot;fa-hands-helping&quot;, colorClass: &quot;color-save-palestine&quot; },
    { text: &quot;Stop War&quot;, icon: &quot;fa-ban&quot;, colorClass: &quot;color-stop-war&quot; },
    { text: &quot;End Genocide&quot;, icon: &quot;fa-exclamation-triangle&quot;, colorClass: &quot;color-end-genocide&quot; },
    { text: &quot;Human Rights&quot;, icon: &quot;fa-users&quot;, colorClass: &quot;color-human-rights&quot; },
    { text: &quot;End Siege&quot;, icon: &quot;fa-unlock&quot;, colorClass: &quot;color-end-siege&quot; },
    { text: &quot;Stop Bombs&quot;, icon: &quot;fa-peace&quot;, colorClass: &quot;color-stop-bombs&quot; }
];

const textElement = document.getElementById(&#39;changing-text&#39;);
const iconElement = textElement.previousElementSibling;
let currentIndex = 0;

function changeText() {
    textElement.classList.remove(&#39;text-animation&#39;);
    messages.forEach(msg =&gt; textElement.classList.remove(msg.colorClass));
    void textElement.offsetWidth;

    const msg = messages[currentIndex];
    textElement.textContent = msg.text;
    iconElement.className = `fas ${msg.icon}`;
    textElement.classList.add(msg.colorClass, &#39;text-animation&#39;);

    currentIndex = (currentIndex + 1) % messages.length;
}
setInterval(changeText, 5000);
textElement.classList.add(&#39;text-animation&#39;);

// Show/hide logic using localStorage
const container = document.getElementById(&quot;buttonContainer&quot;);
const button = document.getElementById(&quot;gazaButton&quot;);
const now = Date.now();
const hideUntil = parseInt(localStorage.getItem(&quot;hideUntil&quot;)) || 0;

if (now &gt;= hideUntil) {
    container.style.display = &quot;block&quot;;
} else {
    const remaining = hideUntil - now;
    setTimeout(() =&gt; {
        container.style.display = &quot;block&quot;;
    }, remaining);
}

button.addEventListener(&quot;click&quot;, function (e) {
    e.preventDefault();
    window.open(&quot;https://t.me/Dr_FarFar_Channel/5686&quot;, &quot;_blank&quot;);

    const hideDurationMinutes = 1; // &#8592; change to 1440 for 24 hours
    const reappearTime = Date.now() + hideDurationMinutes * 60000;
    localStorage.setItem(&quot;hideUntil&quot;, reappearTime.toString());

    container.style.display = &quot;none&quot;;
});