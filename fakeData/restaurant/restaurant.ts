import logotype from "public/assets/nextsites_icon.svg";
import menu from "./menu";
import services from "./services";
import testimonials from "./testimonials";

const restaurant = {
  name: "Restaurant",
  description: "Restaurant",
  keywords: "Restaurant, Italian, food, premium",
  logo: logotype,
  contact: {
    phone: ["123-456-7890", "098-765-4321"],
    email: ["hello@example.com"],
    address: ["123 Main St, Anytown, CA 12345"],
    hours: ["Mon-Fri: 9am-5pm", "Sat: 10am-2pm"],
  },
  header: {
    navigation: [],
    cta: {
      text: "Order Now",
      url: "/order",
    },
  },
  footer: {
    social: [],
    openingHours: [],
    contact: [],
    legal: [],
    siteMap: [],
  },
  pages: {
    home: {
      title: "Restaurant",
      description: "Restaurant",
      keywords: "Restaurant, Italian, food, premium",
      hero: {
        title: "Restaurant",
        subtitle: "Restaurant",
        image: "https://source.unsplash.com/random",
      },
      introSection: {
        title: "Restaurant",
        subtitle: "Restaurant",
        image: "https://source.unsplash.com/random",
        button: {
          text: "Learn more",
          link: "/about-us",
        },
      },
      services,
      menu: {
        items: menu,
        button: {
          text: "View menu",
          link: "/menu",
        },
      },
      bookingSection: {
        title: "Restaurant",
        subtitle: "Restaurant",
        image: "https://source.unsplash.com/random",
        button: {
          text: "Book a table",
          link: "/book-a-table",
        },
      },
      testimonials: {
        title: "Restaurant",
        subtitle: "Restaurant",
        items: testimonials,
      },
    },
  },
};

export default restaurant;
