import Foundation from './foundation.js';
import SilenceTheory from './silence_theory.js';

class CoreModule {
    constructor() {
        this.layers = {};
    }
    registerLayer(name, module) {
        this.layers[name] = module;
    }
    unifyAll() {
        return SilenceTheory.unify();
    }
}
export default new CoreModule();