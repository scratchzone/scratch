class Toaster {
  _bread = [];

  addBread(slice) {
	if(this._bread.length>4){
		return;
	}
    this._bread.push(slice);
  }
}
