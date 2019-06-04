describe('fadeDancer', function() {

  var fadeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadeDancer = new makeFadeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fadeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade', function() {
    sinon.spy(fadeDancer.$node, 'fade');
    fadeDancer.step();
    expect(fadeDancer.$node.fadeOut.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fadeDancer, 'step');
      expect(fadeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fadeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fadeDancer.step.callCount).to.be.equal(2);
    });
  });
});
