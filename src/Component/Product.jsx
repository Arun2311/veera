import React, { useState } from "react";
import "./Style.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";






import bs11 from "./Assets/bs1.jfif";
import bs12 from "./Assets/bs2.jfif";
import bs13 from "./Assets/bs3.jfif";
import bs14 from "./Assets/bs4.jfif";
import bs15 from "./Assets/bs5.jfif";

import c11 from "./Assets/c1.jfif";
import c12 from "./Assets/c2.jfif";
import c13 from "./Assets/c3.jfif";
import c14 from "./Assets/c4.jfif";
import c15 from "./Assets/c5.jfif";
import c16 from "./Assets/c6.jfif";

import cb11 from "./Assets/cb1.jfif";
import cb12 from "./Assets/cb2.jfif";
import cb13 from "./Assets/cb3.jfif";
import cb14 from "./Assets/cb4.jfif";

import cs11 from "./Assets/cs1.jfif";
import cs12 from "./Assets/cs2.jfif";
import cs13 from "./Assets/cs3.jfif";
import cs14 from "./Assets/cs4.jfif";
import cs15 from "./Assets/cs5.jfif";
import cs16 from "./Assets/cs6.jfif";
import cs17 from "./Assets/cs7.jfif";
import cs18 from "./Assets/cs8.jfif";
import cs19 from "./Assets/cs9.jfif";
import cs20 from "./Assets/cs10.jfif";

import d11 from "./Assets/d1.jfif";
import d12 from "./Assets/d2.jfif";
import d13 from "./Assets/d3.jfif";
import d14 from "./Assets/d4.jfif";
import d15 from "./Assets/d5.jfif";
import d16 from "./Assets/d6.jfif";
import d17 from "./Assets/d7.jfif";
import d18 from "./Assets/d8.jfif";



import temp1 from "./Assets/temp1.jpg";
import temp2 from "./Assets/temp2.jpg";
import temp3 from "./Assets/temp3.jpg";
import temp4 from "./Assets/temp4.jpg";

import dt11 from "./Assets/dt1.jfif";
import dt12 from "./Assets/dt2.jfif";
import dt13 from "./Assets/dt3.jfif";
import dt14 from "./Assets/dt4.jfif";
import dt15 from "./Assets/dt5.jfif";
import dt16 from "./Assets/dt6.jfif";
import dt17 from "./Assets/dt7.jfif";
import dt18 from "./Assets/dt8.jfif";
import dt19 from "./Assets/dt9.jfif";
import dt20 from "./Assets/dt10.jfif";

import ec11 from "./Assets/ec1.jfif";
import ec12 from "./Assets/ec2.jfif";
import ec13 from "./Assets/ec3.jfif";
import ec14 from "./Assets/ec4.jfif";
import ec15 from "./Assets/ec5.jfif";
import ec16 from "./Assets/ec6.jfif";
import ec17 from "./Assets/ec7.jfif";
import ec18 from "./Assets/ec8.jfif";

import f11 from "./Assets/f1.jfif";
import f12 from "./Assets/f2.jfif";
import f13 from "./Assets/f3.jfif";
import f14 from "./Assets/f4.jfif";
import f15 from "./Assets/f5.jfif";
import f16 from "./Assets/f6.jfif";
import f17 from "./Assets/f7.jfif";
import f18 from "./Assets/f8.jfif";
import f19 from "./Assets/f9.jfif";
import f20 from "./Assets/f10.jfif";

import fc11 from "./Assets/fc1.jfif";
import fc12 from "./Assets/fc2.jfif";
import fc13 from "./Assets/fc3.jfif";
import fc14 from "./Assets/fc4.jfif";
import fc15 from "./Assets/fc5.jfif";
import fc16 from "./Assets/fc6.jfif";
import fc17 from "./Assets/fc7.jfif";
import fc18 from "./Assets/fc8.jfif";
import fc19 from "./Assets/fc9.jfif";
import fc20 from "./Assets/fc10.jfif";

import ft11 from "./Assets/ft1.jfif";
import ft12 from "./Assets/ft2.jfif";
import ft13 from "./Assets/ft3.jfif";
import ft14 from "./Assets/ft4.jfif";
import ft15 from "./Assets/ft5.jfif";
import ft16 from "./Assets/ft6.jfif";
import ft17 from "./Assets/ft7.jfif";
import ft18 from "./Assets/ft8.jfif";

import ic11 from "./Assets/ic1.jfif";
import ic12 from "./Assets/ic2.jfif";
import ic13 from "./Assets/ic3.jfif";
import ic14 from "./Assets/ic4.jfif";
import ic15 from "./Assets/ic5.jfif";
import ic16 from "./Assets/ic6.jfif";
import ic17 from "./Assets/ic7.jfif";
import ic18 from "./Assets/ic8.jfif";
import ic19 from "./Assets/ic9.jfif";
import ic20 from "./Assets/ic10.jfif";

import os11 from "./Assets/os1.jfif";
import os12 from "./Assets/os2.jfif";
import os13 from "./Assets/os3.jfif";
import os14 from "./Assets/os4.jfif";
import os15 from "./Assets/os5.jfif";

