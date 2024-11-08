function migratoryBirds(arr) {
    const freq = {}
    let maxFreq = 0
    let minBirdId = 0
    for(let i=0; i < arr.length; i++){
        const id = arr[i]
        if (freq[id]) {
            freq[id]++
        } else {
            freq[id] = 1
        }
    }

    const ids = Object.keys(freq)

    for(let i=0; i < ids.length; i++){
        const id = ids[i]
        if (freq[id] > maxFreq){
            maxFreq = freq[id]
            minBirdId = id
        } else if (freq[id] === maxFreq){
            minBirdId = Math.min(minBirdId, id)
        }
    }
    return minBirdId
}