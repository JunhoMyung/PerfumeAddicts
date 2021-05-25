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
      "pic_name": <img className = "perfume" src={Perfume1} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 0); window.location.href = "/visual"}}/>,
      "brand": "Calvin Klein",
      "price": [27.00, 22.00],
      "volume": [100, 50],
      "radar_chart": {citrus: 0.9, spicy: 0.3, woody: 0.7, fruity: 0.3, flowery: 0.5},
      "ingredient": ["citrus", "green", "drywood", "mossywood", "powdery"]
    },
    {
      "name": "English Pear & Freesia",
      "pic_name": <img className = "perfume" src={Perfume2} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 1); window.location.href = "/visual"}}/>,
      "brand": "Jo Malone London",
      "price": [53.00, 29.00],
      "volume": [250, 100],
      "radar_chart": {"citrus": 0.1, "spicy": 0.2, "woody": 0.4, "fruity": 0.9, "flowery": 0.8},
      "ingredient": ["floral", "fruity", "water", "musk", "aromatic"]
    },
    {
      "name": "Do Son",
      "pic_name": <img className = "perfume" src={Perfume3} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 2); window.location.href = "/visual"}}/>,
      "brand": "Diptyque",
      "price": [131.00, 94.00],
      "volume": [100, 50],
      "radar_chart": {"citrus": 0.5, "spicy": 0.1, "woody": 0.2, "fruity": 0.3, "flowery": 0.9},
      "ingredient": ["floral", "citrus", "musk"]
    },
    {
      "name": "Un Jardin En Mediterranee",
      "pic_name": <img className = "perfume" src={Perfume4} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 3); window.location.href = "/visual"}}/>,
      "brand": "Hermes",
      "price": [105.00, 85.50, 60.00],
      "volume": [100, 50, 30],
      "radar_chart": {"citrus": 0.8, "spicy": 0.2, "woody": 0.7, "fruity": 0.3, "flowery": 0.5},
      "ingredient": ["citrus", "aromatic", "floral", "mossywood"]
    },
    {
      "name": "Voyage d'Hermes",
      "pic_name": <img className = "perfume" src={Perfume5} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 4); window.location.href = "/visual"}}/>,
      "brand": "Hermes",
      "price": [126.00, 84.00],
      "volume": [100, 35],
      "radar_chart": {"citrus": 0.6, "spicy": 0.8, "woody": 0.6, "fruity": 0.1, "flowery": 0.1},
      "ingredient": ["softspicy", "citrus", "green", "aromatic", "drywood"]
    },
    {
      "name": "La Vie Est Belle",
      "pic_name": <img className = "perfume" src={Perfume6} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 5); window.location.href = "/visual"}}/>,
      "brand": "Lancome",
      "price": [133.00, 100.00],
      "volume": [100, 50],
      "radar_chart": {"citrus": 0.1, "spicy": 0.5, "woody": 0.2, "fruity": 0.5, "flowery": 0.8},
      "ingredient": ["fruity", "aromatic", "softspicy"]
    },
    {
      "name": "Cherry Blossom",
      "pic_name": <img className = "perfume" src={Perfume7} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 6); window.location.href = "/visual"}}/>,
      "brand": "L'Occitane en Provence",
      "price": [50.00, 65.00],
      "volume": [75, 100],
      "radar_chart": {"citrus": 0.1, "spicy": 0.2, "woody": 0.4, "fruity": 0.7, "flowery": 0.9},
      "ingredient": ["floral", "fruity", "musk"]
    },
    {
      "name": "A La Rose ",
      "pic_name": <img className = "perfume" src={Perfume8} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 7); window.location.href = "/visual"}}/>,
      "brand": "Maison Francis Kurkdjian",
      "price": [164.00, 104.00],
      "volume": [70, 35],
      "radar_chart": {"citrus": 0.7, "spicy": 0.1, "woody": 0.5, "fruity": 0.3, "flowery": 0.9},
      "ingredient": ["citrus", "musk", "drywood", "floral"]
    },
    {
      "name": "Modern Princess",
      "pic_name": <img className = "perfume" src={Perfume9} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 8); window.location.href = "/visual"}}/>,
      "brand": "Lanvin",
      "price": [30.00, 55.00],
      "volume": [50, 100],
      "radar_chart": {"citrus": 0.3, "spicy": 0.4, "woody": 0.1, "fruity": 0.9, "flowery": 0.6},
      "ingredient": ["fruity", "aromatic", "floral"]
    },
    {
      "name": "Baccarat Rouge",
      "pic_name": <img className = "perfume" src={Perfume10} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 9); window.location.href = "/visual"}}/>,
      "brand": "Maison Francis Kurkdjian",
      "price": [78.00, 99.00],
      "volume": [70, 100],
      "radar_chart": {"citrus": 0.0, "spicy": 0.7, "woody": 0.9, "fruity": 0.4, "flowery": 0.4},
      "ingredient": ["drywood", "softspicy", "aromatic"]
    },
    {
      "name": "Alien",
      "pic_name": <img className = "perfume" src={Perfume11} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 10); window.location.href = "/visual"}}/>,
      "brand": "Mugler",
      "price": [21.00, 35.00],
      "volume": [30, 50],
      "radar_chart": {"citrus": 0.0, "spicy": 0.0, "woody": 0.6, "fruity": 0.7, "flowery": 0.9},
      "ingredient": ["floral", "powdery", "softspicy", "drywood"]
    },
    {
      "name": "Tobacco Vanille",
      "pic_name": <img className = "perfume" src={Perfume12} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 11); window.location.href = "/visual"}}/>,
      "brand": "Tom Ford",
      "price": [45.00, 80.00],
      "volume": [50, 100],
      "radar_chart": {"citrus": 0.0, "spicy": 0.6, "woody": 0.4, "fruity": 0.5, "flowery": 0.9},
      "ingredient": ["softspicy", "powdery", "drywood"]
    },
    {
      "name": "Aventus",
      "pic_name": <img className = "perfume" src={Perfume13} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 12); window.location.href = "/visual"}}/>,
      "brand": "Creed",
      "price": [26.00, 36.00, 50.00],
      "volume": [30, 75, 250],
      "radar_chart": {"citrus": 0.4, "spicy": 0.0, "woody": 0.6, "fruity": 0.9, "flowery": 0.5},
      "ingredient": ["drywood", "green", "musk", "citrus"]
    },
    {
      "name": "Coco Mademoiselle",
      "pic_name": <img className = "perfume" src={Perfume14} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 13); window.location.href = "/visual"}}/>,
      "brand": "Chanel",
      "price": [32.00, 50.00],
      "volume": [100, 250],
      "radar_chart": {"citrus": 0.9, "spicy": 0.5, "woody": 0.7, "fruity": 0.6, "flowery": 0.7},
      "ingredient": ["citrus", "drywood", "floral", "softspicy"]
    },
    {
      "name": "Black Opium",
      "pic_name": <img className = "perfume" src={Perfume15} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 14); window.location.href = "/visual"}}/>,
      "brand": "Yves Sain Laurent",
      "price": [40.00, 60.00, 75.00],
      "volume": [30, 50, 100],
      "radar_chart": {"citrus": 0.0, "spicy": 0.5, "woody": 0.5, "fruity": 0.4, "flowery": 0.8},
      "ingredient": ["floral", "powdery", "drywood", "fruity"]
    },
    {
      "name": "Black Orchid",
      "pic_name": <img className = "perfume" src={Perfume16} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 15); window.location.href = "/visual"}}/>,
      "brand": "Tom Ford",
      "price": [65.00, 75.00],
      "volume": [40, 50],
      "radar_chart": {"citrus": 0.0, "spicy": 0.9, "woody": 0.7, "fruity": 0.6, "flowery": 0.4},
      "ingredient": ["softspicy", "drywood", "floral"]
    },
    {
      "name": "La Nuit de I'Homme",
      "pic_name": <img className = "perfume" src={Perfume17} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 16); window.location.href = "/visual"}}/>,
      "brand": "Yves Sain Laurent",
      "price": [87.00, 100.00, 115.00],
      "volume": [40, 60, 100],
      "radar_chart": {"citrus": 0.5, "spicy": 0.8, "woody": 0.6, "fruity": 0.5, "flowery": 0.5},
      "ingredient": ["aromatic", "softspicy", "drywood", "citrus"]
    },
    {
      "name": "Rock Volume One",
      "pic_name": <img className = "perfume" src={Perfume18} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 17); window.location.href = "/visual"}}/>,
      "brand": "John Varvatos",
      "price": [27.00, 22.00],
      "volume": [100, 50],
      "radar_chart": {"citrus": 0.0, "spicy": 0.4, "woody":0.7 , "fruity": 0.0, "flowery": 0.5},
      "ingredient": ["musk", "sharpspicy"]
    },
    {
      "name": "Fahrenheit",
      "pic_name": <img className = "perfume" src={Perfume19} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 18); window.location.href = "/visual"}}/>,
      "brand": "Christian Dior",
      "price": [53.00, 29.00],
      "volume": [250, 100],
      "radar_chart": {"citrus": 0.0, "spicy": 0.5, "woody": 1.0, "fruity": 0.0, "flowery": 0.4},
      "ingredient": ["musk", "drywood"]
    },
    {
      "name": "Acqua di Giò Profumo",
      "pic_name": <img className = "perfume" src={Perfume20} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 19); window.location.href = "/visual"}}/>,
      "brand": "Giorgioa Armani",
      "price": [131.00, 94.00],
      "volume": [100, 50],
      "radar_chart": {"citrus": 0.4, "spicy": 0.7, "woody": 0.5, "fruity": 0.0, "flowery": 0.1},
      "ingredient": ["aromatic", "water"]
    },
    {
      "name": "Sailing Day",
      "pic_name": <img className = "perfume" src={Perfume21} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 20); window.location.href = "/visual"}}/>,
      "brand": "Maison Martin Margiela",
      "price": [30.00, 135.00],
      "volume": [10, 100],
      "radar_chart": {"citrus": 0.0, "spicy": 0.4, "woody": 0.7, "fruity": 0.2, "flowery": 0.3},
      "ingredient": ["mossywood", "water"]
    },
    {
      "name": "Snow Mint",
      "pic_name": <img className = "perfume" src={Perfume22} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 21); window.location.href = "/visual"}}/>,
      "brand": "Victoria's Secret",
      "price": [164.00, 104.00],
      "volume": [70, 35],
      "radar_chart": {"citrus": 0.0, "spicy": 0.6, "woody": 0.5, "fruity": 0.4, "flowery": 0.1},
      "ingredient": ["green", "aromatic"]
    },
    {
      "name": "Aqva Pour Homme Atlantiqve ",
      "pic_name": <img className = "perfume" src={Perfume23} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 22); window.location.href = "/visual"}}/>,
      "brand": "Bvlgari",
      "price": [45.00, 80.00],
      "volume": [50, 100],
      "radar_chart": {"citrus": 0.5, "spicy": 0.4, "woody": 0.6, "fruity": 0.1, "flowery": 0.0},
      "ingredient": ["aromatic", "water", "citrus"]
    },
    {
      "name": "Aqua Allegoria Herba Fresca",
      "pic_name": <img className = "perfume" src={Perfume24} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 23); window.location.href = "/visual"}}/>,
      "brand": "Guerlain",
      "price": [32.00, 50.00],
      "volume": [100, 250],
      "radar_chart": {"citrus": 0.7, "spicy": 0.3, "woody": 0.5, "fruity": 0.0, "flowery": 0.4},
      "ingredient": ["green", "citrus", "aromatic"]
    },
    {
      "name": "Poolside Breeze",
      "pic_name": <img className = "perfume" src={Perfume25} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 24); window.location.href = "/visual"}}/>,
      "brand": "Victoria's Secret",
      "price": [21.00, 35.00],
      "volume": [30, 50],
      "radar_chart": {"citrus": 0.0, "spicy": 0.0, "woody": 0.5, "fruity": 0.0, "flowery": 0.5},
      "ingredient": ["water", "floral"]
    },
    {
      "name": "Luna Rossa Carbon",
      "pic_name": <img className = "perfume" src={Perfume26} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 25); window.location.href = "/visual"}}/>,
      "brand": "Prada",
      "price": [126.00, 84.00],
      "volume": [100, 35],
      "radar_chart": {"citrus": 0.2, "spicy": 0.9, "woody": 0.2, "fruity": 0.0, "flowery": 0.7},
      "ingredient": ["sharpspicy", "aromatic"]
    },
    {
      "name": "Radish Vetiver ",
      "pic_name": <img className = "perfume" src={Perfume27} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 26); window.location.href = "/visual"}}/>,
      "brand": "Comme des Garcons",
      "price": [65.00, 75.00],
      "volume": [40, 50],
      "radar_chart": {"citrus": 0.0, "spicy": 0.3, "woody": 1.0, "fruity": 0.0, "flowery": 0.1},
      "ingredient": ["drywood", "green"]
    },
    {
      "name": "Dry Wood Ramon",
      "pic_name": <img className = "perfume" src={Perfume28} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 27); window.location.href = "/visual"}}/>,
      "brand": "Mogegal",
      "price": [164.00, 104.00],
      "volume": [70, 35],
      "radar_chart": {"citrus": 0.2, "spicy": 0.7, "woody": 1.0, "fruity": 0.1, "flowery": 0.1},
      "ingredient": ["drywood", "sharpspicy"]
    },
    {
      "name": "Honey Oud",
      "pic_name": <img className = "perfume" src={Perfume29} alt = "" onClick = {() => {localStorage.setItem('perfume_id', 28); window.location.href = "/visual"}}/>,
      "brand": "Floris",
      "price": [45.00, 80.00],
      "volume": [50, 100],
      "radar_chart": {"citrus": 0.2, "spicy": 0.1, "woody": 0.1, "fruity": 0.8, "flowery": 0.2},
      "ingredient": ["powdery", "floral", "fruity"]
    }
]

export default perfume_info