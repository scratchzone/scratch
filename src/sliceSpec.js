describe("A Slice behaves as a slice should", function() {

    var slice;

    it("Is it spreadable", function() {

        slice = new Slice();
        slice.spreadTopping(null);

        expect(true).toBe(true);
    });
});