const projects = [
  {
    id: "waad",
    title: "Meter Sense",
    description: "Meter Consumption Monitor And Charger",
    image: import.meta.env.BASE_URL + "/img/metersense.PNG",
    details: [
      "I developed MeterSense, a project aimed at monitoring and managing consumption data from water and electric meters. The application connects to the hardware using Bluetooth Low Energy (BLE) and stores data locally, providing users with real-time insights into their consumption patterns. My goal was to create a system that could both monitor usage and allow users to charge their meters through the app.",
      "One of the main technical challenges I faced was with the charging functionality: while the meters could be charged through the app, the charged amount wasn’t being properly saved to the database. I tackled this by debugging the data flow between the BLE communication layer and the local storage system, eventually ensuring that every charging event was accurately recorded and synchronized.",
      "The project also required designing an intuitive interface for tracking consumption over time, allowing users to see trends and make informed decisions about their utility usage. By combining BLE integration, local storage, and real-time updates, I created a tool that made consumption monitoring both easy and reliable.",
      "Through MeterSense, I strengthened my skills in BLE communication, local database management, debugging complex hardware interactions, and user-focused design. It was particularly rewarding to solve the challenge of synchronizing charging data, as it reinforced my problem-solving skills in real-world IoT applications."
    ],
    links: [],
    video: null,
    // video: {
    //   poster: "/video/Days.png",
    //   src: "/video/Days.mp4",
    // },
    images: [
      // "Days-Review1.webp",
      // "Days-Review2.webp",
      // "Days-GreatOniOS.webp",
      // "Days-Store.webp",
      // "Days-Website.webp",
      // "Days-Events.webp",
      // "Days-Background.webp",
      // "Days-Camera.webp",
      // "Days-Event.webp",
      // "Days-Share.webp",
      // "Days-Widget.webp",
      // "Days-Screens.webp",
      // "Days-Upgrade.webp",
      // "Days-App-Of-The-Day.webp",
      // "Days-Apple-Event.webp",
    ],
  },
  {
    id: "azaan",
    title: "Azaan",
    description: "Prayer Time Manager",
    image: import.meta.env.BASE_URL + "/img/azaan.PNG",
    details: [
      "I developed Azaan, a mobile application designed to provide accurate prayer times while offering seamless integration with a hardware unit via Bluetooth Low Energy (BLE). My goal was to create an app that not only shows the correct prayer timings but also allows users to customize their hardware settings directly from their phones, making the experience highly personalized.",
      "To achieve this, I implemented BLE communication that lets the app connect with the hardware unit and adjust settings of the unit. I also integrated Firebase to manage user accounts and data, ensuring that every user has a secure, individualized experience. This allows users to store their preferences and synchronize them across devices effortlessly.",
      "One of the key challenges I tackled was creating a robust BLE connection that could handle multiple commands while maintaining reliability. I also focused on delivering a clean and intuitive user interface, so users could easily navigate their prayer schedules and device settings without confusion.",
      "Through this project, I gained hands-on experience in BLE integration, Firebase backend management, and mobile UI/UX design. It was rewarding to see how the app empowered users with control over both their software and hardware environments while keeping everything simple and accessible."
    ],
    links: [],
    video: null,
    images: [],
  },
  {
    id: "megasmart",
    title: "GlowGrid",
    description: "Smart Lighting App",
    image: import.meta.env.BASE_URL + "/img/glowgrid.PNG",
    details: [
      "I developed GlowGrid, an app that allows me and my family to control light switches locally over the same Wi-Fi network. The application provides a rich interface where users can turn lights on and off, select colors from an RGB circle, and share control with others through a simple QR code system. This project became one of my favorites because of the seamless integration between real-time control and user collaboration.",
      "The app communicates with the light switches using UDP, enabling instant response without relying on external servers. I designed the system so that all devices on the same network could interact directly, ensuring low latency and reliability. Sharing control with family members through QR codes was another highlight, as it allowed multiple users to manage the lighting setup effortlessly.",
      "One of the main challenges was ensuring smooth color transitions and accurate synchronization across multiple devices. I ensured each device reflected the correct state of every light switch by updating the actions based on received responses, maintaining accurate synchronization across all devices.",
      "Through GlowGrid, I gained extensive experience in local network programming, UDP communication, real-time control systems, and user-centric design. It was exciting to see how a simple interface combined with reliable networking could create an engaging and interactive experience for the whole family."
    ],
    links: [
      {
        label: "GlowGrid on The Google Play",
        url: "https://play.google.com/store/apps/details?id=eg.eoip.mega.glow_grid&pcampaignid=web_share",
      },
    ],
    video: null,
    images: [],
  },
  {
    id: "rtu",
    title: "Transformer",
    description: "Transformer Monitor",
    image: import.meta.env.BASE_URL + "/img/transformer.PNG",
    details: [
      "I built Transformer, an app designed to monitor transformers in real-time and provide actionable alerts to users. The application connects to a ThingsBoard dashboard using MQTT and REST APIs, allowing it to receive live data from transformers and display it both in the app and on the web dashboard. Additionally, I integrated Firebase messaging to send immediate notifications whenever an alert occurs.",
      "One of the core features is real-time historical tracking, which allows users to review data from the past hour and detect trends or anomalies. This required careful handling of data streaming from ThingsBoard and synchronizing it with the mobile app, ensuring that the information was always accurate and up-to-date.",
      "The biggest challenge was managing multiple data streams simultaneously while maintaining real-time performance and reliability. I designed the architecture to handle MQTT messages efficiently, update the dashboard, and push notifications without delay. This required a deep understanding of both backend integration and mobile frontend optimization.",
      "Through Transformer, I enhanced my skills in IoT data management, MQTT protocols, REST APIs, Firebase notifications, and real-time mobile application development. The project was particularly rewarding because it allowed me to bridge complex backend data with an intuitive user interface, making critical information accessible instantly."
    ],
    links: [],
    video: null,
    images: [],
  },
  {
    id: "smartHub",
    title: "SmartHub",
    description: "Charger Tracker",
    image: import.meta.env.BASE_URL + "/img/smarthub.PNG",
    details: [
      "I am currently developing SmartHub, an app designed to monitor and manage portable chargers via BLE. The goal is to identify if any devices are connected, determine which ports are in use, and display real-time status to the user. This project aims to create a smart interface for energy management and monitoring.",
      "The application communicates directly with the charger hardware using BLE, retrieving connection and usage data in real time. This allows users to see which devices are actively drawing power and manage their connections efficiently. I am also designing the system to handle multiple devices simultaneously while keeping the interface responsive and user-friendly.",
      "One of the ongoing challenges is ensuring that we can control the charging from the app, while preparing the app for future scalability with multiple chargers and advanced analytics. I am also planning to integrate local storage and cloud synchronization so users can track their usage history over time.",
      "Through SmartHub, I am deepening my expertise in BLE communication, real-time device monitoring, mobile UI/UX design, and IoT integration, laying the foundation for a practical and scalable energy management solution."
    ],
    links: [],
    video: null,
    images: [],
  },
]

export default projects
