export class WeatherDataModel {
    constructor(
        public location: string,
        public lastUpdated: string,
        public currTemp: number,
        public feelsTemp: number,
        public windString: string,
        public windSpeed: number,
        public precip: number,
        public humidity: number,
        public pressure: number,
        public cloud: number,
    ) {}
}