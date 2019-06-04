var AnimatedDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('animatedDancer');
};

AnimatedDancer.prototype = Object.create(Dancer.prototype);
AnimatedDancer.prototype.constructor = AnimatedDancer;

AnimatedDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeIn();
  this.$node.animate({ 'top': '-=50', 'left': '+=50'}, 'slow');
  this.$node.animate({ 'top': '+=50', 'left': '-=50'}, 'slow');


};