export default class InstaService {
  constructor() {
    this._apiBase = 'http://localhost:3004/'
  }

  getResourse = async url => {
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
    return res.json()
  }

  getAllPosts = async () => await this.getResourse('posts')
}