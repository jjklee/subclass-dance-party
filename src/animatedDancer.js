var makeAnimatedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('animatedDancer');
};

makeAnimatedDancer.prototype = Object.create(makeDancer.prototype);
makeAnimatedDancer.prototype.constructor = makeAnimatedDancer;
// makeAnimatedDancer.prototype.lineUp = function() {
//   this.$node.css({left: 0});
// }
makeAnimatedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.animate({ left: '+=50px' }, 'slow' );
  this.$node.animate({ right: '-=50px' }, 'slow' );
};