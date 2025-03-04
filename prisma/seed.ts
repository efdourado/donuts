const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.restaurant.deleteMany();
    const restaurant = await tx.restaurant.create({
      data: {
        name: "McDonald's Model",
        slug: "mcdonaldsmodel",
        description: "Taste the Difference",
        logoUrl: "/logo-mcdonalds.png",
        bannerUrl: "/banner-mcdonalds.jpg",
    }, });

    const breakfastCategory = await tx.category.create({
      data: {
        name: "Breakfast",
        restaurantId: restaurant.id,
    }, });
    await tx.product.createMany({
      data: [
        {
          name: "Hotcakes",
          description: "If you love hot pancakes, you've got to try McDonald's Hotcakes with a side of real butter and sweet maple flavored Hotcake syrup.",
          ingredients: [
            "3 Hotcakes;",
            "Hotcake Syrup;",
            "Salted Whipped Butter.",
          ],
          price: 6.5,
          imageUrl:"https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202208_0031_3HotCakes_2000x2000.png.coredownload.png",
          categoryId: breakfastCategory.id,
          restaurantId: restaurant.id,
  }, ], });


    const dealsCategory = await tx.category.create({
      data: {
        name: "Deals",
        restaurantId: restaurant.id,
    }, });
    await tx.product.createMany({
      data: [
        {
          name: "4 pc. Chicken McNugget® Happy Meal®",
          description: "Pieces of chicken, covered in crispy bread crumbs, and a drink will serve as a great meal for the youngest visitors of McDonald's!",
          ingredients: [
            "Chicken McNuggets (4 pc);",
            "A toy or a book of your choice;",
            "Small fries / Cucumber Sticks / Melon fruit bag;",
            "A drink of your choice.",
          ],
          price: 28.4,
          imageUrl:"https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202103_7002_4McNuggetsHappyMeal_AppleSlices_WhiteMilkJug_Left_2000x2000.png.coredownload.png",
          categoryId: dealsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Big Breakfast® with Hotcakes",
          description: "McDonald's Big Breakfast® with Hotcakes satisfies with both sweet and savory breakfast favorites. Fill up with a warm Biscuit, savory hot Sausage, fluffy scrambled Eggs, crispy Hash Browns, and golden brown Hotcakes with a side of real butter and the sweet flavor of maple.",
          ingredients: [
            "Hotcakes;",
            "Scrambled Eggs;",
            "Biscuit;",
            "Hotcake Syrup;",
            "Hash Browns;",
            "Sausage Patty;",
            "Salted Whipped Butter;",
            "Salted Butter;",
            "Clarified Butter.",
          ],
          price: 43.8,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202208_3590_BigBreakfast_HotCakes_2000x2000.png.coredownload.png",
          categoryId: dealsCategory.id,
          restaurantId: restaurant.id,
    }, ], });

    const burguersCategory = await tx.category.create({
      data: {
        name: "Burgers",
        restaurantId: restaurant.id,
    }, });
    await tx.product.createMany({
      data: [
        {
          name: "Big Mac",
          description: "This double layered burger is a McDonald's classic! Two perfectly fried patties with a special sauce attract those who have tried this dish at least once, and even those who have never heard of it before!",
          ingredients: [
            "Sesame bun;",
            "Beef patties (2 pc);",
            "Iceberg lettuce;",
            "Big Mac sauce;",
            "Slice of cheddar cheese;",
            "Dill Pickle slices;",
            "Onions.",
          ],
          price: 18.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202302_0005-999_BigMac_2000x2000.png.coredownload.png",
          categoryId: burguersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Double Quarter Pounder® with Cheese",
          description: "If you want to enjoy a simple, but big burger with a lot of meat, then this dish is the one you should order! An enhanced version of the original double cheeseburger will appeal to every visitor of McDonald's!",
          ingredients: [
            "Beef patties (2 pc);",
            "Sesame Bun;",
            "Méquinese",
            "Slices of cheddar cheese (2 pc);",
            "Onions;",
            "Dill Pickle slices;",
            "Ketchup & Mustard.",
          ],
          price: 34.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202201_4308-005_DoubleQuarterPounderCheeseDeluxe_Shredded_2000x2000.png.coredownload.png",
          categoryId: burguersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Double Bacon Quarter Pounder® with Cheese & Bacon",
          description: "No description",
          ingredients: [],
          price: 36.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202201_4333-005_DoubleQuarterPounderBaconCheese_2000x2000.png.coredownload.png",
          categoryId: burguersCategory.id,
          restaurantId: restaurant.id,
    }, ], });

    const sidesCategory = await tx.category.create({
      data: {
        name: "Sides",
        restaurantId: restaurant.id,
    }, });
    await tx.product.createMany({
      data: [
        {
          name: "Fries",
          description: "Thin deep-fried potato stripes are one of the most popular fast-food items, which are loved by absolutely everyone. The main advantage of this dish is that it goes perfectly with any sauce, so you can experiment with its taste!",
          ingredients: [],
          price: 2.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/8932_MediumFries.uuid.png.coredownload.png",
          categoryId: sidesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "4 pc. Chicken McNuggets®",
          description: "Mechanically separated chicken with an appetizing thick coating will appeal to everyone, who wants to try a chicken dish from McDonald’s",
          ingredients: [],
          price: 3.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202006_0483_4McNuggets_Stacked_2000x2000.png.coredownload.png",
          categoryId: sidesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Apple Slices",
          description: "McDonald's Apple Slices are a wholesome, tasty side made from real apples. Specially selected varieties mean our apple slices are always crisp and juicy, making for a tasty snack with 15 calories per labelled serving. Enjoy it as a Snack or Side to your meal!",
          ingredients: [],
          price: 1.5,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202002_2794_AppleSlices_NoBag_2000x2000.png.coredownload.png",
          categoryId: sidesCategory.id,
          restaurantId: restaurant.id,
    }, ], });

    const beveragesCategory = await tx.category.create({
      data: {
        name: "Beverages & Milkshakes",
        restaurantId: restaurant.id,
    }, });
    await tx.product.createMany({
      data: [
        {
          name: "Coke®",
          description: "The original, refreshing ice-cold cola that goes well with your meal and completes the experience.",
          ingredients: [],
          price: 6.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202112_0521_MediumCoke_Glass_2000x2000.png.coredownload.png",
          categoryId: beveragesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Sprite®",
          description: "The great taste of crisp, clear, Sprite. Made with 100% natural lemon-lime flavours, with no colours and no caffeine.",
          ingredients: [],
          price: 8.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202212_0721_MediumSprite_Glass_2000x2000.png.coredownload.png",
          categoryId: beveragesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Chocolate Shake",
          description: "Our chocolate shake recipe features delicious soft serve and chocolate syrup, finished with whipped light cream.",
          ingredients: [
            "Vanilla Reduced Fat Ice Cream;",
            "Chocolate Shake Syrup;",
            "Whipped Light Cream.",
          ],
          price: 9.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/1509_MediumChocolateShake_Glass_A1.uuid.png.coredownload.png",
          categoryId: beveragesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "DASANI® Bottled Water",
          description: "Quench your thirst with a bottle of cool and refreshing Dasani water. Add a bottle to your meal order today!",
          ingredients: [],
          price: 2.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202106_5474_DasaniBottledWater_2000x2000.png.coredownload.png",
          categoryId: beveragesCategory.id,
          restaurantId: restaurant.id,
    }, ], });

    const saladsCategory = await tx.category.create({
      data: {
        name: "Salads",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Southwest Style Salad with Chicken",
          description: "No description",
          ingredients: [],
          price: 23.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201907_3642_SouthwestSalad_Grilled_2000x2000.png.coredownload.png",
          categoryId: saladsCategory.id,
          restaurantId: restaurant.id,
    }, ] });

    const coffeesCategory = await tx.category.create({
      data: {
        name: "McCafé® Coffees",
        restaurantId: restaurant.id,
    }, });
    await tx.product.createMany({
      data: [
        {
          name: "Americano",
          description: "Our simple yet satisfying Americano is made with hot water poured over our Rainforest Alliance Certified™ espresso.",
          ingredients: [],
          price: 2.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201906_1318_MediumAmericano_Glass_A1_HL_2000x2000.png.coredownload.png",
          categoryId: coffeesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Iced Coffee",
          description: "The McCafé Iced Coffee features 100% Arabica beans, cream and your choice of flavor like Caramel, French Vanilla and Sugar-Free French Vanilla.* A fan of black coffee? Get it without the sugar or cream to refresh your mornings with a cool Black Iced Coffee.",
          ingredients: [
            "Brewed Coffee;",
            "Ice;",
            "Light Cream;",
            "Liquid Sugar.",
          ],
          price: 23.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201906_1212_MediumIcedCoffee_Glass_A1_2000x2000.png.coredownload.png",
          categoryId: coffeesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Iced French Vanilla Latte",
          description: "Cool down with a McCafé® Iced French Vanilla Latte, made with Rainforest Alliance Certified™ espresso. It features bold espresso, whole milk and sweet French Vanilla syrup.",
          ingredients: [
            "Whole Milk;",
            "Ice;",
            "French Vanilla Syrup",
            "Water;",
            "Espresso.",
          ],
          price: 21.6,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201906_0187_MediumIcedFrenchVanillaLatte_Glass_A1_2000x2000.png.coredownload.png",
          categoryId: coffeesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Iced Caramel Macchiato",
          description: "The McDonald's Iced Caramel Macchiato recipe features bold, rich and dark-roasted espresso and buttery caramel syrup with extra caramel drizzle. Served with whole milk, it's almost similar to an Iced Caramel Latte but with an extra buttery caramel drizzle.",
          ingredients: [
            "Whole Milk;",
            "Ice;",
            "Caramel Syrup;",
            "Water;",
            "Espresso;",
            "Caramel Drizzle.",
          ],
          price: 16.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201906_2743_MediumIcedCaramelMacchiato_Glass_A1_2000x2000.png.coredownload.png",
          categoryId: coffeesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Caramel Frappé",
          description: "The McCafé Caramel Frappé recipe blends rich caramel flavor with a hint of coffee, blended with ice and is topped with whipped light cream.",
          ingredients: [
            "Ice;",
            "Caramel Coffee Frappe Base",
            "Whipped Light Cream",
            "Caramel Drizzle.",
          ],
          price: 26.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201906_2842_MediumCaramelFrappe_Glass_A1_2000x2000.png.coredownload.png",
          categoryId: coffeesCategory.id,
          restaurantId: restaurant.id,
    }, ] });

    const sweetsCategory = await tx.category.create({
      data: {
        name: "Sweets & Treats",
        restaurantId: restaurant.id,
    }, });
    await tx.product.createMany({
      data: [
        {
          name: "Chocolate Cookies",
          description: "An amazingly delicious, soft and chewy Chocolate Cookie. Our recipe features a perfectly warm, soft baked cookie loaded with gooey chocolate chips. Enjoy it on its own as a snack or pair it with your favorite McDonald's meal.",
          ingredients: [],
          price: 1.6,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202004_1852_ChocolateChipCookie_Broken_2000x2000.png.coredownload.png",
          categoryId: sweetsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Baked Apple Pie",
          description: "McDonald's Baked Apple Pie recipe features 100% American-grown apples, and a lattice crust baked to perfection and topped with sprinkled sugar.",
          ingredients: [],
          price: 8.2,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202004_0706_BakedApplePie_Broken_2000x2000.png.coredownload.png",
          categoryId: sweetsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Vanilla Cone",
          description: "Our Vanilla Cone features creamy vanilla soft serve in a crispy cone. It's the perfect sweet treat in addition to any McDonald's meal or on its own.",
          ingredients: [],
          price: 3.8,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/0366_VanillaCone.uuid.png.coredownload.png",
          categoryId: sweetsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Caramel Sundae",
          description: "This Caramel Sundae combines creamy vanilla soft serve and warm, buttery caramel topping.",
          ingredients: [],
          price: 8.6,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/0345_CaramelSundae.uuid.png.coredownload.png",
          categoryId: sweetsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "OREO® McFlurry®",
          description: "The McDonald's McFlurry® with OREO® Cookies is a popular combination of creamy vanilla soft serve with crunchy pieces of OREO® cookies! ",
          ingredients: [],
          price: 12.8,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/3832_OreoMcFlurry.uuid%20(1).png.coredownload.png",
          categoryId: sweetsCategory.id,
          restaurantId: restaurant.id,
}, ] }); });};

main()
  .catch((e) => { throw e; })
  .finally(async () => { await prismaClient.$disconnect(); });