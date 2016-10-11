
module("About Asserts (topics/about_asserts.js)");

// This test works, because the three equal signs check whether one of its sides is equal to the other. When I put the word "true" instead of the underscores, the statement ends up being valid (true).
test("ok", function() {
    ok(__ === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(__ === false, 'what is a false value?');
});

test("equal", function() {
    equal(__, 1 + 1, 'what will satisfy the equal assertion?');
});
