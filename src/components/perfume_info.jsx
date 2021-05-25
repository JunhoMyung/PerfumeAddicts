import Perfume1 from "../perfume_pictures/350x250/Perfume1.png"
import Perfume2 from "../perfume_pictures/350x250/Perfume2.png"
import Perfume3 from "../perfume_pictures/350x250/Perfume3.png"
import Perfume4 from "../perfume_pictures/350x250/Perfume4.png"
import Perfume5 from "../perfume_pictures/350x250/Perfume5.png"
import Perfume6 from "../perfume_pictures/350x250/Perfume6.png"
import Perfume7 from "../perfume_pictures/350x250/Perfume7.png"
import Perfume8 from "../perfume_pictures/350x250/Perfume8.png"
import Perfume9 from "../perfume_pictures/350x250/Perfume9.png"
import Perfume10 from "../perfume_pictures/350x250/Perfume10.png"
import Perfume11 from "../perfume_pictures/350x250/Perfume11.png"
import Perfume12 from "../perfume_pictures/350x250/Perfume12.png"
import Perfume13 from "../perfume_pictures/350x250/Perfume13.png"
import Perfume14 from "../perfume_pictures/350x250/Perfume14.png"
import Perfume15 from "../perfume_pictures/350x250/Perfume15.png"
import Perfume16 from "../perfume_pictures/350x250/Perfume16.png"
import Perfume17 from "../perfume_pictures/350x250/Perfume17.png"
import Perfume18 from "../perfume_pictures/350x250/Perfume18.png"
import Perfume19 from "../perfume_pictures/350x250/Perfume19.png"
import Perfume20 from "../perfume_pictures/350x250/Perfume20.png"
import Perfume21 from "../perfume_pictures/350x250/Perfume21.png"
import Perfume22 from "../perfume_pictures/350x250/Perfume22.png"
import Perfume23 from "../perfume_pictures/350x250/Perfume23.png"
import Perfume24 from "../perfume_pictures/350x250/Perfume24.png"
import Perfume25 from "../perfume_pictures/350x250/Perfume25.png"
import Perfume26 from "../perfume_pictures/350x250/Perfume26.png"
import Perfume27 from "../perfume_pictures/350x250/Perfume27.png"
import Perfume28 from "../perfume_pictures/350x250/Perfume28.png"
import Perfume29 from "../perfume_pictures/350x250/Perfume29.png"


