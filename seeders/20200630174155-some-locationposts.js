"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "locationposts",
      [
        {
          title: "Bromo Tengger Semeru National Park",
          description:
            "Home to indonesias most active volcano's. The combination of Mount Semeru erupting every 20 or so minutes with Mount Bromo constantly emitting smoke makes for a breathtaking view",
          imageUrl:
            "https://backpackeradvice.com/img/semeru-trekking-bromo-tour.jpg",
          adress: "Bromo Tengger Semeru National Park, East Java, Indonesia",
          latitude: -8.021875,
          longitude: 112.952438,
          likes: 71,
          userId: 3,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Raja Ampat archipelago",
          description:
            "this breathtaking collection of islands near Papua has some of the best diving and snormkel spots in the world! It is a collection of over 1.500 small islands and shoals surrounding the four main islands. While its a bit out of the way, its a hidden gem for sure! 10/10 would recommend to any snorkel or diving fanatic",
          imageUrl:
            "https://backpackeradvice.com/img/Papua-Barat-Raja-Ampat.jpg",
          adress: "Raja Ampat, Papua Barat",
          latitude: -1.091515,
          longitude: 130.877859,
          likes: 70,
          countryId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Yogyakarta",
          description:
            "Yigyakarta is a lively town in Central Java. The town has two of the most specactular temples in all of Indonesia, Borobudur and Prambanan. It is mostly a packpackers town so there is plenty of night-life as bonus. A must visit for any fan of architecture and culture.",
          imageUrl: "https://backpackeradvice.com/img/Borobudur.jpg",
          adress:
            "Jalan Yogyakarta-Solo, Ceper, Klaten, Central Java 57475, Indonesia",
          latitude: -7.669271,
          longitude: 110.658672,
          likes: 85,
          countryId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mentawai Island",
          description:
            "A quiet and remote island that is not that far from the mainland. A paradise for surfers from all over the world as the strong winds and unpredictable curretns prove to be a rite of passage for any surfer. Much of the island is still covered in tropical rainforest and its rich in Bio-diversity. ",
          imageUrl: "https://static.tripzilla.com/thumb/d/8/728_620x.jpg",
          adress: "Mentawai Island, Indonesia",
          latitude: -1.426001,
          longitude: 98.924534,
          likes: 82,
          countryId: 1,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("locationposts", null, {});
  },
};
