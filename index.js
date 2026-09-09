function home() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
}

function about() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
}

function hidewindow() {
  document.getElementById("window-application").style.display = "none";
  document.getElementById("window-application-back").style.display = "none";
}

function OpenOly() {
  document.getElementById("windows").innerHTML = ` 
      <div id="window-application-back">
        <div id="window-application">
          <div id="exit" onclick="hidewindow()"></div>
          <img src="../images/hexagon.png" id="application-icon" />
          <div id="container-app">
            <h1>Oly</h1>
            <h2>Plataformas: Windows.</h2>
            <h2>Criador: Marciel</h2>
          </div>
          <a href="https://github.com/macieal/WebInfinityBrowser/releases/download/UltraUpdate/WebInfinityBrowser.msi"><button id="download">baixar</button></a>
        </div>
      </div>
    </div>
    `;
}

function OpenInfcode() {
  document.getElementById("windows").innerHTML = ` 
      <div id="window-application-back">
        <div id="window-application">
          <div id="exit" onclick="hidewindow()"></div>
          <img src="../images/code_blocks_71dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png" id="application-icon" />
          <div id="container-app">
            <h1>InfinityCode</h1>
            <h2>Plataformas: Web, Android</h2>
            <h2>Criador: Marciel</h2>
          </div>
          <a href="https://macieal.github.io/InfinityCode/"><button id="download">acessar</button></a>
          <a href="https://github.com/macieal/InfinityCode/releases/download/Android/InfinityCode.apk"><button id="download" style="top: 70% !important;">baixar</button></a>
        </div>
      </div>
    </div>
    `;
}

function OpenInfpost() {
  document.getElementById("windows").innerHTML = ` 
      <div id="window-application-back">
        <div id="window-application">
          <div id="exit" onclick="hidewindow()"></div>
          <img src="../images/hexagon.png" id="application-icon" />
          <div id="container-app">
            <h1>InfinityPost</h1>
            <h2>Plataformas: Web.</h2>
            <h2>Criador: Marciel</h2>
          </div>
          <a href="https://macieal.github.io/InfinityPost"><button id="download">acessar</button></a>
        </div>
      </div>
    </div>
    `;
}

function appsoficial() {
    document.getElementById("appoficial").style.display = "none";
    document.getElementById("appoutros").style.display = "block";
    document.getElementById("others-applications").style.display = "none";
    document.getElementById("applications-official").style.display = "block";
}

function appsoutros() {
    document.getElementById("appoficial").style.display = "block";
    document.getElementById("appoutros").style.display = "none";
    document.getElementById("others-applications").style.display = "block";
    document.getElementById("applications-official").style.display = "none";
}
