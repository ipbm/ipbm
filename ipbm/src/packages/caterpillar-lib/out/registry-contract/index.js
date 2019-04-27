"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RegistryContract", {
  enumerable: true,
  get: function () {
    return _interface.default;
  }
});
exports.default = void 0;

var _createContract = _interopRequireDefault(require("../create-contract"));

var _interface = _interopRequireDefault(require("./interface"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ({
  hexToId,
  web3
}) => ({
  abi,
  address
}) => {
  const contract = (0, _createContract.default)(web3)(JSON.parse(abi), address);
  return {
    address: contract.address,
    events: contract.events,
    addChildBundleId: ({
      parentBundleId,
      processBundleId,
      nodeIndex
    }) => contract.methods.addChildBundleId(parentBundleId, processBundleId, nodeIndex).send,
    allInstances: () => contract.methods.allInstances.call(),
    bindingPolicyFor: ({
      address
    }) => contract.methods.bindingPolicyFor(address).call().then(hexToId),
    bindingPolicyFromId: ({
      procId
    }) => contract.methods.bindingPolicyFromId(procId).call().then(hexToId),
    bundleFor: ({
      instance
    }) => contract.methods.bundleFor(instance).call().then(hexToId),
    childrenFor: ({
      id,
      index = 0
    }) => contract.methods.childrenFor(id, index).call().then(hexToId),
    findRuntimePolicy: ({
      address
    }) => contract.methods.findRuntimePolicy(address).call(),
    newBundleInstanceFor: ({
      bundleId,
      parent,
      policyOpAddr
    }) => contract.methods.newBundleInstanceFor(bundleId, parent, policyOpAddr).send,
    registerFactory: ({
      bundleId,
      address
    }) => contract.methods.registerFactory(bundleId, address).send,
    registerWorklist: ({
      bundleId,
      address
    }) => contract.methods.registerWorklist(bundleId, address).send,
    relateProcessToPolicy: ({
      bundleId,
      policyId,
      roleTaskId
    }) => contract.methods.relateProcessToPolicy(bundleId, policyId, roleTaskId).send,
    taskRoleMapFromId: ({
      procId
    }) => contract.methods.taskRoleMapFromId(procId).call().then(hexToId),
    worklistBundleFor: ({
      address
    }) => contract.methods.worklistBundleFor(address).call().then(hexToId)
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZWdpc3RyeS1jb250cmFjdC9pbmRleC50cyJdLCJuYW1lcyI6WyJoZXhUb0lkIiwid2ViMyIsImFiaSIsImFkZHJlc3MiLCJjb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImV2ZW50cyIsImFkZENoaWxkQnVuZGxlSWQiLCJwYXJlbnRCdW5kbGVJZCIsInByb2Nlc3NCdW5kbGVJZCIsIm5vZGVJbmRleCIsIm1ldGhvZHMiLCJzZW5kIiwiYWxsSW5zdGFuY2VzIiwiY2FsbCIsImJpbmRpbmdQb2xpY3lGb3IiLCJ0aGVuIiwiYmluZGluZ1BvbGljeUZyb21JZCIsInByb2NJZCIsImJ1bmRsZUZvciIsImluc3RhbmNlIiwiY2hpbGRyZW5Gb3IiLCJpZCIsImluZGV4IiwiZmluZFJ1bnRpbWVQb2xpY3kiLCJuZXdCdW5kbGVJbnN0YW5jZUZvciIsImJ1bmRsZUlkIiwicGFyZW50IiwicG9saWN5T3BBZGRyIiwicmVnaXN0ZXJGYWN0b3J5IiwicmVnaXN0ZXJXb3JrbGlzdCIsInJlbGF0ZVByb2Nlc3NUb1BvbGljeSIsInBvbGljeUlkIiwicm9sZVRhc2tJZCIsInRhc2tSb2xlTWFwRnJvbUlkIiwid29ya2xpc3RCdW5kbGVGb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztlQUllLENBQUM7QUFDZEEsRUFBQUEsT0FEYztBQUVkQyxFQUFBQTtBQUZjLENBQUQsS0FNVCxDQUNKO0FBQ0VDLEVBQUFBLEdBREY7QUFFRUMsRUFBQUE7QUFGRixDQURJLEtBT29CO0FBQ3hCLFFBQU1DLFFBQVEsR0FBRyw2QkFBZUgsSUFBZixFQUNmSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0osR0FBWCxDQURlLEVBRWZDLE9BRmUsQ0FBakI7QUFJQSxTQUF5QjtBQUN2QkEsSUFBQUEsT0FBTyxFQUFFQyxRQUFRLENBQUNELE9BREs7QUFFdkJJLElBQUFBLE1BQU0sRUFBRUgsUUFBUSxDQUFDRyxNQUZNO0FBR3ZCQyxJQUFBQSxnQkFBZ0Is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QUQsS0FHakJDLFFBQVEsQ0FDTFEsT0FESCxDQUVHd0IsaUJBRkgsQ0FHSWpDLE9BSEosRUFLR1ksSUFMSCxHQU1HRSxJQU5ILENBTVFqQixPQU5SO0FBNUhxQixHQUF6QjtBQW9JRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMydcbmltcG9ydCBjcmVhdGVDb250cmFjdCBmcm9tICcuLi9jcmVhdGUtY29udHJhY3QnXG5pbXBvcnQgUmVnaXN0cnlDb250cmFjdCBmcm9tICcuL2ludGVyZmFjZSdcbmV4cG9ydCB7IFxuICBSZWdpc3RyeUNvbnRyYWN0LFxufVxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgaGV4VG9JZCxcbiAgd2ViMyxcbn06IHtcbiAgaGV4VG9JZDogKHN0cmluZykgPT4gc3RyaW5nLFxuICB3ZWIzOiBXZWIzLFxufSkgPT4gKFxuICB7XG4gICAgYWJpLFxuICAgIGFkZHJlc3MsXG4gIH06IHtcbiAgICBhYmk6IGFueSxcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgfSk6IFJlZ2lzdHJ5Q29udHJhY3QgPT4ge1xuICBjb25zdCBjb250cmFjdCA9IGNyZWF0ZUNvbnRyYWN0KHdlYjMpKFxuICAgIEpTT04ucGFyc2UoYWJpKSxcbiAgICBhZGRyZXNzLFxuICApXG4gIHJldHVybjxSZWdpc3RyeUNvbnRyYWN0PiB7XG4gICAgYWRkcmVzczogY29udHJhY3QuYWRkcmVzcyxcbiAgICBldmVudHM6IGNvbnRyYWN0LmV2ZW50cyxcbiAgICBhZGRDaGlsZEJ1bmRsZUlkOiAoe1xuICAgICAgcGFyZW50QnVuZGxlSWQsXG4gICAgICBwcm9jZXNzQnVuZGxlSWQsXG4gICAgICBub2RlSW5kZXhcbiAgICB9KSA9PlxuICAgICAgY29udHJhY3RcbiAgICAgICAgLm1ldGhvZHNcbiAgICAgICAgLmFkZENoaWxkQnVuZGxlSWQoXG4gICAgICAgICAgcGFyZW50QnVuZGxlSWQsXG4gICAgICAgICAgcHJvY2Vzc0J1bmRsZUlkLFxuICAgICAgICAgIG5vZGVJbmRleFxuICAgICAgICApXG4gICAgICAgIC5zZW5kLFxuICAgIGFsbEluc3RhbmNlczogKCkgPT5cbiAgICAgIGNvbnRyYWN0XG4gICAgICAgIC5tZXRob2RzXG4gICAgICAgIC5hbGxJbnN0YW5jZXNcbiAgICAgICAgLmNhbGwoKSxcbiAgICBiaW5kaW5nUG9saWN5Rm9yOiAoe1xuICAgICAgYWRkcmVzcyxcbiAgICB9KSA9PlxuICAgICAgY29udHJhY3RcbiAgICAgICAgLm1ldGhvZHNcbiAgICAgICAgLmJpbmRpbmdQb2xpY3lGb3IoYWRkcmVzcylcbiAgICAgICAgLmNhbGwoKVxuICAgICAgICAudGhlbihoZXhUb0lkKSxcbiAgICBiaW5kaW5nUG9saWN5RnJvbUlkOiAoe1xuICAgICAgcHJvY0lkLFxuICAgIH0pID0+XG4gICAgICBjb250cmFjdFxuICAgICAgICAubWV0aG9kc1xuICAgICAgICAuYmluZGluZ1BvbGljeUZyb21JZChcbiAgICAgICAgICBwcm9jSWQsXG4gICAgICAgIClcbiAgICAgICAgLmNhbGwoKVxuICAgICAgICAudGhlbihoZXhUb0lkKSxcbiAgICBidW5kbGVGb3I6ICh7XG4gICAgICBpbnN0YW5jZSxcbiAgICB9KSA9PlxuICAgICAgY29udHJhY3RcbiAgICAgICAgLm1ldGhvZHNcbiAgICAgICAgLmJ1bmRsZUZvcihpbnN0YW5jZSlcbiAgICAgICAgLmNhbGwoKVxuICAgICAgICAudGhlbihoZXhUb0lkKSxcbiAgICBjaGlsZHJlbkZvcjogKHtcbiAgICAgIGlkLFxuICAgICAgaW5kZXggPSAwLFxuICAgIH0pID0+XG4gICAgICBjb250cmFjdFxuICAgICAgICAubWV0aG9kc1xuICAgICAgICAuY2hpbGRyZW5Gb3IoaWQsIGluZGV4KVxuICAgICAgICAuY2FsbCgpXG4gICAgICAgIC50aGVuKGhleFRvSWQpLFxuICAgIGZpbmRSdW50aW1lUG9saWN5OiAoe1xuICAgICAgYWRkcmVzcyxcbiAgICB9KSA9PlxuICAgICAgY29udHJhY3RcbiAgICAgICAgLm1ldGhvZHNcbiAgICAgICAgLmZpbmRSdW50aW1lUG9saWN5KGFkZHJlc3MpXG4gICAgICAgIC5jYWxsKCksXG4gICAgbmV3QnVuZGxlSW5zdGFuY2VGb3I6ICh7XG4gICAgICBidW5kbGVJZCxcbiAgICAgIHBhcmVudCxcbiAgICAgIHBvbGljeU9wQWRkclxuICAgIH0pID0+XG4gICAgICBjb250cmFjdFxuICAgICAgICAubWV0aG9kc1xuICAgICAgICAubmV3QnVuZGxlSW5zdGFuY2VGb3IoXG4gICAgICAgICAgYnVuZGxlSWQsXG4gICAgICAgICAgcGFyZW50LFxuICAgICAgICAgIHBvbGljeU9wQWRkclxuICAgICAgICApXG4gICAgICAgIC5zZW5kLFxuICAgIHJlZ2lzdGVyRmFjdG9yeTogKHtcbiAgICAgIGJ1bmRsZUlkLFxuICAgICAgYWRkcmVzcyxcbiAgICB9KSA9PlxuICAgICAgY29udHJhY3RcbiAgICAgICAgLm1ldGhvZHNcbiAgICAgICAgLnJlZ2lzdGVyRmFjdG9yeShcbiAgICAgICAgICBidW5kbGVJZCxcbiAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICApXG4gICAgICAgIC5zZW5kLFxuICAgIHJlZ2lzdGVyV29ya2xpc3Q6ICh7XG4gICAgICBidW5kbGVJZCxcbiAgICAgIGFkZHJlc3MsXG4gICAgfSkgPT5cbiAgICAgIGNvbnRyYWN0XG4gICAgICAgIC5tZXRob2RzXG4gICAgICAgIC5yZWdpc3RlcldvcmtsaXN0KFxuICAgICAgICAgIGJ1bmRsZUlkLFxuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgIClcbiAgICAgICAgLnNlbmQsXG4gICAgcmVsYXRlUHJvY2Vzc1RvUG9saWN5OiAoe1xuICAgICAgYnVuZGxlSWQsXG4gICAgICBwb2xpY3lJZCxcbiAgICAgIHJvbGVUYXNrSWQsXG4gICAgfSkgPT5cbiAgICAgIGNvbnRyYWN0XG4gICAgICAgIC5tZXRob2RzXG4gICAgICAgIC5yZWxhdGVQcm9jZXNzVG9Qb2xpY3koXG4gICAgICAgICAgYnVuZGxlSWQsXG4gICAgICAgICAgcG9saWN5SWQsXG4gICAgICAgICAgcm9sZVRhc2tJZCxcbiAgICAgICAgKVxuICAgICAgICAuc2VuZCwgIFxuICAgIHRhc2tSb2xlTWFwRnJvbUlkOiAoe1xuICAgICAgcHJvY0lkLFxuICAgIH0pID0+XG4gICAgICBjb250cmFjdFxuICAgICAgICAubWV0aG9kc1xuICAgICAgICAudGFza1JvbGVNYXBGcm9tSWQoXG4gICAgICAgICAgcHJvY0lkLFxuICAgICAgICApXG4gICAgICAgIC5jYWxsKClcbiAgICAgICAgLnRoZW4oaGV4VG9JZCksXG4gICAgd29ya2xpc3RCdW5kbGVGb3I6ICh7XG4gICAgICBhZGRyZXNzLFxuICAgIH0pID0+XG4gICAgICBjb250cmFjdFxuICAgICAgICAubWV0aG9kc1xuICAgICAgICAud29ya2xpc3RCdW5kbGVGb3IoXG4gICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgKVxuICAgICAgICAuY2FsbCgpXG4gICAgICAgIC50aGVuKGhleFRvSWQpLFxuICB9XG59XG4iXX0=