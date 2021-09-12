const splitTimeString = (t:number[]) => {
    const timeMaped = t.map(p => {
        return String(p).padStart(2, '0').split('').filter(f => f!==",");
    })
    return [...timeMaped[0], ...timeMaped[1]]
}

export default splitTimeString