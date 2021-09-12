const timeConverter = (t:number) =>{
    return[
      Math.floor(t / 60),
      Math.floor(t % 60)
    ]
}

export default timeConverter