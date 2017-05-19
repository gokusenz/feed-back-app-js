import database from './ConfigDB'

class Database {
  constructor() {
    this.db = database
  }

  saveData(name, topic, feedback) {
    try {
      const workshopRef = this.db.ref(`workshop/${name}`)
      workshopRef.push().set({
        topic,
        feedback,
      })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  getList(date, team) {
    return this.db.ref(`/${date}/${team}`).once('value')
  }

}

export default Database
