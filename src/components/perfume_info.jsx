import { red } from "@material-ui/core/colors"

const perfume_info = [
    {
      "name": "BLEU DE CHANEL",
      "pic_name": "Perfume1",
      "color": "red",
      "brand": "Calvin Klein",
      "price": [27.00, 22.00],
      "volume": [100, 50],
      "radar_chart": {citrus: 0.9, spicy: 0.3, woody: 0.7, fruity: 0.3, flowery: 0.5},
      "ingredient": ["woody", "citrus", "floral", "aromatic"]
    },
    {
      "name": "English Pear & Freesia",
      "pic_name": "Perfume2",
      "color": "",
      "brand": "Jo Malone London",
      "price": [53.00, 29.00],
      "volume": [250, 100],
      "radar_chart": {"citrus": 0.0, "spicy": 0.1, "woody": 0.4, "fruity": 0.9, "flowery": 0.8},
      "ingredient": ["floral", "honey", "minty"]
    },
    {
      "name": "Do Son",
      "pic_name": "Perfume3",
      "color": "",
      "brand": "Diptyque",
      "price": [131.00, 94.00],
      "volume": [100, 50],
      "radar_chart": {"citrus": 0.5, "spicy": 0.1, "woody": 0.2, "fruity": 0.3, "flowery": 0.9},
      "ingredient": ["floral", "citrus", "musk"]
    },
    {
      "name": "Un Jardin En Mediterranee",
      "pic_name": "Perfume4",
      "color": "",
      "brand": "Hermes",
      "price": [105.00, 85.50, 60.00],
      "volume": [100, 50, 30],
      "radar_chart": {"citrus": 0.8, "spicy": 0.2, "woody": 0.7, "fruity": 0.3, "flowery": 0.5},
      "ingredient": ["citrus", "green", "floral", "woody"]
    },
    {
      "name": "Voyage d'Hermes",
      "pic_name": "Perfume5",
      "color": "",
      "brand": "Hermes",
      "price": [126.00, 84.00],
      "volume": [100, 35],
      "radar_chart": {"citrus": 0.6, "spicy": 0.8, "woody": 0.6, "fruity": 0.1, "flowery": 0.1},
      "ingredient": ["aromatic", "citrus", "musk", "woody"]
    },
    {
        "name": "La Vie Est Belle",
        "pic_name": "Perfume6",
        "color": "",
        "brand": "Lancome",
        "price": [133.00, 100.00],
        "volume": [100, 50],
        "radar_chart": {"citrus": 0.1, "spicy": 0.5, "woody": 0.2, "fruity": 0.5, "flowery": 0.8},
        "ingredient": ["floral", "minty", "powdery"]
      },
      {
        "name": "Cherry Blossom",
        "pic_name": "Perfume7",
        "color": "",
        "brand": "L'Occitane en Provence",
        "price": [50.00, 65.00],
        "volume": [75, 100],
        "radar_chart": {"citrus": 0.1, "spicy": 0.2, "woody": 0.4, "fruity": 0.7, "flowery": 0.9},
        "ingredient": ["floral", "musk"]
      },
      {
        "name": "A La Rose ",
        "pic_name": "Perfume8",
        "color": "",
        "brand": "Maison Francis Kurkdjian",
        "price": [164.00, 104.00],
        "volume": [70, 35],
        "radar_chart": {"citrus": 0.7, "spicy": 0.1, "woody": 0.5, "fruity": 0.3, "flowery": 0.9},
        "ingredient": ["citrus", "musk", "woody", "floral"]
      },
      {
        "name": "Modern Princess",
        "pic_name": "Perfume9",
        "color": "",
        "brand": "Lanvin",
        "price": [30.00, 55.00],
        "volume": [50, 100],
        "radar_chart": {"citrus": 0.3, "spicy": 0.4, "woody": 0.1, "fruity": 0.9, "flowery": 0.6},
        "ingredient": ["floral", "honey"]
      },
      {
        "name": "Baccarat Rouge",
        "pic_name": "Perfume10",
        "color": "",
        "brand": "Maison Francis Kurkdjian",
        "price": [78.00, 99.00],
        "volume": [70, 100],
        "radar_chart": {"citrus": 0.0, "spicy": 0.7, "woody": 0.9, "fruity": 0.4, "flowery": 0.4},
        "ingredient": ["woody", "spicy", "aromatic", "oriental"]
      },
      {
        "name": "Alien",
        "pic_name": "Perfume11",
        "color": "",
        "brand": "Mugler",
        "price": [21.00, 35.00],
        "volume": [30, 50],
        "radar_chart": {"citrus": 0.0, "spicy": 0.0, "woody": 0.6, "fruity": 0.7, "flowery": 0.9},
        "ingredient": ["floral", "powdery", "woody"]
      },
      {
        "name": "Tobacco Vanille",
        "pic_name": "Perfume12",
        "color": "",
        "brand": "Tom Ford",
        "price": [45.00, 80.00],
        "volume": [50, 100],
        "radar_chart": {"citrus": 0.0, "spicy": 0.6, "woody": 0.4, "fruity": 0.5, "flowery": 0.9},
        "ingredient": ["oriental", "powdery", "spicy", "dry"]
      },
      {
        "name": "Aventus",
        "pic_name": "Perfume13",
        "color": "",
        "brand": "Creed",
        "price": [26.00, 36.00, 50.00],
        "volume": [30, 75, 250],
        "radar_chart": {"citrus": 0.4, "spicy": 0.0, "woody": 0.6, "fruity": 0.9, "flowery": 0.5},
        "ingredient": ["woody", "green", "musk", "citrus"]
      },
      {
        "name": "Coco Mademoiselle",
        "pic_name": "Perfume14",
        "color": "",
        "brand": "Chanel",
        "price": [32.00, 50.00],
        "volume": [100, 250],
        "radar_chart": {"citrus": 0.9, "spicy": 0.5, "woody": 0.7, "fruity": 0.6, "flowery": 0.7},
        "ingredient": ["citrus", "woody", "floral", "spicy"]
      },
      {
        "name": "Black Opium",
        "pic_name": "Perfume15",
        "color": "",
        "brand": "Yves Sain Laurent",
        "price": [40.00, 60.00, 75.00],
        "volume": [30, 50, 100],
        "radar_chart": {"citrus": 0.0, "spicy": 0.5, "woody": 0.5, "fruity": 0.4, "flowery": 0.8},
        "ingredient": ["floral", "powdery", "woody"]
      },
      {
          "name": "Black Orchid",
          "pic_name": "Perfume16",
          "color": "",
          "brand": "Tom Ford",
          "price": [65.00, 75.00],
          "volume": [40, 50],
          "radar_chart": {"citrus": 0.0, "spicy": 0.9, "woody": 0.7, "fruity": 0.6, "flowery": 0.4},
          "ingredient": ["oriental", "woody", "floral"]
        },
        {
          "name": "La Nuit de I'Homme",
          "pic_name": "Perfume17",
          "color": "",
          "brand": "Yves Sain Laurent",
          "price": [87.00, 100.00, 115.00],
          "volume": [40, 60, 100],
          "radar_chart": {"citrus": 0.5, "spicy": 0.8, "woody": 0.6, "fruity": 0.5, "flowery": 0.5},
          "ingredient": ["aromatic", "spicy", "woody", "citrus"]
        },
        {
          "name": "Rock Volume One",
          "pic_name": "Perfume18",
          "color": "",
          "brand": "John Varvatos",
          "price": [27.00, 22.00],
          "volume": [100, 50],
          "radar_chart": {"citrus": 0.0, "spicy": 0.4, "woody":0.7 , "fruity": 0.0, "flowery": 0.5},
          "ingredient": ["leathery", "metallic", "aromatic"]
        },
        {
          "name": "Fahrenheit",
          "pic_name": "Perfume19",
          "color": "",
          "brand": "Christian Dior",
          "price": [53.00, 29.00],
          "volume": [250, 100],
          "radar_chart": {"citrus": 0.0, "spicy": 0.5, "woody": 1.0, "fruity": 0.0, "flowery": 0.4},
          "ingredient": ["leathery", "woody"]
        },
        {
          "name": "Acqua di Giò Profumo",
          "pic_name": "Perfume20",
          "color": "",
          "brand": "Giorgioa Armani",
          "price": [131.00, 94.00],
          "volume": [100, 50],
          "radar_chart": {"citrus": 0.4, "spicy": 0.7, "woody": 0.5, "fruity": 0.0, "flowery": 0.0},
          "ingredient": ["aromatic", "marine", "minty"]
        },
        {
            "name": "Sailing Day",
            "pic_name": "Perfume21",
            "color": "",
            "brand": "Maison Martin Margiela",
            "price": [30.00, 135.00],
            "volume": [10, 100],
            "radar_chart": {"citrus": 0.0, "spicy": 0.4, "woody": 0.7, "fruity": 0.2, "flowery": 0.3},
            "ingredient": ["marine", "woody", "watery"]
          },
          {
            "name": "Snow Mint",
            "pic_name": "Perfume22",
            "color": "",
            "brand": "Victoria's Secret",
            "price": [164.00, 104.00],
            "volume": [70, 35],
            "radar_chart": {"citrus": 0.0, "spicy": 0.6, "woody": 0.5, "fruity": 0.4, "flowery": 0.1},
            "ingredient": ["green", "minty", "aromatic"]
          },
          {
            "name": "Aqva Pour Homme Atlantiqve ",
            "pic_name": "Perfume23",
            "color": "",
            "brand": "Bvlgari",
            "price": [45.00, 80.00],
            "volume": [50, 100],
            "radar_chart": {"citrus": 0.5, "spicy": 0.4, "woody": 0.6, "fruity": 0.0, "flowery": 0.0},
            "ingredient": ["minty", "watery", "marine", "citrus"]
          },
          {
            "name": "Aqua Allegoria Herba Fresca",
            "pic_name": "Perfume24",
            "color": "",
            "brand": "Guerlain",
            "price": [32.00, 50.00],
            "volume": [100, 250],
            "radar_chart": {"citrus": 0.7, "spicy": 0.3, "woody": 0.5, "fruity": 0.0, "flowery": 0.4},
            "ingredient": ["minty", "green", "citrus"]
          },
          {
            "name": "Poolside Breeze",
            "pic_name": "Perfume25",
            "color": "",
            "brand": "Victoria's Secret",
            "price": [21.00, 35.00],
            "volume": [30, 50],
            "radar_chart": {"citrus": 0.0, "spicy": 0.0, "woody": 0.5, "fruity": 0.0, "flowery": 0.5},
            "ingredient": ["watery", "floral"]
          },
          {
            "name": "Luna Rossa Carbon",
            "pic_name": "Perfume26",
            "color": "",
            "brand": "Prada",
            "price": [126.00, 84.00],
            "volume": [100, 35],
            "radar_chart": {"citrus": 0.2, "spicy": 0.9, "woody": 0.1, "fruity": 0.0, "flowery": 0.7},
            "ingredient": ["spicy", "metallic", "aromatic"]
          },
          {
              "name": "Radish Vetiver ",
              "pic_name": "Perfume27",
              "color": "",
              "brand": "Comme des Garcons",
              "price": [65.00, 75.00],
              "volume": [40, 50],
              "radar_chart": {"citrus": 0.0, "spicy": 0.2, "woody": 1.0, "fruity": 0.0, "flowery": 0.1},
              "ingredient": ["dry", "green", "woody"]
            },
            {
              "name": "Dry Wood Ramon",
              "pic_name": "Perfume28",
              "color": "",
              "brand": "Mogegal",
              "price": [164.00, 104.00],
              "volume": [70, 35],
              "radar_chart": {"citrus": 0.1, "spicy": 0.6, "woody": 0.9, "fruity": 0.0, "flowery": 0.0},
              "ingredient": ["dry", "woody", "spicy"]
            },
            {
              "name": "Honey Oud",
              "pic_name": "Perfume29",
              "color": "",
              "brand": "Floris",
              "price": [45.00, 80.00],
              "volume": [50, 100],
              "radar_chart": {"citrus": 0.2, "spicy": 0.1, "woody": 0.1, "fruity": 0.8, "flowery": 0.2},
              "ingredient": ["honey", "floral"]
            }
]

export default perfume_info