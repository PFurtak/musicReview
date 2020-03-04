const db = require('./conn');

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
      const resonse = await db.any(`SELECT *
          FROM albums;`);
      return resonse;
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
}

module.exports = MusicModel;
