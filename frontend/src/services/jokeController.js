import api from './apiService'

export const jokeController = () => {
    return {
      getJokes: (count = 0, fname = '', lname = '') => {
        return api.get(`/random/${parseInt(count)}?firstName=${fname}&lastName=${lname}`)
      },
    }
  }
  