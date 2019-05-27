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

  getAllPhotos = async () => {
    const res = await this.getResourse('posts')
    return res.map(this._transformPosts)
  }

  getAllUsers = async () => {
    const res = await this.getResourse('posts')
    return res.map(this._transformUsers)
  }

  _transformPosts = p => {
    return {
      src: p.src,
      alt: p.alt,
      id: p.id
    }
  }

  _transformUsers = u => {
    return {
      photo: u.photo,
      altname: u.altname,
      name: u.name,
      id: u.id
    }
  }
}