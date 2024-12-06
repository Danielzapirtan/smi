const questionsContainer = document.getElementById("questions");
const options = [
  "1. Complet neadevărat în ceea ce mă privește",
  "2. În cea mai mare parte neadevărat în ceea ce mă privește",
  "3. Mai mult adevărat decât neadevărat",
  "4. Destul de adevărat în ceea ce mă privește",
  "5. În cea mai mare parte adevărat în ceea ce mă privește",
  "6. Mă descrie perfect"
];

const questions = [
  "1. Mă îngrijorez că oamenii pe care îi iubesc vor muri curând, chiar dacă nu există, din punct de vedere medical, nici un motiv care să-mi justifice îngrijorarea.",
  "2. Simt că oamenii vor profita de mine. ",
  "3. Oamenii nu au venit în întâmpinarea nevoilor mele emoţionale.",
  "4. Nu mă adaptez celorlalţi. ",
  "5. Nici un bărbat/o femei pe care o doresc nu m-ar putea iubi odată ce el/ea îmi va fi descoperit defectele. ",
  "6. Nu mă simt în stare să mă descurc singur/ă în viaţa de zi cu zi. ",
  "7. Trăiesc mereu sentimentul că ceva rău e pe cale să se întâmple. ",
  "8. N-am fost capabil/ă să mă despart de părinţii mei, în felul în care alte persoane de vârsta mea par să o fi făcut. ",
  "9. Aproape nimic din ceea ce fac la serviciu/la şcoală nu e la fel de bun ca ceea ce pot alţii să facă. ",
  "10. Mi-e foarte greu să accept un răspuns negativ când vreau ceva de la ceilalţi. ",
  "11. Am mari dificultăţi în a mă constrânge să mă las de băut sau de fumat, în a-mi controla reacţiile nepotrivite sau alte probleme comportamentale.",
  "12. Îi las pe ceilalţi să-şi urmeze propriul drum pentru că mă tem de consecinţele pe care le-ar avea influenţa mea asupra lor. ",
  "13. Pun nevoile celorlalţi înaintea propriilor nevoi pentru că altfel mă simt vinovat/ă. ",
  "14. Nu sunt atractiv/ă din punct de vedere sexual. ",
  "15. Chiar și atunci când lucrurile par să meargă bine, simt că este doar ceva temporar.",
  "16. Îmi este teamă că îmi voi pierde controlul atunci când mă enervez. ",
  "17. Trebuie să fiu cel mai bun în cele mai multe lucruri pe care le fac; nu pot accepta să fiu pe locul doi.",
  "18. Dacă gresesc, merit sa fiu pedepsit.",
  "19. Mă ţin scai de persoanele de care sunt apropiat/ă deoarece mă tem că mă vor părăsi.",
  "20. Simt adesea că trebuie să mă apăr de ceilalţi. ",
  "21. Nu am primit suficientă dragoste sau afecţiune. ",
  "22. Sunt fundamental diferit de ceilalţi. ",
  "23. Nici o persoană pe care o doresc n-ar vrea să-mi stea aproape dacă el/ea m-ar cunoaşte cu adevărat. ",
  "24. Am nevoie de ajutorul altor oameni ca să mă descurc. ",
  "25. Simt că un dezastru (natural, criminal, financiar sau medical) s-ar putea produce în orice clipă. ",
  "26. Părinţii mei şi cu mine ne implicăm prea mult unii în viaţa celorlalţi.",
  "27. Sunt incompetent/ă atunci când trebuie să realizez ceva. ",
  "28. Sunt adesea nervos/nervoasă sau iritabil/ă dacă nu obţin ceea ce vreau.",
  "29. Nu prea mă pot disciplina să îndeplinesc sarcini plictisitoare şi nu mă pot resemna la rutina absolută ",
  "30. Cred că dacă fac ceea ce vreau, dau numai de belea. ",
  "31. Mă simt vinovat/ă când las baltă sau dezamăgesc pe cineva. ",
  "32. Sunt prea gras/ă. ",
  "33. Dacă se întâmplă ceva bun, ma tem că este posibil să urmeze ceva rău.",
  "34. Îmi fac griji că aş putea să rănesc pe cineva (fizic sau emoţional) dacă nu-mi controlez furia.",
  "35. Mă străduiesc să păstrez aproape totul în perfectă ordine. ",
  "36. Daca nu fac tot posibilul, ar trebui să ma astept sa pierd.",
  "37. Mă îngrijorez de faptul că oamenii de care mă simt apropiat mă vor părăsi sau mă vor abandona.",
  "38. Simt că nu pot lăsa garda jos în prezenţa celorlalţi, căci astfel mă vor răni intenţionat. ",
  "39. Cel mai adesea nu am avut pe cine să contez pentru sfaturi şi sprijin emoţional.",
  "40. Nu-mi găsesc locul; sunt un/o singuratic/ă. ",
  "41. Am multe defecte şi cusururi. ",
  "42. Simt că nu pot face faţă singur/ă. ",
  "43. Mă îngrijorează că s-ar putea să devin un om al străzii sau un vagabond.",
  "44. E foarte greu pentru mine sau părinţii mei să ascundem detalii intime  unii faţă de alţii fără să ne simţim trădaţi sau vinovaţi. ",
  "45. Majoritatea oamenilor sunt mai capabili decât mine când lucrează sau realizează ceva.",
  "46. Sunt o persoană specială şi nu ar trebui să accept multe din interdicţiile care-i privesc pe ceilalţi.",
  "47. Îmi permit să dau curs unor impulsuri şi să exprim emoţii care îmi aduc necazuri sau îi rănesc pe ceilalţi.",
  "48. Simt că trebuie să mă supun dorinţelor celorlalţi sau altfel se vor purta urât cu mine sau mă vor respinge. ",
  "49. Dau celorlalţi mai mult decât primesc în schimb. ",
  "50. Sunt urât/ă. ",
  "51. Nu poți fi niciodată suficient de precaut, ceva va merge prost aproape întotdeauna.",
  "52. Simt că trebuie să-mi controlez emoţiile şi impulsurile, altfel e posibil să se întâmple ceva rău.",
  "53. Trebuie să arăt bine în cea mai mare parte a timpului. ",
  "54. Nu există nicio scuză dacă greșesc.",
  "55. Simt că-mi lipseşte sprijinul emoţional.",
  "56. Dacă cineva se poartă drăguţ cu mine, îmi imaginez că el/ea urmăreşte ceva.",
  "57. Foarte adesea, nu am avut pe cineva care să aibă grijă de mine, să se dăruiască sau căruia să-i pese cu adevărat de tot ceea ce mi se întâmplă. ",
  "58. Mă simt străin/ă de ceilalţi. ",
  "59. Oricât de mult m-aş strădui, simt că nu voi fi în stare să fac un bărbat/o femeie important/ă pentru mine să mă respecte sau să simtă că sunt merituos/merituoasă. ",
  "60. Cred că alţi oameni pot să aibă grijă de mine mai bine decât am eu însumi. ",
  "61. Mă tem că voi fi atacat/ă.",
  "62. Părinţii mei şi cu mine trebuie să vorbim în fiecare zi, altfel unul dintre noi se va simţi vinovat, rănit, dezamăgit sau singur.",
  "63. Sunt un/o ratat/ă. ",
  "64. Urăsc să fiu constrâns/ă sau împiedicat/ă să fac ceea ce vreau. ",
  "65. Dacă nu pot atinge un scop, devin cu uşurinţă frustrat/ă şi mă dau bătut/ă. ",
  "66. În relaţii, îi las pe ceilalţi să mă domine (să deţină controlul). ",
  "67. Ajung să am grijă de oamenii de care mă simt apropiat/ă. ",
  "68. Nu pot întreţine o conversaţie ca lumea. ",
  "69. Indiferent cât de mult aș munci, îmi fac griji că aș putea fi distrus financiar.",
  "70. În mine s-au adunat multă furie şi resentimente pe care nu le exprim. ",
  "71. Mă străduiesc să fac lucrurile cât mai bine, nu pot să mă opresc la „suficient de bine”. ",
  "72. Oamenii care nu-și îndeplinesc sarcinile ar trebui să fie pedepsiţi într-un fel.",
  "73. Simt că relaţiile mele apropiate cu alte persoane nu vor dura; cred că o să se sfârşească. ",
  "74. A fi trădat de cei din jurul meu e doar o chestiune de timp. ",
  "75. În cea mai mare parte din viaţa mea nu am avut pe cineva care să vrea să-mi fie aproape şi care să petreacă multă vreme cu mine.",
  "76. Mă simt izolat/ă şi singur/ă. ",
  "77. Sunt nedemn de dragostea, atenţia şi respectul celorlalţi. ",
  "78. Mi-e greu să abordez sarcini noi în afara serviciului dacă nu am pe cineva care să mă îndrume. ",
  "79. Simt că trebuie să fiu foarte atent/ă cu banii, căci altfel voi sfârşi prin a nu mai avea nimic. ",
  "80. Simt adesea că nu am o identitate separată faţă de părinţii sau partenerul/a meu/mea. ",
  "81. Nu sunt la fel de talentat/ă în ceea ce fac la fel ca ceilalţi colegi de muncă (de şcoală). ",
  "82. Întotdeauna i-am lăsat pe ceilalţi să aleagă pentru mine, deci chiar nu ştiu ce vreau cu adevărat.",
  "83. Nu există aproape nimic să nu pot suporta (îndura) dacă iubesc cu adevărat pe cineva.",
  "84. Sunt şters şi plictisitor atunci când mă aflu în compania altor persoane. ",
  "85. Simt că nu trebuie să respect regulile, normele şi convenţiile pe care ceilalţi le respectă.",
  "86. Mi-e foarte greu să sacrific un beneficiu imediat pentru unul mai îndepărtat, chiar dacă acesta din urmă este substanţial. ",
  "87. Mă tem că o decizie greșită ar putea duce la un dezastru.",
  "88. Sunt prea cerebral ca să-mi mai arăt sentimentele pozitive (grijă, afecţiune) faţă de ceilalţi. ",
  "89. Am atât de multe de îndeplinit, încât nu am aproape deloc timp să mă relaxez cu adevărat. ",
  "90. Cel mai adesea nu accept scuzele prezentate de ceilalți. Pur și simplu nu sunt dispuși să accepte responsabilitatea și plătească consecințele.",
  "91. Mă simt legat/ă, depind de persoane care nu pot fi mereu lângă mine şi să-mi ofere sprijinul de care am nevoie. ",
  "92. Mulţi oameni nu se gândesc decât la ei.",
  "93. În general oamenii nu mi-au stat alături cu căldură, intimitate şi afecţiune. ",
  "94. Mă simt întotdeauna marginalizat/ă în grupuri.",
  "95. Simt că nu pot fi iubit/ă.",
  "96. Cred că sunt o persoană dependentă de ceilalţi dacă mă gândesc la viaţa de zi cu zi. ",
  "97. Îmi iau multe precauţii pentru a evita să mă îmbolnăvesc sau să mă rănesc. ",
  "98. Simt adesea că părinţii mei trăiesc prin mine – că nu am o viaţă a mea. ",
  "99. Nu sunt la fel de inteligent/ă ca majoritatea colegilor în probleme de serviciu/de şcoală. ",
  "100. Simt că ceea ce pot oferi are o valoare mai mare decât contribuţia celorlalţi.",
  "101. Se întâmplă adesea, odată ce am început să mă simt furios, să nu mă mai pot controla.",
  "102. Simt că deciziile majore din viaţa mea nu au fost chiar ale mele.",
  "103. Sunt o persoană bună pentru că mă gândesc mai mult la ceilalţi decât mă gândesc la mine.",
  "104. Oamenii pe care îi apreciez nu s-ar asocia cu mine din cauza statutului meu social (de exemplu: venitul, nivelul de educaţie, reuşita în carieră).",
  "105. De multe ori sunt obsedat de decizii minore, deoarece consecinţele greselii mi se par atât de grave.",
  "106. Mi se pare stânjenitor să-mi exprim sentimentele în faţa celorlalţi.",
  "107. Aproape nimic din ceea ce fac nu este suficient de bun; pot întotdeauna să fac mai bine.",
  "108. Dacă nu-mi fac treaba, ar trebui să suport consecinţele. ",
  "109. În cele din urmă voi rămâne singur/ă. ",
  "110. Îmi este greu să am încredere în oameni.",
  "111. În cea mai mare parte din viaţa mea nu am simţit că sunt special/ă pentru cineva. ",
  "112. Nimeni nu mă înţelege cu adevărat. ",
  "113. Sunt prea inacceptabil/ă în multe probleme fundamentale ca să mă dezvălui celorlalţi. ",
  "114. Nu-mi reuşeşte nimic din ceea ce încerc, chiar şi în afara serviciului (sau a şcolii). ",
  "115. Mă tem că voi pierde banii şi voi deveni sărac. ",
  "116. Mi-e foarte greu să-i ţin la distanţă pe oamenii cu care sunt intim; îmi este dificil să mă separ de  ceilalţi şi să-mi definesc identitatea. ",
  "117. Sunt umilit/ă de ratările şi de scăpările mele când muncesc. ",
  "118. Pun de obicei nevoile mele înaintea nevoilor celorlalţi. ",
  "119. Am tendinţa să exagerez cu anumite lucruri, chiar şi atunci când ştiu că ele sunt rele pentru mine. ",
  "120. Îmi fac griji să le fiu pe plac celorlalţi, ca să nu mă respingă. ",
  "121. La serviciu, eu sunt cel care de cela mai multe ori se oferă voluntar să lucreze în plus. ",
  "122. Nu ştiu niciodată ce să spun sau cum să mă adresez în societate. ",
  "123. Mă simt mai bine dacă îmi asum că lucrurile NU vor merge bine pentru mine, ca să nu mă simt dezamăgit atunci când sunt probleme.",
  "124. Îmi vine greu să fiu prietenos şi spontan. ",
];
  function hasQueryParam(paramName) {
    // Get the current URL's search parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Check if the parameter exists
    return urlParams.has(paramName);
  }


questions.forEach((question, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";
  questionDiv.innerHTML = `<div class=question1>${question}</div>`;

  // Create a dropdown for each question
  const select = document.createElement("select");
  select.name = `response${index}`;

  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    select.appendChild(opt);
  });

  select.selectedIndex = hasQueryParam("test") ? Math.floor(Math.random() * 6) : (-1);
  questionDiv.appendChild(select);

  // Append questionDiv with question and select directly to container
  questionsContainer.appendChild(questionDiv);
});
const form = document.getElementById("questionnaireForm");

function exportToCSV(myResponses) {
  const csvContent = "data:text/csv;charset=utf-8," + myResponses.join(",");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "myResponses.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Generate each question with a dropdown
function submitForm(event) {
  event.preventDefault();
  const responses = [];
  responses.push(document.getElementById("firstname").value);
  responses.push(document.getElementById("lastname").value);
  questions.forEach((question, index) => {
    const response = form[`response${index}`].value;
    responses.push(response[0]);
  });
  exportToCSV(responses);
  //processResponses(myResponses);
}
