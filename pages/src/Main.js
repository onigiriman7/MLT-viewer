
function Main() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <ParallaxBanner
          className="your-class"
          layers={[
            {
              image: "https://wallpaperplay.com/walls/full/c/5/3/34778.jpg",
              amount: 0.6
            },
            {
              image:
                "https://d2c7ipcroan06u.cloudfront.net/wp-content/uploads/2019/03/Arjuna_and_His_Charioteer_Krishna_Confront_Karna-e1553604187917-696x392.jpg",
              amount: 0.3
            }
          ]}
          style={{
            height: "70vh"
          }}>
          <Zoom>
            <h1
              style={{
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
              }}>
              संभाषणासंस्कृतम्
            </h1>
          </Zoom>
        </ParallaxBanner>
      </div>

      <div
        style={{
          height: 1000,
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          backgroundColor: "white"
        }}
        className="wrapper">
        <div className="img-wrapper">
          <Parallax className="custom-class" y={[-40, 20]} tagOuter="figure">
            <img
              style={{ boxShadow: "2px 2px 10px 5px lightgray" }}
              height="500px"
              width="400px"
              src="https://lh4.googleusercontent.com/proxy/OmqdbduPzndoCsG3Vhqci9oFXoKxWnoBVmEzdqbGovjMEIcMamU3Elr_04XYND4Y0SbtBjKvoSah17AsXtgCITRSLJ63JogmEMziJ5CdAuWDg2xbokmoEcUfJgfgO9Gl-vrauQ=s0-d"
              alt="ok"></img>
          </Parallax>
        </div>
        <div
          className="text-wrapper"
          style={{
            backgroundColor: "orange",
            color: "white",
            borderRadius: 10,
            marginTop: 50,
            width: "40%",
            height: 600,
            padding: 30,
            boxShadow:
              " 10px 20px 0px darkorange, 10px 30px 15px rgba(0,0,0,0.1)"
          }}>
          <p style={{ fontSize: "24px" }}>
            <h3>पञ्चतन्त्र कथा :</h3>
            कुत्रचित् अरण्यप्रदेशे एकं सरोवरम् आसीत् । २ तत्र बहवः जलचराः आसन् ।
            ३ कश्चन बकः अपि तत्र बहुकालतः वसति स्म । ४ कालान्तरे सः बकः वृद्धः
            अभवत् । ५ वार्धक्ये सः मत्स्यान् ग्रहीतुमपि असमर्थः अभवत् । ६ "
            इदानिं कथम् आहारः सम्पादनीयः ?" इति चिन्तयन् सः एकम् उपायम्
            अन्विष्टवान् । ७ सरोवरस्य तीरे स्थित्वा अश्रूणि मुञ्चन् सः रोदितुम्
            आरब्धवान् । ८ तदा एकः कर्कटकः तस्य समीपम् आगत्य पृष्टवान् - " माम !
            किमर्थं भवान् रोदनं करोति ?" - इति । ९ तदा बकः उक्तवान् - " अद्य
            दैवज्ञमुखतः अहम् एकां दुर्वार्त्तां श्रुतवान् - ´ इतः परं
            द्वादशवर्षपर्यन्तम् अत्र अनावृष्टिः भविष्यति ´ इति ।
          </p>
          <a
            className="conti"
            target="_blank"
            href="http://spokensanskrit.org/index.php?mode=14&story=pancha1">
            अत्र पठतु
          </a>
        </div>
        <div className="header2">
          <Fade>
            <h1
              style={{
                zIndex: 100,
                textAlign: "center",
                fontSize: 84,
                color: "white",

                textShadow: "0px 4px ghostwhite, 4px 4px 10px black",
                margin: 0,
                padding: 0
              }}>
              {" "}
              प्रति सप्ताहे साधाना{" "}
            </h1>
          </Fade>
        </div>
      </div>
      <div className="sec2">
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <div className="weeks">
            <a
              target="_blank"
              href="http://www.surasaraswathisabha.org/SSSabha/Prathama/login2.php"
              className="week">
              प्रथमा
            </a>
            <a
              target="_blank"
              href="http://www.surasaraswathisabha.org/SSSabha/Dwithiya/login2.php"
              className="week">
              द्वितीया
            </a>
            <a
              target="_blank"
              href="http://www.surasaraswathisabha.org/SSSabha/Thruteeya/login2.php"
              className="week">
              तृतीया
            </a>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
let domContainer = document.querySelector('#main');
ReactDOM.render(<Main />, domContainer)