var makeAnimatedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeAnimatedDancer.prototype = Object.create(makeDancer.prototype);
makeAnimatedDancer.prototype.constructor = makeAnimatedDancer;

makeAnimatedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.animate({ left: '50px' }, 'slow' );
  this.$node.animate({ right: '50px' }, 'slow' );
};