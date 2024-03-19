# Music tracks 

Home Page: All users can access this page, but they can't play songs without logging in.
Displays information about the website and possibly some featured songs.

Recommendation Page: This page displays songs based on user preferences, sorted in ascending order of how frequently they've been played. Users need to be logged in to access this page.

Trending Page: Shows trending songs. Users must be logged in to access this page.

Login Page:  Provides a form for users to log in to their accounts.

Signup Page: Provides a form for users to create new accounts
Here's a brief overview of the functionality of each page:

Private Route: user can not access Recommendation Page and Trending Page .because every user have won recommended song.

## Prerequisites

- Node.js and npm  installed on your machine

## Installation

1. Clone the repository: `https://github.com/MahmudulMahi/musicTracksServer`
2. Navigate to the project directory: `cd your-project-directory`
3. Install dependencies: `npm install` 

## Configuration



Set Up a New Cluster:

- After creating your account and logging in, you'll be prompted to create a new cluster.
- Choose a cloud provider, region, and cluster configuration that best suits your needs. For testing purposes, the default settings are usually sufficient.

Configure Database Access:

- nce your cluster is created, navigate to the "Database Access" tab in the left sidebar.
- Click on the "Add New Database User" button.
- Enter a username and password for the new database user. Make sure to use a strong password.

Get Connection String:

- Navigate to the "Clusters" tab in the left sidebar.
- Click on the "Connect" button for your cluster.
- Choose "Connect Your Application" and copy the connection string. This string includes the username, password, and cluster details.

Use Connection String in Your Application:

- Paste the connection string into your application's configuration file. This will allow your application to connect to the MongoDB Atlas cluster using the provided credentials.



After this process
create collection name songs and insert this .

[
  {
    "title": "Daku",
    "artist": "Chani Nattan",
    "release_date": "1975-10-31",
    "audio_file": "https://p.scdn.co/mp3-preview/541e4aaccc03318918dabf72f93e02bca7dfedcc?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b273705ab6e67003b22644e62964"
  },
  {
    "title": "La Valse d'Amélie",
    "artist": "Daku Wan",
    "release_date": "1975-10-31",
    "audio_file": "https://p.scdn.co/mp3-preview/f64cf264078b5568263be7c24dd4936a33fadcb3?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b2731270c3cff80db8f69b85c6ab"
  },
  {
    "title": "Dakuchi Gundicha Rani",
    "artist": "Aseema Panda",
    "release_date": "1975-10-31",
    "audio_file": "https://p.scdn.co/mp3-preview/5986ed1cdaa0cd31a049f52a99da493b8af6b3a9?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b2737b9033ea1e9342f340da377b"
  },
  {
    "title": "Dakujeme vam",
    "artist": "Ine Kafe",
    "release_date": "1974-10-31",
    "audio_file": "https://p.scdn.co/mp3-preview/ca19bfba22407a4668b22ef78ca9aef4ccf7cc52?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b2738505682353250894f1d0a0fd"
  },
  {
    "title": "Still Rollin",
    "artist": "Shubh",
    "release_date": "1974-10-31",
    "audio_file": "https://p.scdn.co/mp3-preview/c607b777f851d56dd524f845957e24901adbf1eb?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0"
  },
  {
    "title": "No Love",
    "artist": "Shubh",
    "release_date": "2022-02-22",
    "audio_file": "https://p.scdn.co/mp3-preview/bf01e12420b9997eb503c0af333ef3eedbf6e4b1?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b2732a46046339bd779f95a8cf8b"
  },
  {
    "title": "Gunehgar",
    "artist": "DIVINE",
    "release_date": "2022-11-10",
    "audio_file": "https://p.scdn.co/mp3-preview/b36785bfacf4ba6a7e4cf15845260170e7f26573?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b2733f1acedcbf16cc9b155e5700"
  },
  {
    "title": "Brown Munde",
    "artist": "Various Artists",
    "release_date": "2020-09-18",
    "audio_file": "https://p.scdn.co/mp3-preview/a9cd319d068fe4d7891523f20ba5992b623a4381?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b273d9a129c4a656a55afff2ca02"
  },
  {
    "title": "Slap House",
    "artist": "Shrylox",
    "release_date": "2020-09-18",
    "audio_file": "https://p.scdn.co/mp3-preview/a9cd319d068fe4d7891523f20ba5992b623a4381?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b273523a97243187f6dc6fbae878"
  },
  {
    "title": "Ek Number Da",
    "artist": "Slow Vibe",
    "release_date": "2020-09-18",
    "audio_file": "https://p.scdn.co/mp3-preview/f0175800cd76beb57318d47dbe807dfb4801180f?cid=d70d86f359464fa7813434cedffcc29e",
    "image": "https://i.scdn.co/image/ab67616d0000b273fe3009a3725314de77497494"
  }
]


## How to Run

1. Start the development server go to project and open cmd then: `nodemon index.js` 
2. Open your browser and navigate to [http://localhost:5000]