const perfume_info = [
    {
      "name": "CK One",
      "pic_name": <img src={Perfume1} alt = "" />,
      "color": "red",
      "brand": "Calvin Klein",
      "price": [27.00, 22.00],
      "volume": [100, 50],
      "radar_chart": {citrus: 0.9, spicy: 0.3, woody: 0.7, fruity: 0.3, flowery: 0.5},
      "ingredient": ["citrus", "green", "drywood", "mossywood", "powdery"]
    },
    {
      "name": "English Pear & Freesia",
      "pic_name": <img src={Perfume2} alt = "" />,
      "color": "red",
      "brand": "Jo Malone London",
      "price": [53.00, 29.00],
      "volume": [250, 100],
      "radar_chart": {"citrus": 0.0, "spicy": 0.1, "woody": 0.4, "fruity": 0.9, "flowery": 0.8},
      "ingredient": ["floral", "fruity", "water", "musk", "aromatic"]
    },
    {
      "name": "Do Son",
      "pic_name": <img src={Perfume3} alt = "" />,
      "color": "red",
      "brand": "Diptyque",
      "price": [131.00, 94.00],
      "volume": [100, 50],
      "radar_chart": {"citrus": 0.5, "spicy": 0.1, "woody": 0.2, "fruity": 0.3, "flowery": 0.9},
      "ingredient": ["floral", "citrus", "musk"]
    },
    {
      "name": "Un Jardin En Mediterranee",
      "pic_name": <img src={Perfume4} alt = "" />,
      "color": "red",
      "brand": "Hermes",
      "price": [105.00, 85.50, 60.00],
      "volume": [100, 50, 30],
      "radar_chart": {"citrus": 0.8, "spicy": 0.2, "woody": 0.7, "fruity": 0.3, "flowery": 0.5},
      "ingredient": ["citrus", "aromatic", "floral", "mossywood"]
    },
    {
      "name": "Voyage d'Hermes",
      "pic_name": <img src={Perfume5} alt = "" />,
      "color": "red",
      "brand": "Hermes",
      "price": [126.00, 84.00],
      "volume": [100, 35],
      "radar_chart": {"citrus": 0.6, "spicy": 0.8, "woody": 0.6, "fruity": 0.1, "flowery": 0.1},
      "ingredient": ["softspicy", "citrus", "green", "aromatic", "drywood"]
    },
    {
        "name": "La Vie Est Belle",
        "pic_name": <img src={Perfume6} alt = "" />,
        "color": "red",
        "brand": "Lancome",
        "price": [133.00, 100.00],
        "volume": [100, 50],
        "radar_chart": {"citrus": 0.1, "spicy": 0.5, "woody": 0.2, "fruity": 0.5, "flowery": 0.8},
        "ingredient": ["fruity", "aromatic", "softspicy"]
      },
      {
        "name": "Cherry Blossom",
        "pic_name": <img src={Perfume7} alt = "" />,
        "color": "red",
        "brand": "L'Occitane en Provence",
        "price": [50.00, 65.00],
        "volume": [75, 100],
        "radar_chart": {"citrus": 0.1, "spicy": 0.2, "woody": 0.4, "fruity": 0.7, "flowery": 0.9},
        "ingredient": ["floral", "fruity", "musk"]
      },
      {
        "name": "A La Rose ",
        "pic_name": <img src={Perfume8} alt = "" />,
        "color": "red",
        "brand": "Maison Francis Kurkdjian",
        "price": [164.00, 104.00],
        "volume": [70, 35],
        "radar_chart": {"citrus": 0.7, "spicy": 0.1, "woody": 0.5, "fruity": 0.3, "flowery": 0.9},
        "ingredient": ["citrus", "musk", "drywood", "floral"]
      },
      {
        "name": "Modern Princess",
        "pic_name": <img src={Perfume9} alt = "" />,
        "color": "red",
        "brand": "Lanvin",
        "price": [30.00, 55.00],
        "volume": [50, 100],
        "radar_chart": {"citrus": 0.3, "spicy": 0.4, "woody": 0.1, "fruity": 0.9, "flowery": 0.6},
        "ingredient": ["fruity", "aromatic", "floral"]
      },
      {
        "name": "Baccarat Rouge",
        "pic_name": <img src={Perfume10} alt = "" />,
        "color": "red",
        "brand": "Maison Francis Kurkdjian",
        "price": [78.00, 99.00],
        "volume": [70, 100],
        "radar_chart": {"citrus": 0.0, "spicy": 0.7, "woody": 0.9, "fruity": 0.4, "flowery": 0.4},
        "ingredient": ["drywood", "softspicy", "aromatic"]
      },
      {
        "name": "Alien",
        "pic_name": <img src={Perfume11} alt = "" />,
        "color": "red",
        "brand": "Mugler",
        "price": [21.00, 35.00],
        "volume": [30, 50],
        "radar_chart": {"citrus": 0.0, "spicy": 0.0, "woody": 0.6, "fruity": 0.7, "flowery": 0.9},
        "ingredient": ["floral", "powdery", "softspicy", "drywood"]
      },
      {
        "name": "Tobacco Vanille",
        "pic_name": <img src={Perfume12} alt = "" />,
        "color": "red",
        "brand": "Tom Ford",
        "price": [45.00, 80.00],
        "volume": [50, 100],
        "radar_chart": {"citrus": 0.0, "spicy": 0.6, "woody": 0.4, "fruity": 0.5, "flowery": 0.9},
        "ingredient": ["softspicy", "powdery", "drywood"]
      },
      {
        "name": "Aventus",
        "pic_name": <img src={Perfume13} alt = "" />,
        "color": "red",
        "brand": "Creed",
        "price": [26.00, 36.00, 50.00],
        "volume": [30, 75, 250],
        "radar_chart": {"citrus": 0.4, "spicy": 0.0, "woody": 0.6, "fruity": 0.9, "flowery": 0.5},
        "ingredient": ["drywood", "green", "musk", "citrus"]
      },
      {
        "name": "Coco Mademoiselle",
        "pic_name": <img src={Perfume14} alt = "" />,
        "color": "red",
        "brand": "Chanel",
        "price": [32.00, 50.00],
        "volume": [100, 250],
        "radar_chart": {"citrus": 0.9, "spicy": 0.5, "woody": 0.7, "fruity": 0.6, "flowery": 0.7},
        "ingredient": ["citrus", "drywood", "floral", "softspicy"]
      },
      {
        "name": "Black Opium",
        "pic_name": <img src={Perfume15} alt = "" />,
        "color": "red",
        "brand": "Yves Sain Laurent",
        "price": [40.00, 60.00, 75.00],
        "volume": [30, 50, 100],
        "radar_chart": {"citrus": 0.0, "spicy": 0.5, "woody": 0.5, "fruity": 0.4, "flowery": 0.8},
        "ingredient": ["floral", "powdery", "drywood", "fruity"]
      },
      {
          "name": "Black Orchid",
          "pic_name": <img src={Perfume16} alt = "" />,
          "color": "red",
          "brand": "Tom Ford",
          "price": [65.00, 75.00],
          "volume": [40, 50],
          "radar_chart": {"citrus": 0.0, "spicy": 0.9, "woody": 0.7, "fruity": 0.6, "flowery": 0.4},
          "ingredient": ["softspicy", "drywood", "floral"]
        },
        {
          "name": "La Nuit de I'Homme",
          "pic_name": <img src={Perfume17} alt = "" />,
          "color": "red",
          "brand": "Yves Sain Laurent",
          "price": [87.00, 100.00, 115.00],
          "volume": [40, 60, 100],
          "radar_chart": {"citrus": 0.5, "spicy": 0.8, "woody": 0.6, "fruity": 0.5, "flowery": 0.5},
          "ingredient": ["aromatic", "softspicy", "drywood", "citrus"]
        },
        {
          "name": "Rock Volume One",
          "pic_name": <img src={Perfume18} alt = "" />,
          "color": "red",
          "brand": "John Varvatos",
          "price": [27.00, 22.00],
          "volume": [100, 50],
          "radar_chart": {"citrus": 0.0, "spicy": 0.4, "woody":0.7 , "fruity": 0.0, "flowery": 0.5},
          "ingredient": ["musk", "sharpspicy"]
        },
        {
          "name": "Fahrenheit",
          "pic_name": <img src={Perfume19} alt = "" />,
          "color": "red",
          "brand": "Christian Dior",
          "price": [53.00, 29.00],
          "volume": [250, 100],
          "radar_chart": {"citrus": 0.0, "spicy": 0.5, "woody": 1.0, "fruity": 0.0, "flowery": 0.4},
          "ingredient": ["musk", "drywood"]
        },
        {
          "name": "Acqua di Giò Profumo",
          "pic_name": <img src={Perfume20} alt = "" />,
          "color": "red",
          "brand": "Giorgioa Armani",
          "price": [131.00, 94.00],
          "volume": [100, 50],
          "radar_chart": {"citrus": 0.4, "spicy": 0.7, "woody": 0.5, "fruity": 0.0, "flowery": 0.0},
          "ingredient": ["aromatic", "water"]
        },
        {
            "name": "Sailing Day",
            "pic_name": <img src={Perfume21} alt = "" />,
            "color": "red",
            "brand": "Maison Martin Margiela",
            "price": [30.00, 135.00],
            "volume": [10, 100],
            "radar_chart": {"citrus": 0.0, "spicy": 0.4, "woody": 0.7, "fruity": 0.2, "flowery": 0.3},
            "ingredient": ["mossywood", "water"]
          },
          {
            "name": "Snow Mint",
            "pic_name": <img src={Perfume22} alt = "" />,
            "color": "red",
            "brand": "Victoria's Secret",
            "price": [164.00, 104.00],
            "volume": [70, 35],
            "radar_chart": {"citrus": 0.0, "spicy": 0.6, "woody": 0.5, "fruity": 0.4, "flowery": 0.1},
            "ingredient": ["green", "aromatic"]
          },
          {
            "name": "Aqva Pour Homme Atlantiqve ",
            "pic_name": <img src={Perfume23} alt = "" />,
            "color": "red",
            "brand": "Bvlgari",
            "price": [45.00, 80.00],
            "volume": [50, 100],
            "radar_chart": {"citrus": 0.5, "spicy": 0.4, "woody": 0.6, "fruity": 0.0, "flowery": 0.0},
            "ingredient": ["aromatic", "water", "citrus"]
          },
          {
            "name": "Aqua Allegoria Herba Fresca",
            "pic_name": <img src={Perfume24} alt = "" />,
            "color": "red",
            "brand": "Guerlain",
            "price": [32.00, 50.00],
            "volume": [100, 250],
            "radar_chart": {"citrus": 0.7, "spicy": 0.3, "woody": 0.5, "fruity": 0.0, "flowery": 0.4},
            "ingredient": ["green", "citrus", "aromatic"]
          },
          {
            "name": "Poolside Breeze",
            "pic_name": <img src={Perfume25} alt = "" />,
            "color": "red",
            "brand": "Victoria's Secret",
            "price": [21.00, 35.00],
            "volume": [30, 50],
            "radar_chart": {"citrus": 0.0, "spicy": 0.0, "woody": 0.5, "fruity": 0.0, "flowery": 0.5},
            "ingredient": ["water", "floral"]
          },
          {
            "name": "Luna Rossa Carbon",
            "pic_name": <img src={Perfume26} alt = "" />,
            "color": "red",
            "brand": "Prada",
            "price": [126.00, 84.00],
            "volume": [100, 35],
            "radar_chart": {"citrus": 0.2, "spicy": 0.9, "woody": 0.1, "fruity": 0.0, "flowery": 0.7},
            "ingredient": ["sharpspicy", "aromatic"]
          },
          {
              "name": "Radish Vetiver ",
              "pic_name": <img src={Perfume27} alt = "" />,
              "color": "red",
              "brand": "Comme des Garcons",
              "price": [65.00, 75.00],
              "volume": [40, 50],
              "radar_chart": {"citrus": 0.0, "spicy": 0.2, "woody": 1.0, "fruity": 0.0, "flowery": 0.1},
              "ingredient": ["drywood", "green"]
            },
            {
              "name": "Dry Wood Ramon",
              "pic_name": <img src={Perfume28} alt = "" />,
              "color": "red",
              "brand": "Mogegal",
              "price": [164.00, 104.00],
              "volume": [70, 35],
              "radar_chart": {"citrus": 0.1, "spicy": 0.6, "woody": 0.9, "fruity": 0.0, "flowery": 0.0},
              "ingredient": ["drywood", "sharpspicy"]
            },
            {
              "name": "Honey Oud",
              "pic_name": <img src={Perfume29} alt = "" />,
              "color": "red",
              "brand": "Floris",
              "price": [45.00, 80.00],
              "volume": [50, 100],
              "radar_chart": {"citrus": 0.2, "spicy": 0.1, "woody": 0.1, "fruity": 0.8, "flowery": 0.2},
              "ingredient": ["powdery", "floral", "fruity"]
            }
]

export default perfume_info