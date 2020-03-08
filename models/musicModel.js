const db = require('./conn');
bcrypt = require('bcryptjs');

class MusicModel {
  constructor(id, name, band, release_year, category) {
    this.id = id;
    this.name = name;
    this.address = band;
    this.release_year = release_year;
    this.category = category;
  }
  static async getAllAlbums() {
    try {
      const response = await db.any(`SELECT *
          FROM albums;`);
      return response;
    } catch (error) {
      console.error('error: ', error);
      return error;
    }
  }
  static async getById(id) {
    try {
      const res = await db.any(`SELECT *
      FROM albums
      WHERE albums.id = ${id};`);
      console.log(res);
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }
  static async getRevById(id) {
    try {
      const res = await db.any(`SELECT *
      FROM reviews
      WHERE reviews.albumid = ${id};`);
      console.log(res);
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }
  static async addReview(albumid, title, review) {
    try {
      const res = await db.one(
        `INSERT INTO reviews (reviewerid, albumid, title, review) VALUES ($1, $2, $3, $4) RETURNING id`,
        [3, albumid, title, review]
      );
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = MusicModel;
