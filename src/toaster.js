class Toaster {

  constructor(){
      this._bread = [];
  }

  addBread(slice){
	if(this._bread.length>4){
		return;
	}
    this._bread.push(slice);
  }

  toast(until) {
    const now = Date.now().getTime();

    return new Promise(resolve => {
      const heatBread = () => {
        this._bread.forEach(slice => slice.heat++);

        if (now >= until)
          resolve(this._bread);
        else
          setTimeout(heatBread, 100);
      };

      heatBread();
    });
  }
}
