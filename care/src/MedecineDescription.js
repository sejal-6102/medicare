// MedicineRecommendation.js
import React from 'react';
import logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';
// import Home from './Home.js';
import './MedicineRecommendation.css';
// import * as img from './Medicine' ;// Import the CSS file

// Medicine data for different symptoms with specific recommendations
const symptomRecommendations = {
  Fatigue: {
    medicines: [
      {
        id: 1,
        name: "Iron Supplement",
        price: "150.00 RS",
        description: [
          "Helps combat fatigue by increasing iron levels",
          "Supports oxygen transport in the blood",
          "Essential for energy production"
        ],
        image:"https://i.ebayimg.com/images/g/-y4AAOSwD4RmqZoF/s-l960.webp",
        link:"https://www.ebay.com/itm/186602780802?_skw=iron_supplement&itmmeta=01JC2GHQNCNM6WPRS4KD7Q6RD4&hash=item2b72647882%3Ag%3AsqkAAOSwUjhmqZn4&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKmWwcUWfW7bFlZ0ZZTA8NdD5suCWFArgzrUi8s%2Ff%2BjBkCjE1QvXCFTB0vrtI0fjivu97SmxbQuR3SwMcaEIyOGntMd7VpHQsC01plLBNOVec8rpW7aA3FbfVBUIuwckv2M%2FtUu17%2BcJmCWJKNsJvdH4gaj%2FLor%2FQV2aBmt8%2B51fW%2FzTvtIVR%2BaY33DBTgMpQLdMaOS7x4vLP1lhx46dx4GLrGGQ7N3XVTD3khTcLqmD4VFpFUtOWE84bzw1bQLp0JpSzC%2FVaAFzxNiUYX2rjws5uvSYdSEnAC6qDuOBqg53Rg%3D%3D%7Ctkp%3ABFBM5PrG0OBk&var=694634243049"
      },
      {
        id: 2,
        name: "Vitamin B12",
        price: "20.00 RS",
        description: [
          "Boosts energy levels",
          "Improves red blood cell formation",
          "Supports brain health"
        ],
        image: "https://i.ebayimg.com/images/g/8YIAAOSwBa9jWZjU/s-l1600.webp",
        link:"https://www.ebay.com/itm/364700510174?_skw=VITAMIN+B-12&itmmeta=01JC2HEAHYTRK73R3HWSZ00RF1&hash=item54e9d827de%3Ag%3A8YIAAOSwBa9jWZjU&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKng5N40mwE7gDhY5kn9PlGii357AvtGVDrfTmbda2tho7dXksvUqaEtH5YHjBfx3HDoxGa%2Fanrz34DeMhqSRSPXFk4%2B8QEUSv4QkSy2UCKfFugpEY4qsWGwsIWoeG%2FyHWNgsDNdi75odugQ68w1rOc2rRuxUxY9dvttGnHZGf6LKGkDp3sXN0PUpKwszxWfDgRe8CgP%2BRlbtfVf6z%2FAZk8bQX5%2BzjXIVGWmFrpZJf2%2BBNAJy3X6ONsXAp0DkNGZAKGE9UKSjPoci0QQRf3BouV5gLWuoQtbKAxeUa7F4ftfBQ%3D%3D%7Ctkp%3ABFBMhqm50eBk&var=634232361565"
      }
    ],
    specificRecommendation: [
      "Increase iron intake for better oxygen transport",
      "Consider Vitamin B12 to support brain health",
      "Ensure a balanced diet with sufficient protein"
    ]
  },
  "Weakened immune system": {
    medicines: [
      {
        id: 1,
        name: "Vitamin C",
        price: "102.00 RS",
        description: [
          "Powerful antioxidant",
          "Boosts immune defense",
          "Reduces risk of chronic diseases"
        ],
        image: "https://i.ebayimg.com/images/g/kdkAAOSw2gVhyvuM/s-l1600.webp",
        link:"https://www.ebay.com/itm/362969531360?_skw=VITAMIN+c&itmmeta=01JC2HHR9HJDCWV7G3HPEKHF38&hash=item5482ab83e0%3Ag%3AkdkAAOSw2gVhyvuM&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKkdMDfnaCgXBOtBhUEQTjIXLCvDxqTAzNs%2Fo7YkbJ%2FEFyuA4UMeReV8Irfye2%2FHDrFTRDkgMpe4S2BS5gyR1Myma%2FrCcLdK%2F6b50o2dw2kE5iV0GKa9qtISn4na%2BtqfpyJfKprHcRqpSDbpZwiGz8Bww8BaAflV0avu%2FQmaFsb31cvIoAmcb8PPEP%2B5ZG9r3Z%2FILy08tRhCPLif0hvQnxFOoBsxzMDKswsjFaLhjqVPx65gJg9ySqKVeHLbqx9mky6Bgn60Qyrw3ZgsGJdSCpV4%7Ctkp%3ABFBM7oTH0eBk&var=632092019110"
      },
      {
        id: 2,
        name: "Zinc Supplement",
        price: "12.00 Rs",
        description: [
          "Promotes immune system health",
          "Supports wound healing",
          "Essential for protein synthesis"
        ],
        image: "https://i.ebayimg.com/images/g/RssAAOSwvBRgN2ED/s-l1600.webp",
        link:"https://i.ebayimg.com/images/g/RssAAOSwvBRgN2ED/s-l1600.webp"
      }
    ],
    specificRecommendation: [
      "Include Vitamin C for enhanced immune defense",
      "Take Zinc for immune system support",
      "Consume a diet rich in antioxidants"
    ]
  },
  "Muscle weakness": {
    medicines: [
      {
        id: 1,
        name: "GNC Magnesium 500",
        price: "86.55 Rs",
        description: [
          "High-potency (500mg per serving)",
          "Supports bone and muscle health",
          "Aids nerve function and energy",
          "May improve sleep quality"
        ],
        image: "https://i.ebayimg.com/images/g/FYsAAOSwQyllRDt7/s-l960.webp",
        link:"https://www.ebay.com/itm/285542531476?_skw=gnc_magnesium&itmmeta=01JC2HNG0WTS19A0SSCJ410B7R&hash=item427ba94194:g:FYsAAOSwQyllRDt7&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKkKM%2BBuaZoOWgMPtroJsHf%2BX%2FalkYqlDYfPfnvhrMtmAc%2FhB5Wh5AwZvTcFoWNAGq75thiufLe28RakMGusCUUvcqsGlOKxrkF1HNAFHuV8UGdfGURBrwpeZbnlGTC0WmjYrAVMMLhxsOXh9lZrJRH9MYp4bjtDgZOpnACb9jCIm2bsl8xy4A2EN%2FSZaUE1XOpO2xCW01cwLj7KpToXUCF2ZaUFPLr074HyvKT39AMUWF74d3%2B%2FTeAjk7v8sTCQqJZZKgusDzuh733RkUXsfcidqhVzPOUd5id2aWhGwpDNJQ%3D%3D%7Ctkp%3ABFBMvoDW0eBk"
      },
      {
        id: 2,
        name: "Pfeiffer Calcium & Magnesium",
        price: "25.72 Rs",
        description: [
          "Balanced calcium and magnesium combo",
          "Promotes bone density and strength",
          "Supports muscle and nerve function"
        ],
        image: "https://i.ebayimg.com/images/g/iCoAAOSwILBmrH08/s-l960.webp",
        link:"https://www.ebay.com/itm/356212598208?_skw=calcium+magnesium+zinc&itmmeta=01JC2HQCVPX3W6TX5VTBK0CV5T&hash=item52efece5c0:g:cHMAAOSw1-tnJKPc&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKlC4Ld5qwJmNEUMpziyBfjv3MURIGNRkICvJ9CfgONKRbmslXTts5919Xldgk8XDAxjnciHMGDBVXwPaNLjEeCVR32q0iAjn03KgI7uySVk2cgFSMYHMS56XBqvAff4332ciCzGJ%2B%2FZQ2aT0qvNZGXntoP1YDvNDezv3OOAVdZxNWR2diI5R2ZnblYDonBqFY9Fd0tkWnEWcfq0A3i8yZJDf0b00k0pAtMdmO9dTJ7jaWR%2BXDe6Sb60YRbSKHIHMqxRzlEmjaPYTRoy3juNS6VyMhzbt0EA%2BYfT1exvIj6LlA%3D%3D%7Ctkp%3ABFBM9s3d0eBk"
      }
    ],
    specificRecommendation: [
      "Consider magnesium supplements for muscle support",
      "Add calcium for bone strength",
      "Include leafy greens in your diet for magnesium"
    ]
  },
  "Poor night vision": {
    medicines: [
      {
        id: 1,
        name: "Vitamin A",
        price: "18.00 Rs",
        description: [
          "Supports eye health",
          "Prevents night blindness",
          "Essential for vision and immune function"
        ],
        image: "https://i.ebayimg.com/images/g/U2oAAOSwhIRmSArd/s-l960.webp",
        link:"https://www.ebay.com/itm/226407882793?_skw=vitamin+a&itmmeta=01JC2HRZGE3NNNSZW17C760H2W&hash=item34b6f62029%3Ag%3AUx8AAOSwysxnE0kN&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKlx7rg2xSolZYLhfnzK9oXgO3mYr5l7dZigsMwqJRAMH7iHiLsqscq4IAQd6UkFxJ1inxSaLiA5PlB5e%2FtZTHHyNCmH338VBfF57VhTGwuuJRnBz4BK%2BcUCzdwcr9R3a7TrKCT1g9gNrGMjSV1cHvHf7FKISKbrZ7R4e5crbLEYUc9k9LNxo8wr3DFcR6S3waS6yf6FAKKil8ToChCrpXW%2FkJwqRKkYgqGog863%2Frhrh%2BnZnsDTpMtam8N2giB1EicXYaIJlpNZNmOCLwZX0Icu%7Ctkp%3ABFBMpvjj0eBk&var=525597469954"
      },
      {
        id: 2,
        name: "Beta Carotene",
        price: "22.00 Rs",
        description: [
          "Precursor to Vitamin A",
          "Supports healthy vision",
          "Promotes eye health"
        ],
        image: "https://i.ebayimg.com/images/g/U2oAAOSwhIRmSArd/s-l960.webp",
        link:"https://www.ebay.com/itm/226407882793?_skw=beta_carotene&itmmeta=01JC2HTZT4JX5AKGASAMGJDE8F&hash=item34b6f62029%3Ag%3AUx8AAOSwysxnE0kN&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKlx7rg2xSolZYLhfnzK9oXgO3mYr5l7dZigsMwqJRAMH7iHiLsqscq4IAQd6UkFxJ1inxSaLiA5PlB5e%2FtZTHHyNCmH338VBfF57VhTGwuuJRnBz4BK%2BcUCzdwcr9R3a7Q32PeDp4HjAlRAOv4PD1i7Ov5qC218jGrTfppm89T%2F00Do4MYmcLxRgfEBYlJYKnIXdQ0DnP4O7q%2BAV7ZnFwE6m0JR8HvvDqg1PClIE07uEtwMVQE2ZYKxoPbsjuh1JAt6lcoURYmf%2Fp6ccIdNuniZl468PEnax8TpRE7Z%2BVnslQ%3D%3D%7Ctkp%3ABFBMkv3r0eBk&var=525597469954"
      }
    ],
    specificRecommendation: [
      "Consider Vitamin A for improved vision",
      "Increase intake of Beta Carotene-rich foods",
      "Include carrots and leafy greens in your diet"
    ]
  },
  "Brittle hair and nails": {
    medicines: [
      {
        id: 1,
        name: "Biotin Supplement",
        price: "25.00 Rs",
        description: [
          "Supports hair and nail health",
          "Strengthens brittle nails",
          "Promotes hair growth"
        ],
        image: "https://i.ebayimg.com/images/g/fuwAAOSwDZVmel~c/s-l960.webp",
        link:"https://www.ebay.com/itm/204852550961?_skw=biotin&itmmeta=01JC2HWJ5ACYKS54E8FNA4KH1Q&hash=item2fb229dd31%3Ag%3ATOMAAOSw9whmel%7EZ&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKnQzVQpNZmHXCA2s0ayL7WWLDQz9myQ%2BpPkAfIPYgIttsqUPjjQK%2BT48SuYJXghwnMyAq9nZfIqjVlgpT2gH3kSD6ZV42x%2FyJtLKw9I43WenBIuKHVMzCenoF9LWJwNE8AKGiGcW9LzIZXncGTyo1VRwCygh2mQMJ6nl8VmZgj4gyxdXEQC0GOLcdEElwjK2yhaLEnyRqYKAtqKWtN4dLU2hTef0QDm%2BTEfY3fUqI8iSGr2km1dziOo7M7WcVY43GIbQybioiSt%2BHaU8dGPSZP9%7Ctkp%3ABFBM3qLy0eBk&var=505519755020"
      },
      {
        id: 2,
        name: "Collagen Peptides",
        price: "30.00 Rs",
        description: [
          "Enhances hair strength",
          "Improves skin elasticity",
          "Strengthens nails"
        ],
        image: "https://i.ebayimg.com/images/g/JdEAAOSwPPJmPYdr/s-l960.webp",
        link:"https://www.ebay.com/itm/315355256388?_skw=collagen&itmmeta=01JC2HYRGAC22DZH0YE2P1B685&hash=item496ca35644%3Ag%3AcNkAAOSwITZmPYdO&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKk8VkY5QewgsOoGV4IkPyb7sPQunBPAH0gZdWOSJ30WahjXLpZTzC68BxbpMCDSCzQaAJGg9pFshEoSOWzbzUPxXPB00ZPgnXZejYuupNx56FP0BRHZ5XQ7Cmvj9B75WNEkjwx2GNOAUpMAvtw09nSahcKDx9eFgATGl2EMOwVeGBvhvw4DP32MicXduSyO2Ap4SMjo7j6c%2BgTWIt30ERUrPNSl76zhAH8HqLMt39BeQcUHR5ktMtZRihF3IqfKX00bPHM9%2FatBU0Av3n2rvqtm%7Ctkp%3ABFBMnIj70eBk&var=613837513154"
      }
    ],
    specificRecommendation: [
      "Take biotin for hair and nail strength",
      "Consider collagen for overall skin and nail health",
      "Include protein-rich foods in your diet"
    ]
  },
  "Bone pain": {
    medicines: [
      {
        id: 1,
        name: "Vitamin D",
        price: "15.00 Rs",
        description: [
          "Essential for bone health",
          "Supports calcium absorption",
          "Reduces risk of bone pain"
        ],
        image: "https://i.ebayimg.com/images/g/ye8AAOSwJjZmTTX2/s-l960.webp",
        link:"https://www.ebay.com/itm/176388974292?_skw=vitamin+d&itmmeta=01JC2J0WM1SB95D1W0HPFB866Z&hash=item29119a26d4%3Ag%3AP%7E8AAOSwNDJmTTXh&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKkpH8%2B5mNDOAa6NN9fOIPt5TZyLcj7RDb4QCj5oAjjlTHcOKVOq0sLdwpRfkKpDW4IyvuoGCz5zADvyDr9rTMsj%2FjmEGkh5%2FUv1KmM3jkEM%2FRDnfu8Yrj3uHP7Mwym49D37U5nC3tnbXGOGE3FmSDtfjZicbh7qbNG9%2BalY%2B82izLP1KMlrxAmErrJe24hBcYhyCgWRIssMymSsd9eugbRl2mVFzZUISq2P6WxxbB5IBpBrUVQfyVup25jxXw%2B9gZzAJF6be%2Bh1Q9SF9F2tic7O%7Ctkp%3ABFBMjMqD0uBk&var=475919775892"
      },
      {
        id: 2,
        name: "Calcium Supplement",
        price: "20.00 Rs",
        description: [
          "Supports strong bones",
          "Reduces bone pain",
          "Essential for bone density"
        ],
        image: "https://i.ebayimg.com/images/g/P-EAAOSwUeVlW0Kv/s-l960.webp",
        link:"https://www.ebay.com/itm/335215449584?_skw=calcium&itmmeta=01JC2J2MTPSVF1FRN4Z990TYVY&hash=item4e0c65d5f0%3Ag%3A5skAAOSwNvplqPek&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKknFL0pjKvdnkqmwfHVfRnm8Pzn4FymGNjGSO7Q2CdEziNzamF5sYP5qPr1jZ8qoJFfc0qeHDAn5eOgit7GyU26kC7QRSJUjceVB%2FX8RmQ8k33zU0fklVzqWny%2FGPyK6T4esDAxAG7OL3%2F4zH2%2FlQe1z1bo5jP%2B0%2FVXB%2B0YlbLqROCvFF%2BsQRD9X42n7HnuofAFx2MB7uT9LuiNUog6fa5Ym%2F2p3PMGMSnDLVsx%2Fo3ZDPSTw333iAfz1rjj3Ke7uGExRAc72ijeMuwF2w8cfQKl%7Ctkp%3ABFBMts2K0uBk&var=544475990822"
      }
    ],
    specificRecommendation: [
      "Ensure adequate Vitamin D intake",
      "Take calcium to improve bone strength",
      "Include dairy products for natural calcium"
    ]
  },
  "Dry skin": {
    medicines: [
      {
        id: 1,
        name: "Omega-3 Fish Oil",
        price: "18.00 Rs",
        description: [
          "Improves skin hydration",
          "Supports healthy skin barrier",
          "Rich in essential fatty acids"
        ],
        image: "https://i.ebayimg.com/images/g/PUEAAOSwmrZmVW9s/s-l960.webp",
        link:"https://www.ebay.com/itm/387265399158?_skw=fish+oil&itmmeta=01JC2J4EM6TJ690PEA4DC7A6Q6&hash=item5a2ad10976%3Ag%3AdnIAAOSwQZxmVW9F&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKlp%2FC%2BKzQGQG%2Fl3TMasr4Ji4thXOmHFgUtmukhvKngSSkvsq93kvBTqUZQemvxZMwS%2Fg%2Fk9iRO17FeHmM3nbghgw4nxvr0jql0qo6fkSdKMFEWgypvlByDu50CZ9%2FRKEhUPMU7GSlMIBJX4FP9pqzkm4E4NiDj7P66WyWn90UvBAzc%2BjNfV1%2F2ebzic2XIE%2F%2B%2FHW%2Fz%2BmSaYMWzc4YqBARPwsGy0ngZ6G3%2FADp6IHwxErfbMtwhhOdFworfFIo8KyZa2Amj49dpjd7LCnF7oLIda%7Ctkp%3ABFBMluqR0uBk&var=654510501300"
      },
      {
        id: 2,
        name: "Vitamin E",
        price: "14.00 Rs",
        description: [
          "Promotes skin moisture",
          "Reduces dry skin symptoms",
          "Antioxidant for skin protection"
        ],
        image: "https://i.ebayimg.com/images/g/8esAAOSw8dtmPe-l/s-l960.webp",
        link:"https://www.ebay.com/itm/335614922927?_skw=vitamin+e&itmmeta=01JC2J5TDFYC2G5DA31JZ7N3VZ&hash=item4e243550af%3Ag%3AFqIAAOSwRqpnCgzW&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKku2zP6x%2FRvjB%2FPkBucKcjmU5cCpwdoqKLArQvjFR1s6Mt2ViP%2FbbzTcOTSSiOi9uSly8yQciPHXooBt3smUoldaEoURoVID7Ucavusvmhg65lpmG9sg2daE0XL57RWkHj2Rmq4SLB%2BtM3QqtIp84axfrO8Zw6PwCfZEPtpSxwsG8oQx4hzuhzKZqur3Nuz1GCTtcgju%2BF7vh%2BswdNWr32dL6%2F5Pt%2BkFWkPe%2Bl6mK8XZCJuv361NybiHjcMsAo68KpIs85zir22GGdy0GRFXVNH%7Ctkp%3ABFBM6KaX0uBk&var=545131346389"
      }
    ],
    specificRecommendation: [
      "Consider Omega-3 for skin hydration",
      "Use Vitamin E for dry skin relief",
      "Include avocados and nuts for skin health"
    ]
  },
  "Poor wound healing": {
    medicines: [
      {
        id: 1,
        name: "Vitamin C",
        price: "12.00 Rs",
        description: [
          "Essential for collagen synthesis",
          "Supports wound healing",
          "Boosts immune system"
        ],
        image: "https://i.ebayimg.com/images/g/QMwAAOSwt7pmdO07/s-l960.webp",
        link:"https://www.ebay.com/itm/186599320063?_skw=vitamin+c&itmmeta=01JC2J77BZDY19C8WVBJZ1S1J7&hash=item2b722fa9ff%3Ag%3AY%7EgAAOSwGUtmdO0z&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKk2QkIy6CPLjbkeHNm4BFGezBJshZApRO6GEp81k%2BcdB9Tb8jsIllFmEjkhnbhpRl1eeZRJbIotUBwnMR3TwatSs41HJyptG1y6WGtLRXdwX%2BON01Ta%2Bcu1agihChOWFYD55th5qHZt00Wr1ifnt9nqWB4B%2FGJCSyDTov0XFDy5sqVbjNDtiPTPtblkyJGyOoL3b7hiv4dxDAc1%2FBkvP%2BHvv80iahPdwP%2FDNVZb8bpTyaSeD9bbXyq6WPufOKGkEHxAfwlPSjYb2FHehymqiVAx%7Ctkp%3ABFBMiPac0uBk&var=694631221689"
      },
      {
        id: 2,
        name: "Zinc Supplement",
        price: "15.00 Rs",
        description: [
          "Promotes skin repair",
          "Supports immune health",
          "Essential for wound healing"
        ],
        image: "https://i.ebayimg.com/images/g/ugYAAOSwrQlmxYO3/s-l960.webp",
        link:"https://www.ebay.com/itm/365078479383?_skw=zinc+supplement&itmmeta=01JC2J96WA8EAK7B76RNR6MT6A&hash=item55005f8217%3Ag%3AZ0IAAOSwkkJmxYOX&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKk--Slf983SOPwynwkhxDi9RT4iA9Z6FF9yO2XQWGeN%2F1O6ZaStcJq40R1Wu30ohljvr6jZ5KnrN1NDj5lcZStKp6b2EkEBFqq2SbudyR1OH95UIKWhvGUQFbNIKwU2DrTrUdNRi7%2FSUfuwm8opRRT5aWGZLMbR8InxPX2Sotda0O661sa%2B4YYtyMiU3uu%2Bq%2FErSOic6WarDexk5LQjq5EzSWEQMIQ8a7S%2FaoOj6X%2B%2BNQ0iAqgPEW4V5kLuwrvG0i9XZSiISMmQXO8w%2FNZoHcobMbMMdYRhfBF3ywFweXjzdQ%3D%3D%7Ctkp%3ABFBMoO6k0uBk&var=634722374040"
      }
    ],
    specificRecommendation: [
      "Take Vitamin C for collagen production",
      "Use Zinc to speed up wound healing",
      "Include citrus fruits in your diet"
    ]
  },
  "Irregular heartbeats": {
    medicines: [
      {
        id: 1,
        name: "Magnesium",
        price: "22.00 Rs",
        description: [
          "Regulates heart rhythm",
          "Essential for nerve and muscle function",
          "May reduce irregular heartbeats"
        ],
        image: "https://i.ebayimg.com/images/g/fTcAAOSwE6dmOc5p/s-l960.webp",
        link:"https://www.ebay.com/itm/145789791381?_skw=magnesium&itmmeta=01JC2JAZSQ0THBJQJAPN2VE9N8&hash=item21f1bfac95%3Ag%3AVRsAAOSwqnVmTV84&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKkisf6esCTIhuWaWY2KGKCUi2apiMhBhexmN%2BvllB4JE%2Fe7QptlzkPOSxN15pVkS4XZbIt4Ap14%2B5uCErbrBkP1sWdsXRfC2Va7Le%2FkCRgzh6XGppaP6DE2wqENQM8feWYmSzmTpGr4aHqa0MVpHw6tk4BO097sXkupMOob6P7K75Mdy6IlrTFdRyEsvORJ17KS7Xe4YJwXocJ8y9FxX2TahZRe%2BHMencAZQgr6gqXS1E7BLsgVsFNCoAIeL%2FIZBkFC87wd1wGtfbMzBmilCeIa%7Ctkp%3ABFBM-Pyr0uBk&var=444882927965"
      },
      {
        id: 2,
        name: "Potassium Supplement",
        price: "18.00 Rs",
        description: [
          "Supports heart health",
          "Helps manage heartbeat",
          "Essential for electrolyte balance"
        ],
        image: "https://i.ebayimg.com/images/g/fsMAAOSw~n1kDFhS/s-l1600.webp",
        link:"https://www.ebay.com/itm/364178476036?_skw=potassium&itmmeta=01JC2JCG9M09HM9G5EV4PZ0VT4&hash=item54caba8c04%3Ag%3AfsMAAOSw%7En1kDFhS&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKmAkxhKM1fhbBbLySNQ7SnlUhyhVG6%2BG1Ej0d1h6UtMreVqxZD3BKNAXCHiF0MTF6uD4nKSQ2Y3lpl4JppOmmQAspzgi3urMJnUbtot0l8ndD7%2BbR6RoflNA%2FXzZ2IMgrTzdvhRoUAs4Tm6L%2BZ7sZPBg0UKZtjiCvhxBf5HE6pWULjvSMxRAHKzgxI0Sqaq1iy2aaMOlb39s3Twn47hAZ1TI5MHcR9FdI%2FRDnWczbdpGU5YEnWcKL6e1aaDuFmCC5Zmvn7RbgNO%2BL7zYOXM3LHJ%7Ctkp%3ABFBM9ISy0uBk&var=633630639503"
      }
    ],
    specificRecommendation: [
      "Take magnesium for heart rhythm support",
      "Include potassium-rich foods like bananas",
      "Stay hydrated to balance electrolytes"
    ]
  },
  "Brain fog": {
    medicines: [
      {
        id: 1,
        name: "Ginkgo Biloba",
        price: "20.00 Rs",
        description: [
          "Improves cognitive function",
          "Supports mental clarity",
          "Reduces brain fog"
        ],
        image: "https://i.ebayimg.com/images/g/TzwAAOSwmCFmUEWu/s-l960.webp",
        link:"https://www.ebay.com/itm/315389574443?_skw=ginkgo_biloba&itmmeta=01JC2JE1D5D26TB9H7SX3TR9AY&hash=item496eaefd2b%3Ag%3ARkAAAOSwYVpmUEWW&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKl--tdIfANqW2k1yGM7656bX64frM3u30Brbt%2BIqrJJmHnePHMN--vZqzRrwJzqyMrr3I7fS28t%2BLc456t576IFQEuH%2FkfCE5sZ1i8znsGlC8KVJqcBQx%2Bbhxrs551Rq6FX2dc7HkB3%2FNeojKPN%2FT0SdYiZ9UbbM7hJHC7i3qwip9LVxQRL7JWzfll4v4uAa207oV8jRi%2FRA3NYZSOfcV5CNA1hjbu4EZNzLcQUrHV2oC8A5xkbYvnzcoy6juBz0mN1aw6S329VY%2FY7pTNjks19HIIikERhGB%2FY7%2Bo2Uwz7nw%3D%3D%7Ctkp%3ABFBM1Ja40uBk&var=613874511986"
      },
      {
        id: 2,
        name: "Omega-3 Fish Oil",
        price: "18.00 Rs",
        description: [
          "Supports brain health",
          "Reduces inflammation",
          "Enhances mental clarity"
        ],
        image: "https://i.ebayimg.com/images/g/tSoAAOSwMolmVW9p/s-l960.webp",
        link:"https://www.ebay.com/itm/387265399158?_skw=fish_oil&itmmeta=01JC2JG0JAR7VKPXEYYP5MW17J&hash=item5a2ad10976%3Ag%3AdnIAAOSwQZxmVW9F&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKlp%2FC%2BKzQGQG%2Fl3TMasr4Ji4thXOmHFgUtmukhvKngSSkvsq93kvBTqUZQemvxZMwS%2Fg%2Fk9iRO17FeHmM3nbghgw4nxvr0jql0qo6fkSdKMFEWgypvlByDu50CZ9%2FRKEhWasGnsERyJfbHFq2mAAz1meONHw%2Bkw1qlFN62SmCF6dF8X0uJakrOlLdHjcbkqbLS0XjNXvsSbrtzXbwtembS8GcKFHtY9GB%2FHSOWfghS%2Fzg5at7vUeoBotGPiEt7UibEQntjJbYr%2FTRzlTtvl32sJ%7Ctkp%3ABFBMnonA0uBk&var=654510501300"
      }
    ],
    specificRecommendation: [
      "Use Ginkgo Biloba for cognitive support",
      "Omega-3s help reduce inflammation",
      "Include walnuts and fish for brain health"
    ]
  }
};


