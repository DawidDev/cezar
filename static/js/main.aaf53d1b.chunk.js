(this.webpackJsonpcezar=this.webpackJsonpcezar||[]).push([[0],{22:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var i,a,c,r=t(0),s=t.n(r),o=t(13),l=t.n(o),d=(t(22),t(4)),j=t(2),u=t(14),b=t.n(u),p=(t(40),t(3)),x=t(1),h=p.a.div(i||(i=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  \n  span {\n    margin-left: 15px;\n\n    p {\n      text-align: center;\n      margin-left: -10px;\n    }\n  }\n"]))),f=function(n){for(var e=n.text,t=n.encrypted,i=e.split(""),a=t.split(""),c=[],r=0;r<i.length;r++){var s={id:r,letter_public:i[r],letter_encrypted:a[r]};c.push(s)}var o=c.map((function(n){return Object(x.jsxs)("span",{children:[Object(x.jsx)("p",{children:n.letter_public}),Object(x.jsx)("p",{children:n.letter_encrypted})]},n.id)}));return Object(x.jsx)(h,{children:o})},O=p.a.div(a||(a=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),w=p.a.div(c||(c=Object(j.a)(["\n  width: 100%;\n  background-color: #F9F9F9;\n  max-width: 1400px;\n  display: flex;\n  justify-content: space-around;\n  margin: 0 auto;\n  padding: 20px 0;\n  border-radius: 20px;\n\n  .checked {\n    background-color: #1EB796;\n  }\n  \n  .block_1 {\n    width: 45%;\n  }\n\n  .block_2 {\n    width: 45%;\n    \n    .visualization {\n      display: flex;\n    }\n\n    button {\n      margin-top: 20px;\n      display: block;\n    }\n  }\n\n  button {\n      padding: 5px 10px;\n      transition: 0.25s;\n      border: none;\n      outline: none;\n      margin-right: 20px;\n\n      :hover {\n        cursor: pointer;\n      }\n    }\n\n  textarea {\n    display: block;\n    width: 80%;\n    height: 50px;\n    word-break: break-all;\n  }\n\n  h3 {\n    padding: 0;\n    margin-bottom: 20px;\n  }\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n    width: 90%;\n    padding: 20px;\n  \n    .block_1, .block_2 {\n      width: 100%;\n    }\n  }\n\n"]))),y=function(){var n=Object(r.useState)(""),e=Object(d.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)("szyfrowanie"),c=Object(d.a)(a,2),s=c[0],o=c[1],l=Object(r.useState)(1),j=Object(d.a)(l,2),u=j[0],p=j[1],h=Object(r.useState)(!1),y=Object(d.a)(h,2),m=y[0],g=y[1],k="abcdefghijklmnopqrstuvwxyz".split(""),z="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),v=[],_=[],S=function(n,e,t,i){var a="szyfrowanie"===i?(n+t)%26:(n-t)%26<0?26+(n-t)%26:(n-t)%26,c="szyfrowanie"===i?v:_;"small"===e?c.push(k[a]):"big"===e&&c.push(z[a])},C=function(n){o(n),i(""),g(!1)};!function(n,e,t){n.forEach((function(n){-1!==k.indexOf(n)?S(k.indexOf(n),"small",e,t):-1!==z.indexOf(n)?S(z.indexOf(n),"big",e,t):("szyfrowanie"===t?v:_).push(n)}))}(t.split(""),u,s);var N="szyfrowanie"===s?v.join(""):_.join(""),F="szyfrowanie"===s?"Zaszyfrowana":"Zdeszyfrowana";return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{children:Object(x.jsx)("h1",{children:"Szyfruj jak cezar"})}),Object(x.jsxs)(w,{children:[Object(x.jsxs)("div",{className:"block_1",children:[Object(x.jsx)("h3",{children:"Rodzaj operacji:"}),Object(x.jsx)("button",{onClick:function(){return C("szyfrowanie")},className:"szyfrowanie"===s?"checked":null,children:"Szyfrowanie"}),Object(x.jsx)("button",{onClick:function(){return C("deszyfrowanie")},className:"deszyfrowanie"===s?"checked":null,children:"Deszyfrowanie"}),Object(x.jsx)("h3",{children:"Tre\u015b\u0107 wiadomo\u015bci:"}),Object(x.jsx)("textarea",{placeholder:"Wiadomo\u015b\u0107",value:t,onChange:function(n){return i(n.target.value)}}),Object(x.jsxs)("h3",{children:["Wyb\xf3r klucza: ",u]}),Object(x.jsx)(b.a,{maxValue:26,minValue:1,value:u,onChange:function(n){return p(n)}})]}),Object(x.jsxs)("div",{className:"block_2",children:[Object(x.jsxs)("h3",{children:[F," tre\u015b\u0107:"]}),N,Object(x.jsxs)("button",{onClick:function(){return g((function(n){return!n}))},children:[m?"Ukryj":"Poka\u017c"," wizualizacj\u0119"]}),Object(x.jsx)("div",{className:"visualization",children:m?Object(x.jsx)(f,{encrypted:N,text:t}):null})]})]})]})};l.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.aaf53d1b.chunk.js.map