import ot11 from "./Assets/ot1.jfif";
import ot12 from "./Assets/ot2.jfif";
import ot13 from "./Assets/ot3.jfif";
import ot14 from "./Assets/ot4.jfif";
import ot15 from "./Assets/ot5.jfif";
import ot16 from "./Assets/ot6.jfif";
import ot17 from "./Assets/ot7.jfif";
import ot18 from "./Assets/ot8.jfif";
import ot19 from "./Assets/ot9.jfif";
import ot20 from "./Assets/ot10.jfif";

import pc11 from "./Assets/pc1.jfif";
import pc12 from "./Assets/pc2.jfif";
import pc13 from "./Assets/pc3.jfif";
import pc14 from "./Assets/pc4.jfif";
import pc15 from "./Assets/pc5.jfif";
import pc16 from "./Assets/pc6.jfif";
import pc17 from "./Assets/pc7.jfif";
import pc18 from "./Assets/pc8.jfif";
import pc19 from "./Assets/pc9.jfif";
import pc20 from "./Assets/pc10.jfif";

// import pm11 from "./Assets/pm1.jfif";
// import pm12 from "./Assets/pm2.jfif";
// import pm13 from "./Assets/pm3.jfif";
import pm14 from "./Assets/pm4.jpg";
import pm15 from "./Assets/pm5.jfif";
import pm16 from "./Assets/pm6.jpg";
import pm17 from "./Assets/pm7.jpg";
import pm18 from "./Assets/pm8.jfif";
// import pm19 from "./Assets/pm9.jfif";
// import pm20 from "./Assets/pm10.jfif";
// import pm21 from "./Assets/pm11.jfif";
import pm22 from "./Assets/pm12.jfif";
import pm23 from "./Assets/pm13.jfif";
// import pm24 from "./Assets/pm14.jfif";
import pm25 from "./Assets/pm15.jpg";
// import pm26 from "./Assets/pm16.jfif";
// import pm27 from "./Assets/pm17.jfif";
import pm28 from "./Assets/pm18.jfif";
import pm29 from "./Assets/pm19.jpg";
import pm30 from "./Assets/pm20.jfif";

import rc11 from "./Assets/rc1.jfif";
import rc12 from "./Assets/rc2.jfif";
import rc13 from "./Assets/rc3.jfif";
import rc14 from "./Assets/rc4.jfif";
import rc15 from "./Assets/rc5.jfif";
import rc16 from "./Assets/rc6.jfif";
import rc17 from "./Assets/rc7.jfif";
import rc18 from "./Assets/rc8.jfif";
import rc19 from "./Assets/rc9.jfif";
import rc20 from "./Assets/rc10.jfif";
import rc21 from "./Assets/rc11.jfif";
import rc22 from "./Assets/rc12.jfif";
import rc23 from "./Assets/rc13.jfif";
import rc24 from "./Assets/rc14.jfif";
import rc25 from "./Assets/rc15.jfif";

import s11 from "./Assets/s1.jfif";
import s12 from "./Assets/s2.jfif";
import s13 from "./Assets/s3.jfif";
import s14 from "./Assets/s4.jfif";
import s15 from "./Assets/s5.jfif";
import s16 from "./Assets/s6.jfif";
import s17 from "./Assets/s7.jfif";
import s18 from "./Assets/s8.jfif";
import s19 from "./Assets/s9.jfif";
import s20 from "./Assets/s10.jfif";

import sb11 from "./Assets/sb1.jfif";
import sb12 from "./Assets/sb2.jfif";
import sb13 from "./Assets/sb3.jfif";
import sb14 from "./Assets/sb4.jfif";
import sb15 from "./Assets/sb5.jfif";
import sb16 from "./Assets/sb6.jfif";
import sb17 from "./Assets/sb7.jfif";
import sb18 from "./Assets/sb8.jfif";
import sb19 from "./Assets/sb9.jfif";
import sb20 from "./Assets/sb10.jfif";

import sc11 from "./Assets/sc1.jfif";
import sc12 from "./Assets/sc2.jfif";
import sc13 from "./Assets/sc3.jfif";

import stc11 from "./Assets/stc1.jfif";
import stc12 from "./Assets/stc2.jfif";
import stc13 from "./Assets/stc3.jfif";
import stc14 from "./Assets/stc4.jfif";
import stc15 from "./Assets/stc5.jfif";
import stc16 from "./Assets/stc6.jfif";
import stc17 from "./Assets/stc7.jfif";
import stc18 from "./Assets/stc8.jfif";

import tm11 from "./Assets/tm1.png";
import tm12 from "./Assets/tm2.jfif";
import tm13 from "./Assets/tm3.jfif";
import tm14 from "./Assets/tm4.jfif";
import tm15 from "./Assets/tm5.jfif";
import tm16 from "./Assets/tm6.jfif";

import tp11 from "./Assets/tp1.jfif";
import tp12 from "./Assets/tp2.jfif";
import tp13 from "./Assets/tp3.jfif";
import tp14 from "./Assets/tp4.jfif";
import tp15 from "./Assets/tp5.jfif";
import tp16 from "./Assets/tp6.jfif";
import tp17 from "./Assets/tp7.jfif";
import tp18 from "./Assets/tp8.jfif";
import tp19 from "./Assets/tp9.jfif";
import tp20 from "./Assets/tp10.jfif";

