import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
          font-family: "Korolev Medium"; 
          font-display: swap;
          src: url("/fonts/KorolevMedium.woff") format("woff"); 
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
          U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
          U+FEFF, U+FFFD;
        }
      /* latin */
      @font-face {
          font-family: "Fairy Tales JF";
          font-display: swap; 
          src: url("/fonts/FairyTaleJF.ttf") format("truetype"),
               url("/fonts/FairyTaleJF.woff") format("woff"); 
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
          U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
          U+FEFF, U+FFFD;
        }
      `}
  />
)

export default Fonts