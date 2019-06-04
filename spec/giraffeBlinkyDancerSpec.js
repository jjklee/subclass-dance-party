describe('giraffeDancer', function() {

  var giraffeBlinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    giraffeBlinkyDancer = new GiraffeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(giraffeBlinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(giraffeBlinkyDancer.$node, 'toggle');
    giraffeBlinkyDancer.step();
    expect(giraffeBlinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(giraffeBlinkyDancer, 'step');
      expect(giraffeBlinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(giraffeBlinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(giraffeBlinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
