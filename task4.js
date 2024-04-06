function ElectricalDevice(type, powerConsumption) {
    this.type = type;
    this.powerConsumption = powerConsumption || 300;
    this.powerStatus = 'Выключен';
}

ElectricalDevice.prototype.turnOnDevice = function () {
    this.powerStatus = 'Включен';
}

ElectricalDevice.prototype.turnOffDevice = function () {
    this.powerStatus = 'Выключен';
}


function TeleVisor(mark) {
    this.mark = mark
    this.channnelNum = 1;
}


function ElectricKettle(mark) {
    this.mark = mark;
    this.waterTemperature = 40;
}

ElectricKettle.prototype = new ElectricalDevice(type = 'Электрический чайник');
TeleVisor.prototype = new ElectricalDevice(type = 'Телевизор');


TeleVisor.prototype.changeChannelNumForward = function () {
    this.channnelNum += 1;
    console.log(`${this.mark}: Вы смотрите канал № ${this.channnelNum}`)
}

TeleVisor.prototype.changeChannelNumBack = function () {
    if (this.channnelNum > 1) {
        this.channnelNum -= 1;
        console.log(`${this.mark}: Вы смотрите канал № ${this.channnelNum}`)
    }

}

ElectricKettle.prototype.setTemperature = function (temperature) {
    if ((temperature >= 40) && (temperature <= 100)) {
        this.waterTemperature = temperature;
        console.log(`${this.mark}: Температура в ${temperature} градусов по цельсию установлена!`);
    } else {
        console.log('Выберите температуру из диапазона 40-100 градусов!');
    }
}

function getCommonSumm() {
    let resultSumm = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].powerStatus == 'Включен') {
            resultSumm += arguments[i].powerConsumption;
        }
    }
    console.log(`Общая потребляемая мощность: ${resultSumm}`);

}

const simpleElectricKettle = new ElectricKettle(mark = 'Kitfort');
simpleElectricKettle.powerConsumption = 500;
simpleElectricKettle.turnOnDevice();
simpleElectricKettle.setTemperature(90);

const simpleTeleVisor = new TeleVisor(mark = 'Sumsung');
simpleTeleVisor.powerConsumption = 800;
simpleTeleVisor.turnOnDevice();
simpleTeleVisor.changeChannelNumBack();
simpleTeleVisor.changeChannelNumForward();
simpleTeleVisor.changeChannelNumForward();
simpleTeleVisor.changeChannelNumBack();
simpleTeleVisor.turnOffDevice();

getCommonSumm(simpleElectricKettle, simpleTeleVisor);