import ts11 from "./Assets/ts1.jfif";
import ts12 from "./Assets/ts2.jfif";
import ts13 from "./Assets/ts3.jfif";
import ts14 from "./Assets/ts4.jfif";
import ts15 from "./Assets/ts5.jfif";
import ts16 from "./Assets/ts6.jfif";
import ts17 from "./Assets/ts7.jfif";
import ts18 from "./Assets/ts8.jfif";
import ts19 from "./Assets/ts9.jfif";
import ts20 from "./Assets/ts10.jfif";

import tw11 from "./Assets/tw1.jfif";
import tw12 from "./Assets/tw2.jfif";
import tw13 from "./Assets/tw3.jfif";
import tw14 from "./Assets/tw4.jfif";
import tw15 from "./Assets/tw5.jfif";
import tw16 from "./Assets/tw6.jfif";
import tw17 from "./Assets/tw7.jfif";
import tw18 from "./Assets/tw8.jfif";
import tw19 from "./Assets/tw9.jfif";
import tw20 from "./Assets/tw10.jfif";

import wb11 from "./Assets/wb1.jfif";
import wb12 from "./Assets/wb2.jfif";
import wb13 from "./Assets/wb3.jfif";
import wb14 from "./Assets/wb4.jfif";
import wb15 from "./Assets/wb5.jfif";
import wb16 from "./Assets/wb6.jfif";
import wb17 from "./Assets/wb7.jfif";
import wb18 from "./Assets/wb8.jfif";
import wb19 from "./Assets/wb9.jfif";
import wb20 from "./Assets/wb10.jfif";

import wc11 from "./Assets/wc1.jfif";
import wc12 from "./Assets/wc2.jfif";
import wc13 from "./Assets/wc3.jfif";
import wc14 from "./Assets/wc4.jfif";
import wc15 from "./Assets/wc5.jfif";
import wc16 from "./Assets/wc6.jfif";
import wc17 from "./Assets/wc7.jfif";
import wc18 from "./Assets/wc8.jfif";
import wc19 from "./Assets/wc9.jfif";
import wc20 from "./Assets/wc10.jfif";

import bed1 from "./Assets/bedicon.jpg";
import dining1 from "./Assets/dining.jpg";
import sofa1 from "./Assets/sofa.webp";
import cupboard1 from "./Assets/cupboard.webp";
import poojaa1 from "./Assets/poojaa.webp";
import table1 from "./Assets/table.webp";
import chair1 from "./Assets/chair.webp";
import book1 from "./Assets/book.webp";
import dress1 from "./Assets/dress.webp";
import tv1 from "./Assets/tv.webp";

