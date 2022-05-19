const episodes = [
    {
      id: 1,
      season: 1,
      episode: 1,
      name: "Uno",
      air_date: "Feb 02, 2015",
      length: 54,
      blurb: "Struggling public defender Jimmy McGill constructs an elaborate yet questionable plan for winning back a pair of wealthy potential clients.",
      characters: [
        1,
        2,
        3
      ]
    },
    {
      id: 2,
      season: 1,
      episode: 2,
      name: "Mijo",
      air_date: "Feb 08, 2015",
      length: 46,
      blurb: "Jimmy's latest scam has gone horribly wrong and he's face-to-face with violent criminals and being forced to talk his way out of a life-threatening situation.",
      characters: [
        1,
        2,
        3
      ]
    },
    {
      id: 3,
      season: 1,
      episode: 3,
      name: "Nacho",
      air_date: "Feb 16, 2015",
      length: 48,
      blurb: "Jimmy must prove that Nacho is innocent when he is wrongly suspected of kidnapping.",
      characters: [
        1,
        2,
        3,
        4
      ]
    },
  ]
  
  const characters = [
    {
      id: 1,
      name: "Saul Goodman",
      actor: "Bob Odenkirk"
    },
    {
      id: 2,
      name: "Kim Wexler",
      actor: "Rhea Seehorn"
    },
    {
      id: 3,
      name: "Mike Erhmantrout",
      actor: "Jonathan Banks"
    },
    {
      id: 4,
      name: "Chuck McGill",
      actor: "Giancarlo Esposito"
    },
  ]

  module.exports = {
    episodes,
    characters
  }