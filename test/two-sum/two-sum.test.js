'use strict';

const should = require('should');
const twoSum = require('../../algorithms/two-sum/two-sum');

const nums = [11, 27, 29, 46, 50];
const target = 96;

describe('## 两数之和', () => {
  it ('找出数组中和为目标值的两个数的索引值', () => {
    twoSum(nums, target).should.eql([3, 4]);
  });
});
