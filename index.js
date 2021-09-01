//  statusnpd
const axios = require('axios')
let base = "https://statusnpd.nalog.ru/"
let env = github.secrets
let user = {username: github.secrets.username,  password: github.secrets.password }

let auth = env.map(value => { 
  console.log(github.secrets[value])
 # return "github.secrets[value]"
}
