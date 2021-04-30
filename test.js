QUnit.test("check if bar is added", function (assert) {
    const oldLength = numbers.length;
    inputValue = 9;
    addBar();
    assert.equal(numbers.length, oldLength + 1, "Added a bar to the numbers array");
});

QUnit.test("check if bar is deleted", function (assert) {
    const oldLength = numbers.length;
    chosenBar = 1;
    removeBar();
    assert.equal(numbers.length, oldLength - 1, "Removed a bar from the numbers array");
});


QUnit.test("check if bar is selected", function (assert) {
    //first check that you can select and deselect by clicking the bar
    chosenBar = null;
    clickedBar(2);
    assert.equal(chosenBar, 2, "Bar 1 was selected");
    clickedBar(2);
    assert.equal(chosenBar, null, "Bar 1 was deselected");
    //checking that when you click another bar while another is selected, deselect original- select new.
    clickedBar(2);
    assert.equal(chosenBar, 2, "Bar 1 was selected");
    clickedBar(3);
    assert.equal(chosenBar, 3, "Bar 2 is now selected");
});


QUnit.test("check if bar is modified", function (assert) {
    chosenBar = 2;
    inputValue = 6;
    changeBar();
    assert.equal(numbers[2], 6, "Bar 3 value was changed from 1 to 6");
});


// QUnit.test("", function (assert) {
    
// });