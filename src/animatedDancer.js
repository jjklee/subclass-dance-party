var makeAnimatedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('animatedDancer');
};

makeAnimatedDancer.prototype = Object.create(makeDancer.prototype);
makeAnimatedDancer.prototype.constructor = makeAnimatedDancer;

makeAnimatedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeIn();
  this.$node.animate({ "top": "-=50", "left": "+=50"}, 'slow');
  this.$node.animate({ "top": "+=50", "left": "-=50"}, 'slow');


};