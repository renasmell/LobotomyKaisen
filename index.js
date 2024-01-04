
const lobotomy = "nah, I'd win.|lose|nah, i'd|infinite|fraudulent|lobotomy|kaisen|you are my special|yowai mo|shibuya incident: close|expanded his domain|malevolent kitchen|stay|your honor,|stand proud, you're strong|or are you|the|because you're the strongest|leave it all behind|did you|you|stand proud|Nah, I'd win|you're strong|nyaa\~\~\~ i'd win|always bet on hakari|hakari|kagurabachi|volume|the honored one|with this treasure i summon|or are you|i alone am strong|malevolent shrine|infinite void|throughout heaven and earth|throughout heaven and earth I alone am the|who|inherited the curse of|strongest sorcerer|fraudkuna|jogoat|stand proud sukuna, you are strong|he shrugged back in fear|began to open his domain|leave it all behind|nah, i'd win.|nah, Id win -jogoat.|you're so right|nah, i'd take backshots.";

const capitalize = str => str.substring(0, 1).toUpperCase() + str.substring(1);

// randomly generates text based on lobotomy variable
function lobotomyKaisen(len) {
    let l = lobotomy.split('|');
    let nahwin = "";
    let last_phrase; 
    for (let i = 0; i < len; i++) {
      let phrase = l[Math.floor(Math.random() * l.length)];
      if (last_phrase?.endsWith('.') || i === 0) phrase = capitalize(phrase);
      if (i === len-1 && !phrase.endsWith('.')) phrase += '.';
      nahwin += phrase + ' ';
      last_phrase = phrase;
    }
    return nahwin;
}



window.onload = () => {
    const lobot_text = document.getElementById('lobot-text')
    // button
    document.getElementById('lobot-button').onclick = () => {
        const amount = document.getElementById('lobot-count').value || 1;
        lobot_text.value = lobotomyKaisen(amount);
    }
    // copy text
    document.getElementById('lobot-copy').onclick = () => {
        lobot_text.select();
        lobot_text.setSelectionRange(0, 9999);
        document.execCommand('copy');
    }
}
