
function Main() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { style: { position: "relative" } },
      React.createElement(
        ParallaxBanner,
        {
          className: "your-class",
          layers: [{
            image: "https://wallpaperplay.com/walls/full/c/5/3/34778.jpg",
            amount: 0.6
          }, {
            image: "https://d2c7ipcroan06u.cloudfront.net/wp-content/uploads/2019/03/Arjuna_and_His_Charioteer_Krishna_Confront_Karna-e1553604187917-696x392.jpg",
            amount: 0.3
          }],
          style: {
            height: "70vh"
          } },
        React.createElement(
          Zoom,
          null,
          React.createElement(
            "h1",
            {
              style: {
                zIndex: 100,
                position: "absolute",
                fontSize: 84,
                color: "ghostwhite",
                top: "33%",
                textAlign: "left",
                transform: "translate(100%,0)",
                width: "100%",
                textShadow: "0px 3px lightgray, 7px 7px 10px black",
                margin: 0,
                padding: 0,
                marginLeft: 40
              } },
            "\u0938\u0902\u092D\u093E\u0937\u0923\u093E\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D"
          )
        )
      )
    ),
    React.createElement(
      "div",
      {
        style: {
          height: 1000,
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          backgroundColor: "white"
        },
        className: "wrapper" },
      React.createElement(
        "div",
        { className: "img-wrapper" },
        React.createElement(
          Parallax,
          { className: "custom-class", y: [-40, 20], tagOuter: "figure" },
          React.createElement("img", {
            style: { boxShadow: "2px 2px 10px 5px lightgray" },
            height: "500px",
            width: "400px",
            src: "https://lh4.googleusercontent.com/proxy/OmqdbduPzndoCsG3Vhqci9oFXoKxWnoBVmEzdqbGovjMEIcMamU3Elr_04XYND4Y0SbtBjKvoSah17AsXtgCITRSLJ63JogmEMziJ5CdAuWDg2xbokmoEcUfJgfgO9Gl-vrauQ=s0-d",
            alt: "ok" })
        )
      ),
      React.createElement(
        "div",
        {
          className: "text-wrapper",
          style: {
            backgroundColor: "orange",
            color: "white",
            borderRadius: 10,
            marginTop: 50,
            width: "40%",
            height: 600,
            padding: 30,
            boxShadow: " 10px 20px 0px darkorange, 10px 30px 15px rgba(0,0,0,0.1)"
          } },
        React.createElement(
          "p",
          { style: { fontSize: "24px" } },
          React.createElement(
            "h3",
            null,
            "\u092A\u091E\u094D\u091A\u0924\u0928\u094D\u0924\u094D\u0930 \u0915\u0925\u093E :"
          ),
          "\u0915\u0941\u0924\u094D\u0930\u091A\u093F\u0924\u094D \u0905\u0930\u0923\u094D\u092F\u092A\u094D\u0930\u0926\u0947\u0936\u0947 \u090F\u0915\u0902 \u0938\u0930\u094B\u0935\u0930\u092E\u094D \u0906\u0938\u0940\u0924\u094D \u0964 \u0968 \u0924\u0924\u094D\u0930 \u092C\u0939\u0935\u0903 \u091C\u0932\u091A\u0930\u093E\u0903 \u0906\u0938\u0928\u094D \u0964 \u0969 \u0915\u0936\u094D\u091A\u0928 \u092C\u0915\u0903 \u0905\u092A\u093F \u0924\u0924\u094D\u0930 \u092C\u0939\u0941\u0915\u093E\u0932\u0924\u0903 \u0935\u0938\u0924\u093F \u0938\u094D\u092E \u0964 \u096A \u0915\u093E\u0932\u093E\u0928\u094D\u0924\u0930\u0947 \u0938\u0903 \u092C\u0915\u0903 \u0935\u0943\u0926\u094D\u0927\u0903 \u0905\u092D\u0935\u0924\u094D \u0964 \u096B \u0935\u093E\u0930\u094D\u0927\u0915\u094D\u092F\u0947 \u0938\u0903 \u092E\u0924\u094D\u0938\u094D\u092F\u093E\u0928\u094D \u0917\u094D\u0930\u0939\u0940\u0924\u0941\u092E\u092A\u093F \u0905\u0938\u092E\u0930\u094D\u0925\u0903 \u0905\u092D\u0935\u0924\u094D \u0964 \u096C \" \u0907\u0926\u093E\u0928\u093F\u0902 \u0915\u0925\u092E\u094D \u0906\u0939\u093E\u0930\u0903 \u0938\u092E\u094D\u092A\u093E\u0926\u0928\u0940\u092F\u0903 ?\" \u0907\u0924\u093F \u091A\u093F\u0928\u094D\u0924\u092F\u0928\u094D \u0938\u0903 \u090F\u0915\u092E\u094D \u0909\u092A\u093E\u092F\u092E\u094D \u0905\u0928\u094D\u0935\u093F\u0937\u094D\u091F\u0935\u093E\u0928\u094D \u0964 \u096D \u0938\u0930\u094B\u0935\u0930\u0938\u094D\u092F \u0924\u0940\u0930\u0947 \u0938\u094D\u0925\u093F\u0924\u094D\u0935\u093E \u0905\u0936\u094D\u0930\u0942\u0923\u093F \u092E\u0941\u091E\u094D\u091A\u0928\u094D \u0938\u0903 \u0930\u094B\u0926\u093F\u0924\u0941\u092E\u094D \u0906\u0930\u092C\u094D\u0927\u0935\u093E\u0928\u094D \u0964 \u096E \u0924\u0926\u093E \u090F\u0915\u0903 \u0915\u0930\u094D\u0915\u091F\u0915\u0903 \u0924\u0938\u094D\u092F \u0938\u092E\u0940\u092A\u092E\u094D \u0906\u0917\u0924\u094D\u092F \u092A\u0943\u0937\u094D\u091F\u0935\u093E\u0928\u094D - \" \u092E\u093E\u092E ! \u0915\u093F\u092E\u0930\u094D\u0925\u0902 \u092D\u0935\u093E\u0928\u094D \u0930\u094B\u0926\u0928\u0902 \u0915\u0930\u094B\u0924\u093F ?\" - \u0907\u0924\u093F \u0964 \u096F \u0924\u0926\u093E \u092C\u0915\u0903 \u0909\u0915\u094D\u0924\u0935\u093E\u0928\u094D - \" \u0905\u0926\u094D\u092F \u0926\u0948\u0935\u091C\u094D\u091E\u092E\u0941\u0916\u0924\u0903 \u0905\u0939\u092E\u094D \u090F\u0915\u093E\u0902 \u0926\u0941\u0930\u094D\u0935\u093E\u0930\u094D\u0924\u094D\u0924\u093E\u0902 \u0936\u094D\u0930\u0941\u0924\u0935\u093E\u0928\u094D - \xB4 \u0907\u0924\u0903 \u092A\u0930\u0902 \u0926\u094D\u0935\u093E\u0926\u0936\u0935\u0930\u094D\u0937\u092A\u0930\u094D\u092F\u0928\u094D\u0924\u092E\u094D \u0905\u0924\u094D\u0930 \u0905\u0928\u093E\u0935\u0943\u0937\u094D\u091F\u093F\u0903 \u092D\u0935\u093F\u0937\u094D\u092F\u0924\u093F \xB4 \u0907\u0924\u093F \u0964"
        ),
        React.createElement(
          "a",
          {
            className: "conti",
            target: "_blank",
            href: "http://spokensanskrit.org/index.php?mode=14&story=pancha1" },
          "\u0905\u0924\u094D\u0930 \u092A\u0920\u0924\u0941"
        )
      ),
      React.createElement(
        "div",
        { className: "header2" },
        React.createElement(
          Fade,
          null,
          React.createElement(
            "h1",
            {
              style: {
                zIndex: 100,
                textAlign: "center",
                fontSize: 84,
                color: "white",

                textShadow: "0px 4px ghostwhite, 4px 4px 10px black",
                margin: 0,
                padding: 0
              } },
            " ",
            "\u092A\u094D\u0930\u0924\u093F \u0938\u092A\u094D\u0924\u093E\u0939\u0947 \u0938\u093E\u0927\u093E\u0928\u093E",
            " "
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "sec2" },
      React.createElement(
        Parallax,
        { className: "custom-class", y: [-20, 20], tagOuter: "figure" },
        React.createElement(
          "div",
          { className: "weeks" },
          React.createElement(
            "a",
            {
              target: "_blank",
              href: "http://www.surasaraswathisabha.org/SSSabha/Prathama/login2.php",
              className: "week" },
            "\u092A\u094D\u0930\u0925\u092E\u093E"
          ),
          React.createElement(
            "a",
            {
              target: "_blank",
              href: "http://www.surasaraswathisabha.org/SSSabha/Dwithiya/login2.php",
              className: "week" },
            "\u0926\u094D\u0935\u093F\u0924\u0940\u092F\u093E"
          ),
          React.createElement(
            "a",
            {
              target: "_blank",
              href: "http://www.surasaraswathisabha.org/SSSabha/Thruteeya/login2.php",
              className: "week" },
            "\u0924\u0943\u0924\u0940\u092F\u093E"
          )
        )
      )
    )
  );
}
var domContainer = document.querySelector('#main');
ReactDOM.render(React.createElement(Main, null), domContainer);