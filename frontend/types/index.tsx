export type JokeData = {
  id: string,
  content: string,
  category: CategoryData,
  author: UserData
}

export type UserData = {
  id: string,
  name: string, 
  jokes?: [JokeData]
}

export type CategoryData = {
  id: string,
  name: string
}

export type JokeListData = {
  jokes: [JokeData]
}

export type CardData = {
  id: string,
  title: string,
  description: string
}
