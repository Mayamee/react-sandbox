export default class ImageDataDTO {
  constructor(object) {
    this.id = object.id;
    this.title = object.author;
    this.url = object.download_url;
  }
}