function Product() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      title: "Fance Cot",
      category: bed1,
      price: 5400,
      img: fc11,
    },
    {
      id: 2,
      title: "Fance Cot",
      category: bed1,
      price: 5000,
      img: fc12,
    },
    {
      id: 3,
      title: "Fance Cot",
      category: bed1,
      price: 4400,
      img: fc13,
    },
    {
      id: 4,
      title: "Fance Cot",
      category: bed1,
      price: 6000,
      img: fc14,
    },
    {
      id: 5,
      title: "Fance Cot",
      category: bed1,
      price: 3800,
      img: fc15,
    },
    {
      id: 6,
      title: "Fance Cot",
      category: bed1,
      price: 4000,
      img: fc16,
    },
    {
      id: 7,
      title: "Fance Cot",
      category: bed1,
      price: 5400,
      img: fc17,
    },
    {
      id: 8,
      title: "Fance Cot",
      category: bed1,
      price: 5500,
      img: fc18,
    },
    {
      id: 9,
      title: "Fance Cot",
      category: bed1,
      price: 3800,
      img: fc19,
    },
    {
      id: 10,
      title: "Fance Cot",
      category: bed1,
      price: 4400,
      img: fc20,
    },
    {
      id: 11,
      title: "Wood Cot",
      category: bed1,
      price: 7900,
      img: wc11,
    },
    {
      id: 12,
      title: "Wood Cot",
      category: bed1,
      price: 9500,
      img: wc12,
    },
    {
      id: 13,
      title: "Wood Cot",
      category: bed1,
      price: 10000,
      img: wc13,
    },
    {
      id: 14,
      title: "Wood Cot",
      category: bed1,
      price: 7800,
      img: wc14,
    },
    {
      id: 15,
      title: "Wood Cot",
      category: bed1,
      price: 8000,
      img: wc15,
    },
    {
      id: 16,
      title: "Wood Cot",
      category: bed1,
      price: 9600,
      img: wc16,
    },
    {
      id: 17,
      title: "Wood Cot",
      category: bed1,
      price: 8900,
      img: wc17,
    },
    {
      id: 18,
      title: "Wood Cot",
      category: bed1,
      price: 7600,
      img: wc18,
    },
    {
      id: 19,
      title: "Wood Cot",
      category: bed1,
      price: 11000,
      img: wc19,
    },
    {
      id: 20,
      title: "Wood Cot",
      category: bed1,
      price: 10500,
      img: wc20,
    },
    {
      id: 21,
      title: "Iron Cot",
      category: bed1,
      price: 3400,
      img: ic11,
    },
    {
      id: 22,
      title: "Iron Cot",
      category: bed1,
      price: 6400,
      img: ic12,
    },
    {
      id: 23,
      title: "Iron Cot",
      category: bed1,
      price: 6600,
      img: ic13,
    },
    {
      id: 24,
      title: "Iron Cot",
      category: bed1,
      price: 5500,
      img: ic14,
    },
    {
      id: 25,
      title: "Iron Cot",
      category: bed1,
      price: 5400,
      img: ic15,
    },
    {
      id: 26,
      title: "Iron Cot",
      category: bed1,
      price: 4400,
      img: ic16,
    },
    {
      id: 27,
      title: "Iron Cot",
      category: bed1,
      price: 6400,
      img: ic17,
    },
    {
      id: 28,
      title: "Iron Cot",
      category: bed1,
      price: 5600,
      img: ic18,
    },
    {
      id: 29,
      title: "Iron Cot",
      category: bed1,
      price: 6700,
      img: ic19,
    },
    {
      id: 30,
      title: "Iron Cot",
      category: bed1,
      price: 4400,
      img: ic20,
    },
    {
      id: 31,
      title: "Cotton Bed",
      category: bed1,
      price: 3100,
      img: cb11,
    },
    {
      id: 32,
      title: "Cotton Bed",
      category: bed1,
      price: 2100,
      img: cb12,
    },
    {
      id: 33,
      title: "Cotton Bed",
      category: bed1,
      price: 2900,
      img: cb13,
    },
    {
      id: 34,
      title: "Cotton Bed",
      category: bed1,
      price: 3000,
      img: cb14,
    },
    {
      id: 35,
      title: " Silk Cotton Bed",
      category: bed1,
      price: 2100,
      img: sc11,
    },
    {
      id: 36,
      title: " Silk Cotton Bed",
      category: bed1,
      price: 4100,
      img: sc12,
    },
    {
      id: 37,
      title: " Silk Cotton Bed",
      category: bed1,
      price: 2900,
      img: sc13,
    },

    //  cupboard//
    {
      id: 38,
      title: " Steel Bero",
      category: cupboard1,
      price: 8900,
      img: sb11,
    },
    {
      id: 39,
      title: " Steel Bero",
      category: cupboard1,
      price: 9900,
      img: sb12,
    },
    {
      id: 40,
      title: " Steel Bero",
      category: cupboard1,
      price: 5700,
      img: sb13,
    },
    {
      id: 41,
      title: " Steel Bero",
      category: cupboard1,
      price: 2890,
      img: sb14,
    },
    {
      id: 42,
      title: " Steel Bero",
      category: cupboard1,
      price: 3460,
      img: sb15,
    },
    {
      id: 43,
      title: " Steel Bero",
      category: cupboard1,
      price: 2980,
      img: sb16,
    },
    {
      id: 44,
      title: " Steel Bero",
      category: cupboard1,
      price: 7890,
      img: sb17,
    },
    {
      id: 45,
      title: " Steel Bero",
      category: cupboard1,
      price: 5430,
      img: sb18,
    },
    {
      id: 46,
      title: " Steel Bero",
      category: cupboard1,
      price: 9870,
      img: sb19,
    },
    {
      id: 47,
      title: " Steel Bero",
      category: cupboard1,
      price: 8880,
      img: sb20,
    },
    {
      id: 48,
      title: " Wood Bero",
      category: cupboard1,
      price: 8980,
      img: wb11,
    },
    {
      id: 49,
      title: " Wood Bero",
      category: cupboard1,
      price: 5580,
      img: wb12,
    },
    {
      id: 50,
      title: " Wood Bero",
      category: cupboard1,
      price: 4000,
      img: wb13,
    },
    {
      id: 51,
      title: " Wood Bero",
      category: cupboard1,
      price: 7600,
      img: wb14,
    },
    {
      id: 52,
      title: " Wood Bero",
      category: cupboard1,
      price: 8790,
      img: wb15,
    },
    {
      id: 53,
      title: " Wood Bero",
      category: cupboard1,
      price: 8000,
      img: wb16,
    },
    {
      id: 54,
      title: " Wood Bero",
      category: cupboard1,
      price: 6590,
      img: wb17,
    },
    {
      id: 55,
      title: " Wood Bero",
      category: cupboard1,
      price: 9990,
      img: wb18,
    },
    {
      id: 56,
      title: " Wood Bero",
      category: cupboard1,
      price: 4560,
      img: wb19,
    },
    {
      id: 57,
      title: " Wood Bero",
      category: cupboard1,
      price: 8980,
      img: wb20,
    },
    //  pooja mandabam//
    // {
    //   id: 58,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 9000,
    //   img: pm11,
    // },
    // {
    //   id: 59,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 10000,
    //   img: pm12,
    // },
    // {
    //   id: 60,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 9500,
    //   img: pm13,
    // },
    {
      id: 61,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 8800,
      img: pm14,
    },
    // {
    //   id: 62,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 7700,
    //   img: pm15,
    // },
    {
      id: 63,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 5800,
      img: pm16,
    },
    {
      id: 64,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 9800,
      img: pm17,
    },
    {
      id: 65,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 7700,
      img: pm18,
    },
    // {
    //   id: 66,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 6880,
    //   img: pm19,
    // },
    // {
    //   id: 67,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 8760,
    //   img: pm20,
    // },
    // {
    //   id: 68,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 9999,
    //   img: pm21,
    // },
    {
      id: 69,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 6660,
      img: pm22,
    },
    {
      id: 70,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 8888,
      img: pm23,
    },
    // {
    //   id: 71,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 8889,
    //   img: pm24,
    // },
    {
      id: 72,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 6780,
      img: pm25,
    },

    // {
    //   id: 73,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 9880,
    //   img: pm26,
    // },
    // {
    //   id: 74,
    //   title: " Pooja Mandapam",
    //   category: poojaa1,
    //   price: 9890,
    //   img: pm27,
    // },
    {
      id: 75,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 8000,
      img: pm28,
    },
    {
      id: 76,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 7800,
      img: pm29,
    },
    {
      id: 77,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 9900,
      img: pm30,
    },
    // bed//
    {
      id: 78,
      title: "Folding Cot",
      category: bed1,
      price: 4500,
      img: f11,
    },
    {
      id: 79,
      title: "Folding Cot",
      category: bed1,
      price: 5500,
      img: f12,
    },
    {
      id: 80,
      title: "Folding Cot",
      category: bed1,
      price: 3500,
      img: f13,
    },
    {
      id: 81,
      title: "Folding Cot",
      category: bed1,
      price: 7600,
      img: f14,
    },
    {
      id: 82,
      title: "Folding Cot",
      category: bed1,
      price: 3670,
      img: f15,
    },
    {
      id: 83,
      title: "Folding Cot",
      category: bed1,
      price: 6666,
      img: f16,
    },
    {
      id: 84,
      title: "Folding Cot",
      category: bed1,
      price: 5444,
      img: f17,
    },
    {
      id: 85,
      title: "Folding Cot",
      category: bed1,
      price: 3567,
      img: f18,
    },
    {
      id: 86,
      title: "Folding Cot",
      category: bed1,
      price: 5433,
      img: f19,
    },
    {
      id: 87,
      title: "Folding Cot",
      category: bed1,
      price: 4777,
      img: f20,
    },
    // dining table//

    {
      id: 88,
      title: "Dining Table",
      category: dining1,
      price: 8900,
      img: dt11,
    },
    {
      id: 89,
      title: "Dining Table",
      category: dining1,
      price: 10000,
      img: dt12,
    },
    {
      id: 90,
      title: "Dining Table",
      category: dining1,
      price: 8900,
      img: dt13,
    },
    {
      id: 91,
      title: "Dining Table",
      category: dining1,
      price: 8880,
      img: dt14,
    },
    {
      id: 92,
      title: "Dining Table",
      category: dining1,
      price: 7700,
      img: dt15,
    },
    {
      id: 93,
      title: "Dining Table",
      category: dining1,
      price: 8990,
      img: dt16,
    },
    {
      id: 94,
      title: "Dining Table",
      category: dining1,
      price: 8900,
      img: dt17,
    },
    {
      id: 95,
      title: "Dining Table",
      category: dining1,
      price: 7700,
      img: dt18,
    },
    {
      id: 96,
      title: "Dining Table",
      category: dining1,
      price: 4500,
      img: dt19,
    },
    {
      id: 97,
      title: "Dining Table",
      category: dining1,
      price: 9500,
      img: dt20,
    },
    // table//
    {
      id: 98,
      title: "Office Table",
      category: table1,
      price: 4500,
      img: ot11,
    },
    {
      id: 99,
      title: "Office Table",
      category: table1,
      price: 11100,
      img: ot12,
    },
    {
      id: 100,
      title: "Office Table",
      category: table1,
      price: 10000,
      img: ot13,
    },
    {
      id: 101,
      title: "Office Table",
      category: table1,
      price: 9500,
      img: ot14,
    },
    {
      id: 102,
      title: "Office Table",
      category: table1,
      price: 9999,
      img: ot15,
    },
    {
      id: 103,
      title: "Office Table",
      category: table1,
      price: 8900,
      img: ot16,
    },
    {
      id: 104,
      title: "Office Table",
      category: table1,
      price: 9000,
      img: ot17,
    },
    {
      id: 105,
      title: "Office Table",
      category: table1,
      price: 11000,
      img: ot18,
    },
    {
      id: 106,
      title: "Office Table",
      category: table1,
      price: 7650,
      img: ot19,
    },
    {
      id: 107,
      title: "Office Table",
      category: table1,
      price: 8990,
      img: ot20,
    },
    {
      id: 108,
      title: "Folding Table",
      category: table1,
      price: 4500,
      img: ft11,
    },
    {
      id: 109,
      title: "Folding Table",
      category: table1,
      price: 4500,
      img: ft12,
    },
    {
      id: 110,
      title: "Folding Table",
      category: table1,
      price: 4500,
      img: ft13,
    },
    {
      id: 112,
      title: "Folding Table",
      category: table1,
      price: 4500,
      img: ft14,
    },
    {
      id: 113,
      title: "Folding Table",
      category: table1,
      price: 4500,
      img: ft15,
    },
    {
      id: 114,
      title: "Folding Table",
      category: table1,
      price: 4500,
      img: ft16,
    },
    {
      id: 115,
      title: "Folding Table",
      category: table1,
      price: 4500,
      img: ft17,
    },
    {
      id: 116,
      title: "Folding Table",
      category: table1,
      price: 4500,
      img: ft18,
    },
    // sofa//
    {
      id: 117,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 8000,
      img: s11,
    },
    {
      id: 118,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 12000,
      img: s12,
    },
    {
      id: 119,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 11500,
      img: s13,
    },
    {
      id: 120,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 15000,
      img: s14,
    },
    {
      id: 121,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 10000,
      img: s15,
    },
    {
      id: 122,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 9880,
      img: s16,
    },
    {
      id: 123,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 8880,
      img: s17,
    },
    {
      id: 124,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 11110,
      img: s18,
    },

    // chair//
    {
      id: 125,
      title: "Plastic Chair",
      category: chair1,
      price: 1500,
      img: pc11,
    },
    {
      id: 126,
      title: "Plastic Chair",
      category: chair1,
      price: 3500,
      img: pc12,
    },
    {
      id: 127,
      title: "Plastic Chair",
      category: chair1,
      price: 3600,
      img: pc13,
    },
    {
      id: 128,
      title: "Plastic Chair",
      category: chair1,
      price: 4500,
      img: pc14,
    },
    {
      id: 129,
      title: "Plastic Chair",
      category: chair1,
      price: 2700,
      img: pc15,
    },
    {
      id: 130,
      title: "Plastic Chair",
      category: chair1,
      price: 3400,
      img: pc16,
    },
    {
      id: 131,
      title: "Plastic Chair",
      category: chair1,
      price: 1900,
      img: pc17,
    },
    {
      id: 132,
      title: "Plastic Chair",
      category: chair1,
      price: 4300,
      img: pc18,
    },
    {
      id: 133,
      title: "Plastic Chair",
      category: chair1,
      price: 2200,
      img: pc19,
    },
    {
      id: 134,
      title: "Plastic Chair",
      category: chair1,
      price: 3400,
      img: pc20,
    },

    {
      id: 135,
      title: "Rolling Chair",
      category: chair1,
      price: 4300,
      img: rc11,
    },
    {
      id: 136,
      title: "Rolling Chair",
      category: chair1,
      price: 4500,
      img: rc12,
    },
    {
      id: 137,
      title: "Rolling Chair",
      category: chair1,
      price: 4100,
      img: rc13,
    },
    {
      id: 138,
      title: "Rolling Chair",
      category: chair1,
      price: 4300,
      img: rc14,
    },
    {
      id: 139,
      title: "Rolling Chair",
      category: chair1,
      price: 3300,
      img: rc15,
    },
    {
      id: 140,
      title: "Rolling Chair",
      category: chair1,
      price: 2500,
      img: rc16,
    },
    {
      id: 141,
      title: "Rolling Chair",
      category: chair1,
      price: 3300,
      img: rc17,
    },
    {
      id: 142,
      title: "Rolling Chair",
      category: chair1,
      price: 2500,
      img: rc18,
    },
    {
      id: 143,
      title: "Rolling Chair",
      category: chair1,
      price: 4900,
      img: rc19,
    },
    {
      id: 144,
      title: "Rolling Chair",
      category: chair1,
      price: 4500,
      img: rc20,
    },
    {
      id: 145,
      title: "Rolling Chair",
      category: chair1,
      price: 3300,
      img: rc21,
    },
    {
      id: 146,
      title: "Rolling Chair",
      category: chair1,
      price: 3500,
      img: rc22,
    },
    {
      id: 147,
      title: "Rolling Chair",
      category: chair1,
      price: 6600,
      img: rc23,
    },
    {
      id: 148,
      title: "Rolling Chair",
      category: chair1,
      price: 5300,
      img: rc24,
    },
    {
      id: 149,
      title: "Rolling Chair",
      category: chair1,
      price: 2500,
      img: rc25,
    },
    {
      id: 150,
      title: "Ec Chair",
      category: chair1,
      price: 5400,
      img: ec11,
    },
    {
      id: 151,
      title: "Ec Chair",
      category: chair1,
      price: 5600,
      img: ec12,
    },
    {
      id: 152,
      title: "Ec Chair",
      category: chair1,
      price: 3400,
      img: ec13,
    },
    {
      id: 153,
      title: "Ec Chair",
      category: chair1,
      price: 6600,
      img: ec14,
    },
    {
      id: 154,
      title: "Ec Chair",
      category: chair1,
      price: 5500,
      img: ec15,
    },
    {
      id: 155,
      title: "Ec Chair",
      category: chair1,
      price: 3500,
      img: ec16,
    },
    {
      id: 156,
      title: "Ec Chair",
      category: chair1,
      price: 4800,
      img: ec17,
    },
    {
      id: 157,
      title: "Ec Chair",
      category: chair1,
      price: 4500,
      img: ec18,
    },
    {
      id: 158,
      title: "S-Type Chair",
      category: chair1,
      price: 2500,
      img: stc11,
    },
    {
      id: 159,
      title: "S-Type Chair",
      category: chair1,
      price: 3000,
      img: stc12,
    },
    {
      id: 160,
      title: "S-Type Chair",
      category: chair1,
      price: 2500,
      img: stc13,
    },
    {
      id: 161,
      title: "S-Type Chair",
      category: chair1,
      price: 1500,
      img: stc14,
    },
    {
      id: 162,
      title: "S-Type Chair",
      category: chair1,
      price: 2200,
      img: stc15,
    },
    {
      id: 163,
      title: "S-Type Chair",
      category: chair1,
      price: 2300,
      img: stc16,
    },
    {
      id: 164,
      title: "S-Type Chair",
      category: chair1,
      price: 1500,
      img: stc17,
    },
    {
      id: 165,
      title: "S-Type Chair",
      category: chair1,
      price: 2200,
      img: stc18,
    },
    // corner sofa//
    {
      id: 166,
      title: "Corner Sofa",
      category: sofa1,
      price: 14200,
      img: cs11,
    },
    {
      id: 167,
      title: "Corner Sofa",
      category: sofa1,
      price: 14500,
      img: cs12,
    },
    {
      id: 168,
      title: "Corner Sofa",
      category: sofa1,
      price: 12500,
      img: cs13,
    },
    {
      id: 169,
      title: "Corner Sofa",
      category: sofa1,
      price: 9900,
      img: cs14,
    },
    {
      id: 170,
      title: "Corner Sofa",
      category: sofa1,
      price: 10000,
      img: cs15,
    },
    {
      id: 171,
      title: "Corner Sofa",
      category: sofa1,
      price: 11000,
      img: cs16,
    },
    {
      id: 172,
      title: "Corner Sofa",
      category: sofa1,
      price: 11500,
      img: cs17,
    },
    {
      id: 173,
      title: "Corner Sofa",
      category: sofa1,
      price: 12500,
      img: cs18,
    },
    {
      id: 174,
      title: "Corner Sofa",
      category: sofa1,
      price: 10000,
      img: cs19,
    },
    {
      id: 175,
      title: "Corner Sofa",
      category: sofa1,
      price: 15000,
      img: cs20,
    },
    {
      id: 176,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 11500,
      img: tw11,
    },
    {
      id: 177,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 13300,
      img: tw12,
    },
    {
      id: 178,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 14500,
      img: tw13,
    },
    {
      id: 179,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 10000,
      img: tw14,
    },
    {
      id: 180,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 13300,
      img: tw15,
    },
    {
      id: 181,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 15500,
      img: tw16,
    },
    {
      id: 182,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 11000,
      img: tw17,
    },
    {
      id: 183,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 14500,
      img: tw18,
    },
    {
      id: 184,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 9500,
      img: tw19,
    },
    {
      id: 185,
      title: "Teak Wood Sofa",
      category: sofa1,
      price: 14500,
      img: tw20,
    },
    // dressing table//
    {
      id: 186,
      title: "Dressing Table",
      category: dress1,
      price: 8500,
      img: d11,
    },
    {
      id: 187,
      title: "Dressing Table",
      category: dress1,
      price: 4880,
      img: d12,
    },
    {
      id: 188,
      title: "Dressing Table",
      category: dress1,
      price: 5900,
      img: d13,
    },
    {
      id: 189,
      title: "Dressing Table",
      category: dress1,
      price: 10000,
      img: d14,
    },
    {
      id: 190,
      title: "Dressing Table",
      category: dress1,
      price: 6700,
      img: d15,
    },
    {
      id: 191,
      title: "Dressing Table",
      category: dress1,
      price: 9800,
      img: d16,
    },
    {
      id: 192,
      title: "Dressing Table",
      category: dress1,
      price: 9900,
      img: d17,
    },
    {
      id: 193,
      title: "Dressing Table",
      category: dress1,
      price: 7500,
      img: d18,
    },
    // book self//
    {
      id: 194,
      title: "Book self",
      category: book1,
      price: 8900,
      img: bs11,
    },
    {
      id: 195,
      title: "Book self",
      category: book1,
      price: 5500,
      img: bs12,
    },
    {
      id: 196,
      title: "Book self",
      category: book1,
      price: 9900,
      img: bs13,
    },
    {
      id: 197,
      title: "Book self",
      category: book1,
      price: 5600,
      img: bs14,
    },
    {
      id: 198,
      title: "Book self",
      category: book1,
      price: 7500,
      img: bs15,
    },
    {
      id: 199,
      title: "Open self",
      category: book1,
      price: 4500,
      img: os11,
    },
    {
      id: 200,
      title: "Open self",
      category: book1,
      price: 7900,
      img: os12,
    },
    {
      id: 201,
      title: "Open self",
      category: book1,
      price: 6600,
      img: os13,
    },
    {
      id: 202,
      title: "Open self",
      category: book1,
      price: 8880,
      img: os14,
    },
    {
      id: 203,
      title: "Open self",
      category: book1,
      price: 5600,
      img: os15,
    },

    // teapoy table//
    {
      id: 204,
      title: "Teapoy",
      category: table1,
      price: 9500,
      img: tp11,
    },
    {
      id: 205,
      title: "Teapoy",
      category: table1,
      price: 7900,
      img: tp12,
    },
    {
      id: 206,
      title: "Teapoy",
      category: table1,
      price: 7500,
      img: tp13,
    },
    {
      id: 207,
      title: "Teapoy",
      category: table1,
      price: 9900,
      img: tp14,
    },
    {
      id: 208,
      title: "Teapoy",
      category: table1,
      price: 9900,
      img: tp15,
    },
    {
      id: 209,
      title: "Teapoy",
      category: table1,
      price: 5600,
      img: tp16,
    },
    {
      id: 210,
      title: "Teapoy",
      category: table1,
      price: 8800,
      img: tp17,
    },
    {
      id: 211,
      title: "Teapoy",
      category: table1,
      price: 8500,
      img: tp18,
    },
    {
      id: 212,
      title: "Teapoy",
      category: table1,
      price: 9500,
      img: tp19,
    },
    {
      id: 213,
      title: "Teapoy",
      category: table1,
      price: 7500,
      img: tp20,
    },

    // tv stand//
    {
      id: 214,
      title: "TV Stand",
      category: tv1,
      price: 12500,
      img: ts11,
    },

    {
      id: 215,
      title: "TV Stand",
      category: tv1,
      price: 12500,
      img: ts12,
    },
    {
      id: 216,
      title: "TV Stand",
      category: tv1,
      price: 10000,
      img: ts13,
    },
    {
      id: 217,
      title: "TV Stand",
      category: tv1,
      price: 9800,
      img: ts14,
    },
    {
      id: 218,
      title: "TV Stand",
      category: tv1,
      price: 9900,
      img: ts15,
    },
    {
      id: 219,
      title: "TV Stand",
      category: tv1,
      price: 8500,
      img: ts16,
    },
    {
      id: 220,
      title: "TV Stand",
      category: tv1,
      price: 9500,
      img: ts17,
    },
    {
      id: 221,
      title: "TV Stand",
      category: tv1,
      price: 9900,
      img: ts18,
    },
    {
      id: 222,
      title: "TV Stand",
      category: tv1,
      price: 7700,
      img: ts19,
    },
    {
      id: 223,
      title: "TV Stand",
      category: tv1,
      price: 8500,
      img: ts20,
    },
    {
      id: 224,
      title: "Table Mate",
      category: tv1,
      price: 2500,
      img: tm11,
    },
    {
      id: 225,
      title: "Table Mate",
      category: tv1,
      price: 1300,
      img: tm12,
    },
    {
      id: 226,
      title: "Table Mate",
      category: tv1,
      price: 3500,
      img: tm13,
    },
    {
      id: 227,
      title: "Table Mate",
      category: tv1,
      price: 4500,
      img: tm14,
    },
    {
      id: 228,
      title: "Table Mate",
      category: tv1,
      price: 3000,
      img: tm15,
    },
    {
      id: 229,
      title: "Table Mate",
      category: tv1,
      price: 2800,
      img: tm16,
    },
    {
      id: 230,
      title: "Corner Stand",
      category: tv1,
      price: 5870,
      img: c11,
    },
    {
      id: 231,
      title: "Corner Stand",
      category: tv1,
      price: 4800,
      img: c12,
    },
    {
      id: 232,
      title: "Corner Stand",
      category: tv1,
      price: 6800,
      img: c13,
    },
    {
      id: 233,
      title: "Corner Stand",
      category: tv1,
      price: 4800,
      img: c14,
    },
    {
      id: 234,
      title: "Corner Stand",
      category: tv1,
      price: 7700,
      img: c15,
    },
    {
      id: 235,
      title: "Corner Stand",
      category: tv1,
      price: 4608,
      img: c16,
    },

    // sofa
    {
      id: 236,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 10110,
      img: s19,
    },
    {
      id: 237,
      title: "Sofa Cumbed",
      category: sofa1,
      price: 16110,
      img: s20,
    },
    {
      id: 238,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 8760,
      img: temp1,
    },
    {
      id: 239,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 8760,
      img: temp2,
    },
    {
      id: 240,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 8760,
      img: temp3,
    },
    {
      id: 250,
      title: " Pooja Mandapam",
      category: poojaa1,
      price: 8760,
      img: temp4,
    },
  ]);
  const [menulist, setMenulist] = useState(menu);

  const cate = menu.map((furniture) => furniture.category);

  const uniqcate = [...new Set(cate)];
  

  const table = (dep) => {
    if (dep === "ALL") {
      setMenulist(menu);
      return;
    }

    const filterdata = menu.filter((furniture) => furniture.category === dep);
    setMenulist(filterdata);
  };



  return (
    <div className="product">
      <h1 className="head">Veera Furniture</h1>
      <p className="subhead">Shop Your Favourites</p>
     
  
      <br></br>
      <div className="align-cont">
        {uniqcate.map((dep) => (
          <span onClick={() => table(dep)} className="hd">
            <img src={dep} width={100} height="100px" alt="read" className="imgfilter" />
          </span>
        ))}
      </div>
      <br></br>
      <div className="bgg">
        <div className="center">
    
        <div className="row">
          
          {menulist.map((furniture) => (
            <div className="itms" key={furniture.id}>
                    <div className="col-lg-10  mb-3">
              <div className="card">
                <img src={furniture.img}  className="photo card-img-top" alt="god" />
                <div className="card-body">
                  <h5 className="card-title">{furniture.title}</h5>
                  <a  href="https://goo.gl/maps/itvD8zmjPU5usSNEA" rel="noreferrer"   target="_blank" className="btn btn-primary">
                     Buy Now
                  </a>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
