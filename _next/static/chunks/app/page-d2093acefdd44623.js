(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    1816: function (e, s, a) {
      Promise.resolve().then(a.bind(a, 7136)),
        Promise.resolve().then(a.bind(a, 8623));
    },
    7136: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return d;
          },
        });
      var t = a(7437),
        i = a(703);
      a(1837), a(6368), a(4031);
      var r = a(9082),
        l = {
          src: "/_next/static/media/Twitter.82b72dab.svg",
          height: 41,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        n = {
          src: "/_next/static/media/Telegram.8cd321bf.svg",
          height: 41,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/Discord.3580f93f.svg",
          height: 41,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = {
          src: "/_next/static/media/linkedin.5e5269f9.svg",
          height: 41,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = () =>
          (0, t.jsx)("section", {
            className: "footer",
            children: (0, t.jsx)("div", {
              className: "w-layout-blockcontainer container w-container",
              children: (0, t.jsxs)("div", {
                className: "footer-content",
                children: [
                  (0, t.jsx)("a", {
                    id: "w-node-_38d5a12c-be31-5b7f-d17d-03204349c200-a61ff4da",
                    href: "#",
                    className: "logo-footer-link w-inline-block",
                    children: (0, t.jsx)(i.default, {
                      src: r.Z,
                      alt: "Naoris Logo",
                      width: 99.22,
                      height: 30,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    id: "w-node-_9818f9eb-a436-6833-8453-4e42fe7732c8-a61ff4da",
                    children: [
                      (0, t.jsx)("div", {
                        className: "copyright-text",
                        children:
                          "\xa9 2024 Naoris Protocol. All rights reserved.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "social-links",
                    children: [
                      (0, t.jsx)("h3", {
                        className: "footer-links-heading",
                        children: "Follow Us",
                      }),
                      (0, t.jsxs)("div", {
                        className: "social-links-block",
                        children: [
                          (0, t.jsx)("a", {
                            href: "https://x.com/NaorisxAI",
                            target: "_blank",
                            className: "social-link w-inline-block",
                            children: (0, t.jsx)(i.default, {
                              src: l,
                              alt: "",
                              width: 40,
                              height: 25,
                            }),
                          }),
                          (0, t.jsx)("a", {
                            href: "https://t.me/NaorisxAI",
                            target: "_blank",
                            className: "social-link w-inline-block",
                            children: (0, t.jsx)(i.default, {
                              src: n,
                              alt: "",
                              width: 40,
                              height: 25,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
    },
    8623: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return d;
          },
        });
      var t = a(7437);
      a(1837), a(6368);
      var i = a(9082),
        r = a(703),
        l = a(2265);
      a(7908), a(9194);
      var n = a(9357);
      let c = (e) => {
        let { onSubmitted: s } = e,
          [a, i] = (0, l.useState)("");
        return (0, t.jsx)("div", {
          children: (0, t.jsx)("div", {
            children: (0, t.jsx)("div", {
              className: "form-block w-form",
              children: (0, t.jsxs)("form", {
                onSubmit: (e) => {
                  e.preventDefault(), s({ EMAIL: a });
                },
                className: "form",
                children: [
                  (0, t.jsx)("input", {
                    type: "email",
                    value: a,
                    onChange: (e) => i(e.target.value),
                    placeholder: "E-mail address",
                    className: "required email text-field w-input",
                    required: !0,
                  }),
                  (0, t.jsx)("input", {
                    type: "submit",
                    className: "button primary-button-2 w-button",
                    name: "subscribe",
                    value: "Sign Up",
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var o = () =>
          (0, t.jsx)(n.Z, {
            url: "https://naoris.us14.list-manage.com/subscribe/post?u=b5e102c918e589250d7eb61fd&id=ddb8ca4849&f_id=00c7b6e5f0",
            render: (e) => {
              let { subscribe: s, status: a, message: i } = e;
              return (0, t.jsxs)("div", {
                className: "",
                children: [
                  (0, t.jsx)(c, { onSubmitted: (e) => s(e) }),
                  "sending" === a &&
                    (0, t.jsx)("div", {
                      className: "status-message sending",
                      children: "Sending...",
                    }),
                  "error" === a &&
                    (0, t.jsx)("div", {
                      className: "status-message error",
                      dangerouslySetInnerHTML: { __html: i },
                    }),
                  "success" === a &&
                    (0, t.jsx)("div", {
                      className: "status-message success",
                      children: "Subscribed!",
                    }),
                  (0, t.jsx)("style", {
                    jsx: "true",
                    children:
                      "\n          .status-message {\n            margin-top: 10px;\n            font-size: 16px;\n          }\n          .sending {\n            color: blue;\n          }\n          .error {\n            color: red;\n          }\n          .success {\n            color: green;\n          }\n        ",
                  }),
                ],
              });
            },
          }),
        d = () => {
          let [e, s] = (0, l.useState)(""),
            [a, n] = (0, l.useState)("");
          return (
            (0, l.useEffect)(() => {}, []),
            (0, t.jsxs)("div", {
              className: "body",
              children: [
                (0, t.jsx)("div", {
                  className: "navbar w-nav",
                  "data-animation": "default",
                  "data-collapse": "medium",
                  "data-duration": "400",
                  "data-easing": "ease",
                  "data-easing2": "ease",
                  role: "banner",
                  children: (0, t.jsx)("div", {
                    className: "container w-container",
                    children: (0, t.jsx)("div", {
                      className: "menu-content",
                      children: (0, t.jsx)("a", {
                        href: "#",
                        className: "brand w-nav-brand",
                        children: (0, t.jsx)(r.default, {
                          className: "brand-image",
                          src: i.Z,
                          alt: "logo",
                        }),
                      }),
                    }),
                  }),
                }),
                (0, t.jsx)("section", {
                  className: "hero",
                  children: (0, t.jsx)("div", {
                    className: "w-layout-blockcontainer container w-container",
                    children: (0, t.jsx)("div", {
                      className: "hero-content",
                      children: (0, t.jsxs)("div", {
                        className: "hero-text-image",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "hero-text-block",
                            children: [
                              (0, t.jsx)("div", {
                                className: "hero-heading-block",
                                children: (0, t.jsxs)("h2", {
                                  className: "headline-2-light-left",
                                  children: [
                                    "Sign Up for our first",
                                    " ",
                                    (0, t.jsx)("strong", {
                                      children: "Testnet",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("h3", {
                                className: "subtitle-2-neutral-left-2",
                                children: "Earn As You Secure",
                              }),
                              (0, t.jsx)("p", {
                                className: "body-2-light-left",
                                children:
                                  "Turn your devices into cyber-trusted security nodes in two clicks without impacting your processing power.",
                              }),
                              (0, t.jsxs)("div", {
                                className: "form-block w-form",
                                children: [
                                  (0, t.jsx)(o, {}),
                                  (0, t.jsx)("div", {
                                    className: "success-message w-form-done",
                                    children: (0, t.jsx)("div", {
                                      className:
                                        "border-block-paddingless-gradient",
                                      children: (0, t.jsx)("div", {
                                        className: "success-message-text-block",
                                        children: (0, t.jsx)("div", {
                                          className: "success-message-text",
                                          children:
                                            "Thank you! Your submission has been received!",
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "error-message w-form-fail",
                                    children: (0, t.jsx)("div", {
                                      className:
                                        "border-block-paddingless-gradient",
                                      children: (0, t.jsx)("div", {
                                        className: "error-message-text-block",
                                        children: (0, t.jsx)("div", {
                                          className: "error-message-text",
                                          children:
                                            "Oops! Something went wrong while submitting the form.",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            "data-poster-url":
                              "https://uploads-ssl.webflow.com/660549ce0fa78642b3526494/6605986fca447448abb30487_2207-site-planet-30fps-3,31bit-1920x1920-30s-1,97MB-poster-00001.jpg",
                            "data-video-urls":
                              "https://uploads-ssl.webflow.com/660549ce0fa78642b3526494/6605986fca447448abb30487_2207-site-planet-30fps-3,31bit-1920x1920-30s-1,97MB-transcode.mp4,https://uploads-ssl.webflow.com/660549ce0fa78642b3526494/6605986fca447448abb30487_2207-site-planet-30fps-3,31bit-1920x1920-30s-1,97MB-transcode.webm",
                            "data-autoplay": "true",
                            "data-loop": "true",
                            "data-wf-ignore": "true",
                            className:
                              "background-video w-background-video w-background-video-atom",
                            children: (0, t.jsxs)("video", {
                              id: "92034fb9-d70b-6c50-187a-a8d8a84e1558-video",
                              autoPlay: !0,
                              loop: !0,
                              style: {
                                backgroundImage:
                                  'url("https://uploads-ssl.webflow.com/660549ce0fa78642b3526494/6605986fca447448abb30487_2207-site-planet-30fps-3,31bit-1920x1920-30s-1,97MB-poster-00001.jpg")',
                              },
                              muted: !0,
                              playsInline: !0,
                              "data-wf-ignore": "true",
                              "data-object-fit": "cover",
                              children: [
                                (0, t.jsx)("source", {
                                  src: "https://uploads-ssl.webflow.com/660549ce0fa78642b3526494/6605986fca447448abb30487_2207-site-planet-30fps-3,31bit-1920x1920-30s-1,97MB-transcode.mp4",
                                  "data-wf-ignore": "true",
                                }),
                                (0, t.jsx)("source", {
                                  src: "https://uploads-ssl.webflow.com/660549ce0fa78642b3526494/6605986fca447448abb30487_2207-site-planet-30fps-3,31bit-1920x1920-30s-1,97MB-transcode.webm",
                                  "data-wf-ignore": "true",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        };
    },
    4031: function () {},
    1837: function () {},
    6368: function () {},
    9082: function (e, s) {
      "use strict";
      s.Z = {
        src: "/_next/static/media/Logo-Naoris.d6925f0a.svg",
        height: 52,
        width: 172,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  function (e) {
    e.O(0, [542, 549, 971, 69, 744], function () {
      return e((e.s = 1816));
    }),
      (_N_E = e.O());
  },
]);
