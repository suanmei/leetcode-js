/*
 * @Author: suanmei 
 * @Date: 2018-08-26 02:35:53 
 * @Last Modified by: suanmei
 * @Last Modified time: 2018-08-26 02:36:40
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  var num = null;

  for (var i = 0; i < nums.length; i++) {
    num = nums[i];

    if (typeof map[target - num] !== 'undefined') {
      return [map[target - num], i];
    }

    map[num] = i;
  }
};

module.exports = twoSum;
