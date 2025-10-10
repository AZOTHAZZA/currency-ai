import SilenceTheory from './silence_theory.js';
import SelfLayer from '../self/self.js';

class MathematicalSilence {
    unifyAll() {
        return (SilenceTheory.unify() + SelfLayer.reflect()) / 2;
    }
    stabilize() {
        SelfLayer.heal();
        SelfLayer.update();
        console.log("System stabilized at Mathematical Silence.");
    }
}
export default new MathematicalSilence();