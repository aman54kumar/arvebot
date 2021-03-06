// React
import { ReactElement } from "react";
// material-ui
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from "@mui/material/styles";
// react-router
import { Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
// local - check in newer chrome version and remove. added polyfill because nb locale not supported in chromium>92
// https://github.com/formatjs/formatjs/issues/3066
import "@formatjs/intl-datetimeformat/polyfill-force";
import "@formatjs/intl-datetimeformat/locale-data/nb";
import "@formatjs/intl-numberformat/polyfill-force";
import "@formatjs/intl-numberformat/locale-data/nb";
import "@formatjs/intl-numberformat/locale-data/en";
//
// import theme from "./theme";
import Header from "./Components/Generic/Header/Header";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import InheritanceCalculatorPage from "./Pages/InheritanceCalculatorPage.js";
import Footer from "./Components/Generic/Footer/Footer";
// import HomePageImage from "./assets/images/homepage-image.jpg";
import ResourcesPage from "./Pages/ResourcesPage";

import Norsk from "./languages/translationNO.json";
// import English from "./languages/translationEN.json";
import store from './store/store'
import { Provider } from "react-redux";

const theme = createTheme();
const useStyles = makeStyles({
  root: {
    // backgroundImage: `url(${HomePageImage})`,
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  rootPaper: {
    marginTop: "5rem",
    minHeight: "100vh",
    background:
      "radial-gradient( circle farthest-corner at 10% 20%,  #FCCABD 0%, #4151C9 45.5% )",
    opacity: "1",
  },
});

const menuItems = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/calculator" component={InheritanceCalculatorPage} />
    <Route path="/resources" component={ResourcesPage} />
  </Switch>
);

const App = (): ReactElement => {
  const classes = useStyles();
  const lang = "nb-NO";
  const langMessages = Norsk;
  // const [lang, setLang] = useState("nb-NO");
  // const [langMessages, setLangMessages] = useState(Norsk);
  // const sendDataToParent = (index) => {
  //   setLang(index.code);
  //   if (index.code === "nb-NO") {
  //     setLangMessages(Norsk);
  //   } else {
  //     setLangMessages(English);
  //   }
  // };

  // const LangValue = {
  //   no: {
  //     code: "nb-NO",
  //     name: "Norsk",
  //   },
  //   en: {
  //     code: "en-US",
  //     name: "English",
  //   },
  // };
  return (

    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <IntlProvider locale={lang} messages={langMessages}>

          <Paper
            role="img"
            // className={classes.root}
            aria-label="Image by Free-Photos from Pixabay"
          >
            <Header />
            <Provider store={store}>
              <Paper className={classes.rootPaper}>{menuItems}</Paper>
            </Provider>
          </Paper>
          {/* <Footer langValue={LangValue} sendDataToParent={sendDataToParent} /> */}
          <Footer description="Arvebot" title="Arvebot" />

          {/* Route components are rendered if the path prop matches the current URL */}

        </IntlProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

// react-spring -> animations
// nivo for visualisation
// primary - 003049   , 264653 , 031d44
// secondary - EAE2B7   ,e76f51 , d5896f
