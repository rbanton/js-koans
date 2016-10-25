
module("About Equality (topics/about_equality.js)");

test("numeric equality", function() {
    equal(3 + 4, 7 , "");
});

test("string equality", function() {
});

test("equality without type coercion", function() {
    ok(3 === 3, 'what is exactly equal to 3?');
});

test("equality with type coercion", function() {
    ok(3 == "3", 'what string is equal to 3, with type coercion?');
});

test("string literals", function() {
});
