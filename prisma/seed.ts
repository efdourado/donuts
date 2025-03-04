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
        logoUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/Golden%20Arches.png.coredownload.png",
        bannerUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/Thumb_OhioStateUniversity.png.coredownload.png",
    }, });

    const dealsCategory = await tx.category.create({
      data: {
        name: "Deals",
        restaurantId: restaurant.id,
    }, });
    await tx.product.createMany({
      data: [
        {
          name: "4 pc. Chicken McNugget® Happy Meal®",
          description: "Pieces of chicken, covered in crispy bread crumbs, and a drink will serve as a great meal for the youngest visitors of McDonald’s!",
          price: 28.4,
          imageUrl:"https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202103_7002_4McNuggetsHappyMeal_AppleSlices_WhiteMilkJug_Left_2000x2000.png.coredownload.png",
          categoryId: dealsCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Chicken McNuggets (4 pc);",
            "A toy or a book of your choice;",
            "Small fries / Cucumber Sticks / Melon fruit bag;",
            "A drink of your choice.",
    ], }, ], });

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
          price: 10.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/8932_MediumFries.uuid.png.coredownload.png",
          categoryId: sidesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "4 pc. Chicken McNuggets®",
          description: "Mechanically separated chicken with an appetizing thick coating will appeal to everyone, who wants to try a chicken dish from McDonald’s",
          ingredients: [],
          price: 6.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202006_0483_4McNuggets_Stacked_2000x2000.png.coredownload.png",
          categoryId: sidesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Apple Slices",
          description: "McDonald's Apple Slices are a wholesome, tasty side made from real apples. Specially selected varieties mean our apple slices are always crisp and juicy, making for a tasty snack with 15 calories per labelled serving. Enjoy it as a Snack or Side to your meal!",
          ingredients: [],
          price: 4.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202002_2794_AppleSlices_NoBag_2000x2000.png.coredownload.png",
          categoryId: sidesCategory.id,
          restaurantId: restaurant.id,
    }, ], });

    const beveragesCategory = await tx.category.create({
      data: {
        name: "Beverages",
        restaurantId: restaurant.id,
    }, });
    await tx.product.createMany({
      data: [
        {
          name: "Coke®",
          description: "Enjoy your favourite McDonald's meal with a Coke. The original, refreshing ice-cold cola that goes well with your meal and completes the experience.",
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
          name: "Iced Coffee",
          description: "The McCafé Iced Coffee features 100% Arabica beans, cream and your choice of flavor like Caramel, French Vanilla and Sugar-Free French Vanilla.* A fan of black coffee? Get it without the sugar or cream to refresh your mornings with a cool Black Iced Coffee.",
          ingredients: [],
          price: 23.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201906_1212_MediumIcedCoffee_Glass_A1_2000x2000.png.coredownload.png",
          categoryId: coffeesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Iced French Vanilla Latte",
          description: "Cool down with a McCafé® Iced French Vanilla Latte, made with Rainforest Alliance Certified™ espresso. It features bold espresso, whole milk and sweet French Vanilla syrup.",
          ingredients: [],
          price: 23.9,
          imageUrl: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201906_0187_MediumIcedFrenchVanillaLatte_Glass_A1_2000x2000.png.coredownload.png",
          categoryId: coffeesCategory.id,
          restaurantId: restaurant.id,
},] });});};

main()
  .catch((e) => { throw e; })
  .finally(async () => { await prismaClient.$disconnect(); });