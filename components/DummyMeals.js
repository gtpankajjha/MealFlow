import MenuScroll from "./MenuScroll";

const saladDetails = [
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",

    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Twisted_Greek_Salad_Bowl_1-removebg-preview.webp",
    menuTitle: "Twisted Greek Salad Bowl",
    diet_preference: "veg",
    id: 1,
    menuDesp:
      "A nutritious salad made with Herbed Quinoa, Assorted Lettuce, Chickpeas, Feta Cheese, and Arugula, dressed in Oregano Lime Vinaigrette and topped with Olives, Roasted Melon Seeds and Walnut Mix.",
    macros: [
      {
        size: "Medium Salad",
        protein: "9g",
        fat: "16g",
        fiber: "5g",
        carbs: "23g",
        calories: "276",
      },
      {
        size: "Large Salad",
        protein: "14g",
        fat: "25g",
        fiber: "8g",
        carbs: "38g",
        calories: "441",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Caesar_Salad_Bowl-removebg-preview.webp",
    menuTitle: "Caesar Salad Bowl",
    diet_preference: "veg",
    id: 1,
    menuDesp:
      "A healthy bowl of Cajun Paneer, Assorted Lettuce, Spring Mix, Herbed Multigrain Croutons, and Parmesan Cheese with Greek Yoghurt dressing, topped with Roasted Pumpkin and Chia Seeds.",
    macros: [
      {
        size: "Medium Salad",
        protein: "18g",
        fat: "21g",
        fiber: "1g",
        carbs: "15g",
        calories: "323",
      },
      {
        size: "Large Salad",
        protein: "27g",
        fat: "31g",
        fiber: "3g",
        carbs: "29g",
        calories: "499",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Glow_Fit_Salad_Bowl-removebg-preview.webp",
    menuTitle: "Glow Fit Salad Bowl",
    diet_preference: "veg",
    id: 1,
    menuDesp:
      "A flavourful bowl of Assorted Lettuce, Quinoa, Avocado, Chickpeas, Black Raisins, American Corn, Cranberry, Mix Greens, Apple, and Pineapple, drenched in Turmeric Mustard dressing and topped with homemade Super Seeds Mix.",
    macros: [
      {
        size: "Medium Salad",
        protein: "8g",
        fat: "13g",
        fiber: "4g",
        carbs: "43g",
        calories: "329",
      },
      {
        size: "Large Salad",
        protein: "14g",
        fat: "19g",
        fiber: "8g",
        carbs: "67g",
        calories: "498",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Falafel___Hummus_Salad_Bowl_1-removebg-preview.webp",
    menuTitle: "Hummus Salad Bowl",
    diet_preference: "veg",
    id: 1,
    menuDesp:
      "A salad with the goodness of Multi-Grain & Chickpeas Falafel mixed with Lebanese Fattoush, Sun-Dried Tomato Hummus, Classic Hummus, and Garden Greens, served with nourishing yoghurt dressing.",
    macros: [
      {
        size: "Medium Salad",
        protein: "13g",
        fat: "19g",
        fiber: "7g",
        carbs: "32g",
        calories: "347",
      },
      {
        size: "Large Salad",
        protein: "18g",
        fat: "26g",
        fiber: "11g",
        carbs: "51g",
        calories: "499",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Quinoa___Sweet_Potato_Salad_Bowl1-removebg-preview.webp",
    menuTitle: "Quinoa & Sweet Potato Salad Bowl",
    diet_preference: "veg",
    id: 1,
    menuDesp:
      "A nutrient-packed salad made with Assorted Lettuce, Spiced Quinoa, Arugula, Bell Peppers, Mushrooms, Oven Roasted Sweet Potatoes, Beetroot, Walnut, and Parmesan Cheese, in spicy Chipotle dressing, topped with homemade Super Seeds Mix.",
    macros: [
      {
        size: "Medium Salad",
        protein: "7g",
        fat: "12g",
        fiber: "3g",
        carbs: "24g",
        calories: "228",
      },
      {
        size: "Large Salad",
        protein: "12g",
        fat: "22g",
        fiber: "6g",
        carbs: "46g",
        calories: "426",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Chicken_Protein_Power_Bowl_1-removebg-preview.webp",
    menuTitle: "Chicken Protein Power Bowl",
    diet_preference: "nonveg",
    id: 1,
    menuDesp:
      "A power bowl of Grilled Chicken, Boiled Egg White Chunks, Quinoa, Assorted Lettuce, Bell Peppers, and Gherkins in Low-Fat Honey Mustard dressing, topped with Homemade Super Seeds Mix.",
    macros: [
      {
        size: "Medium Salad",
        protein: "23g",
        fat: "12g",
        fiber: "2g",
        carbs: "14g",
        calories: "262",
      },
      {
        size: "Large Salad",
        protein: "37g",
        fat: "19g",
        fiber: "4g",
        carbs: "26g",
        calories: "446",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Caesar_Salad_Bowl_With_Cajun_Chicken_1-removebg-preview.webp",
    menuTitle: "Caesar Salad Bowl With Cajun Chicken",
    diet_preference: "nonveg",
    id: 1,
    menuDesp:
      "A delicious mix of Grilled Cajun Chicken, Assorted Lettuce, Spring Mix, Herbed Multigrain Croutons, and Parmesan Cheese in Greek Yoghurt Ranch dressing.",
    macros: [
      {
        size: "Medium Salad",
        protein: "20g",
        fat: "13g",
        fiber: "2g",
        carbs: "15g",
        calories: "256",
      },
      {
        size: "Large Salad",
        protein: "36g",
        fat: "23g",
        fiber: "3g",
        carbs: "30g",
        calories: "463",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Quinoa___Sweet_Potato_Salad_Bowl1-removebg-preview.webp",
    menuTitle: "Chicken & Quinoa Salad Bowl",
    diet_preference: "nonveg",
    id: 1,
    menuDesp:
      "A perfect mix of Assorted Lettuce, Quinoa, Grilled Chicken, Boiled Egg Whites, Arugula, Carrot Juliennes, Oven Roasted Beetroot, and Parmesan Cheese, dressed with spicy Chipotle Sauce and topped with roasted Sunflower and Pumpkin Seeds.",
    macros: [
      {
        size: "Medium Salad",
        protein: "23g",
        fat: "18g",
        fiber: "2g",
        carbs: "15g",
        calories: "315",
      },
      {
        size: "Large Salad",
        protein: "39g",
        fat: "27g",
        fiber: "4g",
        carbs: "27g",
        calories: "499",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Greek_Chicken_Salad_Bowl_1-removebg-preview.webp",
    menuTitle: "Greek Chicken Salad Bowl",
    diet_preference: "nonveg",
    id: 1,
    menuDesp:
      "A fresh salad made with Herbed Quinoa, Assorted Lettuce, Grilled Chicken, Feta Cheese, and Arugula topped with Olives, dressed in Oregano Lime Vinaigrette and topped with Roasted Melon Seeds and Walnut Mix.",
    macros: [
      {
        size: "Medium Salad",
        protein: "19g",
        fat: "22g",
        fiber: "3g",
        carbs: "13g",
        calories: "334",
      },
      {
        size: "Large Salad",
        protein: "30g",
        fat: "31g",
        fiber: "5g",
        carbs: "22g",
        calories: "498",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Paneer___Chickpeas_Tikki_with_Brown_rice-removebg-preview.webp",
    menuTitle: "Paneer & Chickpeas Tikki",
    diet_preference: "veg",
    id: 2,
    menuDesp:
      "Protein-rich Paneer and Chickpeas Tikki served with Mint Yoghurt Sauce and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "18g",
        fat: "18g",
        fiber: "7g",
        carbs: "47g",
        calories: "420",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "16g",
        fat: "16g",
        fiber: "5g",
        carbs: "49g",
        calories: "406",
      },
      {
        size: "Basmati Corn Rice",
        protein: "16g",
        fat: "15g",
        fiber: "4g",
        carbs: "63g",
        calories: "449",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Paneer__tofu_Makhani_with_brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Paneer Makhani",
    diet_preference: "veg",
    id: 2,
    menuDesp:
      "A unique combination of Grilled Paneer and Makhani Gravy served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "23g",
        fat: "25g",
        fiber: "4g",
        carbs: "37g",
        calories: "468",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "21g",
        fat: "23g",
        fiber: "3g",
        carbs: "39g",
        calories: "454",
      },
      {
        size: "Basmati Corn Rice",
        protein: "21g",
        fat: "22g",
        fiber: "2g",
        carbs: "53g",
        calories: "497",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Paneer__tofu_Makhani_with_brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Tofu Makhani",
    diet_preference: "veg",
    id: 2,
    menuDesp:
      "A delicious treat of Grilled Tofu and Makhani Gravy, served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "22g",
        fat: "19g",
        fiber: "5g",
        carbs: "40g",
        calories: "427",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "21g",
        fat: "17g",
        fiber: "3g",
        carbs: "42g",
        calories: "413",
      },
      {
        size: "Basmati Corn Rice",
        protein: "21g",
        fat: "16g",
        fiber: "2g",
        carbs: "56g",
        calories: "456",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Teriyaki_Paneer__tofu_with_brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Teriyaki Paneer",
    diet_preference: "veg",
    id: 2,
    menuDesp:
      "Scrumptious Grilled Paneer dressed in Teriyaki Sauce and served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "22g",
        fat: "28g",
        fiber: "4g",
        carbs: "35g",
        calories: "480",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "20g",
        fat: "26g",
        fiber: "2g",
        carbs: "37g",
        calories: "466",
      },
      {
        size: "Basmati Corn Rice",
        protein: "20g",
        fat: "25g",
        fiber: "1g",
        carbs: "51g",
        calories: "499",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Teriyaki_Paneer__tofu_with_brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Teriyaki Tofu",
    diet_preference: "veg",
    id: 2,
    menuDesp:
      "A healthy treat of Grilled Tofu dressed in Teriyaki Sauce, served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "21g",
        fat: "16g",
        fiber: "4g",
        carbs: "37g",
        calories: "380",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "19g",
        fat: "14g",
        fiber: "2g",
        carbs: "39g",
        calories: "367",
      },
      {
        size: "Basmati Corn Rice",
        protein: "19g",
        fat: "13g",
        fiber: "1g",
        carbs: "53g",
        calories: "410",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Malai_Paneer_tofu_with_Brown_Rice-removebg-preview.webp",
    menuTitle: "Grilled Malai Paneer",
    diet_preference: "veg",
    id: 2,
    menuDesp:
      "A perfect combination of Grilled Paneer in creamy Oats gravy, served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "23g",
        fat: "26g",
        fiber: "4g",
        carbs: "35g",
        calories: "468",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "21g",
        fat: "24g",
        fiber: "2g",
        carbs: "37g",
        calories: "454",
      },
      {
        size: "Basmati Corn Rice",
        protein: "21g",
        fat: "22g",
        fiber: "1g",
        carbs: "51g",
        calories: "497",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Malai_Paneer_tofu_with_Brown_Rice-removebg-preview.webp",
    menuTitle: "Grilled Malai Tofu",
    diet_preference: "veg",
    id: 2,
    menuDesp:
      "A perfect combination of spiced Grilled Tofu in creamy Oats gravy, served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "23g",
        fat: "16g",
        fiber: "4g",
        carbs: "40g",
        calories: "404",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "21g",
        fat: "14g",
        fiber: "3g",
        carbs: "42g",
        calories: "391",
      },
      {
        size: "Basmati Corn Rice",
        protein: "21g",
        fat: "13g",
        fiber: "1g",
        carbs: "56g",
        calories: "434",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Paneer__tofu_with_brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Peri Peri Paneer",
    diet_preference: "veg",
    id: 2,
    menuDesp:
      "Delicious Grilled Paneer served with Peri-Peri dip and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "22g",
        fat: "29g",
        fiber: "4g",
        carbs: "30g",
        calories: "469",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "20g",
        fat: "27g",
        fiber: "2g",
        carbs: "32g",
        calories: "456",
      },
      {
        size: "Basmati Corn Rice",
        protein: "21g",
        fat: "26g",
        fiber: "1g",
        carbs: "46g",
        calories: "499",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Paneer__tofu_with_brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Peri Peri Tofu",
    menuDesp:
      "Delicious Grilled Tofu served with Peri-Peri Sauce and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "veg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "21g",
        fat: "20g",
        fiber: "4g",
        carbs: "33g",
        calories: "399",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "20g",
        fat: "18g",
        fiber: "3g",
        carbs: "35g",
        calories: "386",
      },
      {
        size: "Basmati Corn Rice",
        protein: "20g",
        fat: "17g",
        fiber: "1g",
        carbs: "49g",
        calories: "429",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Paneer___tofu_with_Mint_Sauce_Brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Paneer with Mint Sauce",
    menuDesp:
      "Spiced Grilled Paneer served with Mint Sauce and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "veg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "23g",
        fat: "24g",
        fiber: "4g",
        carbs: "30g",
        calories: "430",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "21g",
        fat: "22g",
        fiber: "2g",
        carbs: "33g",
        calories: "416",
      },
      {
        size: "Basmati Corn Rice",
        protein: "21g",
        fat: "21g",
        fiber: "1g",
        carbs: "47g",
        calories: "459",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Paneer___tofu_with_Mint_Sauce_Brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Tofu with Mint Sauce",
    menuDesp:
      "Spiced Grilled Tofu served with Mint Sauce and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "veg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "22g",
        fat: "13g",
        fiber: "4g",
        carbs: "32g",
        calories: "330",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "20g",
        fat: "11g",
        fiber: "2g",
        carbs: "34g",
        calories: "317",
      },
      {
        size: "Basmati Corn Rice",
        protein: "20g",
        fat: "10g",
        fiber: "1g",
        carbs: "48g",
        calories: "360",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Chicken_Makhani_with_brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Chicken Makhani",
    menuDesp:
      "A unique combination of Grilled Chicken in Makhani Gravy served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "30g",
        fat: "22g",
        fiber: "5g",
        carbs: "34g",
        calories: "457",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "28g",
        fat: "20g",
        fiber: "3g",
        carbs: "37g",
        calories: "444",
      },
      {
        size: "Basmati Corn Rice",
        protein: "28g",
        fat: "19g",
        fiber: "2g",
        carbs: "50g",
        calories: "487",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Malai_Chicken_with_Brown_Rice-removebg-preview.webp",
    menuTitle: "Grilled Malai Chicken",
    menuDesp:
      "A perfect combination of spiced Grilled Chicken and creamy Oats gravy served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "31g",
        fat: "20g",
        fiber: "4g",
        carbs: "37g",
        calories: "461",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "30g",
        fat: "18g",
        fiber: "3g",
        carbs: "40g",
        calories: "447",
      },
      {
        size: "Basmati Corn Rice",
        protein: "30g",
        fat: "17g",
        fiber: "1g",
        carbs: "54g",
        calories: "490",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Teriyaki_Chicken_Brown_Rice-removebg-preview.webp",
    menuTitle: "Grilled Teriyaki Chicken",
    menuDesp:
      "Juicy Grilled Chicken served with Teriyaki Sauce and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "29g",
        fat: "20g",
        fiber: "4g",
        carbs: "36g",
        calories: "443",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "27g",
        fat: "18g",
        fiber: "3g",
        carbs: "38g",
        calories: "430",
      },
      {
        size: "Basmati Corn Rice",
        protein: "27g",
        fat: "17g",
        fiber: "1g",
        carbs: "52g",
        calories: "473",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Cajun_Chicken_brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Cajun Chicken",
    menuDesp:
      "A mix of juicy Grilled Cajun Chicken and healthy Spring Greens served with Spicy Sauce and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "30g",
        fat: "24g",
        fiber: "4g",
        carbs: "30g",
        calories: "454",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "28g",
        fat: "22g",
        fiber: "3g",
        carbs: "32g",
        calories: "441",
      },
      {
        size: "Basmati Corn Rice",
        protein: "28g",
        fat: "21g",
        fiber: "1g",
        carbs: "46g",
        calories: "483",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Chicken_with_Mint_Sauce_Brown_Rice-removebg-preview.webp",
    menuTitle: "Grilled Chicken with Mint Sauce",
    menuDesp:
      "Grilled Chicken marinated in Mint Sauce served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "30g",
        fat: "16g",
        fiber: "4g",
        carbs: "29g",
        calories: "386",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "28g",
        fat: "15g",
        fiber: "2g",
        carbs: "32g",
        calories: "373",
      },
      {
        size: "Basmati Corn Rice",
        protein: "28g",
        fat: "13g",
        fiber: "1g",
        carbs: "46g",
        calories: "416",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Chicken_Brown_Rice-removebg-preview.webp",
    menuTitle: "Grilled Peri Peri Chicken",
    menuDesp:
      "Juicy and delicious Grilled Chicken served with Peri-Peri Sauce and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "30g",
        fat: "24g",
        fiber: "4g",
        carbs: "30g",
        calories: "455",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "28g",
        fat: "22g",
        fiber: "3g",
        carbs: "32g",
        calories: "442",
      },
      {
        size: "Basmati Corn Rice",
        protein: "28g",
        fat: "21g",
        fiber: "1g",
        carbs: "46g",
        calories: "485",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Masala_Fish_with_brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Masala Fish",
    menuDesp:
      "Spiced Grilled Fish served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "30g",
        fat: "12g",
        fiber: "4g",
        carbs: "31g",
        calories: "349",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "28g",
        fat: "10g",
        fiber: "3g",
        carbs: "33g",
        calories: "336",
      },
      {
        size: "Basmati Corn Rice",
        protein: "28g",
        fat: "9g",
        fiber: "2g",
        carbs: "47g",
        calories: "379",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Chicken_Brown_Rice-removebg-preview.webp",
    menuTitle: "Grilled Peri Peri Fish",
    menuDesp:
      "Grilled Fish served with Peri-Peri Sauce and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "29g",
        fat: "14g",
        fiber: "4g",
        carbs: "30g",
        calories: "363",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "27g",
        fat: "12g",
        fiber: "2g",
        carbs: "32g",
        calories: "350",
      },
      {
        size: "Basmati Corn Rice",
        protein: "27g",
        fat: "11g",
        fiber: "1g",
        carbs: "46g",
        calories: "393",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Fish_with_Mint_Sauce_and_Brown_Rice-removebg-preview.webp",
    menuTitle: "Grilled Fish with Mint Sauce",
    menuDesp:
      "Grilled Fish marinated with Mint sauce, served with a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "30g",
        fat: "7g",
        fiber: "4g",
        carbs: "30g",
        calories: "309",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "28g",
        fat: "6g",
        fiber: "3g",
        carbs: "33g",
        calories: "296",
      },
      {
        size: "Basmati Corn Rice",
        protein: "28g",
        fat: "4g",
        fiber: "1g",
        carbs: "47g",
        calories: "339",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Grilled_Teriyaki_Fish_with_Brown_rice-removebg-preview.webp",
    menuTitle: "Grilled Teriyaki Fish",
    menuDesp:
      "A nutritious treat of Grilled Fish served with Teriyaki Sauce and a choice of Spiced Quinoa/Peas & Cilantro Brown Rice/Basmati Corn Rice & a portion of Salad.",
    diet_preference: "nonveg",
    id: 2,
    macros: [
      {
        size: "Spiced Quinoa",
        protein: "28g",
        fat: "10g",
        fiber: "4g",
        carbs: "35g",
        calories: "353",
      },
      {
        size: "Peas & Cilantro Brown Rice",
        protein: "27g",
        fat: "9g",
        fiber: "2g",
        carbs: "38g",
        calories: "339",
      },
      {
        size: "Basmati Corn Rice",
        protein: "27g",
        fat: "7g",
        fiber: "1g",
        carbs: "52g",
        calories: "382",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Berry_Berry_Blast_Smoothie_Bowl_2-removebg-preview.webp",
    menuTitle: "Berry Berry Blast Smoothie Bowl",
    menuDesp:
      "Cranberries, Blueberries, Super Seeds, Banana and Dates blended in Toned Milk and topped with Banana, Pumpkin Seeds, Chia Seeds, Flax Seeds & Mint.",
    diet_preference: "veg",
    id: 3,
    macros: [
      {
        size: "",
        protein: "13g",
        fat: "12g",
        fiber: "4g",
        carbs: "86g",
        calories: "495",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Power_House_Smoothie_Bowl-removebg-preview.webp",
    menuTitle: "Power House Smoothie Bowl",
    menuDesp:
      "Energise yourself with Avocado, Spinach, Spirulina Powder, Moringa, Banana, Greek Yoghurt, Almond Milk, Dates, Granola and Super Seeds Mix blended in Toned Milk.",
    diet_preference: "veg",
    id: 3,
    macros: [
      {
        size: "",
        protein: "11g",
        fat: "15g",
        fiber: "4g",
        carbs: "77g",
        calories: "491",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Mango_Black_Magic_Smoothie_Bowl-removebg-preview.webp",
    menuTitle: "Mango Black Magic Smoothie Bowl",
    menuDesp:
      "A bowl of freshness with Mangoes, Moringa, Banana, and Activated Charcoal blended in Toned Milk, topped with Granola, Pumpkin Seeds and Chia Seeds.",
    diet_preference: "veg",
    id: 3,
    macros: [
      {
        size: "",
        protein: "14g",
        fat: "12g",
        fiber: "3g",
        carbs: "74g",
        calories: "462",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Beat_The_Beet_Smoothie_Bowl.webp",
    menuTitle: "Beat The Beet Smoothie Bowl",
    menuDesp:
      "The freshness of Beetroot, Cranberry, Banana, Dates, and Indian Gooseberry blended in Toned Milk, topped with Granola, Pumpkin Seeds and Chia Seeds.",
    diet_preference: "veg",
    id: 3,
    macros: [
      {
        size: "",
        protein: "11g",
        fat: "9g",
        fiber: "5g",
        carbs: "85g",
        calories: "470",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Mango_Thunder_Smoothie_Bowl-removebg-preview.webp",
    menuTitle: "Mango Thunder Smoothie Bowl",
    menuDesp:
      "Unexpected flavours of fresh Mango, Banana, Turmeric, and Dates blended in Toned Milk, topped with Chia Seeds, Sunflower Seeds and Pomegranate Seeds.",
    diet_preference: "veg",
    id: 3,
    macros: [
      {
        size: "",
        protein: "9g",
        fat: "7g",
        fiber: "4g",
        carbs: "73g",
        calories: "400",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Blooming_Red_Juice-removebg-preview.webp",
    menuTitle: "ABC Juice",
    menuDesp:
      "A nutritious blend of antioxidant-rich Apples, Beetroots, and Carrots.",
    diet_preference: "veg",
    id: 4,
    macros: [
      {
        size: "",
        protein: "5g",
        fat: "2g",
        fiber: "6g",
        carbs: "67g",
        calories: "303",
      },
    ],
  },

  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Immune_Booster_Juice-removebg-preview.webp",
    menuTitle: "Immune Booster Juice",
    diet_preference: "veg",
    id: 4,
    menuDesp:
      "An immunity booster made of Carrots, Oranges, Ginger, and a pinch of Turmeric.",
    macros: [
      {
        size: "",
        protein: "4g",
        fat: "1g",
        fiber: "3g",
        carbs: "49g",
        calories: "220",
      },
    ],
  },

  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Pink_Chia_Juice-removebg-preview.webp",
    menuTitle: "Pink Chia Juice",
    diet_preference: "veg",
    id: 4,
    menuDesp:
      "A nutritious blend of Pomegranate, Pineapple, and Lime juice with Chia Seed.",
    macros: [
      {
        size: "",
        protein: "3g",
        fat: "1g",
        fiber: "7g",
        carbs: "42g",
        calories: "187",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Blooming_Red_Juice-removebg-preview.webp",
    menuTitle: "Blooming Red Juice",
    diet_preference: "veg",
    id: 4,
    menuDesp: "A hydrating blend of Beetroot, Pomegranate, and Carrot.",
    macros: [
      {
        size: "",
        protein: "8g",
        fat: "1g",
        fiber: "10g",
        carbs: "63g",
        calories: "293",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Green_Love_Juice-removebg-preview.webp",
    menuTitle: "Green Love Juice",
    diet_preference: "veg",
    id: 4,
    menuDesp:
      "Refresh yourself with the freshness of Apple, Spinach, Cucumber, Ginger, Lemon, and Moringa.",
    macros: [
      {
        size: "",
        protein: "2g",
        fat: "1g",
        fiber: "3g",
        carbs: "28g",
        calories: "136",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Immune_Booster_Juice-removebg-preview.webp",
    menuTitle: "Forever Young Juice",
    diet_preference: "veg",
    id: 4,
    menuDesp:
      "A nourishing mix of Carrots, Apple, Pineapple, Orange, Basil leaves and Chia Seeds.",
    macros: [
      {
        size: "",
        protein: "4g",
        fat: "2g",
        fiber: "6g",
        carbs: "70g",
        calories: "315",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Paneer_Veg_Teriyaki_Meal.png",
    menuTitle: "Paneer & Veg Teriyaki Meal Bowl",
    menuDesp:
      "Healthy fried rice prepared with Brown Rice and served with Paneer and Veggies tossed in Teriyaki Sauce.",
    diet_preference: "veg",
    id: 5,
    macros: [
      {
        size: "",
        protein: "16.4g",
        fat: "16g",
        fiber: "6.1g",
        carbs: "55.1g",
        calories: "431",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Paneer_Kadhai_M.png",
    menuTitle: "Paneer Kadhai Meal Bowl",
    diet_preference: "veg",
    id: 5,
    menuDesp:
      "“Tender Paneer cubes with Bell Peppers and Onion tossed in a medium spicy kadhai gravy served with Jeera Green Pea Brown Rice.”",
    macros: [
      {
        size: "",
        protein: "19.7g",
        fat: "19g",
        fiber: "6.1g",
        carbs: "51.8g",
        calories: "465",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Veg_Makkhanwala_Meal.png",
    menuTitle: "Veg Makhanwala Meal Bowl",
    diet_preference: "veg",
    id: 5,
    menuDesp:
      "“Assorted steamed Vegetables tossed in a flavorful Makhani gravy served with Jeera Green Pea Brown Rice.”",
    macros: [
      {
        size: "",
        protein: "18.6g",
        fat: "11g",
        fiber: "10.5g",
        carbs: "57.9g",
        calories: "407",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Asian_Stir_Fried_Veg_Meal-removebg-preview.png",
    menuTitle: "Asian Stir-Fried Veg Meal Bowl",
    diet_preference: "veg",
    id: 5,
    menuDesp:
      "“Healthy fried rice prepared with Brown Rice served with Soya Chunks and Veggies tossed in homemade stir-fry Sauce.”",
    macros: [
      {
        size: "",
        protein: "16g",
        fat: "10g",
        fiber: "9g",
        carbs: "67g",
        calories: "419",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/veg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Asian_Stir_Fried_Veg_Meal-removebg-preview.png",
    menuTitle: "Asian Stir-Fried Veg Meal Bowl",
    diet_preference: "veg",
    id: 5,
    menuDesp:
      "Healthy fried rice prepared with Brown Rice served with Soya Chunks and Veggies tossed in homemade stir-fry Sauce.",
    macros: [
      {
        size: "",
        protein: "16g",
        fat: "10g",
        fiber: "9g",
        carbs: "67g",
        calories: "419",
      },
    ],
  },

  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Chicken___Veg_Teriyaki_Meal.png",
    menuTitle: "Chicken & Veg Teriyaki Meal Bowl",
    diet_preference: "nonveg",
    id: 5,
    menuDesp:
      "“Healthy fried rice prepared with Brown Rice served with grilled Chicken cubes, and Veggies tossed in Teriyaki Sauce.”",
    macros: [
      {
        size: "",
        protein: "19.8g",
        fat: "17.3g",
        fiber: "5.6g",
        carbs: "47.9g",
        calories: "427",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Chicken_Kadhai_Meal.png",
    menuTitle: "Chicken Kadhai Meal Bowl",
    diet_preference: "nonveg",
    id: 5,
    menuDesp:
      "“Smoky grilled Chicken cubes with Bell Peppers and Onion tossed in a medium spicy kadhai gravy served with Jeera Green Pea Brown Rice.”",
    macros: [
      {
        size: "",
        protein: "21.6g",
        fat: "19.1g",
        fiber: "6.2g",
        carbs: "44.9g",
        calories: "442",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Chicken_Veg_Paprika_Meal.png",
    menuTitle: "Chicken & Veg Paprika Meal Bowl",
    diet_preference: "nonveg",
    id: 5,
    menuDesp:
      "“Mexican style Bell Pepper Brown Rice served with grilled Chicken cubes, and Veggies tossed in Chilli Paprika sauce.”",
    macros: [
      {
        size: "",
        protein: "21.5g",
        fat: "19.7g",
        fiber: "6.3g",
        carbs: "44.5g",
        calories: "440",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Chicken_Mushroom_pepper_Meal.png",
    menuTitle: "Chicken Mushroom Pepper Meal Bowl",
    diet_preference: "nonveg",
    id: 5,
    menuDesp:
      "“Mexican style Bell Pepper Brown Rice served with grilled Chicken cubes, and Veggies tossed in Mushroom Pepper sauce.”",
    macros: [
      {
        size: "",
        protein: "21.3g",
        fat: "17.1g",
        fiber: "6.5g",
        carbs: "45.1g",
        calories: "420",
      },
    ],
  },
  {
    menuImgSrc: "https://toneopeats.com/public/img/nonveg.svg",
    mProdImgSrc:
      "https://toneopeats.com/public/food_images/Asian_Stir_Fried_Chicken_Veg_Meal.png",
    menuTitle: "Asian Stir-Fried Chicken & Veg Meal Bowl",
    diet_preference: "nonveg",
    id: 5,
    menuDesp:
      "“Healthy fried rice prepared with Brown Rice served with grilled Chicken cubes and Veggies tossed in homemade Stir-Fry Sauce.”",
    macros: [
      {
        size: "",
        protein: "20.3g",
        fat: "18.4g",
        fiber: "5.8g",
        carbs: "59.4g",
        calories: "485",
      },
    ],
  },
];

export default saladDetails;
