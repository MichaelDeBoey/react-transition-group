(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return p});var n=t(4),i=t.n(n),r=t(0),s=t.n(r),l=t(313),o=t(149),c={location:i.a.object.isRequired,data:i.a.shape({site:i.a.shape({siteMetadata:i.a.shape({componentPages:i.a.arrayOf(i.a.shape({path:i.a.string.isRequired,displayName:i.a.string.isRequired})).isRequired}).isRequired}).isRequired}).isRequired},u=function(e){var a=e.data,t=e.location;return s.a.createElement(o.a,{data:a,location:t},s.a.createElement(l.a,null,s.a.createElement("h1",null,"Testing Components with Transitions"),s.a.createElement("p",null,"In some situations, like visual snapshot testing, it's helpful to disable transitions so they don't complicate the test, or introduce abitrary waits. To make this easier ",s.a.createElement("code",null,"react-transition-group")," ","exposes a way to globally toggle transitions. When set,"," ",s.a.createElement("strong",null,"all")," transitions, when toggled, will immediately switch to their entered or exited states as appropriate."),s.a.createElement("pre",{className:"language-js"},s.a.createElement("code",null,"\nimport { config } from 'react-transition-group\n\nconfig.disabled = true\n              ".trim())),s.a.createElement("blockquote",null,s.a.createElement("p",null,s.a.createElement("b",null,"Note"),": This ",s.a.createElement("strong",null,"does not")," automatically disable animations. It only disabled waits in ",s.a.createElement("code",null,"Transition"),". You may also have to disable animation as appropriate for the library. example:"," ",s.a.createElement("a",{href:"http://velocityjs.org/#mock"},"Mocking in Velocity.js")))))};u.propTypes=c,a.default=u;var p="4242924096"},142:function(e,a,t){var n;e.exports=(n=t(150))&&n.default||n},148:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(4),s=t.n(r),l=t(28),o=t.n(l);t.d(a,"a",function(){return o.a});t(142),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},149:function(e,a,t){"use strict";var n=t(148),i=t(4),r=t.n(i),s=t(0),l=t.n(s),o=t(161),c=t.n(o),u=t(315),p=t(314),m=(t(162),t(163),{data:r.a.shape({site:r.a.shape({siteMetadata:r.a.shape({componentPages:r.a.arrayOf(r.a.shape({path:r.a.string.isRequired,displayName:r.a.string.isRequired})).isRequired}).isRequired}).isRequired}).isRequired,location:r.a.shape({pathname:r.a.string.isRequired}).isRequired}),d=function(e){var a=e.data,t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("title",null,"React Transition Group")),l.a.createElement(u.a,{fixed:"top",bg:"dark",variant:"dark",expand:"md",collapseOnSelect:!0},l.a.createElement(u.a.Brand,{as:n.a,to:"/"},"React Transition Group"),l.a.createElement(u.a.Toggle,null),l.a.createElement(u.a.Collapse,null,l.a.createElement(p.a,{className:"mr-auto"},a.site.siteMetadata.componentPages.map(function(e){var a=e.path,t=e.displayName;return l.a.createElement(p.a.Link,{key:a,as:n.a,to:a,activeClassName:"active"},t)})),l.a.createElement(p.a,null,l.a.createElement(p.a.Link,{as:n.a,to:"/with-react-router",activeClassName:"active"},"With React Router"),l.a.createElement(p.a.Link,{as:n.a,to:"/testing",activeClassName:"active"},"Testing")))),l.a.createElement("div",{style:{paddingTop:"5rem"}},t))};d.propTypes=m,a.a=d},150:function(e,a,t){"use strict";t.r(a);t(29);var n=t(0),i=t.n(n),r=t(4),s=t.n(r),l=t(48),o=t(2),c=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=c}}]);
//# sourceMappingURL=component---src-pages-testing-js-609b35464b7a031ae41b.js.map