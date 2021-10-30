const crypto = require('crypto');

interface IBlock {
    timestamp: Date,
    data: string,
    prevHash: string,
    hash: void,
}

class Block { // Our Block Class
    constructor(data, prevHash = "") {
        this.timestamp = Date.now(); // Get the current timestamp
        this.data = data; // Store whatever data is relevant 
        this.prevHash = prevHash // Store the previous block's hash
        this.hash = this.computeHash() // Compute this block's hash
    }
}