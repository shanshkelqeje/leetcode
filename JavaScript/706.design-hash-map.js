/*
 * @lc app=leetcode id=706 lang=javascript
 *
 * [706] Design HashMap
 */

// @lc code=start

var MyHashMap = function() {
    this.hashmap = [];
    for(var i = 0; i < 10**5; i++) {
        this.hashmap.push([undefined, undefined]);
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    index = key % this.hashmap.length;
    for(var i = 0; i < this.hashmap.length; i++) {
        if(i == index) {
            this.hashmap[i][0] = index;
            this.hashmap[i][1] = value;
        }
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    index = key % this.hashmap.length;
    for(var i = 0; i < this.hashmap.length; i++) {
        if(i == index) {
            if(this.hashmap[i][0] != undefined) {
                return this.hashmap[i][1];
            }
            else {
                return -1;
            }
        }
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    index = key % this.hashmap.length;
    for(var i = 0; i < this.hashmap.length; i++) {
        if(i == index) {
            this.hashmap[i][0] = undefined;
            this.hashmap[i][1] = undefined;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end