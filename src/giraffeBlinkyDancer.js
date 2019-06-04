var makeGiraffeDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('giraffeDancer');
};

makeGiraffeDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeGiraffeDancer.prototype.constructor = makeGiraffeDancer;