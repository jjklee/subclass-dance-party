var GiraffeDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('giraffeDancer');
};

GiraffeDancer.prototype = Object.create(BlinkyDancer.prototype);
GiraffeDancer.prototype.constructor = GiraffeDancer;