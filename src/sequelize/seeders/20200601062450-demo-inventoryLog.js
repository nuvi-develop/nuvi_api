"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("inventory_logs", [
      {
        id: 1,
        record_date: "2020-05-13 11:29:09",
        order: 52,
        use: 73,
        stock: 2,
        inventory_ingredient_id: 3
      },
      {
        id: 2,
        record_date: "2020-05-18 17:14:31",
        order: 82,
        use: 31,
        stock: 24,
        inventory_ingredient_id: 1
      },
      {
        id: 3,
        record_date: "2020-05-26 09:07:20",
        order: 15,
        use: 81,
        stock: 16,
        inventory_ingredient_id: 8
      },
      {
        id: 4,
        record_date: "2020-05-16 15:53:11",
        order: 67,
        use: 88,
        stock: 73,
        inventory_ingredient_id: 10
      },
      {
        id: 5,
        record_date: "2020-05-26 13:04:09",
        order: 52,
        use: 31,
        stock: 34,
        inventory_ingredient_id: 6
      },
      {
        id: 6,
        record_date: "2020-05-14 10:33:12",
        order: 23,
        use: 9,
        stock: 46,
        inventory_ingredient_id: 6
      },
      {
        id: 7,
        record_date: "2020-05-13 23:41:15",
        order: 55,
        use: 5,
        stock: 34,
        inventory_ingredient_id: 5
      },
      {
        id: 8,
        record_date: "2020-05-12 21:00:13",
        order: 67,
        use: 44,
        stock: 49,
        inventory_ingredient_id: 9
      },
      {
        id: 9,
        record_date: "2020-05-27 11:37:10",
        order: 99,
        use: 98,
        stock: 11,
        inventory_ingredient_id: 3
      },
      {
        id: 10,
        record_date: "2020-05-11 02:26:40",
        order: 19,
        use: 43,
        stock: 47,
        inventory_ingredient_id: 4
      },
      {
        id: 11,
        record_date: "2020-05-20 22:11:34",
        order: 90,
        use: 75,
        stock: 27,
        inventory_ingredient_id: 3
      },
      {
        id: 12,
        record_date: "2020-05-24 17:32:56",
        order: 95,
        use: 49,
        stock: 63,
        inventory_ingredient_id: 6
      },
      {
        id: 13,
        record_date: "2020-05-18 16:02:23",
        order: 19,
        use: 96,
        stock: 68,
        inventory_ingredient_id: 2
      },
      {
        id: 14,
        record_date: "2020-05-16 18:52:20",
        order: 13,
        use: 54,
        stock: 39,
        inventory_ingredient_id: 5
      },
      {
        id: 15,
        record_date: "2020-05-18 23:38:07",
        order: 14,
        use: 10,
        stock: 18,
        inventory_ingredient_id: 10
      },
      {
        id: 16,
        record_date: "2020-05-17 15:55:19",
        order: 85,
        use: 17,
        stock: 11,
        inventory_ingredient_id: 1
      },
      {
        id: 17,
        record_date: "2020-05-26 02:34:37",
        order: 43,
        use: 55,
        stock: 59,
        inventory_ingredient_id: 6
      },
      {
        id: 18,
        record_date: "2020-05-18 03:03:05",
        order: 50,
        use: 49,
        stock: 84,
        inventory_ingredient_id: 8
      },
      {
        id: 19,
        record_date: "2020-05-12 16:45:03",
        order: 25,
        use: 8,
        stock: 17,
        inventory_ingredient_id: 10
      },
      {
        id: 20,
        record_date: "2020-05-24 22:45:33",
        order: 94,
        use: 90,
        stock: 18,
        inventory_ingredient_id: 4
      },
      {
        id: 21,
        record_date: "2020-05-19 23:53:02",
        order: 1,
        use: 62,
        stock: 71,
        inventory_ingredient_id: 8
      },
      {
        id: 22,
        record_date: "2020-05-21 01:27:21",
        order: 74,
        use: 17,
        stock: 71,
        inventory_ingredient_id: 9
      },
      {
        id: 23,
        record_date: "2020-05-14 23:21:27",
        order: 58,
        use: 94,
        stock: 30,
        inventory_ingredient_id: 2
      },
      {
        id: 24,
        record_date: "2020-05-24 14:26:51",
        order: 9,
        use: 33,
        stock: 94,
        inventory_ingredient_id: 6
      },
      {
        id: 25,
        record_date: "2020-05-20 09:36:00",
        order: 70,
        use: 13,
        stock: 57,
        inventory_ingredient_id: 5
      },
      {
        id: 26,
        record_date: "2020-05-15 07:33:59",
        order: 80,
        use: 1,
        stock: 2,
        inventory_ingredient_id: 8
      },
      {
        id: 27,
        record_date: "2020-05-19 11:00:49",
        order: 92,
        use: 67,
        stock: 58,
        inventory_ingredient_id: 7
      },
      {
        id: 28,
        record_date: "2020-05-23 00:41:33",
        order: 16,
        use: 92,
        stock: 93,
        inventory_ingredient_id: 4
      },
      {
        id: 29,
        record_date: "2020-05-16 17:18:40",
        order: 17,
        use: 2,
        stock: 20,
        inventory_ingredient_id: 6
      },
      {
        id: 30,
        record_date: "2020-05-11 22:08:21",
        order: 53,
        use: 78,
        stock: 48,
        inventory_ingredient_id: 4
      },
      {
        id: 31,
        record_date: "2020-05-24 22:26:49",
        order: 4,
        use: 87,
        stock: 96,
        inventory_ingredient_id: 4
      },
      {
        id: 32,
        record_date: "2020-05-18 09:19:42",
        order: 20,
        use: 98,
        stock: 17,
        inventory_ingredient_id: 7
      },
      {
        id: 33,
        record_date: "2020-05-12 12:57:20",
        order: 78,
        use: 36,
        stock: 17,
        inventory_ingredient_id: 10
      },
      {
        id: 34,
        record_date: "2020-05-22 13:15:05",
        order: 84,
        use: 63,
        stock: 51,
        inventory_ingredient_id: 3
      },
      {
        id: 35,
        record_date: "2020-05-26 12:33:56",
        order: 14,
        use: 26,
        stock: 91,
        inventory_ingredient_id: 10
      },
      {
        id: 36,
        record_date: "2020-05-19 19:01:35",
        order: 83,
        use: 8,
        stock: 72,
        inventory_ingredient_id: 7
      },
      {
        id: 37,
        record_date: "2020-05-20 17:05:16",
        order: 59,
        use: 73,
        stock: 32,
        inventory_ingredient_id: 8
      },
      {
        id: 38,
        record_date: "2020-05-20 07:04:07",
        order: 40,
        use: 65,
        stock: 25,
        inventory_ingredient_id: 8
      },
      {
        id: 39,
        record_date: "2020-05-22 02:40:57",
        order: 4,
        use: 64,
        stock: 31,
        inventory_ingredient_id: 9
      },
      {
        id: 40,
        record_date: "2020-05-18 02:33:51",
        order: 47,
        use: 99,
        stock: 98,
        inventory_ingredient_id: 1
      },
      {
        id: 41,
        record_date: "2020-05-16 14:56:05",
        order: 21,
        use: 33,
        stock: 100,
        inventory_ingredient_id: 6
      },
      {
        id: 42,
        record_date: "2020-05-11 12:50:23",
        order: 38,
        use: 16,
        stock: 35,
        inventory_ingredient_id: 1
      },
      {
        id: 43,
        record_date: "2020-05-27 11:52:33",
        order: 91,
        use: 32,
        stock: 39,
        inventory_ingredient_id: 8
      },
      {
        id: 44,
        record_date: "2020-05-14 11:35:37",
        order: 10,
        use: 63,
        stock: 92,
        inventory_ingredient_id: 3
      },
      {
        id: 45,
        record_date: "2020-05-24 23:03:55",
        order: 72,
        use: 48,
        stock: 4,
        inventory_ingredient_id: 9
      },
      {
        id: 46,
        record_date: "2020-05-15 20:53:51",
        order: 59,
        use: 2,
        stock: 42,
        inventory_ingredient_id: 8
      },
      {
        id: 47,
        record_date: "2020-05-14 06:40:37",
        order: 29,
        use: 2,
        stock: 22,
        inventory_ingredient_id: 1
      },
      {
        id: 48,
        record_date: "2020-05-13 18:30:50",
        order: 63,
        use: 10,
        stock: 8,
        inventory_ingredient_id: 1
      },
      {
        id: 49,
        record_date: "2020-05-29 02:33:21",
        order: 57,
        use: 25,
        stock: 37,
        inventory_ingredient_id: 3
      },
      {
        id: 50,
        record_date: "2020-05-24 23:08:07",
        order: 82,
        use: 48,
        stock: 58,
        inventory_ingredient_id: 6
      },
      {
        id: 51,
        record_date: "2020-05-24 21:14:19",
        order: 24,
        use: 83,
        stock: 97,
        inventory_ingredient_id: 3
      },
      {
        id: 52,
        record_date: "2020-05-29 00:00:40",
        order: 19,
        use: 81,
        stock: 50,
        inventory_ingredient_id: 8
      },
      {
        id: 53,
        record_date: "2020-05-16 13:48:50",
        order: 43,
        use: 14,
        stock: 98,
        inventory_ingredient_id: 2
      },
      {
        id: 54,
        record_date: "2020-05-20 09:01:18",
        order: 38,
        use: 61,
        stock: 62,
        inventory_ingredient_id: 1
      },
      {
        id: 55,
        record_date: "2020-05-28 21:55:43",
        order: 20,
        use: 67,
        stock: 89,
        inventory_ingredient_id: 4
      },
      {
        id: 56,
        record_date: "2020-05-15 10:19:41",
        order: 100,
        use: 2,
        stock: 94,
        inventory_ingredient_id: 1
      },
      {
        id: 57,
        record_date: "2020-05-14 03:36:14",
        order: 36,
        use: 99,
        stock: 50,
        inventory_ingredient_id: 2
      },
      {
        id: 58,
        record_date: "2020-05-25 20:29:04",
        order: 46,
        use: 25,
        stock: 88,
        inventory_ingredient_id: 5
      },
      {
        id: 59,
        record_date: "2020-05-24 02:51:49",
        order: 34,
        use: 88,
        stock: 51,
        inventory_ingredient_id: 1
      },
      {
        id: 60,
        record_date: "2020-05-29 22:56:38",
        order: 58,
        use: 10,
        stock: 6,
        inventory_ingredient_id: 2
      },
      {
        id: 61,
        record_date: "2020-05-26 02:48:16",
        order: 81,
        use: 38,
        stock: 6,
        inventory_ingredient_id: 4
      },
      {
        id: 62,
        record_date: "2020-05-19 19:24:15",
        order: 60,
        use: 19,
        stock: 84,
        inventory_ingredient_id: 7
      },
      {
        id: 63,
        record_date: "2020-05-21 03:43:12",
        order: 89,
        use: 57,
        stock: 57,
        inventory_ingredient_id: 9
      },
      {
        id: 64,
        record_date: "2020-05-27 04:17:29",
        order: 22,
        use: 27,
        stock: 78,
        inventory_ingredient_id: 1
      },
      {
        id: 65,
        record_date: "2020-05-17 02:42:57",
        order: 81,
        use: 41,
        stock: 97,
        inventory_ingredient_id: 5
      },
      {
        id: 66,
        record_date: "2020-05-15 08:26:19",
        order: 74,
        use: 54,
        stock: 29,
        inventory_ingredient_id: 2
      },
      {
        id: 67,
        record_date: "2020-05-18 18:51:16",
        order: 33,
        use: 11,
        stock: 59,
        inventory_ingredient_id: 6
      },
      {
        id: 68,
        record_date: "2020-05-14 23:15:55",
        order: 84,
        use: 87,
        stock: 82,
        inventory_ingredient_id: 6
      },
      {
        id: 69,
        record_date: "2020-05-28 06:03:31",
        order: 39,
        use: 68,
        stock: 24,
        inventory_ingredient_id: 5
      },
      {
        id: 70,
        record_date: "2020-05-27 03:49:32",
        order: 38,
        use: 91,
        stock: 45,
        inventory_ingredient_id: 9
      },
      {
        id: 71,
        record_date: "2020-05-25 05:01:19",
        order: 17,
        use: 100,
        stock: 53,
        inventory_ingredient_id: 5
      },
      {
        id: 72,
        record_date: "2020-05-17 08:10:47",
        order: 45,
        use: 37,
        stock: 88,
        inventory_ingredient_id: 5
      },
      {
        id: 73,
        record_date: "2020-05-24 23:28:19",
        order: 72,
        use: 26,
        stock: 16,
        inventory_ingredient_id: 5
      },
      {
        id: 74,
        record_date: "2020-05-25 17:56:13",
        order: 83,
        use: 42,
        stock: 77,
        inventory_ingredient_id: 7
      },
      {
        id: 75,
        record_date: "2020-05-27 22:48:06",
        order: 48,
        use: 69,
        stock: 73,
        inventory_ingredient_id: 1
      },
      {
        id: 76,
        record_date: "2020-05-15 02:26:58",
        order: 8,
        use: 54,
        stock: 93,
        inventory_ingredient_id: 9
      },
      {
        id: 77,
        record_date: "2020-05-21 23:06:28",
        order: 47,
        use: 64,
        stock: 35,
        inventory_ingredient_id: 9
      },
      {
        id: 78,
        record_date: "2020-05-29 06:56:37",
        order: 68,
        use: 12,
        stock: 87,
        inventory_ingredient_id: 1
      },
      {
        id: 79,
        record_date: "2020-05-14 06:45:53",
        order: 72,
        use: 59,
        stock: 21,
        inventory_ingredient_id: 2
      },
      {
        id: 80,
        record_date: "2020-05-11 21:18:23",
        order: 28,
        use: 1,
        stock: 79,
        inventory_ingredient_id: 4
      },
      {
        id: 81,
        record_date: "2020-05-28 10:05:07",
        order: 98,
        use: 37,
        stock: 40,
        inventory_ingredient_id: 4
      },
      {
        id: 82,
        record_date: "2020-05-27 14:27:34",
        order: 30,
        use: 80,
        stock: 68,
        inventory_ingredient_id: 1
      },
      {
        id: 83,
        record_date: "2020-05-18 13:40:35",
        order: 31,
        use: 55,
        stock: 45,
        inventory_ingredient_id: 3
      },
      {
        id: 84,
        record_date: "2020-05-16 15:49:16",
        order: 60,
        use: 42,
        stock: 60,
        inventory_ingredient_id: 4
      },
      {
        id: 85,
        record_date: "2020-05-27 04:25:26",
        order: 33,
        use: 53,
        stock: 16,
        inventory_ingredient_id: 3
      },
      {
        id: 86,
        record_date: "2020-05-14 12:04:22",
        order: 47,
        use: 70,
        stock: 24,
        inventory_ingredient_id: 6
      },
      {
        id: 87,
        record_date: "2020-05-21 09:42:51",
        order: 45,
        use: 85,
        stock: 27,
        inventory_ingredient_id: 1
      },
      {
        id: 88,
        record_date: "2020-05-21 09:42:18",
        order: 68,
        use: 9,
        stock: 79,
        inventory_ingredient_id: 7
      },
      {
        id: 89,
        record_date: "2020-05-27 01:15:25",
        order: 83,
        use: 1,
        stock: 65,
        inventory_ingredient_id: 2
      },
      {
        id: 90,
        record_date: "2020-05-27 22:56:43",
        order: 92,
        use: 62,
        stock: 40,
        inventory_ingredient_id: 10
      },
      {
        id: 91,
        record_date: "2020-05-27 20:38:12",
        order: 63,
        use: 60,
        stock: 99,
        inventory_ingredient_id: 5
      },
      {
        id: 92,
        record_date: "2020-05-11 22:33:04",
        order: 27,
        use: 77,
        stock: 38,
        inventory_ingredient_id: 5
      },
      {
        id: 93,
        record_date: "2020-05-24 11:01:33",
        order: 24,
        use: 52,
        stock: 51,
        inventory_ingredient_id: 8
      },
      {
        id: 94,
        record_date: "2020-05-23 02:40:50",
        order: 49,
        use: 22,
        stock: 29,
        inventory_ingredient_id: 10
      },
      {
        id: 95,
        record_date: "2020-05-17 14:17:33",
        order: 25,
        use: 85,
        stock: 81,
        inventory_ingredient_id: 3
      },
      {
        id: 96,
        record_date: "2020-05-15 00:52:52",
        order: 71,
        use: 19,
        stock: 64,
        inventory_ingredient_id: 8
      },
      {
        id: 97,
        record_date: "2020-05-12 01:53:59",
        order: 36,
        use: 50,
        stock: 61,
        inventory_ingredient_id: 5
      },
      {
        id: 98,
        record_date: "2020-05-27 09:25:41",
        order: 28,
        use: 69,
        stock: 87,
        inventory_ingredient_id: 6
      },
      {
        id: 99,
        record_date: "2020-05-20 02:04:15",
        order: 41,
        use: 72,
        stock: 27,
        inventory_ingredient_id: 7
      },
      {
        id: 100,
        record_date: "2020-05-16 12:49:58",
        order: 67,
        use: 28,
        stock: 66,
        inventory_ingredient_id: 5
      },

      {
        id: 101,
        record_date: "2020-05-25 06:37:14",
        order: 22,
        use: 49,
        stock: 35,
        inventory_ingredient_id: 14
      },
      {
        id: 102,
        record_date: "2020-05-24 13:20:58",
        order: 15,
        use: 77,
        stock: 17,
        inventory_ingredient_id: 16
      },
      {
        id: 103,
        record_date: "2020-05-20 07:57:45",
        order: 7,
        use: 47,
        stock: 11,
        inventory_ingredient_id: 16
      },
      {
        id: 104,
        record_date: "2020-05-28 18:02:05",
        order: 67,
        use: 67,
        stock: 80,
        inventory_ingredient_id: 15
      },
      {
        id: 105,
        record_date: "2020-05-12 11:17:23",
        order: 51,
        use: 53,
        stock: 12,
        inventory_ingredient_id: 17
      },
      {
        id: 106,
        record_date: "2020-05-19 12:47:52",
        order: 25,
        use: 100,
        stock: 83,
        inventory_ingredient_id: 14
      },
      {
        id: 107,
        record_date: "2020-05-20 07:26:47",
        order: 99,
        use: 9,
        stock: 91,
        inventory_ingredient_id: 14
      },
      {
        id: 108,
        record_date: "2020-05-26 06:17:26",
        order: 16,
        use: 85,
        stock: 65,
        inventory_ingredient_id: 12
      },
      {
        id: 109,
        record_date: "2020-05-18 15:19:21",
        order: 49,
        use: 87,
        stock: 24,
        inventory_ingredient_id: 16
      },
      {
        id: 110,
        record_date: "2020-05-24 04:22:38",
        order: 26,
        use: 55,
        stock: 63,
        inventory_ingredient_id: 14
      },
      {
        id: 111,
        record_date: "2020-05-20 02:22:57",
        order: 38,
        use: 16,
        stock: 37,
        inventory_ingredient_id: 19
      },
      {
        id: 112,
        record_date: "2020-05-15 02:13:13",
        order: 50,
        use: 22,
        stock: 42,
        inventory_ingredient_id: 15
      },
      {
        id: 113,
        record_date: "2020-05-27 21:35:40",
        order: 86,
        use: 63,
        stock: 83,
        inventory_ingredient_id: 12
      },
      {
        id: 114,
        record_date: "2020-05-26 03:21:13",
        order: 59,
        use: 46,
        stock: 37,
        inventory_ingredient_id: 20
      },
      {
        id: 115,
        record_date: "2020-05-14 19:03:22",
        order: 39,
        use: 43,
        stock: 62,
        inventory_ingredient_id: 11
      },
      {
        id: 116,
        record_date: "2020-05-28 07:31:33",
        order: 74,
        use: 59,
        stock: 98,
        inventory_ingredient_id: 17
      },
      {
        id: 117,
        record_date: "2020-05-11 20:43:30",
        order: 62,
        use: 75,
        stock: 33,
        inventory_ingredient_id: 19
      },
      {
        id: 118,
        record_date: "2020-05-12 16:02:53",
        order: 58,
        use: 34,
        stock: 2,
        inventory_ingredient_id: 12
      },
      {
        id: 119,
        record_date: "2020-05-17 16:59:43",
        order: 14,
        use: 61,
        stock: 18,
        inventory_ingredient_id: 16
      },
      {
        id: 120,
        record_date: "2020-05-20 02:22:11",
        order: 45,
        use: 39,
        stock: 25,
        inventory_ingredient_id: 15
      },
      {
        id: 121,
        record_date: "2020-05-18 12:21:32",
        order: 63,
        use: 29,
        stock: 90,
        inventory_ingredient_id: 18
      },
      {
        id: 122,
        record_date: "2020-05-28 00:14:38",
        order: 31,
        use: 33,
        stock: 84,
        inventory_ingredient_id: 14
      },
      {
        id: 123,
        record_date: "2020-05-20 15:36:34",
        order: 19,
        use: 39,
        stock: 40,
        inventory_ingredient_id: 19
      },
      {
        id: 124,
        record_date: "2020-05-20 05:19:01",
        order: 60,
        use: 18,
        stock: 47,
        inventory_ingredient_id: 20
      },
      {
        id: 125,
        record_date: "2020-05-26 10:32:51",
        order: 68,
        use: 92,
        stock: 63,
        inventory_ingredient_id: 20
      },
      {
        id: 126,
        record_date: "2020-05-24 09:43:24",
        order: 74,
        use: 13,
        stock: 23,
        inventory_ingredient_id: 11
      },
      {
        id: 127,
        record_date: "2020-05-26 00:28:20",
        order: 4,
        use: 79,
        stock: 61,
        inventory_ingredient_id: 18
      },
      {
        id: 128,
        record_date: "2020-05-28 22:36:32",
        order: 15,
        use: 81,
        stock: 70,
        inventory_ingredient_id: 13
      },
      {
        id: 129,
        record_date: "2020-05-27 17:05:17",
        order: 26,
        use: 80,
        stock: 8,
        inventory_ingredient_id: 17
      },
      {
        id: 130,
        record_date: "2020-05-26 00:41:49",
        order: 81,
        use: 87,
        stock: 24,
        inventory_ingredient_id: 19
      },
      {
        id: 131,
        record_date: "2020-05-27 02:39:35",
        order: 81,
        use: 37,
        stock: 68,
        inventory_ingredient_id: 16
      },
      {
        id: 132,
        record_date: "2020-05-17 01:08:18",
        order: 77,
        use: 92,
        stock: 6,
        inventory_ingredient_id: 12
      },
      {
        id: 133,
        record_date: "2020-05-24 16:26:21",
        order: 83,
        use: 5,
        stock: 13,
        inventory_ingredient_id: 14
      },
      {
        id: 134,
        record_date: "2020-05-17 02:44:11",
        order: 28,
        use: 14,
        stock: 98,
        inventory_ingredient_id: 11
      },
      {
        id: 135,
        record_date: "2020-05-15 22:43:59",
        order: 13,
        use: 71,
        stock: 42,
        inventory_ingredient_id: 18
      },
      {
        id: 136,
        record_date: "2020-05-12 21:18:30",
        order: 20,
        use: 3,
        stock: 33,
        inventory_ingredient_id: 19
      },
      {
        id: 137,
        record_date: "2020-05-20 13:50:50",
        order: 74,
        use: 13,
        stock: 7,
        inventory_ingredient_id: 11
      },
      {
        id: 138,
        record_date: "2020-05-15 15:39:40",
        order: 34,
        use: 84,
        stock: 62,
        inventory_ingredient_id: 18
      },
      {
        id: 139,
        record_date: "2020-05-23 15:15:57",
        order: 47,
        use: 66,
        stock: 33,
        inventory_ingredient_id: 12
      },
      {
        id: 140,
        record_date: "2020-05-13 04:51:52",
        order: 71,
        use: 78,
        stock: 68,
        inventory_ingredient_id: 18
      },
      {
        id: 141,
        record_date: "2020-05-12 10:49:55",
        order: 70,
        use: 49,
        stock: 56,
        inventory_ingredient_id: 19
      },
      {
        id: 142,
        record_date: "2020-05-23 13:03:15",
        order: 28,
        use: 86,
        stock: 91,
        inventory_ingredient_id: 15
      },
      {
        id: 143,
        record_date: "2020-05-14 15:31:48",
        order: 47,
        use: 87,
        stock: 71,
        inventory_ingredient_id: 14
      },
      {
        id: 144,
        record_date: "2020-05-19 13:52:31",
        order: 63,
        use: 37,
        stock: 41,
        inventory_ingredient_id: 18
      },
      {
        id: 145,
        record_date: "2020-05-19 17:09:06",
        order: 91,
        use: 21,
        stock: 54,
        inventory_ingredient_id: 12
      },
      {
        id: 146,
        record_date: "2020-05-26 11:31:37",
        order: 65,
        use: 7,
        stock: 93,
        inventory_ingredient_id: 19
      },
      {
        id: 147,
        record_date: "2020-05-23 09:32:49",
        order: 66,
        use: 66,
        stock: 16,
        inventory_ingredient_id: 14
      },
      {
        id: 148,
        record_date: "2020-05-24 01:45:46",
        order: 99,
        use: 31,
        stock: 33,
        inventory_ingredient_id: 11
      },
      {
        id: 149,
        record_date: "2020-05-23 10:55:51",
        order: 76,
        use: 98,
        stock: 76,
        inventory_ingredient_id: 19
      },
      {
        id: 150,
        record_date: "2020-05-17 05:04:15",
        order: 44,
        use: 26,
        stock: 38,
        inventory_ingredient_id: 13
      },
      {
        id: 151,
        record_date: "2020-05-20 21:58:37",
        order: 98,
        use: 44,
        stock: 46,
        inventory_ingredient_id: 13
      },
      {
        id: 152,
        record_date: "2020-05-21 07:19:41",
        order: 5,
        use: 86,
        stock: 48,
        inventory_ingredient_id: 12
      },
      {
        id: 153,
        record_date: "2020-05-28 23:12:03",
        order: 27,
        use: 65,
        stock: 66,
        inventory_ingredient_id: 20
      },
      {
        id: 154,
        record_date: "2020-05-19 03:25:11",
        order: 67,
        use: 86,
        stock: 61,
        inventory_ingredient_id: 13
      },
      {
        id: 155,
        record_date: "2020-05-16 16:53:34",
        order: 43,
        use: 41,
        stock: 85,
        inventory_ingredient_id: 15
      },
      {
        id: 156,
        record_date: "2020-05-25 05:09:59",
        order: 63,
        use: 22,
        stock: 51,
        inventory_ingredient_id: 14
      },
      {
        id: 157,
        record_date: "2020-05-17 14:01:55",
        order: 22,
        use: 97,
        stock: 16,
        inventory_ingredient_id: 13
      },
      {
        id: 158,
        record_date: "2020-05-17 05:32:46",
        order: 85,
        use: 92,
        stock: 12,
        inventory_ingredient_id: 18
      },
      {
        id: 159,
        record_date: "2020-05-19 20:52:14",
        order: 87,
        use: 8,
        stock: 23,
        inventory_ingredient_id: 13
      },
      {
        id: 160,
        record_date: "2020-05-14 23:29:30",
        order: 70,
        use: 78,
        stock: 90,
        inventory_ingredient_id: 14
      },
      {
        id: 161,
        record_date: "2020-05-29 05:40:57",
        order: 59,
        use: 18,
        stock: 48,
        inventory_ingredient_id: 15
      },
      {
        id: 162,
        record_date: "2020-05-17 19:30:09",
        order: 4,
        use: 33,
        stock: 54,
        inventory_ingredient_id: 18
      },
      {
        id: 163,
        record_date: "2020-05-16 07:48:58",
        order: 39,
        use: 24,
        stock: 6,
        inventory_ingredient_id: 14
      },
      {
        id: 164,
        record_date: "2020-05-16 21:17:18",
        order: 73,
        use: 44,
        stock: 62,
        inventory_ingredient_id: 20
      },
      {
        id: 165,
        record_date: "2020-05-19 03:25:36",
        order: 30,
        use: 20,
        stock: 27,
        inventory_ingredient_id: 11
      },
      {
        id: 166,
        record_date: "2020-05-16 10:40:03",
        order: 46,
        use: 38,
        stock: 40,
        inventory_ingredient_id: 18
      },
      {
        id: 167,
        record_date: "2020-05-26 02:58:36",
        order: 7,
        use: 26,
        stock: 64,
        inventory_ingredient_id: 19
      },
      {
        id: 168,
        record_date: "2020-05-25 09:24:11",
        order: 9,
        use: 10,
        stock: 28,
        inventory_ingredient_id: 19
      },
      {
        id: 169,
        record_date: "2020-05-26 16:15:15",
        order: 93,
        use: 14,
        stock: 83,
        inventory_ingredient_id: 13
      },
      {
        id: 170,
        record_date: "2020-05-14 01:22:29",
        order: 96,
        use: 58,
        stock: 63,
        inventory_ingredient_id: 19
      },
      {
        id: 171,
        record_date: "2020-05-19 06:18:27",
        order: 77,
        use: 49,
        stock: 13,
        inventory_ingredient_id: 16
      },
      {
        id: 172,
        record_date: "2020-05-11 14:53:37",
        order: 46,
        use: 6,
        stock: 33,
        inventory_ingredient_id: 20
      },
      {
        id: 173,
        record_date: "2020-05-11 03:24:48",
        order: 83,
        use: 23,
        stock: 36,
        inventory_ingredient_id: 14
      },
      {
        id: 174,
        record_date: "2020-05-12 06:44:21",
        order: 14,
        use: 95,
        stock: 81,
        inventory_ingredient_id: 20
      },
      {
        id: 175,
        record_date: "2020-05-17 01:27:54",
        order: 10,
        use: 33,
        stock: 52,
        inventory_ingredient_id: 17
      },
      {
        id: 176,
        record_date: "2020-05-25 14:41:50",
        order: 15,
        use: 20,
        stock: 78,
        inventory_ingredient_id: 14
      },
      {
        id: 177,
        record_date: "2020-05-29 23:53:44",
        order: 73,
        use: 63,
        stock: 93,
        inventory_ingredient_id: 11
      },
      {
        id: 178,
        record_date: "2020-05-19 20:50:38",
        order: 86,
        use: 25,
        stock: 41,
        inventory_ingredient_id: 13
      },
      {
        id: 179,
        record_date: "2020-05-20 06:11:07",
        order: 12,
        use: 7,
        stock: 52,
        inventory_ingredient_id: 16
      },
      {
        id: 180,
        record_date: "2020-05-11 05:54:01",
        order: 100,
        use: 41,
        stock: 19,
        inventory_ingredient_id: 20
      },
      {
        id: 181,
        record_date: "2020-05-21 19:41:02",
        order: 13,
        use: 55,
        stock: 77,
        inventory_ingredient_id: 15
      },
      {
        id: 182,
        record_date: "2020-05-28 04:00:15",
        order: 20,
        use: 49,
        stock: 59,
        inventory_ingredient_id: 16
      },
      {
        id: 183,
        record_date: "2020-05-18 06:15:06",
        order: 38,
        use: 21,
        stock: 85,
        inventory_ingredient_id: 13
      },
      {
        id: 184,
        record_date: "2020-05-11 00:06:33",
        order: 28,
        use: 72,
        stock: 14,
        inventory_ingredient_id: 13
      },
      {
        id: 185,
        record_date: "2020-05-14 01:35:51",
        order: 74,
        use: 37,
        stock: 90,
        inventory_ingredient_id: 15
      },
      {
        id: 186,
        record_date: "2020-05-29 18:12:49",
        order: 40,
        use: 28,
        stock: 64,
        inventory_ingredient_id: 20
      },
      {
        id: 187,
        record_date: "2020-05-13 16:15:37",
        order: 17,
        use: 42,
        stock: 74,
        inventory_ingredient_id: 13
      },
      {
        id: 188,
        record_date: "2020-05-13 03:40:58",
        order: 33,
        use: 20,
        stock: 82,
        inventory_ingredient_id: 14
      },
      {
        id: 189,
        record_date: "2020-05-25 09:26:10",
        order: 81,
        use: 51,
        stock: 9,
        inventory_ingredient_id: 17
      },
      {
        id: 190,
        record_date: "2020-05-16 15:53:44",
        order: 95,
        use: 91,
        stock: 28,
        inventory_ingredient_id: 15
      },
      {
        id: 191,
        record_date: "2020-05-28 21:14:01",
        order: 23,
        use: 55,
        stock: 30,
        inventory_ingredient_id: 20
      },
      {
        id: 192,
        record_date: "2020-05-26 07:46:54",
        order: 68,
        use: 11,
        stock: 85,
        inventory_ingredient_id: 18
      },
      {
        id: 193,
        record_date: "2020-05-23 13:43:36",
        order: 83,
        use: 25,
        stock: 73,
        inventory_ingredient_id: 20
      },
      {
        id: 194,
        record_date: "2020-05-23 10:14:03",
        order: 73,
        use: 72,
        stock: 50,
        inventory_ingredient_id: 12
      },
      {
        id: 195,
        record_date: "2020-05-17 07:19:33",
        order: 14,
        use: 40,
        stock: 11,
        inventory_ingredient_id: 19
      },
      {
        id: 196,
        record_date: "2020-05-29 14:51:24",
        order: 67,
        use: 95,
        stock: 71,
        inventory_ingredient_id: 12
      },
      {
        id: 197,
        record_date: "2020-05-22 11:47:22",
        order: 50,
        use: 52,
        stock: 100,
        inventory_ingredient_id: 13
      },
      {
        id: 198,
        record_date: "2020-05-24 06:41:18",
        order: 12,
        use: 49,
        stock: 50,
        inventory_ingredient_id: 11
      },
      {
        id: 199,
        record_date: "2020-05-19 03:47:59",
        order: 27,
        use: 100,
        stock: 50,
        inventory_ingredient_id: 14
      },
      {
        id: 200,
        record_date: "2020-05-29 20:12:10",
        order: 1,
        use: 38,
        stock: 75,
        inventory_ingredient_id: 15
      },

      {
        id: 201,
        record_date: "2020-05-15 09:50:06",
        order: 66,
        use: 10,
        stock: 25,
        inventory_ingredient_id: 23
      },
      {
        id: 202,
        record_date: "2020-05-12 20:48:48",
        order: 83,
        use: 55,
        stock: 29,
        inventory_ingredient_id: 30
      },
      {
        id: 203,
        record_date: "2020-05-20 02:38:16",
        order: 36,
        use: 67,
        stock: 79,
        inventory_ingredient_id: 26
      },
      {
        id: 204,
        record_date: "2020-05-12 11:21:43",
        order: 90,
        use: 22,
        stock: 86,
        inventory_ingredient_id: 30
      },
      {
        id: 205,
        record_date: "2020-05-14 06:09:47",
        order: 74,
        use: 62,
        stock: 31,
        inventory_ingredient_id: 30
      },
      {
        id: 206,
        record_date: "2020-05-23 07:48:06",
        order: 70,
        use: 2,
        stock: 76,
        inventory_ingredient_id: 30
      },
      {
        id: 207,
        record_date: "2020-05-17 17:29:07",
        order: 64,
        use: 10,
        stock: 72,
        inventory_ingredient_id: 23
      },
      {
        id: 208,
        record_date: "2020-05-23 14:16:04",
        order: 19,
        use: 83,
        stock: 20,
        inventory_ingredient_id: 22
      },
      {
        id: 209,
        record_date: "2020-05-11 00:33:33",
        order: 76,
        use: 76,
        stock: 28,
        inventory_ingredient_id: 24
      },
      {
        id: 210,
        record_date: "2020-05-14 07:54:25",
        order: 20,
        use: 100,
        stock: 54,
        inventory_ingredient_id: 28
      },
      {
        id: 211,
        record_date: "2020-05-15 00:22:25",
        order: 53,
        use: 79,
        stock: 87,
        inventory_ingredient_id: 25
      },
      {
        id: 212,
        record_date: "2020-05-13 15:11:52",
        order: 87,
        use: 53,
        stock: 29,
        inventory_ingredient_id: 28
      },
      {
        id: 213,
        record_date: "2020-05-18 01:10:04",
        order: 95,
        use: 37,
        stock: 39,
        inventory_ingredient_id: 22
      },
      {
        id: 214,
        record_date: "2020-05-21 19:50:46",
        order: 99,
        use: 4,
        stock: 45,
        inventory_ingredient_id: 23
      },
      {
        id: 215,
        record_date: "2020-05-20 02:32:09",
        order: 15,
        use: 30,
        stock: 86,
        inventory_ingredient_id: 25
      },
      {
        id: 216,
        record_date: "2020-05-14 05:18:06",
        order: 4,
        use: 39,
        stock: 42,
        inventory_ingredient_id: 28
      },
      {
        id: 217,
        record_date: "2020-05-14 08:43:43",
        order: 67,
        use: 83,
        stock: 88,
        inventory_ingredient_id: 27
      },
      {
        id: 218,
        record_date: "2020-05-14 17:38:21",
        order: 37,
        use: 47,
        stock: 11,
        inventory_ingredient_id: 26
      },
      {
        id: 219,
        record_date: "2020-05-28 14:13:11",
        order: 1,
        use: 28,
        stock: 8,
        inventory_ingredient_id: 28
      },
      {
        id: 220,
        record_date: "2020-05-17 22:57:11",
        order: 11,
        use: 72,
        stock: 53,
        inventory_ingredient_id: 29
      },
      {
        id: 221,
        record_date: "2020-05-15 15:37:17",
        order: 18,
        use: 28,
        stock: 97,
        inventory_ingredient_id: 22
      },
      {
        id: 222,
        record_date: "2020-05-22 11:11:33",
        order: 42,
        use: 43,
        stock: 25,
        inventory_ingredient_id: 26
      },
      {
        id: 223,
        record_date: "2020-05-25 15:51:52",
        order: 30,
        use: 58,
        stock: 7,
        inventory_ingredient_id: 23
      },
      {
        id: 224,
        record_date: "2020-05-19 20:22:20",
        order: 22,
        use: 47,
        stock: 20,
        inventory_ingredient_id: 26
      },
      {
        id: 225,
        record_date: "2020-05-18 19:17:36",
        order: 37,
        use: 53,
        stock: 65,
        inventory_ingredient_id: 29
      },
      {
        id: 226,
        record_date: "2020-05-21 22:54:16",
        order: 73,
        use: 22,
        stock: 27,
        inventory_ingredient_id: 26
      },
      {
        id: 227,
        record_date: "2020-05-23 13:07:47",
        order: 17,
        use: 38,
        stock: 21,
        inventory_ingredient_id: 24
      },
      {
        id: 228,
        record_date: "2020-05-16 12:31:50",
        order: 5,
        use: 49,
        stock: 29,
        inventory_ingredient_id: 29
      },
      {
        id: 229,
        record_date: "2020-05-14 19:29:21",
        order: 61,
        use: 70,
        stock: 24,
        inventory_ingredient_id: 22
      },
      {
        id: 230,
        record_date: "2020-05-18 00:25:31",
        order: 48,
        use: 4,
        stock: 65,
        inventory_ingredient_id: 24
      },
      {
        id: 231,
        record_date: "2020-05-11 19:45:49",
        order: 83,
        use: 81,
        stock: 22,
        inventory_ingredient_id: 22
      },
      {
        id: 232,
        record_date: "2020-05-20 11:06:48",
        order: 99,
        use: 74,
        stock: 11,
        inventory_ingredient_id: 23
      },
      {
        id: 233,
        record_date: "2020-05-11 18:26:53",
        order: 21,
        use: 72,
        stock: 99,
        inventory_ingredient_id: 26
      },
      {
        id: 234,
        record_date: "2020-05-19 11:09:31",
        order: 2,
        use: 97,
        stock: 69,
        inventory_ingredient_id: 21
      },
      {
        id: 235,
        record_date: "2020-05-13 11:26:16",
        order: 95,
        use: 6,
        stock: 29,
        inventory_ingredient_id: 21
      },
      {
        id: 236,
        record_date: "2020-05-15 05:08:10",
        order: 50,
        use: 32,
        stock: 12,
        inventory_ingredient_id: 23
      },
      {
        id: 237,
        record_date: "2020-05-27 11:57:38",
        order: 46,
        use: 82,
        stock: 77,
        inventory_ingredient_id: 29
      },
      {
        id: 238,
        record_date: "2020-05-24 13:36:36",
        order: 84,
        use: 56,
        stock: 72,
        inventory_ingredient_id: 23
      },
      {
        id: 239,
        record_date: "2020-05-19 22:40:55",
        order: 45,
        use: 60,
        stock: 96,
        inventory_ingredient_id: 26
      },
      {
        id: 240,
        record_date: "2020-05-20 21:14:40",
        order: 100,
        use: 32,
        stock: 32,
        inventory_ingredient_id: 29
      },
      {
        id: 241,
        record_date: "2020-05-11 12:20:21",
        order: 38,
        use: 44,
        stock: 30,
        inventory_ingredient_id: 27
      },
      {
        id: 242,
        record_date: "2020-05-11 17:40:47",
        order: 18,
        use: 56,
        stock: 90,
        inventory_ingredient_id: 30
      },
      {
        id: 243,
        record_date: "2020-05-19 20:54:57",
        order: 84,
        use: 37,
        stock: 5,
        inventory_ingredient_id: 25
      },
      {
        id: 244,
        record_date: "2020-05-22 14:04:30",
        order: 28,
        use: 11,
        stock: 16,
        inventory_ingredient_id: 24
      },
      {
        id: 245,
        record_date: "2020-05-23 22:06:09",
        order: 59,
        use: 40,
        stock: 45,
        inventory_ingredient_id: 27
      },
      {
        id: 246,
        record_date: "2020-05-23 11:49:14",
        order: 71,
        use: 40,
        stock: 9,
        inventory_ingredient_id: 29
      },
      {
        id: 247,
        record_date: "2020-05-17 19:10:34",
        order: 77,
        use: 22,
        stock: 84,
        inventory_ingredient_id: 23
      },
      {
        id: 248,
        record_date: "2020-05-16 02:41:35",
        order: 65,
        use: 61,
        stock: 95,
        inventory_ingredient_id: 26
      },
      {
        id: 249,
        record_date: "2020-05-16 06:26:56",
        order: 96,
        use: 12,
        stock: 28,
        inventory_ingredient_id: 30
      },
      {
        id: 250,
        record_date: "2020-05-23 08:28:41",
        order: 52,
        use: 22,
        stock: 94,
        inventory_ingredient_id: 24
      },
      {
        id: 251,
        record_date: "2020-05-23 08:53:00",
        order: 18,
        use: 36,
        stock: 42,
        inventory_ingredient_id: 27
      },
      {
        id: 252,
        record_date: "2020-05-18 18:42:36",
        order: 37,
        use: 59,
        stock: 74,
        inventory_ingredient_id: 28
      },
      {
        id: 253,
        record_date: "2020-05-21 15:54:14",
        order: 35,
        use: 44,
        stock: 32,
        inventory_ingredient_id: 24
      },
      {
        id: 254,
        record_date: "2020-05-21 20:15:25",
        order: 95,
        use: 8,
        stock: 85,
        inventory_ingredient_id: 29
      },
      {
        id: 255,
        record_date: "2020-05-28 11:11:23",
        order: 73,
        use: 77,
        stock: 44,
        inventory_ingredient_id: 24
      },
      {
        id: 256,
        record_date: "2020-05-13 05:47:55",
        order: 53,
        use: 65,
        stock: 53,
        inventory_ingredient_id: 21
      },
      {
        id: 257,
        record_date: "2020-05-29 03:36:19",
        order: 49,
        use: 20,
        stock: 97,
        inventory_ingredient_id: 29
      },
      {
        id: 258,
        record_date: "2020-05-26 01:41:46",
        order: 34,
        use: 60,
        stock: 11,
        inventory_ingredient_id: 29
      },
      {
        id: 259,
        record_date: "2020-05-29 14:45:35",
        order: 70,
        use: 97,
        stock: 63,
        inventory_ingredient_id: 22
      },
      {
        id: 260,
        record_date: "2020-05-25 05:07:24",
        order: 14,
        use: 22,
        stock: 57,
        inventory_ingredient_id: 29
      },
      {
        id: 261,
        record_date: "2020-05-22 23:39:09",
        order: 40,
        use: 56,
        stock: 13,
        inventory_ingredient_id: 22
      },
      {
        id: 262,
        record_date: "2020-05-23 22:28:11",
        order: 61,
        use: 82,
        stock: 23,
        inventory_ingredient_id: 27
      },
      {
        id: 263,
        record_date: "2020-05-14 18:21:15",
        order: 99,
        use: 100,
        stock: 96,
        inventory_ingredient_id: 21
      },
      {
        id: 264,
        record_date: "2020-05-14 15:12:08",
        order: 92,
        use: 30,
        stock: 78,
        inventory_ingredient_id: 26
      },
      {
        id: 265,
        record_date: "2020-05-22 21:03:48",
        order: 6,
        use: 64,
        stock: 90,
        inventory_ingredient_id: 24
      },
      {
        id: 266,
        record_date: "2020-05-21 13:29:26",
        order: 11,
        use: 79,
        stock: 84,
        inventory_ingredient_id: 30
      },
      {
        id: 267,
        record_date: "2020-05-28 22:10:25",
        order: 91,
        use: 74,
        stock: 72,
        inventory_ingredient_id: 21
      },
      {
        id: 268,
        record_date: "2020-05-22 11:37:55",
        order: 83,
        use: 41,
        stock: 19,
        inventory_ingredient_id: 22
      },
      {
        id: 269,
        record_date: "2020-05-29 14:31:34",
        order: 82,
        use: 91,
        stock: 16,
        inventory_ingredient_id: 28
      },
      {
        id: 270,
        record_date: "2020-05-20 12:44:43",
        order: 39,
        use: 37,
        stock: 37,
        inventory_ingredient_id: 27
      },
      {
        id: 271,
        record_date: "2020-05-13 06:49:00",
        order: 45,
        use: 58,
        stock: 39,
        inventory_ingredient_id: 26
      },
      {
        id: 272,
        record_date: "2020-05-19 03:39:38",
        order: 72,
        use: 86,
        stock: 53,
        inventory_ingredient_id: 25
      },
      {
        id: 273,
        record_date: "2020-05-24 11:03:21",
        order: 9,
        use: 88,
        stock: 12,
        inventory_ingredient_id: 21
      },
      {
        id: 274,
        record_date: "2020-05-13 14:55:37",
        order: 12,
        use: 84,
        stock: 9,
        inventory_ingredient_id: 23
      },
      {
        id: 275,
        record_date: "2020-05-20 00:47:42",
        order: 27,
        use: 70,
        stock: 10,
        inventory_ingredient_id: 29
      },
      {
        id: 276,
        record_date: "2020-05-15 19:57:36",
        order: 90,
        use: 7,
        stock: 3,
        inventory_ingredient_id: 22
      },
      {
        id: 277,
        record_date: "2020-05-20 10:21:56",
        order: 29,
        use: 55,
        stock: 54,
        inventory_ingredient_id: 26
      },
      {
        id: 278,
        record_date: "2020-05-13 06:55:39",
        order: 99,
        use: 80,
        stock: 12,
        inventory_ingredient_id: 29
      },
      {
        id: 279,
        record_date: "2020-05-29 17:41:54",
        order: 73,
        use: 12,
        stock: 36,
        inventory_ingredient_id: 30
      },
      {
        id: 280,
        record_date: "2020-05-12 11:14:02",
        order: 8,
        use: 77,
        stock: 90,
        inventory_ingredient_id: 30
      },
      {
        id: 281,
        record_date: "2020-05-24 15:44:46",
        order: 42,
        use: 85,
        stock: 20,
        inventory_ingredient_id: 24
      },
      {
        id: 282,
        record_date: "2020-05-22 04:58:17",
        order: 53,
        use: 43,
        stock: 94,
        inventory_ingredient_id: 24
      },
      {
        id: 283,
        record_date: "2020-05-28 19:27:41",
        order: 75,
        use: 11,
        stock: 33,
        inventory_ingredient_id: 25
      },
      {
        id: 284,
        record_date: "2020-05-18 12:48:18",
        order: 40,
        use: 16,
        stock: 45,
        inventory_ingredient_id: 27
      },
      {
        id: 285,
        record_date: "2020-05-28 07:35:55",
        order: 48,
        use: 25,
        stock: 1,
        inventory_ingredient_id: 22
      },
      {
        id: 286,
        record_date: "2020-05-13 09:49:11",
        order: 67,
        use: 70,
        stock: 66,
        inventory_ingredient_id: 23
      },
      {
        id: 287,
        record_date: "2020-05-12 15:17:51",
        order: 66,
        use: 37,
        stock: 68,
        inventory_ingredient_id: 24
      },
      {
        id: 288,
        record_date: "2020-05-28 08:45:33",
        order: 100,
        use: 82,
        stock: 68,
        inventory_ingredient_id: 27
      },
      {
        id: 289,
        record_date: "2020-05-25 03:53:10",
        order: 93,
        use: 64,
        stock: 82,
        inventory_ingredient_id: 28
      },
      {
        id: 290,
        record_date: "2020-05-22 10:08:49",
        order: 62,
        use: 92,
        stock: 48,
        inventory_ingredient_id: 22
      },
      {
        id: 291,
        record_date: "2020-05-23 22:20:15",
        order: 97,
        use: 75,
        stock: 48,
        inventory_ingredient_id: 21
      },
      {
        id: 292,
        record_date: "2020-05-14 03:05:41",
        order: 20,
        use: 18,
        stock: 58,
        inventory_ingredient_id: 24
      },
      {
        id: 293,
        record_date: "2020-05-28 06:54:54",
        order: 70,
        use: 94,
        stock: 78,
        inventory_ingredient_id: 25
      },
      {
        id: 294,
        record_date: "2020-05-24 17:04:51",
        order: 12,
        use: 92,
        stock: 91,
        inventory_ingredient_id: 27
      },
      {
        id: 295,
        record_date: "2020-05-20 14:27:16",
        order: 2,
        use: 43,
        stock: 100,
        inventory_ingredient_id: 30
      },
      {
        id: 296,
        record_date: "2020-05-25 05:07:34",
        order: 72,
        use: 78,
        stock: 40,
        inventory_ingredient_id: 23
      },
      {
        id: 297,
        record_date: "2020-05-18 10:23:55",
        order: 61,
        use: 44,
        stock: 75,
        inventory_ingredient_id: 23
      },
      {
        id: 298,
        record_date: "2020-05-19 07:00:17",
        order: 84,
        use: 26,
        stock: 79,
        inventory_ingredient_id: 29
      },
      {
        id: 299,
        record_date: "2020-05-20 23:51:20",
        order: 68,
        use: 86,
        stock: 75,
        inventory_ingredient_id: 24
      },
      {
        id: 300,
        record_date: "2020-05-27 12:52:29",
        order: 10,
        use: 43,
        stock: 8,
        inventory_ingredient_id: 25
      },

      {
        id: 301,
        record_date: "2020-05-25 08:18:29",
        order: 94,
        use: 53,
        stock: 16,
        inventory_ingredient_id: 37
      },
      {
        id: 302,
        record_date: "2020-05-27 15:38:34",
        order: 10,
        use: 1,
        stock: 12,
        inventory_ingredient_id: 31
      },
      {
        id: 303,
        record_date: "2020-05-20 20:39:27",
        order: 33,
        use: 95,
        stock: 82,
        inventory_ingredient_id: 35
      },
      {
        id: 304,
        record_date: "2020-05-27 01:44:56",
        order: 72,
        use: 34,
        stock: 55,
        inventory_ingredient_id: 32
      },
      {
        id: 305,
        record_date: "2020-05-18 01:02:46",
        order: 12,
        use: 90,
        stock: 52,
        inventory_ingredient_id: 34
      },
      {
        id: 306,
        record_date: "2020-05-22 13:54:59",
        order: 73,
        use: 91,
        stock: 9,
        inventory_ingredient_id: 33
      },
      {
        id: 307,
        record_date: "2020-05-18 10:13:45",
        order: 10,
        use: 97,
        stock: 49,
        inventory_ingredient_id: 33
      },
      {
        id: 308,
        record_date: "2020-05-11 09:52:43",
        order: 74,
        use: 90,
        stock: 75,
        inventory_ingredient_id: 38
      },
      {
        id: 309,
        record_date: "2020-05-17 01:46:31",
        order: 49,
        use: 88,
        stock: 97,
        inventory_ingredient_id: 31
      },
      {
        id: 310,
        record_date: "2020-05-20 05:29:32",
        order: 10,
        use: 70,
        stock: 10,
        inventory_ingredient_id: 38
      },
      {
        id: 311,
        record_date: "2020-05-26 17:33:20",
        order: 13,
        use: 36,
        stock: 80,
        inventory_ingredient_id: 38
      },
      {
        id: 312,
        record_date: "2020-05-14 05:39:52",
        order: 10,
        use: 51,
        stock: 49,
        inventory_ingredient_id: 31
      },
      {
        id: 313,
        record_date: "2020-05-13 23:25:43",
        order: 45,
        use: 51,
        stock: 91,
        inventory_ingredient_id: 35
      },
      {
        id: 314,
        record_date: "2020-05-16 17:16:48",
        order: 69,
        use: 55,
        stock: 58,
        inventory_ingredient_id: 38
      },
      {
        id: 315,
        record_date: "2020-05-19 05:24:23",
        order: 46,
        use: 25,
        stock: 31,
        inventory_ingredient_id: 36
      },
      {
        id: 316,
        record_date: "2020-05-12 08:28:43",
        order: 99,
        use: 18,
        stock: 96,
        inventory_ingredient_id: 32
      },
      {
        id: 317,
        record_date: "2020-05-17 01:39:30",
        order: 48,
        use: 76,
        stock: 26,
        inventory_ingredient_id: 34
      },
      {
        id: 318,
        record_date: "2020-05-24 18:48:09",
        order: 18,
        use: 43,
        stock: 56,
        inventory_ingredient_id: 37
      },
      {
        id: 319,
        record_date: "2020-05-14 07:02:16",
        order: 68,
        use: 98,
        stock: 10,
        inventory_ingredient_id: 35
      },
      {
        id: 320,
        record_date: "2020-05-22 18:28:41",
        order: 38,
        use: 83,
        stock: 34,
        inventory_ingredient_id: 38
      },
      {
        id: 321,
        record_date: "2020-05-25 12:59:49",
        order: 24,
        use: 77,
        stock: 99,
        inventory_ingredient_id: 32
      },
      {
        id: 322,
        record_date: "2020-05-23 22:31:06",
        order: 14,
        use: 75,
        stock: 3,
        inventory_ingredient_id: 31
      },
      {
        id: 323,
        record_date: "2020-05-22 14:44:06",
        order: 12,
        use: 99,
        stock: 38,
        inventory_ingredient_id: 33
      },
      {
        id: 324,
        record_date: "2020-05-17 07:03:46",
        order: 20,
        use: 25,
        stock: 36,
        inventory_ingredient_id: 38
      },
      {
        id: 325,
        record_date: "2020-05-13 15:27:27",
        order: 85,
        use: 45,
        stock: 20,
        inventory_ingredient_id: 35
      },
      {
        id: 326,
        record_date: "2020-05-18 12:27:41",
        order: 21,
        use: 87,
        stock: 39,
        inventory_ingredient_id: 39
      },
      {
        id: 327,
        record_date: "2020-05-11 12:43:04",
        order: 48,
        use: 90,
        stock: 58,
        inventory_ingredient_id: 35
      },
      {
        id: 328,
        record_date: "2020-05-28 19:28:59",
        order: 45,
        use: 25,
        stock: 37,
        inventory_ingredient_id: 40
      },
      {
        id: 329,
        record_date: "2020-05-23 06:44:28",
        order: 10,
        use: 71,
        stock: 53,
        inventory_ingredient_id: 38
      },
      {
        id: 330,
        record_date: "2020-05-12 00:38:14",
        order: 27,
        use: 5,
        stock: 53,
        inventory_ingredient_id: 34
      },
      {
        id: 331,
        record_date: "2020-05-29 11:51:11",
        order: 37,
        use: 56,
        stock: 60,
        inventory_ingredient_id: 35
      },
      {
        id: 332,
        record_date: "2020-05-17 00:09:45",
        order: 34,
        use: 70,
        stock: 10,
        inventory_ingredient_id: 38
      },
      {
        id: 333,
        record_date: "2020-05-29 00:37:25",
        order: 57,
        use: 19,
        stock: 63,
        inventory_ingredient_id: 38
      },
      {
        id: 334,
        record_date: "2020-05-11 07:47:50",
        order: 25,
        use: 50,
        stock: 57,
        inventory_ingredient_id: 37
      },
      {
        id: 335,
        record_date: "2020-05-11 20:05:12",
        order: 4,
        use: 64,
        stock: 81,
        inventory_ingredient_id: 34
      },
      {
        id: 336,
        record_date: "2020-05-26 13:39:04",
        order: 42,
        use: 97,
        stock: 72,
        inventory_ingredient_id: 40
      },
      {
        id: 337,
        record_date: "2020-05-18 15:10:17",
        order: 28,
        use: 94,
        stock: 77,
        inventory_ingredient_id: 37
      },
      {
        id: 338,
        record_date: "2020-05-21 00:22:11",
        order: 29,
        use: 25,
        stock: 2,
        inventory_ingredient_id: 36
      },
      {
        id: 339,
        record_date: "2020-05-17 23:44:45",
        order: 21,
        use: 35,
        stock: 86,
        inventory_ingredient_id: 31
      },
      {
        id: 340,
        record_date: "2020-05-27 13:07:40",
        order: 7,
        use: 82,
        stock: 86,
        inventory_ingredient_id: 31
      },
      {
        id: 341,
        record_date: "2020-05-16 04:17:52",
        order: 44,
        use: 19,
        stock: 29,
        inventory_ingredient_id: 38
      },
      {
        id: 342,
        record_date: "2020-05-11 08:56:00",
        order: 71,
        use: 47,
        stock: 70,
        inventory_ingredient_id: 37
      },
      {
        id: 343,
        record_date: "2020-05-19 04:48:24",
        order: 14,
        use: 95,
        stock: 86,
        inventory_ingredient_id: 33
      },
      {
        id: 344,
        record_date: "2020-05-25 04:13:31",
        order: 89,
        use: 70,
        stock: 84,
        inventory_ingredient_id: 34
      },
      {
        id: 345,
        record_date: "2020-05-11 02:50:40",
        order: 44,
        use: 80,
        stock: 85,
        inventory_ingredient_id: 31
      },
      {
        id: 346,
        record_date: "2020-05-16 06:11:19",
        order: 77,
        use: 93,
        stock: 73,
        inventory_ingredient_id: 36
      },
      {
        id: 347,
        record_date: "2020-05-28 08:26:54",
        order: 51,
        use: 3,
        stock: 46,
        inventory_ingredient_id: 35
      },
      {
        id: 348,
        record_date: "2020-05-26 06:20:22",
        order: 18,
        use: 44,
        stock: 83,
        inventory_ingredient_id: 39
      },
      {
        id: 349,
        record_date: "2020-05-29 10:00:20",
        order: 46,
        use: 3,
        stock: 50,
        inventory_ingredient_id: 32
      },
      {
        id: 350,
        record_date: "2020-05-21 08:12:30",
        order: 89,
        use: 30,
        stock: 94,
        inventory_ingredient_id: 33
      },
      {
        id: 351,
        record_date: "2020-05-14 12:46:44",
        order: 28,
        use: 67,
        stock: 9,
        inventory_ingredient_id: 35
      },
      {
        id: 352,
        record_date: "2020-05-14 01:40:23",
        order: 46,
        use: 20,
        stock: 24,
        inventory_ingredient_id: 32
      },
      {
        id: 353,
        record_date: "2020-05-28 00:53:43",
        order: 59,
        use: 97,
        stock: 36,
        inventory_ingredient_id: 34
      },
      {
        id: 354,
        record_date: "2020-05-20 10:59:23",
        order: 64,
        use: 16,
        stock: 50,
        inventory_ingredient_id: 35
      },
      {
        id: 355,
        record_date: "2020-05-15 13:31:25",
        order: 71,
        use: 48,
        stock: 83,
        inventory_ingredient_id: 31
      },
      {
        id: 356,
        record_date: "2020-05-24 01:03:04",
        order: 4,
        use: 80,
        stock: 28,
        inventory_ingredient_id: 39
      },
      {
        id: 357,
        record_date: "2020-05-25 07:29:40",
        order: 26,
        use: 64,
        stock: 23,
        inventory_ingredient_id: 36
      },
      {
        id: 358,
        record_date: "2020-05-23 01:40:16",
        order: 11,
        use: 41,
        stock: 1,
        inventory_ingredient_id: 39
      },
      {
        id: 359,
        record_date: "2020-05-22 18:50:27",
        order: 13,
        use: 65,
        stock: 29,
        inventory_ingredient_id: 34
      },
      {
        id: 360,
        record_date: "2020-05-24 14:03:08",
        order: 43,
        use: 39,
        stock: 57,
        inventory_ingredient_id: 34
      },
      {
        id: 361,
        record_date: "2020-05-19 08:58:36",
        order: 43,
        use: 96,
        stock: 97,
        inventory_ingredient_id: 36
      },
      {
        id: 362,
        record_date: "2020-05-23 01:03:07",
        order: 45,
        use: 2,
        stock: 22,
        inventory_ingredient_id: 37
      },
      {
        id: 363,
        record_date: "2020-05-21 06:10:56",
        order: 38,
        use: 98,
        stock: 23,
        inventory_ingredient_id: 36
      },
      {
        id: 364,
        record_date: "2020-05-14 17:10:57",
        order: 7,
        use: 30,
        stock: 88,
        inventory_ingredient_id: 33
      },
      {
        id: 365,
        record_date: "2020-05-23 05:16:26",
        order: 18,
        use: 23,
        stock: 88,
        inventory_ingredient_id: 34
      },
      {
        id: 366,
        record_date: "2020-05-21 04:17:49",
        order: 59,
        use: 17,
        stock: 39,
        inventory_ingredient_id: 36
      },
      {
        id: 367,
        record_date: "2020-05-21 10:32:21",
        order: 24,
        use: 48,
        stock: 80,
        inventory_ingredient_id: 37
      },
      {
        id: 368,
        record_date: "2020-05-13 23:00:03",
        order: 65,
        use: 7,
        stock: 51,
        inventory_ingredient_id: 35
      },
      {
        id: 369,
        record_date: "2020-05-12 14:52:37",
        order: 65,
        use: 69,
        stock: 98,
        inventory_ingredient_id: 35
      },
      {
        id: 370,
        record_date: "2020-05-24 00:40:42",
        order: 44,
        use: 82,
        stock: 46,
        inventory_ingredient_id: 34
      },
      {
        id: 371,
        record_date: "2020-05-26 10:15:48",
        order: 24,
        use: 13,
        stock: 67,
        inventory_ingredient_id: 34
      },
      {
        id: 372,
        record_date: "2020-05-24 03:53:28",
        order: 76,
        use: 12,
        stock: 39,
        inventory_ingredient_id: 37
      },
      {
        id: 373,
        record_date: "2020-05-29 19:16:37",
        order: 46,
        use: 78,
        stock: 96,
        inventory_ingredient_id: 33
      },
      {
        id: 374,
        record_date: "2020-05-14 10:55:18",
        order: 78,
        use: 43,
        stock: 67,
        inventory_ingredient_id: 38
      },
      {
        id: 375,
        record_date: "2020-05-26 16:57:00",
        order: 97,
        use: 24,
        stock: 52,
        inventory_ingredient_id: 38
      },
      {
        id: 376,
        record_date: "2020-05-16 11:33:36",
        order: 3,
        use: 62,
        stock: 4,
        inventory_ingredient_id: 31
      },
      {
        id: 377,
        record_date: "2020-05-20 02:10:28",
        order: 54,
        use: 5,
        stock: 83,
        inventory_ingredient_id: 34
      },
      {
        id: 378,
        record_date: "2020-05-13 11:40:47",
        order: 32,
        use: 6,
        stock: 52,
        inventory_ingredient_id: 34
      },
      {
        id: 379,
        record_date: "2020-05-26 14:28:17",
        order: 77,
        use: 32,
        stock: 8,
        inventory_ingredient_id: 40
      },
      {
        id: 380,
        record_date: "2020-05-16 09:29:44",
        order: 48,
        use: 57,
        stock: 27,
        inventory_ingredient_id: 36
      },
      {
        id: 381,
        record_date: "2020-05-29 18:25:34",
        order: 72,
        use: 26,
        stock: 86,
        inventory_ingredient_id: 35
      },
      {
        id: 382,
        record_date: "2020-05-24 06:48:21",
        order: 68,
        use: 53,
        stock: 78,
        inventory_ingredient_id: 39
      },
      {
        id: 383,
        record_date: "2020-05-11 18:19:22",
        order: 12,
        use: 51,
        stock: 73,
        inventory_ingredient_id: 34
      },
      {
        id: 384,
        record_date: "2020-05-11 07:46:21",
        order: 54,
        use: 5,
        stock: 74,
        inventory_ingredient_id: 31
      },
      {
        id: 385,
        record_date: "2020-05-26 20:35:38",
        order: 78,
        use: 74,
        stock: 86,
        inventory_ingredient_id: 40
      },
      {
        id: 386,
        record_date: "2020-05-16 20:06:13",
        order: 99,
        use: 51,
        stock: 28,
        inventory_ingredient_id: 37
      },
      {
        id: 387,
        record_date: "2020-05-24 12:29:21",
        order: 87,
        use: 52,
        stock: 17,
        inventory_ingredient_id: 32
      },
      {
        id: 388,
        record_date: "2020-05-25 10:56:20",
        order: 21,
        use: 29,
        stock: 1,
        inventory_ingredient_id: 31
      },
      {
        id: 389,
        record_date: "2020-05-12 03:40:52",
        order: 84,
        use: 91,
        stock: 48,
        inventory_ingredient_id: 35
      },
      {
        id: 390,
        record_date: "2020-05-19 12:05:16",
        order: 47,
        use: 44,
        stock: 17,
        inventory_ingredient_id: 34
      },
      {
        id: 391,
        record_date: "2020-05-13 11:41:24",
        order: 71,
        use: 94,
        stock: 75,
        inventory_ingredient_id: 39
      },
      {
        id: 392,
        record_date: "2020-05-14 20:22:50",
        order: 58,
        use: 48,
        stock: 93,
        inventory_ingredient_id: 31
      },
      {
        id: 393,
        record_date: "2020-05-13 10:13:59",
        order: 31,
        use: 47,
        stock: 70,
        inventory_ingredient_id: 33
      },
      {
        id: 394,
        record_date: "2020-05-29 16:22:32",
        order: 93,
        use: 43,
        stock: 70,
        inventory_ingredient_id: 37
      },
      {
        id: 395,
        record_date: "2020-05-26 05:46:31",
        order: 66,
        use: 52,
        stock: 19,
        inventory_ingredient_id: 33
      },
      {
        id: 396,
        record_date: "2020-05-28 09:56:35",
        order: 92,
        use: 14,
        stock: 22,
        inventory_ingredient_id: 34
      },
      {
        id: 397,
        record_date: "2020-05-17 15:57:56",
        order: 98,
        use: 95,
        stock: 72,
        inventory_ingredient_id: 39
      },
      {
        id: 398,
        record_date: "2020-05-23 00:55:41",
        order: 97,
        use: 11,
        stock: 69,
        inventory_ingredient_id: 31
      },
      {
        id: 399,
        record_date: "2020-05-14 23:01:26",
        order: 35,
        use: 13,
        stock: 4,
        inventory_ingredient_id: 38
      },
      {
        id: 400,
        record_date: "2020-05-25 22:36:29",
        order: 3,
        use: 39,
        stock: 93,
        inventory_ingredient_id: 37
      },

      {
        id: 401,
        record_date: "2020-05-11 01:43:38",
        order: 66,
        use: 93,
        stock: 10,
        inventory_ingredient_id: 49
      },
      {
        id: 402,
        record_date: "2020-05-25 20:58:20",
        order: 2,
        use: 43,
        stock: 58,
        inventory_ingredient_id: 48
      },
      {
        id: 403,
        record_date: "2020-05-19 16:29:18",
        order: 30,
        use: 50,
        stock: 71,
        inventory_ingredient_id: 47
      },
      {
        id: 404,
        record_date: "2020-05-27 21:51:24",
        order: 64,
        use: 13,
        stock: 71,
        inventory_ingredient_id: 45
      },
      {
        id: 405,
        record_date: "2020-05-14 16:29:56",
        order: 12,
        use: 64,
        stock: 21,
        inventory_ingredient_id: 45
      },
      {
        id: 406,
        record_date: "2020-05-22 09:35:44",
        order: 97,
        use: 44,
        stock: 9,
        inventory_ingredient_id: 43
      },
      {
        id: 407,
        record_date: "2020-05-12 05:44:23",
        order: 55,
        use: 30,
        stock: 14,
        inventory_ingredient_id: 48
      },
      {
        id: 408,
        record_date: "2020-05-27 16:32:57",
        order: 42,
        use: 32,
        stock: 24,
        inventory_ingredient_id: 44
      },
      {
        id: 409,
        record_date: "2020-05-11 21:25:46",
        order: 65,
        use: 11,
        stock: 87,
        inventory_ingredient_id: 42
      },
      {
        id: 410,
        record_date: "2020-05-23 17:00:59",
        order: 79,
        use: 41,
        stock: 17,
        inventory_ingredient_id: 42
      },
      {
        id: 411,
        record_date: "2020-05-16 03:21:59",
        order: 52,
        use: 3,
        stock: 78,
        inventory_ingredient_id: 44
      },
      {
        id: 412,
        record_date: "2020-05-16 12:06:05",
        order: 30,
        use: 17,
        stock: 1,
        inventory_ingredient_id: 41
      },
      {
        id: 413,
        record_date: "2020-05-23 12:08:20",
        order: 15,
        use: 15,
        stock: 11,
        inventory_ingredient_id: 44
      },
      {
        id: 414,
        record_date: "2020-05-29 09:49:56",
        order: 10,
        use: 75,
        stock: 92,
        inventory_ingredient_id: 49
      },
      {
        id: 415,
        record_date: "2020-05-12 05:40:36",
        order: 57,
        use: 34,
        stock: 13,
        inventory_ingredient_id: 47
      },
      {
        id: 416,
        record_date: "2020-05-17 08:06:12",
        order: 44,
        use: 24,
        stock: 80,
        inventory_ingredient_id: 44
      },
      {
        id: 417,
        record_date: "2020-05-25 06:31:58",
        order: 48,
        use: 62,
        stock: 99,
        inventory_ingredient_id: 42
      },
      {
        id: 418,
        record_date: "2020-05-23 04:49:03",
        order: 16,
        use: 48,
        stock: 68,
        inventory_ingredient_id: 49
      },
      {
        id: 419,
        record_date: "2020-05-27 06:48:09",
        order: 52,
        use: 32,
        stock: 19,
        inventory_ingredient_id: 45
      },
      {
        id: 420,
        record_date: "2020-05-14 19:00:35",
        order: 83,
        use: 89,
        stock: 43,
        inventory_ingredient_id: 48
      },
      {
        id: 421,
        record_date: "2020-05-24 08:35:06",
        order: 21,
        use: 53,
        stock: 82,
        inventory_ingredient_id: 43
      },
      {
        id: 422,
        record_date: "2020-05-20 04:56:15",
        order: 15,
        use: 42,
        stock: 6,
        inventory_ingredient_id: 42
      },
      {
        id: 423,
        record_date: "2020-05-12 08:54:49",
        order: 36,
        use: 12,
        stock: 37,
        inventory_ingredient_id: 41
      },
      {
        id: 424,
        record_date: "2020-05-24 16:47:23",
        order: 14,
        use: 92,
        stock: 45,
        inventory_ingredient_id: 42
      },
      {
        id: 425,
        record_date: "2020-05-12 10:56:49",
        order: 20,
        use: 43,
        stock: 70,
        inventory_ingredient_id: 42
      },
      {
        id: 426,
        record_date: "2020-05-12 07:33:04",
        order: 48,
        use: 42,
        stock: 26,
        inventory_ingredient_id: 49
      },
      {
        id: 427,
        record_date: "2020-05-24 09:02:26",
        order: 76,
        use: 77,
        stock: 2,
        inventory_ingredient_id: 50
      },
      {
        id: 428,
        record_date: "2020-05-12 20:51:38",
        order: 30,
        use: 59,
        stock: 56,
        inventory_ingredient_id: 45
      },
      {
        id: 429,
        record_date: "2020-05-14 03:19:16",
        order: 54,
        use: 1,
        stock: 48,
        inventory_ingredient_id: 50
      },
      {
        id: 430,
        record_date: "2020-05-17 14:04:56",
        order: 48,
        use: 65,
        stock: 25,
        inventory_ingredient_id: 43
      },
      {
        id: 431,
        record_date: "2020-05-12 23:12:05",
        order: 37,
        use: 25,
        stock: 20,
        inventory_ingredient_id: 42
      },
      {
        id: 432,
        record_date: "2020-05-27 02:58:34",
        order: 60,
        use: 58,
        stock: 70,
        inventory_ingredient_id: 49
      },
      {
        id: 433,
        record_date: "2020-05-29 13:21:40",
        order: 60,
        use: 87,
        stock: 42,
        inventory_ingredient_id: 49
      },
      {
        id: 434,
        record_date: "2020-05-27 01:41:49",
        order: 66,
        use: 33,
        stock: 100,
        inventory_ingredient_id: 46
      },
      {
        id: 435,
        record_date: "2020-05-15 10:03:37",
        order: 56,
        use: 3,
        stock: 33,
        inventory_ingredient_id: 49
      },
      {
        id: 436,
        record_date: "2020-05-29 05:00:00",
        order: 59,
        use: 68,
        stock: 71,
        inventory_ingredient_id: 46
      },
      {
        id: 437,
        record_date: "2020-05-20 16:19:59",
        order: 15,
        use: 3,
        stock: 91,
        inventory_ingredient_id: 48
      },
      {
        id: 438,
        record_date: "2020-05-26 08:58:24",
        order: 87,
        use: 94,
        stock: 90,
        inventory_ingredient_id: 42
      },
      {
        id: 439,
        record_date: "2020-05-13 16:29:16",
        order: 96,
        use: 27,
        stock: 31,
        inventory_ingredient_id: 46
      },
      {
        id: 440,
        record_date: "2020-05-18 21:39:07",
        order: 71,
        use: 5,
        stock: 42,
        inventory_ingredient_id: 41
      },
      {
        id: 441,
        record_date: "2020-05-21 04:04:03",
        order: 87,
        use: 34,
        stock: 51,
        inventory_ingredient_id: 50
      },
      {
        id: 442,
        record_date: "2020-05-16 21:08:55",
        order: 40,
        use: 96,
        stock: 24,
        inventory_ingredient_id: 48
      },
      {
        id: 443,
        record_date: "2020-05-11 01:10:57",
        order: 5,
        use: 73,
        stock: 27,
        inventory_ingredient_id: 42
      },
      {
        id: 444,
        record_date: "2020-05-27 18:35:49",
        order: 2,
        use: 63,
        stock: 75,
        inventory_ingredient_id: 47
      },
      {
        id: 445,
        record_date: "2020-05-20 22:23:13",
        order: 25,
        use: 91,
        stock: 78,
        inventory_ingredient_id: 42
      },
      {
        id: 446,
        record_date: "2020-05-26 08:55:44",
        order: 18,
        use: 56,
        stock: 26,
        inventory_ingredient_id: 49
      },
      {
        id: 447,
        record_date: "2020-05-20 08:32:06",
        order: 17,
        use: 87,
        stock: 87,
        inventory_ingredient_id: 45
      },
      {
        id: 448,
        record_date: "2020-05-15 21:22:08",
        order: 37,
        use: 84,
        stock: 73,
        inventory_ingredient_id: 44
      },
      {
        id: 449,
        record_date: "2020-05-29 09:24:29",
        order: 86,
        use: 10,
        stock: 95,
        inventory_ingredient_id: 41
      },
      {
        id: 450,
        record_date: "2020-05-21 12:09:46",
        order: 70,
        use: 5,
        stock: 71,
        inventory_ingredient_id: 44
      },
      {
        id: 451,
        record_date: "2020-05-23 13:36:37",
        order: 71,
        use: 22,
        stock: 90,
        inventory_ingredient_id: 48
      },
      {
        id: 452,
        record_date: "2020-05-24 12:46:18",
        order: 73,
        use: 57,
        stock: 79,
        inventory_ingredient_id: 41
      },
      {
        id: 453,
        record_date: "2020-05-11 09:07:21",
        order: 8,
        use: 55,
        stock: 6,
        inventory_ingredient_id: 41
      },
      {
        id: 454,
        record_date: "2020-05-23 14:39:41",
        order: 44,
        use: 62,
        stock: 79,
        inventory_ingredient_id: 45
      },
      {
        id: 455,
        record_date: "2020-05-28 22:11:06",
        order: 30,
        use: 68,
        stock: 45,
        inventory_ingredient_id: 45
      },
      {
        id: 456,
        record_date: "2020-05-14 22:50:45",
        order: 37,
        use: 26,
        stock: 59,
        inventory_ingredient_id: 49
      },
      {
        id: 457,
        record_date: "2020-05-20 05:46:40",
        order: 51,
        use: 6,
        stock: 11,
        inventory_ingredient_id: 46
      },
      {
        id: 458,
        record_date: "2020-05-15 22:28:18",
        order: 30,
        use: 64,
        stock: 30,
        inventory_ingredient_id: 43
      },
      {
        id: 459,
        record_date: "2020-05-17 13:12:40",
        order: 21,
        use: 3,
        stock: 88,
        inventory_ingredient_id: 43
      },
      {
        id: 460,
        record_date: "2020-05-20 17:57:57",
        order: 46,
        use: 21,
        stock: 46,
        inventory_ingredient_id: 41
      },
      {
        id: 461,
        record_date: "2020-05-13 18:44:28",
        order: 78,
        use: 5,
        stock: 3,
        inventory_ingredient_id: 43
      },
      {
        id: 462,
        record_date: "2020-05-14 03:28:19",
        order: 19,
        use: 60,
        stock: 29,
        inventory_ingredient_id: 43
      },
      {
        id: 463,
        record_date: "2020-05-14 15:16:24",
        order: 32,
        use: 18,
        stock: 20,
        inventory_ingredient_id: 46
      },
      {
        id: 464,
        record_date: "2020-05-28 10:26:52",
        order: 54,
        use: 25,
        stock: 68,
        inventory_ingredient_id: 43
      },
      {
        id: 465,
        record_date: "2020-05-12 01:35:41",
        order: 70,
        use: 21,
        stock: 68,
        inventory_ingredient_id: 44
      },
      {
        id: 466,
        record_date: "2020-05-29 15:47:05",
        order: 44,
        use: 7,
        stock: 68,
        inventory_ingredient_id: 41
      },
      {
        id: 467,
        record_date: "2020-05-13 01:24:06",
        order: 19,
        use: 58,
        stock: 12,
        inventory_ingredient_id: 50
      },
      {
        id: 468,
        record_date: "2020-05-11 07:10:04",
        order: 15,
        use: 53,
        stock: 39,
        inventory_ingredient_id: 46
      },
      {
        id: 469,
        record_date: "2020-05-15 09:38:44",
        order: 36,
        use: 75,
        stock: 52,
        inventory_ingredient_id: 49
      },
      {
        id: 470,
        record_date: "2020-05-13 09:37:20",
        order: 92,
        use: 17,
        stock: 89,
        inventory_ingredient_id: 49
      },
      {
        id: 471,
        record_date: "2020-05-23 14:18:36",
        order: 32,
        use: 40,
        stock: 9,
        inventory_ingredient_id: 50
      },
      {
        id: 472,
        record_date: "2020-05-14 13:47:23",
        order: 25,
        use: 72,
        stock: 1,
        inventory_ingredient_id: 49
      },
      {
        id: 473,
        record_date: "2020-05-13 14:23:17",
        order: 14,
        use: 9,
        stock: 39,
        inventory_ingredient_id: 46
      },
      {
        id: 474,
        record_date: "2020-05-23 19:41:57",
        order: 6,
        use: 37,
        stock: 43,
        inventory_ingredient_id: 43
      },
      {
        id: 475,
        record_date: "2020-05-16 01:14:46",
        order: 59,
        use: 36,
        stock: 9,
        inventory_ingredient_id: 48
      },
      {
        id: 476,
        record_date: "2020-05-17 01:03:19",
        order: 70,
        use: 73,
        stock: 81,
        inventory_ingredient_id: 50
      },
      {
        id: 477,
        record_date: "2020-05-11 19:18:51",
        order: 98,
        use: 56,
        stock: 69,
        inventory_ingredient_id: 45
      },
      {
        id: 478,
        record_date: "2020-05-19 01:56:50",
        order: 51,
        use: 2,
        stock: 79,
        inventory_ingredient_id: 47
      },
      {
        id: 479,
        record_date: "2020-05-14 17:41:49",
        order: 79,
        use: 100,
        stock: 79,
        inventory_ingredient_id: 44
      },
      {
        id: 480,
        record_date: "2020-05-18 19:09:03",
        order: 41,
        use: 66,
        stock: 25,
        inventory_ingredient_id: 43
      },
      {
        id: 481,
        record_date: "2020-05-26 15:53:37",
        order: 98,
        use: 37,
        stock: 85,
        inventory_ingredient_id: 43
      },
      {
        id: 482,
        record_date: "2020-05-18 03:01:06",
        order: 72,
        use: 24,
        stock: 74,
        inventory_ingredient_id: 44
      },
      {
        id: 483,
        record_date: "2020-05-20 10:21:26",
        order: 67,
        use: 5,
        stock: 18,
        inventory_ingredient_id: 48
      },
      {
        id: 484,
        record_date: "2020-05-16 07:19:14",
        order: 13,
        use: 70,
        stock: 39,
        inventory_ingredient_id: 44
      },
      {
        id: 485,
        record_date: "2020-05-14 19:01:25",
        order: 12,
        use: 92,
        stock: 18,
        inventory_ingredient_id: 45
      },
      {
        id: 486,
        record_date: "2020-05-18 07:06:17",
        order: 58,
        use: 79,
        stock: 20,
        inventory_ingredient_id: 43
      },
      {
        id: 487,
        record_date: "2020-05-18 11:22:43",
        order: 41,
        use: 46,
        stock: 45,
        inventory_ingredient_id: 47
      },
      {
        id: 488,
        record_date: "2020-05-15 20:00:04",
        order: 40,
        use: 28,
        stock: 55,
        inventory_ingredient_id: 41
      },
      {
        id: 489,
        record_date: "2020-05-21 08:36:00",
        order: 91,
        use: 5,
        stock: 3,
        inventory_ingredient_id: 47
      },
      {
        id: 490,
        record_date: "2020-05-12 23:31:29",
        order: 15,
        use: 78,
        stock: 2,
        inventory_ingredient_id: 42
      },
      {
        id: 491,
        record_date: "2020-05-13 03:55:34",
        order: 54,
        use: 96,
        stock: 50,
        inventory_ingredient_id: 48
      },
      {
        id: 492,
        record_date: "2020-05-16 08:16:24",
        order: 66,
        use: 56,
        stock: 65,
        inventory_ingredient_id: 50
      },
      {
        id: 493,
        record_date: "2020-05-21 13:43:12",
        order: 4,
        use: 82,
        stock: 90,
        inventory_ingredient_id: 49
      },
      {
        id: 494,
        record_date: "2020-05-16 16:00:20",
        order: 96,
        use: 54,
        stock: 40,
        inventory_ingredient_id: 42
      },
      {
        id: 495,
        record_date: "2020-05-22 23:13:25",
        order: 76,
        use: 79,
        stock: 4,
        inventory_ingredient_id: 43
      },
      {
        id: 496,
        record_date: "2020-05-18 02:18:06",
        order: 77,
        use: 71,
        stock: 78,
        inventory_ingredient_id: 47
      },
      {
        id: 497,
        record_date: "2020-05-18 03:37:01",
        order: 51,
        use: 46,
        stock: 83,
        inventory_ingredient_id: 44
      },
      {
        id: 498,
        record_date: "2020-05-19 03:40:10",
        order: 91,
        use: 72,
        stock: 2,
        inventory_ingredient_id: 47
      },
      {
        id: 499,
        record_date: "2020-05-29 00:36:39",
        order: 40,
        use: 89,
        stock: 92,
        inventory_ingredient_id: 44
      },
      {
        id: 500,
        record_date: "2020-05-11 20:44:22",
        order: 55,
        use: 48,
        stock: 17,
        inventory_ingredient_id: 49
      },

      {
        id: 501,
        record_date: "2020-05-28 09:34:40",
        order: 43,
        use: 38,
        stock: 1,
        inventory_ingredient_id: 52
      },
      {
        id: 502,
        record_date: "2020-05-12 04:18:50",
        order: 1,
        use: 30,
        stock: 12,
        inventory_ingredient_id: 53
      },
      {
        id: 503,
        record_date: "2020-05-23 22:41:42",
        order: 43,
        use: 24,
        stock: 99,
        inventory_ingredient_id: 59
      },
      {
        id: 504,
        record_date: "2020-05-27 01:05:52",
        order: 4,
        use: 51,
        stock: 90,
        inventory_ingredient_id: 53
      },
      {
        id: 505,
        record_date: "2020-05-26 19:50:23",
        order: 67,
        use: 36,
        stock: 3,
        inventory_ingredient_id: 57
      },
      {
        id: 506,
        record_date: "2020-05-26 04:06:52",
        order: 17,
        use: 28,
        stock: 70,
        inventory_ingredient_id: 52
      },
      {
        id: 507,
        record_date: "2020-05-14 19:34:57",
        order: 86,
        use: 52,
        stock: 49,
        inventory_ingredient_id: 56
      },
      {
        id: 508,
        record_date: "2020-05-13 09:50:39",
        order: 65,
        use: 4,
        stock: 19,
        inventory_ingredient_id: 53
      },
      {
        id: 509,
        record_date: "2020-05-22 22:36:42",
        order: 64,
        use: 32,
        stock: 42,
        inventory_ingredient_id: 54
      },
      {
        id: 510,
        record_date: "2020-05-17 01:12:03",
        order: 9,
        use: 96,
        stock: 70,
        inventory_ingredient_id: 51
      },
      {
        id: 511,
        record_date: "2020-05-17 00:34:10",
        order: 38,
        use: 92,
        stock: 18,
        inventory_ingredient_id: 59
      },
      {
        id: 512,
        record_date: "2020-05-22 13:31:10",
        order: 99,
        use: 38,
        stock: 54,
        inventory_ingredient_id: 55
      },
      {
        id: 513,
        record_date: "2020-05-29 15:13:23",
        order: 91,
        use: 67,
        stock: 26,
        inventory_ingredient_id: 52
      },
      {
        id: 514,
        record_date: "2020-05-19 18:46:31",
        order: 91,
        use: 8,
        stock: 13,
        inventory_ingredient_id: 51
      },
      {
        id: 515,
        record_date: "2020-05-21 13:39:20",
        order: 57,
        use: 78,
        stock: 23,
        inventory_ingredient_id: 51
      },
      {
        id: 516,
        record_date: "2020-05-22 21:17:45",
        order: 2,
        use: 63,
        stock: 95,
        inventory_ingredient_id: 56
      },
      {
        id: 517,
        record_date: "2020-05-29 11:24:30",
        order: 64,
        use: 35,
        stock: 88,
        inventory_ingredient_id: 60
      },
      {
        id: 518,
        record_date: "2020-05-24 04:22:26",
        order: 26,
        use: 17,
        stock: 33,
        inventory_ingredient_id: 51
      },
      {
        id: 519,
        record_date: "2020-05-15 17:58:57",
        order: 27,
        use: 56,
        stock: 97,
        inventory_ingredient_id: 60
      },
      {
        id: 520,
        record_date: "2020-05-20 12:44:48",
        order: 99,
        use: 50,
        stock: 71,
        inventory_ingredient_id: 53
      },
      {
        id: 521,
        record_date: "2020-05-15 23:14:27",
        order: 11,
        use: 45,
        stock: 58,
        inventory_ingredient_id: 55
      },
      {
        id: 522,
        record_date: "2020-05-24 22:45:19",
        order: 97,
        use: 67,
        stock: 57,
        inventory_ingredient_id: 54
      },
      {
        id: 523,
        record_date: "2020-05-21 02:12:10",
        order: 36,
        use: 67,
        stock: 54,
        inventory_ingredient_id: 57
      },
      {
        id: 524,
        record_date: "2020-05-16 13:20:03",
        order: 72,
        use: 15,
        stock: 57,
        inventory_ingredient_id: 54
      },
      {
        id: 525,
        record_date: "2020-05-28 11:12:26",
        order: 42,
        use: 95,
        stock: 47,
        inventory_ingredient_id: 54
      },
      {
        id: 526,
        record_date: "2020-05-27 18:09:01",
        order: 35,
        use: 43,
        stock: 78,
        inventory_ingredient_id: 52
      },
      {
        id: 527,
        record_date: "2020-05-22 14:16:54",
        order: 32,
        use: 36,
        stock: 79,
        inventory_ingredient_id: 51
      },
      {
        id: 528,
        record_date: "2020-05-24 03:13:07",
        order: 30,
        use: 60,
        stock: 38,
        inventory_ingredient_id: 52
      },
      {
        id: 529,
        record_date: "2020-05-21 00:06:00",
        order: 22,
        use: 55,
        stock: 82,
        inventory_ingredient_id: 52
      },
      {
        id: 530,
        record_date: "2020-05-17 09:27:34",
        order: 63,
        use: 29,
        stock: 82,
        inventory_ingredient_id: 57
      },
      {
        id: 531,
        record_date: "2020-05-29 14:38:10",
        order: 77,
        use: 45,
        stock: 53,
        inventory_ingredient_id: 52
      },
      {
        id: 532,
        record_date: "2020-05-27 11:41:21",
        order: 24,
        use: 91,
        stock: 9,
        inventory_ingredient_id: 53
      },
      {
        id: 533,
        record_date: "2020-05-16 21:24:34",
        order: 35,
        use: 87,
        stock: 7,
        inventory_ingredient_id: 55
      },
      {
        id: 534,
        record_date: "2020-05-25 15:57:32",
        order: 59,
        use: 73,
        stock: 34,
        inventory_ingredient_id: 56
      },
      {
        id: 535,
        record_date: "2020-05-29 22:16:38",
        order: 8,
        use: 53,
        stock: 14,
        inventory_ingredient_id: 51
      },
      {
        id: 536,
        record_date: "2020-05-13 10:17:05",
        order: 97,
        use: 30,
        stock: 45,
        inventory_ingredient_id: 59
      },
      {
        id: 537,
        record_date: "2020-05-13 21:25:18",
        order: 6,
        use: 30,
        stock: 55,
        inventory_ingredient_id: 53
      },
      {
        id: 538,
        record_date: "2020-05-18 18:05:36",
        order: 82,
        use: 61,
        stock: 43,
        inventory_ingredient_id: 57
      },
      {
        id: 539,
        record_date: "2020-05-15 18:57:15",
        order: 38,
        use: 66,
        stock: 15,
        inventory_ingredient_id: 52
      },
      {
        id: 540,
        record_date: "2020-05-22 05:15:07",
        order: 96,
        use: 19,
        stock: 81,
        inventory_ingredient_id: 54
      },
      {
        id: 541,
        record_date: "2020-05-12 18:40:47",
        order: 82,
        use: 73,
        stock: 83,
        inventory_ingredient_id: 57
      },
      {
        id: 542,
        record_date: "2020-05-25 02:47:18",
        order: 21,
        use: 51,
        stock: 39,
        inventory_ingredient_id: 56
      },
      {
        id: 543,
        record_date: "2020-05-16 22:35:48",
        order: 35,
        use: 41,
        stock: 81,
        inventory_ingredient_id: 53
      },
      {
        id: 544,
        record_date: "2020-05-20 05:31:47",
        order: 82,
        use: 72,
        stock: 31,
        inventory_ingredient_id: 51
      },
      {
        id: 545,
        record_date: "2020-05-22 21:35:10",
        order: 21,
        use: 96,
        stock: 55,
        inventory_ingredient_id: 56
      },
      {
        id: 546,
        record_date: "2020-05-25 21:52:23",
        order: 62,
        use: 83,
        stock: 15,
        inventory_ingredient_id: 55
      },
      {
        id: 547,
        record_date: "2020-05-23 22:57:06",
        order: 75,
        use: 48,
        stock: 61,
        inventory_ingredient_id: 59
      },
      {
        id: 548,
        record_date: "2020-05-19 20:58:13",
        order: 59,
        use: 17,
        stock: 38,
        inventory_ingredient_id: 54
      },
      {
        id: 549,
        record_date: "2020-05-28 00:59:28",
        order: 25,
        use: 16,
        stock: 8,
        inventory_ingredient_id: 60
      },
      {
        id: 550,
        record_date: "2020-05-18 15:22:40",
        order: 27,
        use: 81,
        stock: 92,
        inventory_ingredient_id: 51
      },
      {
        id: 551,
        record_date: "2020-05-25 05:36:28",
        order: 53,
        use: 41,
        stock: 18,
        inventory_ingredient_id: 51
      },
      {
        id: 552,
        record_date: "2020-05-14 07:44:05",
        order: 7,
        use: 36,
        stock: 17,
        inventory_ingredient_id: 59
      },
      {
        id: 553,
        record_date: "2020-05-14 21:16:32",
        order: 61,
        use: 70,
        stock: 1,
        inventory_ingredient_id: 55
      },
      {
        id: 554,
        record_date: "2020-05-17 03:42:28",
        order: 7,
        use: 9,
        stock: 87,
        inventory_ingredient_id: 56
      },
      {
        id: 555,
        record_date: "2020-05-15 23:02:09",
        order: 45,
        use: 8,
        stock: 96,
        inventory_ingredient_id: 57
      },
      {
        id: 556,
        record_date: "2020-05-27 05:20:28",
        order: 35,
        use: 33,
        stock: 6,
        inventory_ingredient_id: 55
      },
      {
        id: 557,
        record_date: "2020-05-28 01:09:01",
        order: 6,
        use: 42,
        stock: 29,
        inventory_ingredient_id: 55
      },
      {
        id: 558,
        record_date: "2020-05-12 20:27:14",
        order: 78,
        use: 36,
        stock: 29,
        inventory_ingredient_id: 57
      },
      {
        id: 559,
        record_date: "2020-05-11 19:44:37",
        order: 45,
        use: 2,
        stock: 15,
        inventory_ingredient_id: 57
      },
      {
        id: 560,
        record_date: "2020-05-19 20:50:35",
        order: 62,
        use: 90,
        stock: 36,
        inventory_ingredient_id: 58
      },
      {
        id: 561,
        record_date: "2020-05-15 05:17:30",
        order: 8,
        use: 76,
        stock: 78,
        inventory_ingredient_id: 51
      },
      {
        id: 562,
        record_date: "2020-05-16 05:13:36",
        order: 88,
        use: 69,
        stock: 29,
        inventory_ingredient_id: 51
      },
      {
        id: 563,
        record_date: "2020-05-29 11:21:49",
        order: 81,
        use: 84,
        stock: 10,
        inventory_ingredient_id: 57
      },
      {
        id: 564,
        record_date: "2020-05-27 07:56:02",
        order: 58,
        use: 55,
        stock: 35,
        inventory_ingredient_id: 52
      },
      {
        id: 565,
        record_date: "2020-05-13 13:28:13",
        order: 34,
        use: 1,
        stock: 12,
        inventory_ingredient_id: 52
      },
      {
        id: 566,
        record_date: "2020-05-20 05:59:05",
        order: 37,
        use: 13,
        stock: 52,
        inventory_ingredient_id: 51
      },
      {
        id: 567,
        record_date: "2020-05-11 08:17:21",
        order: 62,
        use: 22,
        stock: 18,
        inventory_ingredient_id: 54
      },
      {
        id: 568,
        record_date: "2020-05-25 15:01:37",
        order: 26,
        use: 39,
        stock: 44,
        inventory_ingredient_id: 56
      },
      {
        id: 569,
        record_date: "2020-05-29 01:18:41",
        order: 66,
        use: 64,
        stock: 63,
        inventory_ingredient_id: 51
      },
      {
        id: 570,
        record_date: "2020-05-15 20:56:05",
        order: 10,
        use: 12,
        stock: 18,
        inventory_ingredient_id: 59
      },
      {
        id: 571,
        record_date: "2020-05-12 06:06:06",
        order: 7,
        use: 48,
        stock: 25,
        inventory_ingredient_id: 60
      },
      {
        id: 572,
        record_date: "2020-05-22 15:36:49",
        order: 23,
        use: 24,
        stock: 10,
        inventory_ingredient_id: 52
      },
      {
        id: 573,
        record_date: "2020-05-12 03:13:03",
        order: 6,
        use: 11,
        stock: 91,
        inventory_ingredient_id: 52
      },
      {
        id: 574,
        record_date: "2020-05-25 07:42:45",
        order: 16,
        use: 58,
        stock: 48,
        inventory_ingredient_id: 51
      },
      {
        id: 575,
        record_date: "2020-05-14 16:10:02",
        order: 89,
        use: 75,
        stock: 52,
        inventory_ingredient_id: 51
      },
      {
        id: 576,
        record_date: "2020-05-18 07:25:38",
        order: 81,
        use: 4,
        stock: 74,
        inventory_ingredient_id: 60
      },
      {
        id: 577,
        record_date: "2020-05-19 15:03:07",
        order: 39,
        use: 33,
        stock: 81,
        inventory_ingredient_id: 52
      },
      {
        id: 578,
        record_date: "2020-05-26 22:10:04",
        order: 19,
        use: 16,
        stock: 95,
        inventory_ingredient_id: 53
      },
      {
        id: 579,
        record_date: "2020-05-29 12:40:33",
        order: 56,
        use: 83,
        stock: 83,
        inventory_ingredient_id: 53
      },
      {
        id: 580,
        record_date: "2020-05-18 17:40:52",
        order: 75,
        use: 54,
        stock: 44,
        inventory_ingredient_id: 52
      },
      {
        id: 581,
        record_date: "2020-05-12 14:42:54",
        order: 21,
        use: 96,
        stock: 32,
        inventory_ingredient_id: 53
      },
      {
        id: 582,
        record_date: "2020-05-29 16:42:42",
        order: 38,
        use: 27,
        stock: 54,
        inventory_ingredient_id: 58
      },
      {
        id: 583,
        record_date: "2020-05-15 12:30:01",
        order: 64,
        use: 64,
        stock: 95,
        inventory_ingredient_id: 52
      },
      {
        id: 584,
        record_date: "2020-05-28 06:30:35",
        order: 70,
        use: 54,
        stock: 13,
        inventory_ingredient_id: 51
      },
      {
        id: 585,
        record_date: "2020-05-21 20:12:33",
        order: 15,
        use: 20,
        stock: 54,
        inventory_ingredient_id: 59
      },
      {
        id: 586,
        record_date: "2020-05-17 06:14:13",
        order: 25,
        use: 60,
        stock: 66,
        inventory_ingredient_id: 52
      },
      {
        id: 587,
        record_date: "2020-05-20 19:31:09",
        order: 78,
        use: 20,
        stock: 8,
        inventory_ingredient_id: 56
      },
      {
        id: 588,
        record_date: "2020-05-15 03:59:12",
        order: 81,
        use: 60,
        stock: 84,
        inventory_ingredient_id: 53
      },
      {
        id: 589,
        record_date: "2020-05-25 11:19:41",
        order: 33,
        use: 7,
        stock: 83,
        inventory_ingredient_id: 53
      },
      {
        id: 590,
        record_date: "2020-05-13 01:39:15",
        order: 10,
        use: 28,
        stock: 4,
        inventory_ingredient_id: 52
      },
      {
        id: 591,
        record_date: "2020-05-13 04:44:25",
        order: 61,
        use: 68,
        stock: 98,
        inventory_ingredient_id: 57
      },
      {
        id: 592,
        record_date: "2020-05-20 04:29:20",
        order: 95,
        use: 89,
        stock: 16,
        inventory_ingredient_id: 57
      },
      {
        id: 593,
        record_date: "2020-05-25 14:34:22",
        order: 48,
        use: 64,
        stock: 57,
        inventory_ingredient_id: 52
      },
      {
        id: 594,
        record_date: "2020-05-27 03:52:33",
        order: 94,
        use: 26,
        stock: 86,
        inventory_ingredient_id: 54
      },
      {
        id: 595,
        record_date: "2020-05-11 06:07:27",
        order: 51,
        use: 68,
        stock: 53,
        inventory_ingredient_id: 56
      },
      {
        id: 596,
        record_date: "2020-05-13 22:22:52",
        order: 32,
        use: 91,
        stock: 19,
        inventory_ingredient_id: 51
      },
      {
        id: 597,
        record_date: "2020-05-14 14:39:59",
        order: 15,
        use: 36,
        stock: 39,
        inventory_ingredient_id: 53
      },
      {
        id: 598,
        record_date: "2020-05-27 09:36:23",
        order: 79,
        use: 66,
        stock: 76,
        inventory_ingredient_id: 55
      },
      {
        id: 599,
        record_date: "2020-05-27 21:15:16",
        order: 96,
        use: 57,
        stock: 78,
        inventory_ingredient_id: 55
      },
      {
        id: 600,
        record_date: "2020-05-12 00:04:41",
        order: 46,
        use: 12,
        stock: 64,
        inventory_ingredient_id: 58
      },

      {
        id: 601,
        record_date: "2020-05-14 04:44:04",
        order: 57,
        use: 68,
        stock: 2,
        inventory_ingredient_id: 64
      },
      {
        id: 602,
        record_date: "2020-05-25 06:14:21",
        order: 12,
        use: 43,
        stock: 79,
        inventory_ingredient_id: 69
      },
      {
        id: 603,
        record_date: "2020-05-28 21:49:28",
        order: 19,
        use: 47,
        stock: 54,
        inventory_ingredient_id: 68
      },
      {
        id: 604,
        record_date: "2020-05-13 02:50:22",
        order: 61,
        use: 27,
        stock: 45,
        inventory_ingredient_id: 66
      },
      {
        id: 605,
        record_date: "2020-05-20 06:43:03",
        order: 12,
        use: 58,
        stock: 81,
        inventory_ingredient_id: 69
      },
      {
        id: 606,
        record_date: "2020-05-17 04:06:00",
        order: 53,
        use: 39,
        stock: 64,
        inventory_ingredient_id: 62
      },
      {
        id: 607,
        record_date: "2020-05-12 21:30:05",
        order: 40,
        use: 5,
        stock: 49,
        inventory_ingredient_id: 62
      },
      {
        id: 608,
        record_date: "2020-05-26 02:14:58",
        order: 29,
        use: 4,
        stock: 95,
        inventory_ingredient_id: 62
      },
      {
        id: 609,
        record_date: "2020-05-21 18:12:19",
        order: 66,
        use: 98,
        stock: 30,
        inventory_ingredient_id: 70
      },
      {
        id: 610,
        record_date: "2020-05-16 14:59:49",
        order: 65,
        use: 89,
        stock: 26,
        inventory_ingredient_id: 63
      },
      {
        id: 611,
        record_date: "2020-05-15 08:46:27",
        order: 69,
        use: 42,
        stock: 89,
        inventory_ingredient_id: 66
      },
      {
        id: 612,
        record_date: "2020-05-19 01:05:05",
        order: 44,
        use: 78,
        stock: 18,
        inventory_ingredient_id: 65
      },
      {
        id: 613,
        record_date: "2020-05-12 18:44:49",
        order: 89,
        use: 32,
        stock: 99,
        inventory_ingredient_id: 69
      },
      {
        id: 614,
        record_date: "2020-05-18 03:07:12",
        order: 80,
        use: 84,
        stock: 66,
        inventory_ingredient_id: 69
      },
      {
        id: 615,
        record_date: "2020-05-18 18:56:31",
        order: 1,
        use: 85,
        stock: 90,
        inventory_ingredient_id: 69
      },
      {
        id: 616,
        record_date: "2020-05-17 12:07:19",
        order: 47,
        use: 87,
        stock: 16,
        inventory_ingredient_id: 63
      },
      {
        id: 617,
        record_date: "2020-05-23 16:31:40",
        order: 41,
        use: 55,
        stock: 4,
        inventory_ingredient_id: 65
      },
      {
        id: 618,
        record_date: "2020-05-29 17:46:55",
        order: 28,
        use: 54,
        stock: 27,
        inventory_ingredient_id: 70
      },
      {
        id: 619,
        record_date: "2020-05-20 15:56:50",
        order: 21,
        use: 84,
        stock: 84,
        inventory_ingredient_id: 65
      },
      {
        id: 620,
        record_date: "2020-05-27 08:21:22",
        order: 72,
        use: 57,
        stock: 95,
        inventory_ingredient_id: 63
      },
      {
        id: 621,
        record_date: "2020-05-28 20:40:05",
        order: 59,
        use: 66,
        stock: 44,
        inventory_ingredient_id: 62
      },
      {
        id: 622,
        record_date: "2020-05-15 18:16:21",
        order: 68,
        use: 51,
        stock: 90,
        inventory_ingredient_id: 62
      },
      {
        id: 623,
        record_date: "2020-05-11 10:14:03",
        order: 34,
        use: 88,
        stock: 8,
        inventory_ingredient_id: 69
      },
      {
        id: 624,
        record_date: "2020-05-24 21:56:13",
        order: 68,
        use: 22,
        stock: 96,
        inventory_ingredient_id: 66
      },
      {
        id: 625,
        record_date: "2020-05-13 06:16:05",
        order: 86,
        use: 54,
        stock: 89,
        inventory_ingredient_id: 62
      },
      {
        id: 626,
        record_date: "2020-05-19 05:24:57",
        order: 46,
        use: 96,
        stock: 67,
        inventory_ingredient_id: 70
      },
      {
        id: 627,
        record_date: "2020-05-26 18:52:25",
        order: 10,
        use: 48,
        stock: 26,
        inventory_ingredient_id: 64
      },
      {
        id: 628,
        record_date: "2020-05-14 23:37:59",
        order: 9,
        use: 46,
        stock: 62,
        inventory_ingredient_id: 67
      },
      {
        id: 629,
        record_date: "2020-05-23 11:09:44",
        order: 43,
        use: 39,
        stock: 43,
        inventory_ingredient_id: 63
      },
      {
        id: 630,
        record_date: "2020-05-23 08:32:16",
        order: 66,
        use: 86,
        stock: 33,
        inventory_ingredient_id: 66
      },
      {
        id: 631,
        record_date: "2020-05-28 19:32:50",
        order: 69,
        use: 98,
        stock: 49,
        inventory_ingredient_id: 61
      },
      {
        id: 632,
        record_date: "2020-05-28 05:10:35",
        order: 93,
        use: 42,
        stock: 28,
        inventory_ingredient_id: 64
      },
      {
        id: 633,
        record_date: "2020-05-26 22:24:44",
        order: 6,
        use: 73,
        stock: 41,
        inventory_ingredient_id: 61
      },
      {
        id: 634,
        record_date: "2020-05-27 03:15:37",
        order: 49,
        use: 34,
        stock: 69,
        inventory_ingredient_id: 68
      },
      {
        id: 635,
        record_date: "2020-05-26 02:41:28",
        order: 89,
        use: 70,
        stock: 19,
        inventory_ingredient_id: 70
      },
      {
        id: 636,
        record_date: "2020-05-11 18:42:12",
        order: 81,
        use: 22,
        stock: 37,
        inventory_ingredient_id: 61
      },
      {
        id: 637,
        record_date: "2020-05-15 13:08:10",
        order: 69,
        use: 67,
        stock: 23,
        inventory_ingredient_id: 65
      },
      {
        id: 638,
        record_date: "2020-05-26 06:21:00",
        order: 83,
        use: 75,
        stock: 87,
        inventory_ingredient_id: 62
      },
      {
        id: 639,
        record_date: "2020-05-17 00:00:53",
        order: 16,
        use: 30,
        stock: 13,
        inventory_ingredient_id: 69
      },
      {
        id: 640,
        record_date: "2020-05-27 09:49:12",
        order: 52,
        use: 66,
        stock: 37,
        inventory_ingredient_id: 70
      },
      {
        id: 641,
        record_date: "2020-05-26 07:08:11",
        order: 9,
        use: 47,
        stock: 81,
        inventory_ingredient_id: 67
      },
      {
        id: 642,
        record_date: "2020-05-15 11:41:46",
        order: 67,
        use: 51,
        stock: 100,
        inventory_ingredient_id: 61
      },
      {
        id: 643,
        record_date: "2020-05-20 09:24:17",
        order: 24,
        use: 26,
        stock: 91,
        inventory_ingredient_id: 65
      },
      {
        id: 644,
        record_date: "2020-05-22 10:22:13",
        order: 53,
        use: 83,
        stock: 49,
        inventory_ingredient_id: 68
      },
      {
        id: 645,
        record_date: "2020-05-28 13:57:20",
        order: 72,
        use: 60,
        stock: 23,
        inventory_ingredient_id: 66
      },
      {
        id: 646,
        record_date: "2020-05-29 18:54:09",
        order: 5,
        use: 22,
        stock: 15,
        inventory_ingredient_id: 69
      },
      {
        id: 647,
        record_date: "2020-05-18 11:54:02",
        order: 58,
        use: 69,
        stock: 46,
        inventory_ingredient_id: 69
      },
      {
        id: 648,
        record_date: "2020-05-16 18:27:39",
        order: 49,
        use: 33,
        stock: 96,
        inventory_ingredient_id: 66
      },
      {
        id: 649,
        record_date: "2020-05-17 17:08:00",
        order: 8,
        use: 14,
        stock: 13,
        inventory_ingredient_id: 62
      },
      {
        id: 650,
        record_date: "2020-05-16 10:42:25",
        order: 92,
        use: 79,
        stock: 71,
        inventory_ingredient_id: 70
      },
      {
        id: 651,
        record_date: "2020-05-15 13:50:49",
        order: 4,
        use: 79,
        stock: 4,
        inventory_ingredient_id: 64
      },
      {
        id: 652,
        record_date: "2020-05-23 05:33:16",
        order: 31,
        use: 6,
        stock: 13,
        inventory_ingredient_id: 62
      },
      {
        id: 653,
        record_date: "2020-05-15 01:13:55",
        order: 84,
        use: 63,
        stock: 90,
        inventory_ingredient_id: 69
      },
      {
        id: 654,
        record_date: "2020-05-12 12:40:29",
        order: 45,
        use: 54,
        stock: 75,
        inventory_ingredient_id: 63
      },
      {
        id: 655,
        record_date: "2020-05-28 23:52:13",
        order: 22,
        use: 55,
        stock: 19,
        inventory_ingredient_id: 61
      },
      {
        id: 656,
        record_date: "2020-05-28 04:56:49",
        order: 87,
        use: 97,
        stock: 100,
        inventory_ingredient_id: 61
      },
      {
        id: 657,
        record_date: "2020-05-17 17:09:55",
        order: 52,
        use: 57,
        stock: 71,
        inventory_ingredient_id: 61
      },
      {
        id: 658,
        record_date: "2020-05-25 04:57:19",
        order: 75,
        use: 27,
        stock: 5,
        inventory_ingredient_id: 65
      },
      {
        id: 659,
        record_date: "2020-05-18 01:10:06",
        order: 14,
        use: 20,
        stock: 18,
        inventory_ingredient_id: 70
      },
      {
        id: 660,
        record_date: "2020-05-20 16:42:41",
        order: 65,
        use: 63,
        stock: 49,
        inventory_ingredient_id: 70
      },
      {
        id: 661,
        record_date: "2020-05-21 15:45:25",
        order: 86,
        use: 71,
        stock: 51,
        inventory_ingredient_id: 69
      },
      {
        id: 662,
        record_date: "2020-05-25 08:19:10",
        order: 65,
        use: 30,
        stock: 89,
        inventory_ingredient_id: 66
      },
      {
        id: 663,
        record_date: "2020-05-23 07:03:53",
        order: 45,
        use: 51,
        stock: 98,
        inventory_ingredient_id: 66
      },
      {
        id: 664,
        record_date: "2020-05-17 21:07:20",
        order: 91,
        use: 62,
        stock: 65,
        inventory_ingredient_id: 69
      },
      {
        id: 665,
        record_date: "2020-05-14 03:49:01",
        order: 79,
        use: 67,
        stock: 57,
        inventory_ingredient_id: 61
      },
      {
        id: 666,
        record_date: "2020-05-26 09:36:53",
        order: 78,
        use: 68,
        stock: 10,
        inventory_ingredient_id: 63
      },
      {
        id: 667,
        record_date: "2020-05-29 07:34:40",
        order: 37,
        use: 59,
        stock: 1,
        inventory_ingredient_id: 61
      },
      {
        id: 668,
        record_date: "2020-05-22 19:21:59",
        order: 9,
        use: 27,
        stock: 70,
        inventory_ingredient_id: 64
      },
      {
        id: 669,
        record_date: "2020-05-17 16:37:25",
        order: 12,
        use: 93,
        stock: 79,
        inventory_ingredient_id: 61
      },
      {
        id: 670,
        record_date: "2020-05-17 21:51:52",
        order: 83,
        use: 17,
        stock: 75,
        inventory_ingredient_id: 69
      },
      {
        id: 671,
        record_date: "2020-05-11 00:56:59",
        order: 56,
        use: 41,
        stock: 17,
        inventory_ingredient_id: 61
      },
      {
        id: 672,
        record_date: "2020-05-22 09:20:48",
        order: 37,
        use: 92,
        stock: 70,
        inventory_ingredient_id: 62
      },
      {
        id: 673,
        record_date: "2020-05-12 19:07:07",
        order: 10,
        use: 68,
        stock: 8,
        inventory_ingredient_id: 63
      },
      {
        id: 674,
        record_date: "2020-05-23 08:29:04",
        order: 48,
        use: 77,
        stock: 98,
        inventory_ingredient_id: 70
      },
      {
        id: 675,
        record_date: "2020-05-13 03:01:58",
        order: 43,
        use: 40,
        stock: 7,
        inventory_ingredient_id: 64
      },
      {
        id: 676,
        record_date: "2020-05-18 00:48:18",
        order: 78,
        use: 52,
        stock: 43,
        inventory_ingredient_id: 67
      },
      {
        id: 677,
        record_date: "2020-05-17 21:05:45",
        order: 75,
        use: 100,
        stock: 1,
        inventory_ingredient_id: 63
      },
      {
        id: 678,
        record_date: "2020-05-28 01:25:05",
        order: 28,
        use: 32,
        stock: 91,
        inventory_ingredient_id: 68
      },
      {
        id: 679,
        record_date: "2020-05-14 03:55:50",
        order: 14,
        use: 73,
        stock: 74,
        inventory_ingredient_id: 70
      },
      {
        id: 680,
        record_date: "2020-05-20 13:15:09",
        order: 34,
        use: 91,
        stock: 86,
        inventory_ingredient_id: 64
      },
      {
        id: 681,
        record_date: "2020-05-15 13:30:29",
        order: 60,
        use: 92,
        stock: 35,
        inventory_ingredient_id: 62
      },
      {
        id: 682,
        record_date: "2020-05-17 10:07:25",
        order: 87,
        use: 4,
        stock: 7,
        inventory_ingredient_id: 62
      },
      {
        id: 683,
        record_date: "2020-05-18 13:40:06",
        order: 44,
        use: 25,
        stock: 14,
        inventory_ingredient_id: 67
      },
      {
        id: 684,
        record_date: "2020-05-29 18:43:13",
        order: 49,
        use: 40,
        stock: 62,
        inventory_ingredient_id: 66
      },
      {
        id: 685,
        record_date: "2020-05-16 14:09:11",
        order: 81,
        use: 34,
        stock: 59,
        inventory_ingredient_id: 64
      },
      {
        id: 686,
        record_date: "2020-05-20 22:52:57",
        order: 34,
        use: 65,
        stock: 16,
        inventory_ingredient_id: 63
      },
      {
        id: 687,
        record_date: "2020-05-13 04:22:58",
        order: 12,
        use: 44,
        stock: 2,
        inventory_ingredient_id: 67
      },
      {
        id: 688,
        record_date: "2020-05-29 12:05:26",
        order: 4,
        use: 78,
        stock: 34,
        inventory_ingredient_id: 67
      },
      {
        id: 689,
        record_date: "2020-05-19 15:32:48",
        order: 45,
        use: 70,
        stock: 10,
        inventory_ingredient_id: 66
      },
      {
        id: 690,
        record_date: "2020-05-26 20:37:03",
        order: 6,
        use: 26,
        stock: 79,
        inventory_ingredient_id: 66
      },
      {
        id: 691,
        record_date: "2020-05-22 09:18:30",
        order: 10,
        use: 4,
        stock: 63,
        inventory_ingredient_id: 63
      },
      {
        id: 692,
        record_date: "2020-05-24 10:31:42",
        order: 77,
        use: 43,
        stock: 21,
        inventory_ingredient_id: 66
      },
      {
        id: 693,
        record_date: "2020-05-13 03:55:23",
        order: 52,
        use: 93,
        stock: 24,
        inventory_ingredient_id: 65
      },
      {
        id: 694,
        record_date: "2020-05-11 14:20:36",
        order: 2,
        use: 98,
        stock: 72,
        inventory_ingredient_id: 69
      },
      {
        id: 695,
        record_date: "2020-05-29 14:49:16",
        order: 95,
        use: 49,
        stock: 5,
        inventory_ingredient_id: 61
      },
      {
        id: 696,
        record_date: "2020-05-24 17:56:20",
        order: 42,
        use: 80,
        stock: 49,
        inventory_ingredient_id: 66
      },
      {
        id: 697,
        record_date: "2020-05-22 02:11:25",
        order: 26,
        use: 2,
        stock: 93,
        inventory_ingredient_id: 62
      },
      {
        id: 698,
        record_date: "2020-05-29 20:25:17",
        order: 47,
        use: 82,
        stock: 84,
        inventory_ingredient_id: 70
      },
      {
        id: 699,
        record_date: "2020-05-11 21:10:58",
        order: 60,
        use: 86,
        stock: 20,
        inventory_ingredient_id: 61
      },
      {
        id: 700,
        record_date: "2020-05-26 09:47:56",
        order: 58,
        use: 9,
        stock: 78,
        inventory_ingredient_id: 61
      },

      {
        id: 701,
        record_date: "2020-05-26 18:04:44",
        order: 3,
        use: 5,
        stock: 80,
        inventory_ingredient_id: 78
      },
      {
        id: 702,
        record_date: "2020-05-17 18:31:26",
        order: 97,
        use: 62,
        stock: 1,
        inventory_ingredient_id: 78
      },
      {
        id: 703,
        record_date: "2020-05-27 18:15:39",
        order: 66,
        use: 63,
        stock: 75,
        inventory_ingredient_id: 75
      },
      {
        id: 704,
        record_date: "2020-05-13 18:01:41",
        order: 95,
        use: 74,
        stock: 25,
        inventory_ingredient_id: 72
      },
      {
        id: 705,
        record_date: "2020-05-18 19:58:50",
        order: 51,
        use: 66,
        stock: 25,
        inventory_ingredient_id: 77
      },
      {
        id: 706,
        record_date: "2020-05-26 05:27:33",
        order: 29,
        use: 81,
        stock: 60,
        inventory_ingredient_id: 79
      },
      {
        id: 707,
        record_date: "2020-05-19 23:31:16",
        order: 5,
        use: 52,
        stock: 48,
        inventory_ingredient_id: 74
      },
      {
        id: 708,
        record_date: "2020-05-16 13:14:00",
        order: 73,
        use: 47,
        stock: 72,
        inventory_ingredient_id: 78
      },
      {
        id: 709,
        record_date: "2020-05-15 17:15:06",
        order: 76,
        use: 19,
        stock: 74,
        inventory_ingredient_id: 78
      },
      {
        id: 710,
        record_date: "2020-05-14 18:31:03",
        order: 75,
        use: 74,
        stock: 76,
        inventory_ingredient_id: 73
      },
      {
        id: 711,
        record_date: "2020-05-16 03:29:01",
        order: 16,
        use: 32,
        stock: 83,
        inventory_ingredient_id: 77
      },
      {
        id: 712,
        record_date: "2020-05-19 05:25:16",
        order: 58,
        use: 48,
        stock: 93,
        inventory_ingredient_id: 77
      },
      {
        id: 713,
        record_date: "2020-05-26 18:37:42",
        order: 25,
        use: 23,
        stock: 97,
        inventory_ingredient_id: 73
      },
      {
        id: 714,
        record_date: "2020-05-13 08:00:58",
        order: 45,
        use: 93,
        stock: 17,
        inventory_ingredient_id: 74
      },
      {
        id: 715,
        record_date: "2020-05-26 19:54:49",
        order: 80,
        use: 100,
        stock: 43,
        inventory_ingredient_id: 72
      },
      {
        id: 716,
        record_date: "2020-05-13 00:18:29",
        order: 70,
        use: 53,
        stock: 60,
        inventory_ingredient_id: 77
      },
      {
        id: 717,
        record_date: "2020-05-25 15:03:40",
        order: 25,
        use: 6,
        stock: 76,
        inventory_ingredient_id: 71
      },
      {
        id: 718,
        record_date: "2020-05-11 09:18:31",
        order: 43,
        use: 79,
        stock: 12,
        inventory_ingredient_id: 79
      },
      {
        id: 719,
        record_date: "2020-05-27 02:23:02",
        order: 39,
        use: 60,
        stock: 12,
        inventory_ingredient_id: 71
      },
      {
        id: 720,
        record_date: "2020-05-11 15:40:19",
        order: 80,
        use: 3,
        stock: 49,
        inventory_ingredient_id: 78
      },
      {
        id: 721,
        record_date: "2020-05-29 00:52:34",
        order: 10,
        use: 69,
        stock: 7,
        inventory_ingredient_id: 76
      },
      {
        id: 722,
        record_date: "2020-05-25 14:43:13",
        order: 80,
        use: 41,
        stock: 60,
        inventory_ingredient_id: 71
      },
      {
        id: 723,
        record_date: "2020-05-28 17:27:13",
        order: 97,
        use: 35,
        stock: 4,
        inventory_ingredient_id: 72
      },
      {
        id: 724,
        record_date: "2020-05-22 06:27:23",
        order: 57,
        use: 5,
        stock: 40,
        inventory_ingredient_id: 71
      },
      {
        id: 725,
        record_date: "2020-05-11 14:38:40",
        order: 78,
        use: 91,
        stock: 92,
        inventory_ingredient_id: 80
      },
      {
        id: 726,
        record_date: "2020-05-24 00:37:07",
        order: 18,
        use: 8,
        stock: 76,
        inventory_ingredient_id: 71
      },
      {
        id: 727,
        record_date: "2020-05-23 16:25:28",
        order: 56,
        use: 22,
        stock: 22,
        inventory_ingredient_id: 76
      },
      {
        id: 728,
        record_date: "2020-05-14 03:32:09",
        order: 8,
        use: 47,
        stock: 90,
        inventory_ingredient_id: 77
      },
      {
        id: 729,
        record_date: "2020-05-19 20:08:07",
        order: 93,
        use: 30,
        stock: 24,
        inventory_ingredient_id: 80
      },
      {
        id: 730,
        record_date: "2020-05-19 01:09:48",
        order: 53,
        use: 96,
        stock: 66,
        inventory_ingredient_id: 73
      },
      {
        id: 731,
        record_date: "2020-05-23 11:34:40",
        order: 71,
        use: 54,
        stock: 94,
        inventory_ingredient_id: 77
      },
      {
        id: 732,
        record_date: "2020-05-24 15:22:53",
        order: 92,
        use: 87,
        stock: 11,
        inventory_ingredient_id: 73
      },
      {
        id: 733,
        record_date: "2020-05-27 23:50:10",
        order: 71,
        use: 32,
        stock: 92,
        inventory_ingredient_id: 72
      },
      {
        id: 734,
        record_date: "2020-05-21 00:38:08",
        order: 100,
        use: 87,
        stock: 35,
        inventory_ingredient_id: 78
      },
      {
        id: 735,
        record_date: "2020-05-24 17:53:39",
        order: 21,
        use: 89,
        stock: 99,
        inventory_ingredient_id: 73
      },
      {
        id: 736,
        record_date: "2020-05-12 08:38:14",
        order: 84,
        use: 48,
        stock: 48,
        inventory_ingredient_id: 74
      },
      {
        id: 737,
        record_date: "2020-05-25 18:17:07",
        order: 58,
        use: 16,
        stock: 58,
        inventory_ingredient_id: 71
      },
      {
        id: 738,
        record_date: "2020-05-28 18:53:06",
        order: 13,
        use: 94,
        stock: 8,
        inventory_ingredient_id: 79
      },
      {
        id: 739,
        record_date: "2020-05-19 18:38:21",
        order: 30,
        use: 29,
        stock: 99,
        inventory_ingredient_id: 78
      },
      {
        id: 740,
        record_date: "2020-05-27 19:12:11",
        order: 2,
        use: 53,
        stock: 34,
        inventory_ingredient_id: 78
      },
      {
        id: 741,
        record_date: "2020-05-26 00:00:36",
        order: 19,
        use: 100,
        stock: 7,
        inventory_ingredient_id: 77
      },
      {
        id: 742,
        record_date: "2020-05-17 20:57:38",
        order: 37,
        use: 97,
        stock: 76,
        inventory_ingredient_id: 77
      },
      {
        id: 743,
        record_date: "2020-05-22 17:10:11",
        order: 41,
        use: 90,
        stock: 8,
        inventory_ingredient_id: 73
      },
      {
        id: 744,
        record_date: "2020-05-20 19:53:21",
        order: 2,
        use: 6,
        stock: 54,
        inventory_ingredient_id: 77
      },
      {
        id: 745,
        record_date: "2020-05-29 22:01:46",
        order: 67,
        use: 21,
        stock: 19,
        inventory_ingredient_id: 74
      },
      {
        id: 746,
        record_date: "2020-05-21 09:28:38",
        order: 19,
        use: 90,
        stock: 63,
        inventory_ingredient_id: 73
      },
      {
        id: 747,
        record_date: "2020-05-11 17:16:49",
        order: 47,
        use: 63,
        stock: 5,
        inventory_ingredient_id: 72
      },
      {
        id: 748,
        record_date: "2020-05-15 06:47:26",
        order: 7,
        use: 65,
        stock: 78,
        inventory_ingredient_id: 71
      },
      {
        id: 749,
        record_date: "2020-05-12 17:27:52",
        order: 84,
        use: 57,
        stock: 38,
        inventory_ingredient_id: 78
      },
      {
        id: 750,
        record_date: "2020-05-22 12:48:52",
        order: 89,
        use: 44,
        stock: 47,
        inventory_ingredient_id: 77
      },
      {
        id: 751,
        record_date: "2020-05-18 06:53:07",
        order: 51,
        use: 27,
        stock: 75,
        inventory_ingredient_id: 79
      },
      {
        id: 752,
        record_date: "2020-05-25 13:19:06",
        order: 40,
        use: 4,
        stock: 30,
        inventory_ingredient_id: 71
      },
      {
        id: 753,
        record_date: "2020-05-20 22:45:44",
        order: 10,
        use: 21,
        stock: 81,
        inventory_ingredient_id: 73
      },
      {
        id: 754,
        record_date: "2020-05-26 02:19:38",
        order: 13,
        use: 77,
        stock: 29,
        inventory_ingredient_id: 77
      },
      {
        id: 755,
        record_date: "2020-05-19 12:09:52",
        order: 9,
        use: 17,
        stock: 70,
        inventory_ingredient_id: 73
      },
      {
        id: 756,
        record_date: "2020-05-17 09:24:03",
        order: 84,
        use: 36,
        stock: 98,
        inventory_ingredient_id: 73
      },
      {
        id: 757,
        record_date: "2020-05-12 16:59:44",
        order: 40,
        use: 91,
        stock: 86,
        inventory_ingredient_id: 77
      },
      {
        id: 758,
        record_date: "2020-05-24 17:58:28",
        order: 61,
        use: 75,
        stock: 26,
        inventory_ingredient_id: 79
      },
      {
        id: 759,
        record_date: "2020-05-25 01:11:06",
        order: 8,
        use: 25,
        stock: 58,
        inventory_ingredient_id: 78
      },
      {
        id: 760,
        record_date: "2020-05-29 23:15:05",
        order: 82,
        use: 94,
        stock: 60,
        inventory_ingredient_id: 80
      },
      {
        id: 761,
        record_date: "2020-05-20 06:48:21",
        order: 16,
        use: 42,
        stock: 98,
        inventory_ingredient_id: 74
      },
      {
        id: 762,
        record_date: "2020-05-20 22:45:33",
        order: 26,
        use: 8,
        stock: 94,
        inventory_ingredient_id: 79
      },
      {
        id: 763,
        record_date: "2020-05-19 08:01:09",
        order: 48,
        use: 28,
        stock: 85,
        inventory_ingredient_id: 77
      },
      {
        id: 764,
        record_date: "2020-05-11 16:47:56",
        order: 31,
        use: 39,
        stock: 11,
        inventory_ingredient_id: 72
      },
      {
        id: 765,
        record_date: "2020-05-29 23:40:02",
        order: 59,
        use: 29,
        stock: 66,
        inventory_ingredient_id: 72
      },
      {
        id: 766,
        record_date: "2020-05-28 14:23:03",
        order: 33,
        use: 25,
        stock: 87,
        inventory_ingredient_id: 80
      },
      {
        id: 767,
        record_date: "2020-05-19 09:48:14",
        order: 29,
        use: 43,
        stock: 98,
        inventory_ingredient_id: 76
      },
      {
        id: 768,
        record_date: "2020-05-28 06:05:40",
        order: 97,
        use: 81,
        stock: 85,
        inventory_ingredient_id: 77
      },
      {
        id: 769,
        record_date: "2020-05-11 22:49:18",
        order: 64,
        use: 41,
        stock: 54,
        inventory_ingredient_id: 80
      },
      {
        id: 770,
        record_date: "2020-05-15 03:44:57",
        order: 5,
        use: 14,
        stock: 16,
        inventory_ingredient_id: 75
      },
      {
        id: 771,
        record_date: "2020-05-22 02:33:54",
        order: 65,
        use: 98,
        stock: 20,
        inventory_ingredient_id: 74
      },
      {
        id: 772,
        record_date: "2020-05-21 15:22:17",
        order: 93,
        use: 11,
        stock: 6,
        inventory_ingredient_id: 75
      },
      {
        id: 773,
        record_date: "2020-05-26 12:45:08",
        order: 13,
        use: 87,
        stock: 2,
        inventory_ingredient_id: 75
      },
      {
        id: 774,
        record_date: "2020-05-25 17:45:01",
        order: 57,
        use: 21,
        stock: 39,
        inventory_ingredient_id: 73
      },
      {
        id: 775,
        record_date: "2020-05-18 06:11:43",
        order: 46,
        use: 58,
        stock: 54,
        inventory_ingredient_id: 80
      },
      {
        id: 776,
        record_date: "2020-05-25 19:36:27",
        order: 54,
        use: 73,
        stock: 98,
        inventory_ingredient_id: 78
      },
      {
        id: 777,
        record_date: "2020-05-29 07:09:37",
        order: 44,
        use: 21,
        stock: 81,
        inventory_ingredient_id: 80
      },
      {
        id: 778,
        record_date: "2020-05-18 19:49:53",
        order: 43,
        use: 58,
        stock: 89,
        inventory_ingredient_id: 74
      },
      {
        id: 779,
        record_date: "2020-05-26 08:02:48",
        order: 34,
        use: 28,
        stock: 87,
        inventory_ingredient_id: 76
      },
      {
        id: 780,
        record_date: "2020-05-24 01:57:43",
        order: 45,
        use: 48,
        stock: 15,
        inventory_ingredient_id: 71
      },
      {
        id: 781,
        record_date: "2020-05-22 01:09:47",
        order: 55,
        use: 57,
        stock: 73,
        inventory_ingredient_id: 80
      },
      {
        id: 782,
        record_date: "2020-05-24 18:17:50",
        order: 59,
        use: 90,
        stock: 2,
        inventory_ingredient_id: 76
      },
      {
        id: 783,
        record_date: "2020-05-29 07:40:40",
        order: 39,
        use: 69,
        stock: 38,
        inventory_ingredient_id: 77
      },
      {
        id: 784,
        record_date: "2020-05-29 14:14:34",
        order: 84,
        use: 96,
        stock: 58,
        inventory_ingredient_id: 71
      },
      {
        id: 785,
        record_date: "2020-05-20 08:44:04",
        order: 1,
        use: 41,
        stock: 90,
        inventory_ingredient_id: 78
      },
      {
        id: 786,
        record_date: "2020-05-11 06:38:43",
        order: 35,
        use: 26,
        stock: 19,
        inventory_ingredient_id: 78
      },
      {
        id: 787,
        record_date: "2020-05-29 01:52:24",
        order: 45,
        use: 50,
        stock: 13,
        inventory_ingredient_id: 74
      },
      {
        id: 788,
        record_date: "2020-05-12 01:01:57",
        order: 45,
        use: 22,
        stock: 49,
        inventory_ingredient_id: 80
      },
      {
        id: 789,
        record_date: "2020-05-11 11:45:30",
        order: 34,
        use: 100,
        stock: 15,
        inventory_ingredient_id: 76
      },
      {
        id: 790,
        record_date: "2020-05-29 11:50:01",
        order: 45,
        use: 57,
        stock: 54,
        inventory_ingredient_id: 80
      },
      {
        id: 791,
        record_date: "2020-05-27 15:21:22",
        order: 44,
        use: 6,
        stock: 21,
        inventory_ingredient_id: 72
      },
      {
        id: 792,
        record_date: "2020-05-20 03:49:10",
        order: 72,
        use: 28,
        stock: 10,
        inventory_ingredient_id: 78
      },
      {
        id: 793,
        record_date: "2020-05-17 10:23:29",
        order: 49,
        use: 66,
        stock: 74,
        inventory_ingredient_id: 80
      },
      {
        id: 794,
        record_date: "2020-05-12 19:52:00",
        order: 25,
        use: 46,
        stock: 70,
        inventory_ingredient_id: 71
      },
      {
        id: 795,
        record_date: "2020-05-19 01:22:55",
        order: 10,
        use: 43,
        stock: 50,
        inventory_ingredient_id: 76
      },
      {
        id: 796,
        record_date: "2020-05-13 00:06:12",
        order: 83,
        use: 29,
        stock: 95,
        inventory_ingredient_id: 80
      },
      {
        id: 797,
        record_date: "2020-05-12 12:37:12",
        order: 15,
        use: 39,
        stock: 6,
        inventory_ingredient_id: 78
      },
      {
        id: 798,
        record_date: "2020-05-12 13:02:49",
        order: 85,
        use: 83,
        stock: 73,
        inventory_ingredient_id: 71
      },
      {
        id: 799,
        record_date: "2020-05-16 22:19:41",
        order: 52,
        use: 94,
        stock: 94,
        inventory_ingredient_id: 74
      },
      {
        id: 800,
        record_date: "2020-05-24 09:36:49",
        order: 62,
        use: 44,
        stock: 81,
        inventory_ingredient_id: 80
      },

      {
        id: 801,
        record_date: "2020-05-28 05:45:19",
        order: 73,
        use: 2,
        stock: 98,
        inventory_ingredient_id: 90
      },
      {
        id: 802,
        record_date: "2020-05-13 23:59:54",
        order: 9,
        use: 47,
        stock: 22,
        inventory_ingredient_id: 85
      },
      {
        id: 803,
        record_date: "2020-05-18 00:47:17",
        order: 94,
        use: 62,
        stock: 44,
        inventory_ingredient_id: 84
      },
      {
        id: 804,
        record_date: "2020-05-20 14:13:14",
        order: 84,
        use: 56,
        stock: 88,
        inventory_ingredient_id: 86
      },
      {
        id: 805,
        record_date: "2020-05-28 21:20:20",
        order: 52,
        use: 8,
        stock: 89,
        inventory_ingredient_id: 82
      },
      {
        id: 806,
        record_date: "2020-05-20 14:10:29",
        order: 22,
        use: 40,
        stock: 89,
        inventory_ingredient_id: 85
      },
      {
        id: 807,
        record_date: "2020-05-19 14:24:39",
        order: 92,
        use: 97,
        stock: 3,
        inventory_ingredient_id: 86
      },
      {
        id: 808,
        record_date: "2020-05-12 18:12:05",
        order: 30,
        use: 80,
        stock: 57,
        inventory_ingredient_id: 88
      },
      {
        id: 809,
        record_date: "2020-05-18 15:18:12",
        order: 77,
        use: 4,
        stock: 55,
        inventory_ingredient_id: 82
      },
      {
        id: 810,
        record_date: "2020-05-18 20:03:26",
        order: 64,
        use: 94,
        stock: 11,
        inventory_ingredient_id: 85
      },
      {
        id: 811,
        record_date: "2020-05-22 16:23:30",
        order: 53,
        use: 31,
        stock: 60,
        inventory_ingredient_id: 82
      },
      {
        id: 812,
        record_date: "2020-05-19 07:40:49",
        order: 80,
        use: 11,
        stock: 28,
        inventory_ingredient_id: 90
      },
      {
        id: 813,
        record_date: "2020-05-18 21:26:39",
        order: 38,
        use: 71,
        stock: 34,
        inventory_ingredient_id: 90
      },
      {
        id: 814,
        record_date: "2020-05-16 23:52:27",
        order: 50,
        use: 15,
        stock: 47,
        inventory_ingredient_id: 90
      },
      {
        id: 815,
        record_date: "2020-05-18 21:32:15",
        order: 86,
        use: 22,
        stock: 79,
        inventory_ingredient_id: 86
      },
      {
        id: 816,
        record_date: "2020-05-26 13:00:23",
        order: 85,
        use: 54,
        stock: 40,
        inventory_ingredient_id: 88
      },
      {
        id: 817,
        record_date: "2020-05-25 21:58:28",
        order: 22,
        use: 62,
        stock: 60,
        inventory_ingredient_id: 88
      },
      {
        id: 818,
        record_date: "2020-05-29 20:24:09",
        order: 36,
        use: 1,
        stock: 58,
        inventory_ingredient_id: 83
      },
      {
        id: 819,
        record_date: "2020-05-29 03:54:51",
        order: 55,
        use: 90,
        stock: 41,
        inventory_ingredient_id: 84
      },
      {
        id: 820,
        record_date: "2020-05-16 16:09:50",
        order: 15,
        use: 7,
        stock: 11,
        inventory_ingredient_id: 89
      },
      {
        id: 821,
        record_date: "2020-05-13 12:12:53",
        order: 92,
        use: 25,
        stock: 90,
        inventory_ingredient_id: 84
      },
      {
        id: 822,
        record_date: "2020-05-18 02:50:29",
        order: 56,
        use: 91,
        stock: 78,
        inventory_ingredient_id: 87
      },
      {
        id: 823,
        record_date: "2020-05-16 19:35:53",
        order: 87,
        use: 17,
        stock: 45,
        inventory_ingredient_id: 89
      },
      {
        id: 824,
        record_date: "2020-05-16 05:26:46",
        order: 38,
        use: 32,
        stock: 58,
        inventory_ingredient_id: 87
      },
      {
        id: 825,
        record_date: "2020-05-27 11:58:29",
        order: 56,
        use: 24,
        stock: 97,
        inventory_ingredient_id: 82
      },
      {
        id: 826,
        record_date: "2020-05-22 15:30:22",
        order: 75,
        use: 98,
        stock: 43,
        inventory_ingredient_id: 87
      },
      {
        id: 827,
        record_date: "2020-05-28 13:03:46",
        order: 79,
        use: 57,
        stock: 39,
        inventory_ingredient_id: 88
      },
      {
        id: 828,
        record_date: "2020-05-22 02:26:51",
        order: 43,
        use: 21,
        stock: 41,
        inventory_ingredient_id: 87
      },
      {
        id: 829,
        record_date: "2020-05-25 06:35:00",
        order: 21,
        use: 16,
        stock: 90,
        inventory_ingredient_id: 84
      },
      {
        id: 830,
        record_date: "2020-05-22 02:49:18",
        order: 42,
        use: 30,
        stock: 56,
        inventory_ingredient_id: 85
      },
      {
        id: 831,
        record_date: "2020-05-23 01:25:54",
        order: 44,
        use: 25,
        stock: 85,
        inventory_ingredient_id: 89
      },
      {
        id: 832,
        record_date: "2020-05-18 05:36:20",
        order: 100,
        use: 68,
        stock: 65,
        inventory_ingredient_id: 90
      },
      {
        id: 833,
        record_date: "2020-05-11 10:33:30",
        order: 23,
        use: 91,
        stock: 82,
        inventory_ingredient_id: 87
      },
      {
        id: 834,
        record_date: "2020-05-25 12:45:51",
        order: 61,
        use: 31,
        stock: 68,
        inventory_ingredient_id: 84
      },
      {
        id: 835,
        record_date: "2020-05-18 13:32:43",
        order: 75,
        use: 77,
        stock: 39,
        inventory_ingredient_id: 83
      },
      {
        id: 836,
        record_date: "2020-05-21 20:30:58",
        order: 81,
        use: 29,
        stock: 21,
        inventory_ingredient_id: 83
      },
      {
        id: 837,
        record_date: "2020-05-27 10:47:48",
        order: 19,
        use: 73,
        stock: 37,
        inventory_ingredient_id: 88
      },
      {
        id: 838,
        record_date: "2020-05-24 23:13:11",
        order: 31,
        use: 35,
        stock: 12,
        inventory_ingredient_id: 88
      },
      {
        id: 839,
        record_date: "2020-05-15 17:02:14",
        order: 45,
        use: 50,
        stock: 2,
        inventory_ingredient_id: 89
      },
      {
        id: 840,
        record_date: "2020-05-20 23:21:10",
        order: 17,
        use: 48,
        stock: 68,
        inventory_ingredient_id: 89
      },
      {
        id: 841,
        record_date: "2020-05-21 16:59:09",
        order: 45,
        use: 30,
        stock: 22,
        inventory_ingredient_id: 87
      },
      {
        id: 842,
        record_date: "2020-05-16 03:04:43",
        order: 69,
        use: 59,
        stock: 33,
        inventory_ingredient_id: 85
      },
      {
        id: 843,
        record_date: "2020-05-25 08:37:15",
        order: 29,
        use: 81,
        stock: 11,
        inventory_ingredient_id: 85
      },
      {
        id: 844,
        record_date: "2020-05-19 16:09:43",
        order: 28,
        use: 26,
        stock: 1,
        inventory_ingredient_id: 84
      },
      {
        id: 845,
        record_date: "2020-05-13 03:56:14",
        order: 74,
        use: 87,
        stock: 10,
        inventory_ingredient_id: 88
      },
      {
        id: 846,
        record_date: "2020-05-26 10:48:52",
        order: 55,
        use: 89,
        stock: 19,
        inventory_ingredient_id: 84
      },
      {
        id: 847,
        record_date: "2020-05-25 16:13:01",
        order: 20,
        use: 83,
        stock: 21,
        inventory_ingredient_id: 89
      },
      {
        id: 848,
        record_date: "2020-05-18 11:34:17",
        order: 79,
        use: 73,
        stock: 100,
        inventory_ingredient_id: 81
      },
      {
        id: 849,
        record_date: "2020-05-28 12:01:53",
        order: 22,
        use: 58,
        stock: 70,
        inventory_ingredient_id: 84
      },
      {
        id: 850,
        record_date: "2020-05-14 21:48:09",
        order: 63,
        use: 83,
        stock: 87,
        inventory_ingredient_id: 85
      },
      {
        id: 851,
        record_date: "2020-05-27 12:26:40",
        order: 69,
        use: 99,
        stock: 29,
        inventory_ingredient_id: 83
      },
      {
        id: 852,
        record_date: "2020-05-21 02:02:44",
        order: 83,
        use: 27,
        stock: 35,
        inventory_ingredient_id: 89
      },
      {
        id: 853,
        record_date: "2020-05-21 02:31:03",
        order: 55,
        use: 44,
        stock: 88,
        inventory_ingredient_id: 90
      },
      {
        id: 854,
        record_date: "2020-05-12 14:48:17",
        order: 33,
        use: 35,
        stock: 67,
        inventory_ingredient_id: 81
      },
      {
        id: 855,
        record_date: "2020-05-19 07:29:51",
        order: 31,
        use: 71,
        stock: 37,
        inventory_ingredient_id: 90
      },
      {
        id: 856,
        record_date: "2020-05-29 21:07:01",
        order: 86,
        use: 96,
        stock: 73,
        inventory_ingredient_id: 88
      },
      {
        id: 857,
        record_date: "2020-05-16 07:02:40",
        order: 96,
        use: 53,
        stock: 36,
        inventory_ingredient_id: 83
      },
      {
        id: 858,
        record_date: "2020-05-23 05:20:28",
        order: 49,
        use: 87,
        stock: 69,
        inventory_ingredient_id: 82
      },
      {
        id: 859,
        record_date: "2020-05-23 21:40:26",
        order: 84,
        use: 63,
        stock: 68,
        inventory_ingredient_id: 86
      },
      {
        id: 860,
        record_date: "2020-05-20 09:48:44",
        order: 59,
        use: 68,
        stock: 57,
        inventory_ingredient_id: 90
      },
      {
        id: 861,
        record_date: "2020-05-14 12:06:15",
        order: 88,
        use: 62,
        stock: 99,
        inventory_ingredient_id: 84
      },
      {
        id: 862,
        record_date: "2020-05-29 05:57:33",
        order: 49,
        use: 45,
        stock: 56,
        inventory_ingredient_id: 81
      },
      {
        id: 863,
        record_date: "2020-05-12 10:32:22",
        order: 86,
        use: 77,
        stock: 61,
        inventory_ingredient_id: 84
      },
      {
        id: 864,
        record_date: "2020-05-23 09:11:13",
        order: 37,
        use: 24,
        stock: 90,
        inventory_ingredient_id: 81
      },
      {
        id: 865,
        record_date: "2020-05-21 06:33:40",
        order: 79,
        use: 65,
        stock: 44,
        inventory_ingredient_id: 87
      },
      {
        id: 866,
        record_date: "2020-05-13 06:08:20",
        order: 49,
        use: 37,
        stock: 88,
        inventory_ingredient_id: 86
      },
      {
        id: 867,
        record_date: "2020-05-18 08:25:30",
        order: 45,
        use: 20,
        stock: 13,
        inventory_ingredient_id: 88
      },
      {
        id: 868,
        record_date: "2020-05-28 10:32:23",
        order: 44,
        use: 31,
        stock: 83,
        inventory_ingredient_id: 89
      },
      {
        id: 869,
        record_date: "2020-05-11 03:52:45",
        order: 10,
        use: 35,
        stock: 79,
        inventory_ingredient_id: 82
      },
      {
        id: 870,
        record_date: "2020-05-23 05:11:51",
        order: 24,
        use: 8,
        stock: 62,
        inventory_ingredient_id: 84
      },
      {
        id: 871,
        record_date: "2020-05-18 10:37:46",
        order: 57,
        use: 43,
        stock: 46,
        inventory_ingredient_id: 81
      },
      {
        id: 872,
        record_date: "2020-05-19 08:10:30",
        order: 50,
        use: 73,
        stock: 19,
        inventory_ingredient_id: 81
      },
      {
        id: 873,
        record_date: "2020-05-11 17:26:06",
        order: 9,
        use: 42,
        stock: 26,
        inventory_ingredient_id: 90
      },
      {
        id: 874,
        record_date: "2020-05-13 18:30:01",
        order: 75,
        use: 18,
        stock: 54,
        inventory_ingredient_id: 90
      },
      {
        id: 875,
        record_date: "2020-05-27 22:36:40",
        order: 2,
        use: 8,
        stock: 34,
        inventory_ingredient_id: 82
      },
      {
        id: 876,
        record_date: "2020-05-23 12:21:17",
        order: 9,
        use: 88,
        stock: 14,
        inventory_ingredient_id: 84
      },
      {
        id: 877,
        record_date: "2020-05-26 00:05:49",
        order: 29,
        use: 8,
        stock: 97,
        inventory_ingredient_id: 90
      },
      {
        id: 878,
        record_date: "2020-05-22 11:41:06",
        order: 11,
        use: 45,
        stock: 28,
        inventory_ingredient_id: 87
      },
      {
        id: 879,
        record_date: "2020-05-26 06:42:18",
        order: 16,
        use: 69,
        stock: 5,
        inventory_ingredient_id: 87
      },
      {
        id: 880,
        record_date: "2020-05-18 01:06:38",
        order: 81,
        use: 58,
        stock: 59,
        inventory_ingredient_id: 89
      },
      {
        id: 881,
        record_date: "2020-05-28 13:56:48",
        order: 35,
        use: 17,
        stock: 48,
        inventory_ingredient_id: 81
      },
      {
        id: 882,
        record_date: "2020-05-25 16:01:07",
        order: 7,
        use: 44,
        stock: 38,
        inventory_ingredient_id: 87
      },
      {
        id: 883,
        record_date: "2020-05-15 14:40:30",
        order: 11,
        use: 39,
        stock: 36,
        inventory_ingredient_id: 86
      },
      {
        id: 884,
        record_date: "2020-05-19 18:34:42",
        order: 49,
        use: 26,
        stock: 89,
        inventory_ingredient_id: 83
      },
      {
        id: 885,
        record_date: "2020-05-24 08:21:20",
        order: 10,
        use: 64,
        stock: 47,
        inventory_ingredient_id: 90
      },
      {
        id: 886,
        record_date: "2020-05-20 07:58:38",
        order: 51,
        use: 78,
        stock: 83,
        inventory_ingredient_id: 83
      },
      {
        id: 887,
        record_date: "2020-05-28 00:52:49",
        order: 54,
        use: 5,
        stock: 82,
        inventory_ingredient_id: 90
      },
      {
        id: 888,
        record_date: "2020-05-15 11:53:29",
        order: 70,
        use: 29,
        stock: 36,
        inventory_ingredient_id: 88
      },
      {
        id: 889,
        record_date: "2020-05-27 04:14:10",
        order: 67,
        use: 78,
        stock: 47,
        inventory_ingredient_id: 90
      },
      {
        id: 890,
        record_date: "2020-05-13 15:39:13",
        order: 79,
        use: 30,
        stock: 39,
        inventory_ingredient_id: 81
      },
      {
        id: 891,
        record_date: "2020-05-16 12:56:15",
        order: 40,
        use: 7,
        stock: 4,
        inventory_ingredient_id: 84
      },
      {
        id: 892,
        record_date: "2020-05-11 01:51:42",
        order: 36,
        use: 88,
        stock: 90,
        inventory_ingredient_id: 81
      },
      {
        id: 893,
        record_date: "2020-05-12 04:23:55",
        order: 79,
        use: 16,
        stock: 15,
        inventory_ingredient_id: 87
      },
      {
        id: 894,
        record_date: "2020-05-19 13:33:18",
        order: 28,
        use: 16,
        stock: 54,
        inventory_ingredient_id: 87
      },
      {
        id: 895,
        record_date: "2020-05-18 03:41:54",
        order: 100,
        use: 76,
        stock: 13,
        inventory_ingredient_id: 83
      },
      {
        id: 896,
        record_date: "2020-05-14 00:01:37",
        order: 39,
        use: 55,
        stock: 51,
        inventory_ingredient_id: 83
      },
      {
        id: 897,
        record_date: "2020-05-16 19:33:19",
        order: 35,
        use: 23,
        stock: 78,
        inventory_ingredient_id: 90
      },
      {
        id: 898,
        record_date: "2020-05-18 17:55:59",
        order: 24,
        use: 37,
        stock: 49,
        inventory_ingredient_id: 87
      },
      {
        id: 899,
        record_date: "2020-05-12 06:27:44",
        order: 38,
        use: 88,
        stock: 29,
        inventory_ingredient_id: 88
      },
      {
        id: 900,
        record_date: "2020-05-16 20:24:59",
        order: 76,
        use: 3,
        stock: 60,
        inventory_ingredient_id: 81
      },

      {
        id: 901,
        record_date: "2020-05-28 00:21:14",
        order: 84,
        use: 88,
        stock: 95,
        inventory_ingredient_id: 97
      },
      {
        id: 902,
        record_date: "2020-05-20 20:15:58",
        order: 67,
        use: 37,
        stock: 78,
        inventory_ingredient_id: 95
      },
      {
        id: 903,
        record_date: "2020-05-23 22:29:12",
        order: 60,
        use: 81,
        stock: 16,
        inventory_ingredient_id: 99
      },
      {
        id: 904,
        record_date: "2020-05-26 21:15:31",
        order: 45,
        use: 61,
        stock: 100,
        inventory_ingredient_id: 92
      },
      {
        id: 905,
        record_date: "2020-05-21 20:46:12",
        order: 14,
        use: 45,
        stock: 79,
        inventory_ingredient_id: 97
      },
      {
        id: 906,
        record_date: "2020-05-28 12:39:50",
        order: 52,
        use: 11,
        stock: 72,
        inventory_ingredient_id: 92
      },
      {
        id: 907,
        record_date: "2020-05-14 12:23:48",
        order: 72,
        use: 41,
        stock: 88,
        inventory_ingredient_id: 100
      },
      {
        id: 908,
        record_date: "2020-05-26 20:16:10",
        order: 94,
        use: 97,
        stock: 13,
        inventory_ingredient_id: 95
      },
      {
        id: 909,
        record_date: "2020-05-26 06:21:48",
        order: 42,
        use: 30,
        stock: 81,
        inventory_ingredient_id: 100
      },
      {
        id: 910,
        record_date: "2020-05-20 17:15:51",
        order: 44,
        use: 80,
        stock: 86,
        inventory_ingredient_id: 92
      },
      {
        id: 911,
        record_date: "2020-05-28 03:33:46",
        order: 84,
        use: 97,
        stock: 11,
        inventory_ingredient_id: 99
      },
      {
        id: 912,
        record_date: "2020-05-26 05:02:31",
        order: 98,
        use: 20,
        stock: 98,
        inventory_ingredient_id: 96
      },
      {
        id: 913,
        record_date: "2020-05-11 14:43:07",
        order: 3,
        use: 8,
        stock: 41,
        inventory_ingredient_id: 94
      },
      {
        id: 914,
        record_date: "2020-05-13 06:28:05",
        order: 48,
        use: 58,
        stock: 23,
        inventory_ingredient_id: 98
      },
      {
        id: 915,
        record_date: "2020-05-17 04:54:02",
        order: 6,
        use: 34,
        stock: 58,
        inventory_ingredient_id: 95
      },
      {
        id: 916,
        record_date: "2020-05-11 06:20:08",
        order: 42,
        use: 44,
        stock: 15,
        inventory_ingredient_id: 98
      },
      {
        id: 917,
        record_date: "2020-05-16 15:27:10",
        order: 30,
        use: 16,
        stock: 9,
        inventory_ingredient_id: 97
      },
      {
        id: 918,
        record_date: "2020-05-28 19:24:14",
        order: 63,
        use: 94,
        stock: 36,
        inventory_ingredient_id: 95
      },
      {
        id: 919,
        record_date: "2020-05-15 23:41:45",
        order: 51,
        use: 27,
        stock: 90,
        inventory_ingredient_id: 100
      },
      {
        id: 920,
        record_date: "2020-05-26 17:46:40",
        order: 3,
        use: 76,
        stock: 72,
        inventory_ingredient_id: 94
      },
      {
        id: 921,
        record_date: "2020-05-27 10:59:06",
        order: 98,
        use: 38,
        stock: 51,
        inventory_ingredient_id: 95
      },
      {
        id: 922,
        record_date: "2020-05-13 23:48:52",
        order: 68,
        use: 34,
        stock: 12,
        inventory_ingredient_id: 96
      },
      {
        id: 923,
        record_date: "2020-05-25 04:46:24",
        order: 57,
        use: 95,
        stock: 45,
        inventory_ingredient_id: 91
      },
      {
        id: 924,
        record_date: "2020-05-28 23:23:20",
        order: 40,
        use: 90,
        stock: 3,
        inventory_ingredient_id: 97
      },
      {
        id: 925,
        record_date: "2020-05-16 12:13:09",
        order: 66,
        use: 81,
        stock: 63,
        inventory_ingredient_id: 100
      },
      {
        id: 926,
        record_date: "2020-05-23 18:41:11",
        order: 11,
        use: 4,
        stock: 63,
        inventory_ingredient_id: 91
      },
      {
        id: 927,
        record_date: "2020-05-28 00:52:28",
        order: 87,
        use: 16,
        stock: 47,
        inventory_ingredient_id: 94
      },
      {
        id: 928,
        record_date: "2020-05-28 20:53:37",
        order: 35,
        use: 43,
        stock: 33,
        inventory_ingredient_id: 96
      },
      {
        id: 929,
        record_date: "2020-05-16 02:43:32",
        order: 40,
        use: 97,
        stock: 88,
        inventory_ingredient_id: 98
      },
      {
        id: 930,
        record_date: "2020-05-20 21:22:22",
        order: 2,
        use: 28,
        stock: 9,
        inventory_ingredient_id: 92
      },
      {
        id: 931,
        record_date: "2020-05-19 14:19:06",
        order: 39,
        use: 93,
        stock: 35,
        inventory_ingredient_id: 98
      },
      {
        id: 932,
        record_date: "2020-05-19 22:31:19",
        order: 76,
        use: 22,
        stock: 69,
        inventory_ingredient_id: 96
      },
      {
        id: 933,
        record_date: "2020-05-17 07:36:52",
        order: 83,
        use: 22,
        stock: 10,
        inventory_ingredient_id: 98
      },
      {
        id: 934,
        record_date: "2020-05-28 03:56:29",
        order: 7,
        use: 6,
        stock: 59,
        inventory_ingredient_id: 99
      },
      {
        id: 935,
        record_date: "2020-05-24 18:34:15",
        order: 77,
        use: 25,
        stock: 84,
        inventory_ingredient_id: 91
      },
      {
        id: 936,
        record_date: "2020-05-26 13:41:29",
        order: 38,
        use: 88,
        stock: 77,
        inventory_ingredient_id: 92
      },
      {
        id: 937,
        record_date: "2020-05-15 20:18:22",
        order: 32,
        use: 85,
        stock: 1,
        inventory_ingredient_id: 95
      },
      {
        id: 938,
        record_date: "2020-05-22 23:18:45",
        order: 6,
        use: 95,
        stock: 47,
        inventory_ingredient_id: 100
      },
      {
        id: 939,
        record_date: "2020-05-22 07:51:48",
        order: 99,
        use: 56,
        stock: 27,
        inventory_ingredient_id: 97
      },
      {
        id: 940,
        record_date: "2020-05-28 12:03:30",
        order: 16,
        use: 100,
        stock: 87,
        inventory_ingredient_id: 96
      },
      {
        id: 941,
        record_date: "2020-05-12 19:19:40",
        order: 23,
        use: 68,
        stock: 66,
        inventory_ingredient_id: 97
      },
      {
        id: 942,
        record_date: "2020-05-19 20:47:24",
        order: 12,
        use: 80,
        stock: 91,
        inventory_ingredient_id: 99
      },
      {
        id: 943,
        record_date: "2020-05-29 09:00:38",
        order: 38,
        use: 40,
        stock: 73,
        inventory_ingredient_id: 96
      },
      {
        id: 944,
        record_date: "2020-05-24 08:15:07",
        order: 23,
        use: 18,
        stock: 7,
        inventory_ingredient_id: 97
      },
      {
        id: 945,
        record_date: "2020-05-19 19:37:33",
        order: 28,
        use: 99,
        stock: 62,
        inventory_ingredient_id: 91
      },
      {
        id: 946,
        record_date: "2020-05-11 09:26:41",
        order: 96,
        use: 6,
        stock: 22,
        inventory_ingredient_id: 99
      },
      {
        id: 947,
        record_date: "2020-05-24 21:47:32",
        order: 32,
        use: 78,
        stock: 94,
        inventory_ingredient_id: 99
      },
      {
        id: 948,
        record_date: "2020-05-23 06:45:27",
        order: 65,
        use: 86,
        stock: 34,
        inventory_ingredient_id: 97
      },
      {
        id: 949,
        record_date: "2020-05-28 20:48:17",
        order: 57,
        use: 37,
        stock: 31,
        inventory_ingredient_id: 91
      },
      {
        id: 950,
        record_date: "2020-05-26 04:19:29",
        order: 77,
        use: 81,
        stock: 88,
        inventory_ingredient_id: 96
      },
      {
        id: 951,
        record_date: "2020-05-14 09:14:28",
        order: 45,
        use: 77,
        stock: 79,
        inventory_ingredient_id: 91
      },
      {
        id: 952,
        record_date: "2020-05-12 02:07:54",
        order: 23,
        use: 16,
        stock: 52,
        inventory_ingredient_id: 99
      },
      {
        id: 953,
        record_date: "2020-05-12 07:25:48",
        order: 11,
        use: 46,
        stock: 1,
        inventory_ingredient_id: 91
      },
      {
        id: 954,
        record_date: "2020-05-13 08:58:48",
        order: 87,
        use: 61,
        stock: 60,
        inventory_ingredient_id: 95
      },
      {
        id: 955,
        record_date: "2020-05-25 14:39:06",
        order: 95,
        use: 93,
        stock: 83,
        inventory_ingredient_id: 98
      },
      {
        id: 956,
        record_date: "2020-05-14 09:25:49",
        order: 82,
        use: 18,
        stock: 70,
        inventory_ingredient_id: 91
      },
      {
        id: 957,
        record_date: "2020-05-20 07:13:46",
        order: 8,
        use: 29,
        stock: 43,
        inventory_ingredient_id: 93
      },
      {
        id: 958,
        record_date: "2020-05-12 08:46:45",
        order: 16,
        use: 6,
        stock: 62,
        inventory_ingredient_id: 92
      },
      {
        id: 959,
        record_date: "2020-05-18 06:14:20",
        order: 99,
        use: 18,
        stock: 17,
        inventory_ingredient_id: 99
      },
      {
        id: 960,
        record_date: "2020-05-14 16:00:20",
        order: 30,
        use: 79,
        stock: 6,
        inventory_ingredient_id: 94
      },
      {
        id: 961,
        record_date: "2020-05-17 10:58:15",
        order: 17,
        use: 69,
        stock: 61,
        inventory_ingredient_id: 98
      },
      {
        id: 962,
        record_date: "2020-05-24 16:10:33",
        order: 81,
        use: 5,
        stock: 63,
        inventory_ingredient_id: 95
      },
      {
        id: 963,
        record_date: "2020-05-18 21:41:18",
        order: 36,
        use: 88,
        stock: 22,
        inventory_ingredient_id: 97
      },
      {
        id: 964,
        record_date: "2020-05-27 14:26:51",
        order: 34,
        use: 53,
        stock: 7,
        inventory_ingredient_id: 91
      },
      {
        id: 965,
        record_date: "2020-05-17 08:50:52",
        order: 9,
        use: 11,
        stock: 60,
        inventory_ingredient_id: 95
      },
      {
        id: 966,
        record_date: "2020-05-14 22:54:16",
        order: 6,
        use: 64,
        stock: 71,
        inventory_ingredient_id: 91
      },
      {
        id: 967,
        record_date: "2020-05-24 15:35:51",
        order: 66,
        use: 85,
        stock: 23,
        inventory_ingredient_id: 98
      },
      {
        id: 968,
        record_date: "2020-05-29 04:18:03",
        order: 97,
        use: 55,
        stock: 48,
        inventory_ingredient_id: 93
      },
      {
        id: 969,
        record_date: "2020-05-12 12:42:34",
        order: 37,
        use: 46,
        stock: 8,
        inventory_ingredient_id: 98
      },
      {
        id: 970,
        record_date: "2020-05-29 00:06:26",
        order: 22,
        use: 10,
        stock: 93,
        inventory_ingredient_id: 97
      },
      {
        id: 971,
        record_date: "2020-05-21 08:01:46",
        order: 68,
        use: 84,
        stock: 4,
        inventory_ingredient_id: 100
      },
      {
        id: 972,
        record_date: "2020-05-16 03:56:33",
        order: 91,
        use: 75,
        stock: 81,
        inventory_ingredient_id: 97
      },
      {
        id: 973,
        record_date: "2020-05-13 00:18:08",
        order: 5,
        use: 87,
        stock: 32,
        inventory_ingredient_id: 93
      },
      {
        id: 974,
        record_date: "2020-05-12 00:05:50",
        order: 54,
        use: 6,
        stock: 66,
        inventory_ingredient_id: 94
      },
      {
        id: 975,
        record_date: "2020-05-13 17:27:12",
        order: 21,
        use: 1,
        stock: 98,
        inventory_ingredient_id: 98
      },
      {
        id: 976,
        record_date: "2020-05-26 08:17:20",
        order: 7,
        use: 44,
        stock: 21,
        inventory_ingredient_id: 92
      },
      {
        id: 977,
        record_date: "2020-05-17 19:01:16",
        order: 76,
        use: 48,
        stock: 29,
        inventory_ingredient_id: 94
      },
      {
        id: 978,
        record_date: "2020-05-17 19:55:17",
        order: 62,
        use: 74,
        stock: 39,
        inventory_ingredient_id: 97
      },
      {
        id: 979,
        record_date: "2020-05-16 02:44:47",
        order: 79,
        use: 79,
        stock: 92,
        inventory_ingredient_id: 93
      },
      {
        id: 980,
        record_date: "2020-05-23 12:00:09",
        order: 77,
        use: 37,
        stock: 74,
        inventory_ingredient_id: 97
      },
      {
        id: 981,
        record_date: "2020-05-11 11:10:53",
        order: 50,
        use: 30,
        stock: 96,
        inventory_ingredient_id: 91
      },
      {
        id: 982,
        record_date: "2020-05-22 11:39:46",
        order: 40,
        use: 46,
        stock: 27,
        inventory_ingredient_id: 99
      },
      {
        id: 983,
        record_date: "2020-05-13 08:31:54",
        order: 1,
        use: 73,
        stock: 86,
        inventory_ingredient_id: 96
      },
      {
        id: 984,
        record_date: "2020-05-28 12:42:33",
        order: 7,
        use: 8,
        stock: 31,
        inventory_ingredient_id: 95
      },
      {
        id: 985,
        record_date: "2020-05-20 17:45:21",
        order: 55,
        use: 100,
        stock: 70,
        inventory_ingredient_id: 94
      },
      {
        id: 986,
        record_date: "2020-05-16 01:27:41",
        order: 84,
        use: 46,
        stock: 77,
        inventory_ingredient_id: 92
      },
      {
        id: 987,
        record_date: "2020-05-26 22:58:18",
        order: 64,
        use: 66,
        stock: 31,
        inventory_ingredient_id: 100
      },
      {
        id: 988,
        record_date: "2020-05-17 09:26:15",
        order: 48,
        use: 61,
        stock: 89,
        inventory_ingredient_id: 95
      },
      {
        id: 989,
        record_date: "2020-05-18 14:13:55",
        order: 62,
        use: 73,
        stock: 57,
        inventory_ingredient_id: 93
      },
      {
        id: 990,
        record_date: "2020-05-11 19:08:05",
        order: 19,
        use: 77,
        stock: 16,
        inventory_ingredient_id: 94
      },
      {
        id: 991,
        record_date: "2020-05-23 00:40:16",
        order: 6,
        use: 74,
        stock: 38,
        inventory_ingredient_id: 92
      },
      {
        id: 992,
        record_date: "2020-05-27 03:31:50",
        order: 95,
        use: 39,
        stock: 97,
        inventory_ingredient_id: 99
      },
      {
        id: 993,
        record_date: "2020-05-29 03:01:10",
        order: 10,
        use: 22,
        stock: 86,
        inventory_ingredient_id: 96
      },
      {
        id: 994,
        record_date: "2020-05-21 10:27:54",
        order: 94,
        use: 74,
        stock: 24,
        inventory_ingredient_id: 91
      },
      {
        id: 995,
        record_date: "2020-05-25 21:55:15",
        order: 14,
        use: 93,
        stock: 57,
        inventory_ingredient_id: 97
      },
      {
        id: 996,
        record_date: "2020-05-12 03:22:39",
        order: 43,
        use: 87,
        stock: 76,
        inventory_ingredient_id: 94
      },
      {
        id: 997,
        record_date: "2020-05-17 02:56:53",
        order: 11,
        use: 63,
        stock: 36,
        inventory_ingredient_id: 100
      },
      {
        id: 998,
        record_date: "2020-05-26 23:29:25",
        order: 8,
        use: 72,
        stock: 13,
        inventory_ingredient_id: 92
      },
      {
        id: 999,
        record_date: "2020-05-14 16:39:17",
        order: 67,
        use: 25,
        stock: 84,
        inventory_ingredient_id: 94
      },
      {
        id: 1000,
        record_date: "2020-05-12 19:38:51",
        order: 88,
        use: 79,
        stock: 39,
        inventory_ingredient_id: 92
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