const MedicineRecommendation = ({ selectedSymptom }) => {
  const navigate = useNavigate();
  const { medicines = [], specificRecommendation = [] } = symptomRecommendations[selectedSymptom] || {};

  return (
    <>
      <img src={logo} alt="logo" className="h-14 mt-2 ml-6" />
      <div className='General'>
        <h2 className='font-bold'>General Recommendation</h2>
        <p>
          Ensure adequate Vitamin D intake. Consider fortified foods and safe sun exposure. Ensure adequate calcium intake.
          Consider dairy products and fortified plant milks. Increase magnesium intake. Good sources include nuts, seeds, and leafy greens.
        </p>
        
        <h2 className='text-orange-800 font-bold'>Top Recommended Supplements for {selectedSymptom}</h2>
      </div>
      <div className="recommendation-container">
        <div className="medicine-cards">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="medicine-card">
              <img
                src={medicine.image}
                alt={medicine.name}
                className="medicine-image"
              />
              <h3>{medicine.name}</h3>
              <p>Price: {medicine.price}</p>
              <h4>Description:</h4>
              <ul>
                {medicine.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <button
                className="purchase-button"
                onClick={() => window.location.href = medicine.link}
              >
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="specific-recommendation-container">
        <h2 className='font-bold text-orange-600 text-3xl'>Specific Recommendation</h2>
        <ul className='text-xl mt-3'>
          {specificRecommendation.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
      <h2 className='text-red-600 text-center font-bold'>Setting Up Your Personalized Health...</h2>
      <button
        onClick={() => navigate(-1)}
        className="bg-white hover:bg-red-300 text-gray-800 font-semibold py-2 px-2 rounded border border-gray-950 ml-10"
      >
        Go Back
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-white hover:bg-red-300 text-gray-800 font-semibold py-2 px-2 rounded border border-gray-950 mr-10 mb-10 float-right"
      >
        Home
      </button>
    </>
  );
};

export default MedicineRecommendation;
