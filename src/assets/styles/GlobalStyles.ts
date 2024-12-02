import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // styled-reset 가져오기

const GlobalStyles = createGlobalStyle`
  ${reset}  // reset 적용

  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

@font-face {
    font-family: 'MaruBuriBold';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Bold.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Bold.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Bold.woff2) format("woff2"), url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Bold.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Bold.ttf) format("truetype");
}



@font-face {
    font-family: 'RIDIBatang';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-style: normal;
}

@font-face {
    font-family: 'Paperlogy-8ExtraBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Paperlogy_SemiBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Paperlogy';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

  /* Custom Global Styles */
  body {
    background-color: ${(props) => props.theme.colors.orange000};
    color: ${(props) => props.theme.colors.black000};
    font-family:  'Pretendard-Regular' ,'Paperlogy','gmarket', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: 'Paperlogy-8ExtraBold';
  }

  p {
    text-decoration: none;
    color: inherit;
    font-family: 'Pretendard-Regular';
    letter-spacing: .006em;
    line-height: 1.6;
  }
  em {
    font-family: 'Pretendard-SemiBold';
  }

  span {
    color: inherit;
    font-family: 'Pretendard-Regular';
  }

  img {
    display: block;
    max-width: 100%;
  }

   h4 {
    font-family:'Pretendard-Regular';
  }

  h2 {
    font-family: 'Paperlogy-8ExtraBold';
  }
  h3 {
    font-family: 'Paperlogy-8ExtraBold';
  }



  @media (max-width: 768px) {
    body {
      font-size: 14px;
      line-height: 1.4;
    }
  }

  &::selection {
    background: ${(props) => props.theme.colors.rose100};
    color: ${(props) => props.theme.colors.black000};
  }


  
`;

export default GlobalStyles;
