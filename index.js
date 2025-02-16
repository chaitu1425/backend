require('dotenv').config()
 
const express = require('express')
const app = express()
const port = 4000

const githubData = {
        "login": "chaitu1425",
        "id": 127864383,
        "node_id": "U_kgDOB58OPw",
        "avatar_url": "https://avatars.githubusercontent.com/u/127864383?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/chaitu1425",
        "html_url": "https://github.com/chaitu1425",
        "followers_url": "https://api.github.com/users/chaitu1425/followers",
        "following_url": "https://api.github.com/users/chaitu1425/following{/other_user}",
        "gists_url": "https://api.github.com/users/chaitu1425/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/chaitu1425/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/chaitu1425/subscriptions",
        "organizations_url": "https://api.github.com/users/chaitu1425/orgs",
        "repos_url": "https://api.github.com/users/chaitu1425/repos",
        "events_url": "https://api.github.com/users/chaitu1425/events{/privacy}",
        "received_events_url": "https://api.github.com/users/chaitu1425/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 5,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2023-03-14T14:01:00Z",
        "updated_at": "2025-02-16T15:16:21Z"
      }


app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/twitter' , (req, res) =>{
    res.send('this is twitter')
})
app.get('/youtube', (req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${port}!`)
} )
    