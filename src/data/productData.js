import uuid from 'uuid/v4'

const items = [
  {
    sys: { id: uuid() },
    fields: {
      title: "google pixel - black",
      price: 10,
      company: "google",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: true,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-0.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "samsung s7 - white",
      price: 20,
      company: "samsung",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-1.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "htc 10 - black",
      price: 30,
      company: "htc",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-2.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "htc 10 - white",
      price: 15,
      company: "htc",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-3.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "samsung s7 - black",
      price: 45,
      company: "google",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-4.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "samsung galaxy A8 - black",
      price: 55,
      company: "samsung",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-5.png" } } }
    }
  },

  {
    sys: { id: uuid() },

    fields: {
      title: "fuji X100s photo camera",
      price: 90,
      company: "fuji",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: true,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-6.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "canon Eos 30 photo camera",
      price: 120,
      company: "canon",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-7.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "nikon D 3100 photo camera",
      price: 55,
      company: "nikon",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-8.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "acer desktop computer",
      price: 35,
      company: "acer",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: true,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-9.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "hp desktop computer",
      price: 75,
      company: "hp",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-10.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "lenovo desktop computer",
      price: 110,
      company: "lenovo",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-11.png" } } }
    }
  },
  {
    sys: { id: uuid() },

    fields: {
      title: "dell desktop computer",
      price: 28,
      company: "dell",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      inCart: false,
      count: 0,
      image: { fields: { file: { url: "product-images/img/product-12.png" } } }
    }
  }
];

export { items } 