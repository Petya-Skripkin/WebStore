import {createGlobalStyle} from "styled-components";

export function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal'){
    return `
        @font-face{
            font-family: ${name};
            font-style: ${fontStyle};
            font-weight: ${fontWeight};
            src: url(${require('../../public/fonts/' + src + '.otf')});
        }
    `;
}

const GlobalFonts = createGlobalStyle`
    ${fontFace('MuseoSansCyrl', 'MuseoSansCyrl_0')};
    ${fontFace('MuseoSansCyrl Italic', 'MuseoSansCyrl_1', 'italic')};
    ${fontFace('MuseoSansCyrl Bold', 'MuseoSansCyrl_2', 'bold')};
    ${fontFace('MuseoSansCyrl BoldItalic', 'MuseoSansCyrl_3', 'bold', 'italic')};

    body{
        font-family: 'MuseoSansCyrl';
    }
`;

export default GlobalFonts;
