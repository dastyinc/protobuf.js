var tape = require("tape");

var protobuf = require("..");

var util = protobuf.util;

tape.test("util", function(test) {

    test.test(test.name + " - merge", function(test) {
        var o = {};
        util.merge(o, {});
        test.same(o, {}, "should do nothing if both objects are empty");
        util.merge(o, { a: 1 });
        test.same(o, { a: 1 }, "should merge non-existing keys");
        util.merge(o, { a: 2 });
        test.same(o, { a: 2 }, "should merge existing keys");
        util.merge(o, { a: 3 }, true);
        test.same(o, { a: 2 }, "should not merge existing keys");
        test.end();
    });

    tape.test(test.name + " - codegen", function(test) {
        test.equal(protobuf.util.codegen.supported, true, "should be supported");
        test.end();
    });

    test.end();
});