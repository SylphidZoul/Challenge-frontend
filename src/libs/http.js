class Http {
  static instance = new Http()
  server = 'https://backend-challenge.vercel.app/'

  get = async (query, authorization) => {
    try {
      const response = await fetch(`${this.server}${query}`, {
        headers: {...authorization}
      })
      const parsed = await response.json()

      return parsed
    } catch (err) {
      throw Error(err)
    }
  }

  post = async (route, body, authorization) => {
    try {
      const response = await fetch(`${this.server}${route}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          ...authorization,
          'Content-type': 'application/json'
        }
      })

      const parsed = await response.json()

      return parsed
    } catch (err) {
      throw Error(err)
    }
  }

  put = async (params, updates, authorization) => {
    try {
      const response = await fetch(`${this.server}${params}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
        headers: {
          ...authorization,
          'Content-type': 'application/json'
        }
      })
  
      const parsed = response.json()
  
      return parsed
      
    } catch (err) {
      throw Error(err)
    }
  }

  delete = async (params, authorization) => {
    try {
      const response = await window.fetch(`${this.server}${params}`,
        {
          method: 'DELETE',
          headers: authorization
        })
        
      const parsed = await response.json()

      return parsed
    } catch (err) {
      throw Error(err)
    }
  }
}

export default Http