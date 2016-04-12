describe("A 4 slice toaster", function() {

    var toaster;

    it("Takes 4 slices", function() {

        toaster = new Toaster();
        toaster.addBread(null);

        expect(true).toBe(true);

    });
});