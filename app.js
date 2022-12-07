class Auto {
constructor (brend, model, year, vin){
    this.brend = brend;
    this.model = model;
    this.year = year;
    this.vin = vin;
    };

log(){
    return this.brend+' '+this.model+' '+this.year;
    };

checkVin(){
    return this.vin.length === 16
    };
}

class Auto_Fuel extends Auto {
    constructor (brend, model, year, vin, engineCapacity, consumption){
        super(brend, model, year, vin);
    this.brend = brend;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.engineCapacity = engineCapacity;
    this.consumption = consumption;
    }

    showFuelConsumption(){
        return this.engineCapacity+'л' +' '+ this.consumption+'/100км'
    }

}


class Auto_Electric extends Auto {
    constructor(brend, model, year, vin, batteryPower){
        super(brend, model, year, vin);
    this.brend = brend;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.batteryPower = batteryPower
    }


    showBatteryConfig(){
        return this.batteryPower+ 'кВт/год'
    }
}