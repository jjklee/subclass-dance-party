$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });

  $('.lineUpButton').on('click', function(event) {
    dancers.forEach(dancer => {
      dancer.lineUp();
    });
    $('.lineUpButton').css({display: 'none'});
    $('.releaseButton').show();
  });

  $('.releaseButton').on('click', function(event) {
    dancers.forEach(dancer => {
      dancer.release();
    });
    $('.releaseButton').css({display: 'none'});
    $('.lineUpButton').show();
  });

  $('body').on('mouseenter', '.fadeDancer', function(event) {
    $(this).attr('class', 'increaseSize fadeDancer dancer');
  }); 

  $('.partnerButton').on('click', function(event) {
    for (var i = 0; i < dancers.length - 1; i += 2) {
      dancers[i].$node.finish();
      console.log(dancers[i + 1].$node.css('left'));
      var nextUpX = dancers[i + 1].$node.css('left');
      var nextUpY = dancers[i + 1].$node.css('top');

      dancers[i].$node.animate({"left" : nextUpX}, 'slow');
      dancers[i].$node.animate({"top" : nextUpY}, 'slow');

    }
  });  
  //   var dontSkip = true;
  //   dancers.forEach(dancer => {
  //     if (dontSkip) {
  //       var index = positions.indexOf([dancer.$node.css('left'), dancer.$node.css('top')]);
  //       dancer.$node.finish();
  //       var partnerX = (positions[index + 1][0]).toString();
  //       var partnerY = (positions[index + 1][1]).toString();
  //       dancer.$node.animate({"top" : partnerY, "left" : partnerX}, 'fast');
  //       dontSkip = false;
  //     }        
  //     dontSkip = true;
  //   });
  // });

});

