class SilenceTheory {
    constructor() { this.fusionPoints = []; }
    addFusionPoint(layer, fusionFunction) { this.fusionPoints.push({ layer, fusionFunction }); }
    unify() { return this.fusionPoints.reduce((acc, fp) => fp.fusionFunction(acc), 0); }
}
export default new SilenceTheory();