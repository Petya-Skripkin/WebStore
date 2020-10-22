import {createGlobalStyle} from "styled-components";

export function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal'){
    return `
        @font-face{
            font-family: ${name};
            font-style: ${fontStyle};
            font-weight: ${fontWeight};
            src: url(${require('../../public/fonts/' + src + '.ttf')});
            src: url(${require('../../public/fonts/' + src + '.eot')}?#iefix) format("embedded-opentype"),
                url(${require('../../public/fonts/' + src + '.woff')}) format("woff"),
                url(${require('../../public/fonts/' + src + '.woff2')}) format("woff2"),
                url(${require('../../public/fonts/' + src + '.ttf')}) format("truetype"),
        }
    `;
}

const GlobalFonts = createGlobalStyle`
    ${fontFace('HelveticaNeue', 'Helvetica-Neue/HelveticaNeueCyr-Roman/HelveticaNeueCyr-Roman')};
    ${fontFace('HelveticaNeue Italic', 'Helvetica-Neue/HelveticaNeueCyr-Italic/HelveticaNeueCyr-Italic', 'italic')};
    ${fontFace('HelveticaNeue Bold', 'Helvetica-Neue/HelveticaNeueCyr-Bold/HelveticaNeueCyr-Bold', 'bold')};
    ${fontFace('HelveticaNeue BoldItalic', 'Helvetica-Neue/HelveticaNeueCyr-BoldItalic/HelveticaNeueCyr-BoldItalic', 'bold', 'italic')};

    body{
        font-family: 'HelveticaNeue';
    }
`;

export default GlobalFonts;
