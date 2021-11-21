'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Comments', [
      {
       "postId": 5,
        "authorId": 2,
        "comment": "menarik",
        "createdAt": "2021-11-08",
        "updatedAt": "2021-11-08"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "lumayan",
        "createdAt": "2021-11-13T14:24:30.414Z",
        "updatedAt": "2021-11-13T14:24:30.414Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "mantap",
        "createdAt": "2021-11-13T14:24:49.279Z",
        "updatedAt": "2021-11-13T14:24:49.279Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "banget",
        "createdAt": "2021-11-13T14:26:00.974Z",
        "updatedAt": "2021-11-13T14:26:00.974Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "semangat",
        "createdAt": "2021-11-13T14:26:43.470Z",
        "updatedAt": "2021-11-13T14:26:43.470Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "semangat lagi",
        "createdAt": "2021-11-13T14:30:21.581Z",
        "updatedAt": "2021-11-13T14:30:21.581Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "coba",
        "createdAt": "2021-11-13T14:36:39.465Z",
        "updatedAt": "2021-11-13T14:36:39.465Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "asdfasd",
        "createdAt": "2021-11-15T01:34:52.913Z",
        "updatedAt": "2021-11-15T01:34:52.913Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "sdfsdfsd",
        "createdAt": "2021-11-15T01:36:40.685Z",
        "updatedAt": "2021-11-15T01:36:40.685Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "jhklhjklh",
        "createdAt": "2021-11-15T01:36:49.914Z",
        "updatedAt": "2021-11-15T01:36:49.914Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "qwerqwerqwer",
        "createdAt": "2021-11-15T01:41:54.242Z",
        "updatedAt": "2021-11-15T01:41:54.242Z"
      },
      {
        "postId": "5",
        "authorId": 2,
        "comment": "edertwertw",
        "createdAt": "2021-11-15T01:42:31.052Z",
        "updatedAt": "2021-11-15T01:42:31.052Z"
      },
      {
        "postId": "5",
        "authorId": "3",
        "comment": "bisa",
        "createdAt": "2021-11-15T01:44:02.991Z",
        "updatedAt": "2021-11-15T01:44:02.991Z"
      },
      {
        "postId": "12",
        "authorId": "3",
        "comment": "wah wah wah",
        "createdAt": "2021-11-15T04:13:20.896Z",
        "updatedAt": "2021-11-15T04:13:20.896Z"
      },
      {
        "postId": "5",
        "authorId": "3",
        "comment": "dedi",
        "createdAt": "2021-11-15T10:28:48.178Z",
        "updatedAt": "2021-11-15T10:28:48.178Z"
      },
      {
        "postId": "5",
        "authorId": "1",
        "comment": "bisa",
        "createdAt": "2021-11-15T10:30:27.959Z",
        "updatedAt": "2021-11-15T10:30:27.959Z"
      },
      {
        "postId": "5",
        "authorId": "1",
        "comment": "asdfsa",
        "createdAt": "2021-11-15T16:36:37.001Z",
        "updatedAt": "2021-11-15T16:36:37.001Z"
      },
      {
        "postId": "5",
        "authorId": "4",
        "comment": "oke",
        "createdAt": "2021-11-15T16:37:23.303Z",
        "updatedAt": "2021-11-15T16:37:23.303Z"
      },
      {
        "postId": "5",
        "authorId": "4",
        "comment": "okey",
        "createdAt": "2021-11-15T16:38:06.064Z",
        "updatedAt": "2021-11-15T16:38:06.064Z"
      },
      {
        "postId": "14",
        "authorId": "4",
        "comment": "keren",
        "createdAt": "2021-11-16T10:44:07.129Z",
        "updatedAt": "2021-11-16T10:44:07.129Z"
      },
      {
        "postId": "5",
        "authorId": "8",
        "comment": "coba",
        "createdAt": "2021-11-18T15:48:23.222Z",
        "updatedAt": "2021-11-18T15:48:23.222Z"
      },
      {
        "postId": "5",
        "authorId": "8",
        "comment": "coba lagi",
        "createdAt": "2021-11-18T15:50:31.687Z",
        "updatedAt": "2021-11-18T15:50:31.687Z"
      },
      {
        "postId": "5",
        "authorId": "8",
        "comment": "lagi",
        "createdAt": "2021-11-18T15:53:31.309Z",
        "updatedAt": "2021-11-18T15:53:31.309Z"
      },
      {
        "postId": "5",
        "authorId": "8",
        "comment": "lagi lagi lagi",
        "createdAt": "2021-11-18T15:54:26.548Z",
        "updatedAt": "2021-11-18T15:54:26.549Z"
      },
      {
        "postId": "5",
        "authorId": "8",
        "comment": "lagi 4x",
        "createdAt": "2021-11-18T16:17:45.355Z",
        "updatedAt": "2021-11-18T16:17:45.355Z"
      },
      {
        "postId": "5",
        "authorId": "1",
        "comment": "lagi 5x",
        "createdAt": "2021-11-18T16:18:29.193Z",
        "updatedAt": "2021-11-18T16:18:29.193Z"
      },
      {
        "postId": "5",
        "authorId": "1",
        "comment": "lagi 5x",
        "createdAt": "2021-11-18T16:23:12.997Z",
        "updatedAt": "2021-11-18T16:23:12.997Z"
      },
      {
        "postId": "5",
        "authorId": "10",
        "comment": "hi",
        "createdAt": "2021-11-18T17:13:46.990Z",
        "updatedAt": "2021-11-18T17:13:46.990Z"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
