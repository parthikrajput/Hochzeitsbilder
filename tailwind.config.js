/** @type {import('tailwindcss').Config} */

const color = {
  transparent: "transparent",
  current: "currentColor",
  primary: {
    DEFAULT: "#143C5D",
    100: "#133C5D",
    200: "#3E3E59CC",
    300: "#133C5D33",
  },
  green: {
    DEFAULT: "#8DA854",
  },
  white: {
    DEFAULT: "#FFFFFF",
    light_op: "#FFFFFFB2",
    200: "#E5E5E5",
  },
  black: {
    DEFAULT: "#000000",
    100: "#111113",
  },
  red: {
    DEFAULT: "#C44F4F",
  },
  orange: {
    DEFAULT: "#FAB956",
  },
  gray: {
    DEFAULT: "#7E7C8F",
    100: "#E4E4E7",
    200: "#444444",
    300: "#6C757D",
  },
};

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        xsm: "450px",
        sm: "640px",
        md: "768px",
        xmd: "860px",
        xlg: "991px",
        lg: "1050px",
        xl: "1280px",
        "2xl": "1360px",
      },
      colors: {
        ...color,
      },
      fontFamily: {
        sans: ["Fira Sans"],
      },
      backgroundImage: {
        hero_banner: "url('/src/img/Hero-bg.png')",
        "true-icon":
          "url('data:image/svg+xml,%3Csvg width=%2218%22 height=%2215%22 viewBox=%220 0 18 15%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M15.9922 0.78125C16.1875 0.585938 16.5 0.585938 16.6562 0.78125L17.7891 1.875C17.9453 2.07031 17.9453 2.38281 17.7891 2.53906L6.07031 14.2578C5.875 14.4531 5.60156 14.4531 5.40625 14.2578L0.171875 9.0625C0.015625 8.86719 0.015625 8.55469 0.171875 8.39844L1.30469 7.26562C1.46094 7.10938 1.77344 7.10938 1.96875 7.26562L5.71875 11.0547L15.9922 0.78125Z%22 fill=%22%23133C5D%22/%3E%3C/svg%3E')",
        feat_icon:
          "url('data:image/svg+xml,%3Csvg width=%2241%22 height=%2240%22 viewBox=%220 0 41 40%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg clip-path=%22url(%23clip0_2018_838)%22%3E%3Cpath opacity=%220.5%22 d=%22M0.5 36V0H36.5L0.5 36Z%22 fill=%22%23E7D5C5%22/%3E%3Cpath d=%22M31.125 21.75C32.1406 21.75 33 22.6094 33 23.625V28.625C33 29.6797 32.1406 30.5 31.125 30.5H12.375C11.3203 30.5 10.5 29.6797 10.5 28.625V23.625C10.5 22.6094 11.3203 21.75 12.375 21.75H18V20.5H15.5C13.8203 20.5 12.9609 18.5078 14.1719 17.3359L20.4219 11.0859C21.125 10.3438 22.3359 10.3438 23.0391 11.0859L29.2891 17.3359C30.5 18.5078 29.6406 20.5 28 20.5H25.5V21.75H31.125ZM15.5 18.625H19.875V24.875H23.625V18.625H28L21.75 12.375L15.5 18.625ZM31.125 28.625V23.625H25.5V24.875C25.5 25.9297 24.6406 26.75 23.625 26.75H19.875C18.8203 26.75 18 25.9297 18 24.875V23.625H12.375V28.625H31.125ZM29.5625 26.125C29.5625 26.6719 29.1328 27.0625 28.625 27.0625C28.0781 27.0625 27.6875 26.6719 27.6875 26.125C27.6875 25.6172 28.0781 25.1875 28.625 25.1875C29.1328 25.1875 29.5625 25.6172 29.5625 26.125Z%22 fill=%22%23133C5D%22/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=%22clip0_2018_838%22%3E%3Crect width=%2240%22 height=%2240%22 fill=%22white%22 transform=%22translate(0.5)%22/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E')",
      },
      boxShadow: {
        "custom-shadow": "0px 20px 80px -30px #0000001A",
      },
      fontSize: {
        h1: [
          " clamp(2.5rem, 1.7857rem + 3.5714vw, 5rem)",
          {
            lineHeight: " clamp(2.625rem, 1.9107rem + 3.5714vw, 5.125rem)",
            fontWeight: "600",
          },
        ],
        h2: [
          "clamp(2.25rem, 1.8214rem + 2.1429vw, 3.75rem)",
          {
            lineHeight: " clamp(2.75rem, 2.2143rem + 2.6786vw, 4.625rem)",
            fontWeight: "600",
          },
        ],
        h3: [
          " clamp(2rem, 1.7143rem + 1.4286vw, 3rem)",
          {
            lineHeight: " clamp(3.25rem, 3.0179rem + 1.1607vw, 4.0625rem)",
            fontWeight: "600",
          },
        ],
        h4: [
          "clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)",
          {
            lineHeight: "clamp(2.125rem, 1.9464rem + 0.8929vw, 2.75rem)",
            fontWeight: "600",
          },
        ],
        h5: [
          "clamp(1.25rem, 1.1786rem + 0.3571vw, 1.5rem)",
          {
            lineHeight: "clamp(1.375rem, 1.1964rem + 0.8929vw, 2rem)",
            fontWeight: "600",
          }, //24
        ],
        h6: [
          "clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)",
          {
            lineHeight: "clamp(1.5rem, 1.3214rem + 0.8929vw, 2.125rem)",
            fontWeight: "600",
          }, //22
        ],
        a: [
          "clamp(1.125rem, 1.125rem + 0vw, 1.125rem)",
          {
            lineHeight: " clamp(1.5rem, 1.3929rem + 0.5357vw, 1.875rem) ",
            fontWeight: "400",
          }, //18
        ],
        text: [
          " clamp(1.125rem, 1.0893rem + 0.1786vw, 1.25rem)",
          {
            lineHeight: "clamp(1.625rem, 1.5536rem + 0.3571vw, 1.875rem)",
            fontWeight: "400",
          },
        ], //20
        p_1: [
          "clamp(0.875rem, 0.875rem + 0vw, 0.875rem)",
          {
            lineHeight: "clamp(1.5rem, 1.3929rem + 0.5357vw, 1.875rem)",
            fontWeight: "400",
          },
        ], //14
        p: [
          "clamp(1rem, 1rem + 0vw, 1rem)",
          {
            lineHeight: "clamp(1.375rem, 1.3036rem + 0.3571vw, 1.625rem)",
            fontWeight: "400",
          },
        ], // 16
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1720px",
        },
      },
    },
  },
  plugins: [],
};
