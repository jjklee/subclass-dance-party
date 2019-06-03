var makeFadeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeFadeDancer.prototype = Object.create(makeDancer.prototype);
makeFadeDancer.prototype.constructor = makeFadeDancer;

makeFadeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeOut();
  this.$node.fadeIn();


};