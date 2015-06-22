describe('use_case_1', function () {

    beforeEach(module('use_case_1'));
    beforeEach(inject(function (_test_) {
        test = _test_;
    }));

    it("should equal 2", function () {
        expect(test).toBe(2);
    });
});